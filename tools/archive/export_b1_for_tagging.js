// scripts/export_b1_for_tagging.js

const fs = require("fs");
const path = require("path");

// B1 정제본 불러오기 (중복 제거된 버전)
const { WORDS_DE_B1 } = require("../../data/de/words_de_b1.js");

function main() {
  console.log("🔧 B1 태깅용 데이터 export 시작");

  // 태깅에 필요한 최소 정보만 추출
  const minimal = WORDS_DE_B1.map((w) => ({
    id: w.id,
    lemma: w.lemma,
    pos: w.pos,
    de: w.meanings?.de ?? "",
    ko: w.meanings?.ko ?? "",
    en: w.meanings?.en ?? "",
    examples: w.examples ?? [],
  }));

  const outDir = path.join(__dirname, "../data/de/tagging");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, "b1_for_tagging_full.json");

  fs.writeFileSync(outPath, JSON.stringify(minimal, null, 2), "utf8");

  console.log("✅ export 완료");
  console.log(`- 총 단어 수: ${minimal.length}`);
  console.log(`- 파일: ${outPath}`);
}

if (require.main === module) {
  main();
}