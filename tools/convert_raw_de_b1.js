// scripts/convert_raw_de_b1.js

const fs = require("fs");
const path = require("path");

// 🔹 RAW 데이터 불러오기
//   경로: project/KarlLang/data/de/raw/raw_de_b1.js
const { RAW_DE_B1_SOURCE: RAW_DE_B1 } = require("./raw/raw_de_b1.js");

// ===== 상수들 =====

// 유효한 품사
const VALID_POS = [
  "Nomen",
  "Verb",
  "Adjektiv",
  "Adverb",
  "Präposition",
  "Pronomen",
  "Artikel",
  "Konjunktion",
  "Interjektion",
  "Partikel",
  "Präfix",
  "Suffix", 
];

// 유효한 CEFR
const VALID_CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

// meanings에 반드시 있어야 하는 언어 키
const REQUIRED_LANGS = ["de", "ko", "en", "es", "fr", "it", "pt", "ja", "zh", "ru"];

// 명사 gender → 약어
const NOMEN_ABBR = {
  der: "nm",
  die: "nf",
  das: "nn",
  "": "nx", // Pluralwort or 성 구분 없음
};

// 기타 품사 → 약어
const POS_ABBR = {
  Verb: "v",
  Adjektiv: "adj",
  Adverb: "adv",
  Präposition: "prep",
  Pronomen: "pron",
  Artikel: "art",
  Konjunktion: "konj",
  Interjektion: "int",
  Partikel: "part",
  Präfix: "praef",
  Suffix: "suff",
};

// lemma+posAbbr 조합별 카운터
const idCounter = {};

// ===== 복수형 변환 유틸 =====

// 어근에 움라우트 적용
function applyUmlaut(stem) {
  if (!stem || typeof stem !== "string") return stem;

  // au → äu (뒤쪽 것부터 교체)
  if (stem.includes("au")) {
    return stem.replace(/au(?!.*au)/, "äu");
  }

  // a / o / u 뒤에서부터 하나만 바꾼다
  if (stem.match(/a/)) {
    return stem.replace(/a(?!.*a)/, "ä");
  }
  if (stem.match(/o/)) {
    return stem.replace(/o(?!.*o)/, "ö");
  }
  if (stem.match(/u/)) {
    return stem.replace(/u(?!.*u)/, "ü");
  }

  // 바꿀 모음이 없으면 그대로
  return stem;
}

// lemma + 패턴 → 실제 복수형 문자열
function expandPlural(baseLemma, pattern) {
  if (!pattern) return "";

  pattern = String(pattern).trim();

  // 이미 완성된 복수형처럼 보이면 그대로 사용
  // (예: "Tische", "Abfälle" 같은 경우 대비)
  if (!pattern.includes("-") && !pattern.includes("¨")) {
    return pattern;
  }

  // 변화 없음 (복수 = 단수와 동일)
  if (pattern === "-") {
    return baseLemma;
  }

  // 움라우트 패턴: "¨-e", "¨-er", "¨-"
  if (pattern.startsWith("¨")) {
    // "¨-e" → suffix = "e", "¨-er" → "er", "¨-" → ""
    const suffix = pattern.length > 2 ? pattern.slice(2) : "";
    const stem = applyUmlaut(baseLemma);
    return stem + suffix;
  }

  // 단순 접미사 패턴: "-en", "-e", "-er", "-s", "-n"
  if (pattern.startsWith("-")) {
    const suffix = pattern.slice(1); // "-en" → "en"
    return baseLemma + suffix;
  }

  // 혹시 예상 못 한 형식이면 그대로 둠
  return pattern;
}

// ===== 유틸 함수들 =====

// 독일어 lemma 정규화: 소문자 + 움라우트 치환 + 공백 → _
function normalizeLemma(rawLemma) {
  const lemma = (rawLemma || "").trim();

  return lemma
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "_") // 공백 → _
    .replace(/[^a-z0-9_]/g, ""); // 나머지 특수문자는 제거
}

// 품사+gender로 posAbbr 결정
function getPosAbbr(pos, gender) {
  if (pos === "Nomen") {
    const g = gender || "";
    if (!(g in NOMEN_ABBR)) {
      throw new Error(`❌ Invalid gender '${g}' for Nomen`);
    }
    return NOMEN_ABBR[g];
  }

  const abbr = POS_ABBR[pos];
  if (!abbr) {
    throw new Error(`❌ No POS abbreviation for pos='${pos}'`);
  }
  return abbr;
}

// lemmaNorm + posAbbr 조합으로 ID 생성
function generateId(lemma, pos, gender) {
  const lemmaNorm = normalizeLemma(lemma);
  const posAbbr = getPosAbbr(pos, gender);
  const key = `${lemmaNorm}_${posAbbr}`;

  if (!idCounter[key]) {
    idCounter[key] = 1;
  } else {
    idCounter[key] += 1;
  }

  return `${key}_${idCounter[key]}`;
}

// ===== 검증 함수 =====

