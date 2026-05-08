#!/usr/bin/env node

const fs = require("fs");
const https = require("https");
const path = require("path");

const ALLOWED_POS = [
  "Nomen",
  "Verb",
  "Adjektiv",
  "Adverb",
  "Präposition",
  "Konjunktion",
  "Pronomen",
  "Artikel",
  "Numerale",
  "Interjektion",
];

const ARTICLE_PREFIXES = {
  de: /^(der|die|das)\s+/i,
  es: /^(el|la|lo|los|las)\s+|^tod[ao]s?\s+(el|la|los|las)\s+/i,
  fr: /^(le|la|les)\s+|^l['’]\S|^tout(?:e|es|s)?\s+(le|la|les)\s+/i,
  it: /^(il|lo|la|i|gli|le)\s+|^l['’]\S|^tutt[oaie]?\s+(il|lo|la|i|gli|le)\s+/i,
  pt: /^(o|a|os|as)\s+|^tod[ao]s?\s+(o|a|os|as)\s+/i,
};

const args = parseArgs(process.argv.slice(2));
const meaningLang = args.meaning || "fr";
const sourceLang = args.source || "";
const limit = Number(args.limit || 100);
const apply = Boolean(args.apply);
const includeMarked = Boolean(args["include-marked"]);
const model = args.model || "gemini-2.5-flash";
const envPath = args.env || "/Users/karl/Project/karl-tools/.env";
const outDir = args.outDir || "tmp";

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});

async function main() {
  if (!ARTICLE_PREFIXES[meaningLang]) {
    throw new Error(`--meaning must be one of: ${Object.keys(ARTICLE_PREFIXES).join(", ")}`);
  }
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(`Invalid --limit: ${args.limit}`);
  }

  const apiKey = loadEnv(envPath).GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY not found");

  const files = collectWordFiles();
  const pending = collectPending(files, meaningLang, sourceLang, includeMarked).slice(0, limit);
  if (!pending.length) {
    console.log(`No noun POS audit candidates for ${meaningLang}`);
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const requestPath = path.join(outDir, `noun_pos_${meaningLang}_${stamp}_request.json`);
  const responsePath = path.join(outDir, `noun_pos_${meaningLang}_${stamp}_response.json`);

  fs.writeFileSync(requestPath, JSON.stringify(pending, null, 2));
  console.log(`Prepared ${pending.length} noun POS candidates: ${requestPath}`);

  const prompt = buildPrompt(pending);
  const raw = await callGemini({ apiKey, model, prompt });
  fs.writeFileSync(responsePath, JSON.stringify(raw, null, 2));
  console.log(`Saved raw response: ${responsePath}`);

  const parsed = parseGeminiJson(raw);
  const validated = validateResults(pending, parsed);
  const changes = validated.filter((row) => row.pos !== "Nomen");
  console.log(`Validated ${validated.length} POS rows; ${changes.length} changes`);

  if (!apply) {
    console.log("Dry run only. Re-run with --apply to merge POS changes.");
    return;
  }

  const applied = applyResults(files, changes);
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

function collectPending(files, target, source, includeMarked) {
  const rows = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    for (const word of parsed.words) {
      if (word.pos !== "Nomen") continue;
      if (source && word.lang !== source) continue;
      if (!includeMarked && word.meta?.noArticleMeanings?.[target]) continue;
      const current = String(word.meanings?.[target] || "").trim();
      if (!current || ARTICLE_PREFIXES[target].test(current)) continue;
      rows.push({
        file,
        id: word.id,
        source_lang: word.lang,
        lemma: word.lemma,
        current_pos: word.pos,
        cefr: word.cefr,
        current_meaning: current,
        meanings: word.meanings || {},
      });
    }
  }
  return rows;
}

function buildPrompt(pending) {
  return [
    "You are auditing KarlLang POS tags under Schema v1.1.",
    "Return JSON only. No markdown. No comments.",
    "",
    "Task: decide the best KarlLang learning POS for each item.",
    "Use the primary learning meaning across meanings, not only the source-language dictionary category.",
    "If a Japanese/Chinese/Korean term can be nominal grammatically but the learning meaning is adjective-like or adverb-like, choose Adjektiv or Adverb.",
    "If the target meanings are mostly adjective/adverb/prepositional phrases, do not keep Nomen.",
    "Examples: 有料/paid => Adjektiv; 至急/urgent => Adjektiv; 近々/soon => Adverb; 以降/after => Adverb.",
    "",
    "Original noun audit:",
    "Decide whether each item is truly a noun-like learning item.",
    "If it is a noun, return pos=Nomen.",
    "If it is not a noun, return the best POS from the allowed list.",
    "",
    `Allowed POS values: ${ALLOWED_POS.join(", ")}.`,
    "",
    "Guidelines:",
    "- Numbers such as one, eleven, fifty, 一, 七 are Numerale.",
    "- Pronouns and demonstratives such as you, this, that, これ, あなた are Pronomen.",
    "- Place/time adverbs such as here, there, tomorrow, tonight, ここ, あさって are Adverb.",
    "- Greetings such as hello, bonjour, привет are Interjektion.",
    "- Keep concrete objects, people, abstract concepts, proper names, places, and nominalized concepts as Nomen.",
    "- Do not change a POS just because a target-language meaning lacks an article.",
    "- Each item must have exactly this shape: id string, pos string.",
    "",
    'Return shape: {"items":[{"id":"...","pos":"Nomen"}]}',
    "",
    "Items:",
    JSON.stringify(
      pending.map((row) => ({
        id: row.id,
        source_lang: row.source_lang,
        lemma: row.lemma,
        cefr: row.cefr,
        meanings: row.meanings,
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
                pos: { type: "STRING", enum: ALLOWED_POS },
              },
              required: ["id", "pos"],
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
    if (!ALLOWED_POS.includes(item.pos)) throw new Error(`Invalid POS for ${item.id}: ${item.pos}`);
    validated.push({ id: item.id, pos: item.pos });
  }
  if (validated.length !== pending.length) {
    throw new Error(`Expected ${pending.length} items, got ${validated.length}`);
  }
  return validated;
}

function applyResults(files, changes) {
  const byId = new Map(changes.map((row) => [row.id, row.pos]));
  const applied = [];
  for (const file of files) {
    const parsed = parseWordFile(file);
    let count = 0;
    const words = parsed.words.map((word) => {
      const pos = byId.get(word.id);
      if (!pos) return word;
      count += 1;
      const next = { ...word, pos };
      delete next.article;
      delete next.gender;
      delete next.plural;
      if (next.meta?.noArticleMeanings) {
        next.meta = { ...next.meta, noArticleMeanings: { ...next.meta.noArticleMeanings } };
        delete next.meta.noArticleMeanings;
        if (!Object.keys(next.meta).length) delete next.meta;
      }
      return orderWord(next);
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
