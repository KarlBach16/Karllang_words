#!/usr/bin/env node

const fs = require("fs");
const https = require("https");
const path = require("path");

const ARTICLE_LANGS = ["de", "es", "fr", "it", "pt"];
const ARTICLE_PREFIXES = {
  de: /^(der|die|das)\s+/i,
  es: /^(el|la|lo|los|las)\s+|^tod[ao]s?\s+(el|la|los|las)\s+/i,
  fr: /^(le|la|les)\s+(?!l['’])|^l['’]\S|^tout(?:e|es|s)?\s+(le|la|les)\s+/i,
  it: /^(il|lo|la|i|gli|le)\s+(?!l['’])|^l['’]\S|^tutt[oaie]?\s+(il|lo|la|i|gli|le)\s+/i,
  pt: /^(o|a|os|as)\s+|^tod[ao]s?\s+(o|a|os|as)\s+/i,
};

const args = parseArgs(process.argv.slice(2));
const meaningLang = args.meaning || args.lang || "fr";
const limit = Number(args.limit || 100);
const apply = Boolean(args.apply);
const model = args.model || "gemini-2.5-flash";
const envPath = args.env || "/Users/karl/Project/karl-tools/.env";
const outDir = args.outDir || "tmp";

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});

async function main() {
  if (!ARTICLE_LANGS.includes(meaningLang)) {
    throw new Error(`--meaning must be one of: ${ARTICLE_LANGS.join(", ")}`);
  }
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(`Invalid --limit: ${args.limit}`);
  }

  const apiKey = loadEnv(envPath).GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not found");

  const files = collectWordFiles();
  const pending = collectPending(files, meaningLang).slice(0, limit);
  if (!pending.length) {
    console.log(`No noun meanings missing articles for ${meaningLang}`);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const requestPath = path.join(outDir, `noun_articles_${meaningLang}_${stamp}_request.json`);
  const responsePath = path.join(outDir, `noun_articles_${meaningLang}_${stamp}_response.json`);

  fs.writeFileSync(requestPath, JSON.stringify(pending, null, 2));
  console.log(`Prepared ${pending.length} noun meanings: ${requestPath}`);

  const prompt = buildPrompt(meaningLang, pending);
  const raw = await callGemini({ apiKey, model, prompt });
  fs.writeFileSync(responsePath, JSON.stringify(raw, null, 2));
  console.log(`Saved raw response: ${responsePath}`);

  const parsed = parseGeminiJson(raw);
  const validated = validateResults(pending, parsed, meaningLang);
  const articleRows = validated.filter((row) => row.needsArticle);
  const skippedRows = validated.length - articleRows.length;
  console.log(`Validated ${validated.length} noun article rows; ${articleRows.length} article updates, ${skippedRows} no-article marks`);

  if (!apply) {
    console.log("Dry run only. Re-run with --apply to merge validated meanings.");
    return;
  }

  const applied = applyResults(files, validated, meaningLang);
  console.log(JSON.stringify({ applied, requestPath, responsePath }, null, 2));
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    if (key === "apply") {
      out.apply = true;
    } else {
      out[key] = argv[i + 1];
      i += 1;
    }
  }
  return out;
}

function loadEnv(file) {
  const env = {};
  if (!fs.existsSync(file)) return env;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const idx = trimmed.indexOf("=");
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function collectWordFiles() {
  const files = [];
  for (const lang of fs.readdirSync("www/data").sort()) {
    const dir = path.join("www/data", lang);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir).sort()) {
      if (/^words_.*\.js$/.test(file)) files.push(path.join(dir, file));
    }
  }
  return files;
}

function parseWordFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/^(\s*\/\/[^\n]*\n)?\s*const\s+([A-Z0-9_]+)\s*=\s*(\[[\s\S]*\]);\s*$/);
  if (!match) throw new Error(`Unrecognized word file format: ${file}`);
  return {
    comment: match[1] || "",
    varName: match[2],
    words: JSON.parse(match[3]),
  };
}

function collectPending(files, target) {
  const rows = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    for (const word of parsed.words) {
      if (word.pos !== "Nomen") continue;
      if (word.meta?.noArticleMeanings?.[target]) continue;
      const current = String(word.meanings?.[target] || "").trim();
      if (!current || ARTICLE_PREFIXES[target].test(current)) continue;
      rows.push({
        file,
        id: word.id,
        source_lang: word.lang,
        lemma: word.lemma,
        pos: word.pos,
        article: word.article || undefined,
        gender: word.gender || undefined,
        cefr: word.cefr,
        current_meaning: current,
        target_meaning_lang: target,
        existing_meanings: word.meanings || {},
      });
    }
  }
  return rows;
}