function validateWord(word, index) {
  const where = `lemma='${word.lemma}' (index ${index})`;

  // 1) pos 검증
  if (!VALID_POS.includes(word.pos)) {
    throw new Error(`❌ Invalid pos '${word.pos}' at ${where}`);
  }

  // 2) cefr 검증
  if (!VALID_CEFR.includes(word.cefr)) {
    throw new Error(`❌ Invalid CEFR '${word.cefr}' at ${where}`);
  }

  // 3) tags 검증 (필수, 자동 기본값 없음)
  if (!word.tags || !Array.isArray(word.tags) || word.tags.length === 0) {
    throw new Error(`❌ Missing tags at ${where}`);
  }

  // 4) meanings 10개 언어 키 검증
  if (!word.meanings || typeof word.meanings !== "object") {
    throw new Error(`❌ meanings가 비었거나 객체가 아님 at ${where}`);
  }
  for (const lang of REQUIRED_LANGS) {
    if (!(lang in word.meanings)) {
      throw new Error(`❌ Missing meanings['${lang}'] at ${where}`);
    }
  }

  // 5) 영어 동사 "to " 금지
  if (
    word.pos === "Verb" &&
    typeof word.meanings.en === "string" &&
    word.meanings.en.trim().toLowerCase().startsWith("to ")
  ) {
    throw new Error(`❌ English verb must not start with "to": ${where}`);
  }

  // 6) 예문 최소 1개
  if (!word.examples || !Array.isArray(word.examples) || word.examples.length === 0) {
    throw new Error(`❌ Missing examples at ${where}`);
  }

  // 7) 명사 gender 필수
  if (word.pos === "Nomen" && word.gender === undefined) {
    throw new Error(`❌ Nomen must have 'gender' field at ${where}`);
  }
}

// ===== 보정 & 정리 =====

function processWord(word) {
  const cloned = JSON.parse(JSON.stringify(word)); // 원본 건들지 않게 복사

  // 0) 명사 lemma에 관사가 붙어 있으면 잘라내기 (이미 넣어둔 거면 이 부분은 그대로 유지)
  if (cloned.pos === "Nomen" && typeof cloned.lemma === "string") {
    const m = cloned.lemma.match(/^(der|die|das)\s+(.+)/);
    if (m) {
      const article = m[1];
      const base = m[2];

      if (!cloned.gender) {
        cloned.gender = article;
      }
      cloned.lemma = base;
    }
  }

  // 1) ID 생성 (관사 제거, plural 패턴 보정 전에)
  cloned.id = generateId(cloned.lemma, cloned.pos, cloned.gender);

  // 2) 명사인 경우 plural 보정
  if (cloned.pos === "Nomen") {
    // 원본 패턴을 meta에 백업 (나중에 필요할 수도 있으니)
    if (word.plural && (word.plural.includes("-") || word.plural.includes("¨"))) {
      if (!cloned.meta) cloned.meta = {};
      cloned.meta.rawPluralPattern = word.plural;
    }

    if (cloned.plural === undefined || cloned.plural === null || cloned.plural === "") {
      // 아무것도 없으면 그냥 빈 문자열
      cloned.plural = "";
    } else {
      // 패턴을 실제 복수형으로 풀어 쓰기
      cloned.plural = expandPlural(cloned.lemma, cloned.plural);
    }
  } else {
    // 명사가 아니면 gender/plural 제거
    delete cloned.gender;
    delete cloned.plural;
  }

  // 3) 동사 아닌데 conj 있으면 제거
  if (cloned.pos !== "Verb") {
    delete cloned.conj;
  }

  // 4) meta 없으면 빈 객체
  if (!cloned.meta) {
    cloned.meta = {};
  }

  return cloned;
}

// ===== 메인 실행 =====

function main() {
  console.log("🔧 RAW_DE_B1 → words_de_b1.js 변환 시작");

  const processed = [];

  RAW_DE_B1.forEach((word, idx) => {
    // 검증
    validateWord(word, idx);

    // 보정/정리
    const p = processWord(word);
    processed.push(p);
  });

  // 출력 파일 경로: data/de/words_de_b1.js
  const outPath = path.join(__dirname, "../data/de/words_de_b1.js");

  const header =
    "// ⚠️ 이 파일은 scripts/convert_raw_de_b1.js로 자동 생성되었습니다.\n" +
    "// 직접 수정하지 말고, data/de/raw/raw_de_b1.js를 고치고 다시 변환하세요.\n\n";

  const content =
    header +
    "const WORDS_DE_B1 = " +
    JSON.stringify(processed, null, 2) +
    ";\n\n" +
    "if (typeof module !== 'undefined' && module.exports) {\n" +
    "  module.exports = { WORDS_DE_B1 };\n" +
    "}\n";

  fs.writeFileSync(outPath, content, "utf8");

  console.log(`✅ 변환 완료: ${processed.length}개 단어 → ${outPath}`);
}

// 직접 실행될 때만 main() 호출
if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error("❌ 변환 중 에러 발생:");
    console.error(e.message || e);
    process.exit(1);
  }
}