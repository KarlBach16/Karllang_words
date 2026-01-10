// scripts/dedupe_words_de_b1_vs_a1a2.js

const fs = require("fs");
const path = require("path");

// A1, A2, B1 단어 로드
const { WORDS_DE_A1 } = require("../../data/de/words_de_a1.js");
const { WORDS_DE_A2 } = require("../../data/de/words_de_a2.js");
const { WORDS_DE_B1 } = require("../../data/de/words_de_b1.js");

// lemma 정규화: 소문자 + 움라우트 치환 + 맨 앞 관사 제거
function normalizeLemma(rawLemma) {
  const lemma = (rawLemma || "").trim().toLowerCase();

  return lemma
    .replace(/^(der|die|das)\s+/, "") // 맨 앞 관사 떼기
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, " ") // 여러 공백 정리
    .trim();
}

// 교차 중복 판단용 키: lemmaNorm + pos + gender
function makeKey(word) {
  const lemmaNorm = normalizeLemma(word.lemma);
  const pos = word.pos || "";
  const gender = word.gender || "";
  return `${lemmaNorm}||${pos}||${gender}`;
}

function main() {
  console.log("🔍 A1/A2 vs B1 교차 중복 검사 + B1 정리 시작");

  const baseSet = new Set();

  // A1 + A2 키 세트 만들기
  WORDS_DE_A1.forEach((w) => {
    baseSet.add(makeKey(w));
  });
  WORDS_DE_A2.forEach((w) => {
    baseSet.add(makeKey(w));
  });

  const originalCount = WORDS_DE_B1.length;
  const kept = [];
  const dropped = [];

  WORDS_DE_B1.forEach((w) => {
    const key = makeKey(w);
    if (baseSet.has(key)) {
      dropped.push(w);
    } else {
      kept.push(w);
    }
  });

  console.log("📊 결과 요약");
  console.log(`- B1 원본 개수: ${originalCount}`);
  console.log(`- A1/A2와 중복되어 제거된 B1 개수: ${dropped.length}`);
  console.log(`- 최종 B1 유지 개수: ${kept.length}`);

  // 중복으로 빠진 애들 대략 확인용 (앞 10개)
  console.log("\n🔎 예시로 제거된 단어 10개 (lemma / pos / gender):");
  dropped.slice(0, 10).forEach((w) => {
    console.log(`- ${w.lemma} / ${w.pos} / ${w.gender || ""}`);
  });

  // 새 B1 파일 저장: words_de_b1_nodup.js
  const outPath = path.join(__dirname, "../data/de/words_de_b1_nodup.js");

  const header =
    "// ⚠️ 이 파일은 scripts/dedupe_words_de_b1_vs_a1a2.js로 자동 생성되었습니다.\n" +
    "// A1/A2와 겹치는 B1 단어를 제거한 버전입니다.\n" +
    "// 필요 시 원본 words_de_b1.js와 비교해서 사용하세요.\n\n";

  const content =
    header +
    "const WORDS_DE_B1 = " +
    JSON.stringify(kept, null, 2) +
    ";\n\n" +
    "if (typeof module !== 'undefined' && module.exports) {\n" +
    "  module.exports = { WORDS_DE_B1 };\n" +
    "}\n";

  fs.writeFileSync(outPath, content, "utf8");
  console.log(`\n✅ 저장 완료: ${outPath}`);
}

if (require.main === module) {
  try {
    main();
  } catch (e) {
    console.error("❌ 중복 제거 중 에러 발생:");
    console.error(e.message || e);
    process.exit(1);
  }
}