function buildPrompt(target, pending) {
  const articleList = {
    de: "der, die, das",
    es: "el, la, los, las",
    fr: "le, la, l', les",
    it: "il, lo, la, l', i, gli, le",
    pt: "o, a, os, as",
  }[target];

  return [
    "You are normalizing KarlLang noun meanings under Schema v1.1.",
    "Return JSON only. No markdown. No comments.",
    "",
    `Task: decide whether each ${target} meaning is naturally a noun phrase that should include a definite article.`,
    `Allowed ${target} article forms: ${articleList}.`,
    "",
    "Rules:",
    "- If current_meaning is naturally a noun phrase, add the natural definite article.",
    "- If current_meaning is not naturally a noun phrase in the target language, set needs_article=false and return current_meaning unchanged.",
    "- Do not force an article onto adverbs, adjectives, pronouns, numbers, prepositional phrases, greetings, or fixed expressions.",
    "- Examples that should be skipped in French: après, ici, ce soir, cinq, vous, public, urgent.",
    "- Keep the same core meaning as current_meaning.",
    "- Return exactly one short UI meaning.",
    "- Do not add explanations, examples, grammar notes, POS labels, or parenthetical tags.",
    "- Never use parentheses.",
    "- If the current meaning has a regional or usage note, drop the note completely.",
    "- Bad: la viande hachée (Autriche). Good: la viande hachée.",
    "- Do not list synonyms or alternate meanings.",
    "- Do not use comma-separated, semicolon-separated, slash-separated, Chinese-comma, or Japanese-comma alternatives.",
    "- If needs_article=true, the returned meaning must start with a valid article for the target language.",
    "- If needs_article=false, the returned meaning may lack an article.",
    "- Use elision where natural, for example French l' and Italian l'.",
    "- For multiword noun phrases, put the article at the start of the phrase.",
    "- Preserve capitalization only when it is natural for the target language.",
    "- Each item must have exactly this shape: id string, meaning string, needs_article boolean.",
    "",
    'Return shape: {"items":[{"id":"...","meaning":"...","needs_article":true}]}',
    "",
    "Items:",
    JSON.stringify(
      pending.map((row) => ({
        id: row.id,
        source_lang: row.source_lang,
        lemma: row.lemma,
        article: row.article,
        gender: row.gender,
        current_meaning: row.current_meaning,
        target_meaning_lang: row.target_meaning_lang,
        existing_meanings: row.existing_meanings,
      })),
      null,
      2,
    ),
  ].join("\n");
}

function callGemini({ apiKey, model, prompt }) {
  const body = JSON.stringify({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0,
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          items: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                id: { type: "STRING" },
                meaning: { type: "STRING" },
                needs_article: { type: "BOOLEAN" },
              },
              required: ["id", "meaning", "needs_article"],
            },
          },
        },
        required: ["items"],
      },
    },
  });

  const options = {
    hostname: "generativelanguage.googleapis.com",
    path: `/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        let parsed;
        try {
          parsed = JSON.parse(data);
        } catch (error) {
          reject(new Error(`Gemini returned non-JSON (${res.statusCode}): ${data.slice(0, 500)}`));
          return;
        }
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Gemini API error ${res.statusCode}: ${JSON.stringify(parsed).slice(0, 1000)}`));
          return;
        }
        resolve(parsed);
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function parseGeminiJson(raw) {
  const text = raw.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim();
  if (!text) throw new Error("Gemini response did not include text");
  const parsed = JSON.parse(text);
  if (!parsed || !Array.isArray(parsed.items)) throw new Error("Gemini JSON must contain items[]");
  return parsed.items;
}

function validateResults(pending, items, target) {
  const pendingById = new Map(pending.map((row) => [row.id, row]));
  const seen = new Set();
  const validated = [];
  for (const item of items) {
    const row = pendingById.get(item.id);
    if (!row) throw new Error(`Unexpected id in response: ${item.id}`);
    if (seen.has(item.id)) throw new Error(`Duplicate id in response: ${item.id}`);
    seen.add(item.id);
    if (typeof item.meaning !== "string" || !item.meaning.trim()) {
      throw new Error(`Missing or empty meaning for ${item.id}`);
    }
    if (typeof item.needs_article !== "boolean") {
      throw new Error(`Missing needs_article boolean for ${item.id}`);
    }
    const meaning = item.meaning.trim();
    if (item.needs_article && !ARTICLE_PREFIXES[target].test(meaning)) {
      throw new Error(`Missing ${target} article for ${item.id}: ${meaning}`);
    }
    if (/[()]/.test(meaning)) {
      throw new Error(`Parenthetical note found for ${item.id}: ${meaning}`);
    }
    if (/[,;，、/]/.test(meaning)) {
      throw new Error(`Multiple meanings found for ${item.id}: ${meaning}`);
    }
    validated.push({ id: item.id, meaning, needsArticle: item.needs_article });
  }
  if (validated.length !== pending.length) {
    throw new Error(`Expected ${pending.length} items, got ${validated.length}`);
  }
  return validated;
}

function applyResults(files, validated, target) {
  const byId = new Map(validated.map((row) => [row.id, row]));
  const applied = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    let count = 0;
    const words = parsed.words.map((word) => {
      const row = byId.get(word.id);
      if (!row) return word;
      count += 1;
      const meta = {
        ...(word.meta || {}),
        noArticleMeanings: {
          ...(word.meta?.noArticleMeanings || {}),
        },
      };
      let meanings = word.meanings;
      if (row.needsArticle) {
        meanings = {
          ...word.meanings,
          [target]: row.meaning,
        };
        delete meta.noArticleMeanings[target];
      } else {
        meta.noArticleMeanings[target] = true;
      }
      if (!Object.keys(meta.noArticleMeanings).length) delete meta.noArticleMeanings;
      return orderWord({
        ...word,
        meanings,
        ...(Object.keys(meta).length ? { meta } : {}),
      });
    });
    if (count) {
      fs.writeFileSync(file, `${parsed.comment}const ${parsed.varName} = ${JSON.stringify(words, null, 2)};\n`);
      applied.push({ file, count });
    }
  }
  return applied;
}

function orderWord(word) {
  const out = {};
  for (const key of ["id", "lang", "lemma", "pos", "article", "gender", "plural", "cefr", "tags", "conj", "reading", "meanings", "examples", "meta"]) {
    if (Object.prototype.hasOwnProperty.call(word, key)) out[key] = word[key];
  }
  for (const [key, value] of Object.entries(word)) {
    if (!Object.prototype.hasOwnProperty.call(out, key)) out[key] = value;
  }
  return out;
}
