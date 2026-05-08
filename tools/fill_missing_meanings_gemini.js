#!/usr/bin/env node

const fs = require("fs");
const https = require("https");
const path = require("path");

const STANDARD_KEYS = ["de", "ko", "en", "es", "fr", "it", "pt", "ja", "zh", "ru"];
const ARTICLE_LANGS = new Set(["de", "es", "fr", "it", "pt"]);
const ARTICLE_PREFIXES = {
  de: ["der", "die", "das"],
  es: ["el", "la", "lo", "los", "las"],
  fr: ["le", "la", "l'", "les"],
  it: ["il", "lo", "la", "l'", "i", "gli", "le"],
  pt: ["o", "a", "os", "as"],
};

const args = parseArgs(process.argv.slice(2));
const targetLang = args.lang || "ja";
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
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(`Invalid --limit: ${args.limit}`);
  }

  const apiKey = loadEnv(envPath).GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not found");

  const files = collectWordFiles(targetLang);
  const pending = collectPending(files, targetLang).slice(0, limit);
  if (!pending.length) {
    console.log(`No pending meanings for ${targetLang}`);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const requestPath = path.join(outDir, `translation_${targetLang}_${stamp}_request.json`);
  const responsePath = path.join(outDir, `translation_${targetLang}_${stamp}_response.json`);

  fs.writeFileSync(requestPath, JSON.stringify(pending, null, 2));
  console.log(`Prepared ${pending.length} pending words: ${requestPath}`);

  const requiredMeaningKeys = Array.from(
    new Set(pending.flatMap((row) => row.missing_keys)),
  );
  const prompt = buildPrompt(targetLang, pending, requiredMeaningKeys);
  const raw = await callGemini({ apiKey, model, prompt, requiredMeaningKeys });
  fs.writeFileSync(responsePath, JSON.stringify(raw, null, 2));
  console.log(`Saved raw response: ${responsePath}`);

  const parsed = parseGeminiJson(raw);
  const validated = validateResults(pending, parsed);
  console.log(`Validated ${validated.length} translation rows`);

  if (!apply) {
    console.log("Dry run only. Re-run with --apply to merge validated meanings.");
    return;
  }

  const applied = applyResults(files, validated);
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

function collectWordFiles(lang) {
  const dir = path.join("www/data", lang);
  return fs
    .readdirSync(dir)
    .filter((file) => new RegExp(`^words_${lang}_.*\\.js$`).test(file))
    .sort()
    .map((file) => path.join(dir, file));
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

function collectPending(files, lang) {
  const rows = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    for (const word of parsed.words) {
      if (word.lang !== lang) continue;
      const missingKeys = STANDARD_KEYS.filter((key) => !(key in (word.meanings || {})));
      if (!missingKeys.length) continue;
      rows.push({
        file,
        id: word.id,
        lang: word.lang,
        lemma: word.lemma,
        pos: word.pos,
        cefr: word.cefr,
        reading: word.reading || undefined,
        existing_meanings: word.meanings || {},
        missing_keys: missingKeys,
      });
    }
  }
  return rows;
}

function buildPrompt(lang, pending, requiredMeaningKeys) {
  return [
    "You are filling missing KarlLang word meanings under Schema v1.1.",
    "Return JSON only. No markdown. No comments.",
    "",
    "Schema rules:",
    "- Fill only the requested missing_keys for each item.",
    "- Every requested missing key is mandatory for every item.",
    "- If one requested key is omitted, the whole batch is invalid.",
    `- For this batch, every item must include these meaning keys: ${requiredMeaningKeys.join(", ")}.`,
    "- Each value must be a short one-line UI meaning.",
    "- Return exactly one primary meaning per language.",
    "- Do not list synonyms or alternate meanings.",
    "- Do not use comma-separated, semicolon-separated, slash-separated, Chinese-comma, or Japanese-comma alternatives.",
    "- If existing meanings contain multiple alternatives, use only the first/core meaning.",
    "- Empty strings are forbidden.",
    "- Do not include explanations, examples, grammar notes, POS labels, or parenthetical tags.",
    "- Never use parentheses. If an existing meaning contains parentheses, ignore the note and translate only the core meaning.",
    "- Bad: wer (höflich). Good: wer.",
    "- Bad: bio (préfixe). Good: bio.",
    "- English verb meanings must use base form without 'to'. Example: go, eat, be.",
    "- For noun meanings in de/es/fr/it/pt, include the natural article when the translation is a noun.",
    "- Keep existing meanings semantically consistent.",
    "- If the source term is not naturally a noun in a target language, give the most natural concise translation.",
    "- Each item must have exactly this shape: id string, meanings object.",
    "- Do not create keys like id_123. Always use \"id\": \"ja_123\".",
    "",
    "Return shape:",
    '{"items":[{"id":"...","meanings":{"de":"...","fr":"..."}}]}',
    "",
    `Target study language: ${lang}`,
    "Items:",
    JSON.stringify(
      pending.map((row) => ({
        id: row.id,
        lemma: row.lemma,
        pos: row.pos,
        cefr: row.cefr,
        reading: row.reading,
        existing_meanings: row.existing_meanings,
        missing_keys: row.missing_keys,
      })),
      null,
      2,
    ),
  ].join("\n");
}

function callGemini({ apiKey, model, prompt, requiredMeaningKeys }) {
  const body = JSON.stringify({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      temperature: 0.1,
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
                meanings: {
                  type: "OBJECT",
                  properties: Object.fromEntries(
                    STANDARD_KEYS.map((key) => [key, { type: "STRING" }]),
                  ),
                  required: requiredMeaningKeys,
                },
              },
              required: ["id", "meanings"],
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

function validateResults(pending, items) {
  const pendingById = new Map(pending.map((row) => [row.id, row]));
  const seen = new Set();
  const validated = [];
  for (const item of items) {
    const row = pendingById.get(item.id);
    if (!row) throw new Error(`Unexpected id in response: ${item.id}`);
    if (seen.has(item.id)) throw new Error(`Duplicate id in response: ${item.id}`);
    seen.add(item.id);
    if (!item.meanings || typeof item.meanings !== "object" || Array.isArray(item.meanings)) {
      throw new Error(`Missing meanings object for ${item.id}`);
    }
    const out = {};
    for (const key of row.missing_keys) {
      const value = item.meanings[key];
      if (typeof value !== "string" || !value.trim()) {
        throw new Error(`Missing or empty ${key} for ${item.id}`);
      }
      const trimmed = value.trim();
      if (/[()]/.test(trimmed)) {
        throw new Error(`Parenthetical note found in ${key} for ${item.id}: ${trimmed}`);
      }
      if (/[,;，、/]/.test(trimmed)) {
        throw new Error(`Multiple meanings found in ${key} for ${item.id}: ${trimmed}`);
      }
      if (key === "en" && row.pos === "Verb" && /^to\s+/i.test(trimmed)) {
        throw new Error(`English verb starts with to for ${item.id}: ${trimmed}`);
      }
      out[key] = trimmed;
    }
    for (const key of Object.keys(item.meanings)) {
      if (!row.missing_keys.includes(key)) {
        throw new Error(`Response included non-requested key ${key} for ${item.id}`);
      }
    }
    validated.push({ id: item.id, meanings: out });
  }
  if (validated.length !== pending.length) {
    throw new Error(`Expected ${pending.length} items, got ${validated.length}`);
  }
  return validated;
}

function applyResults(files, validated) {
  const byId = new Map(validated.map((row) => [row.id, row.meanings]));
  const applied = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    let count = 0;
    const words = parsed.words.map((word) => {
      const add = byId.get(word.id);
      if (!add) return word;
      count += 1;
      return orderWord({
        ...word,
        meanings: {
          ...word.meanings,
          ...add,
        },
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
