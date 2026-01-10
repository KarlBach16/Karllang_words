// scripts/merge_b1_tags.js

const fs = require("fs");
const path = require("path");

// 1) B1 단어 본판 (이미 exam 들어있는 버전)
const { WORDS_DE_B1 } = require("../../data/de/words_de_b1.js");

// 2) 태그 오버레이 (basic/daily/travel/work 만 들어있는 JSON)
const TAG_FILE = path.join(__dirname, "../data/de/tags/b1_tags_all.json");
const tagJson = fs.readFileSync(TAG_FILE, "utf8");
const tagData = JSON.parse(tagJson); // [{ id, tags: [...] }, ...]

// id → tags 매핑
const tagMap = new Map();
tagData.forEach((item) => {
  if (!item || !item.id) return;
  const tags = Array.isArray(item.tags) ? item.tags : [];
  tagMap.set(item.id, tags);
});

// 태그 정렬 우선순위
const TAG_ORDER = ["exam", "basic", "daily", "travel", "work"];

function sortTags(tags) {
  // 중복 제거
  const uniq = [...new Set(tags)];

  // 우선순위 정렬
  return uniq.sort((a, b) => {
    const ia = TAG_ORDER.indexOf(a);
    const ib = TAG_ORDER.indexOf(b);

    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function main() {
  console.log("🔧 B1 태그 머지 시작");

  const merged = WORDS_DE_B1.map((word) => {
    const extra = tagMap.get(word.id) || [];   // basic/daily/... 또는 []
    const base = Array.isArray(word.tags) ? [...word.tags] : [];

    // exam은 기본 태그로 강제 유지
    if (!base.includes("exam")) {
      base.push("exam");
    }

    const finalTags = sortTags([...base, ...extra]);

    return {
      ...word,
      tags: finalTags,
    };
  });

  const outPath = path.join(
    __dirname,
    "../data/de/words_de_b1_tagged.js"
  );

  const header =
    "// ⚠️ 이 파일은 scripts/merge_b1_tags.js로 자동 생성되었습니다.\n" +
    "// WORDS_DE_B1 + b1_tags_all.json 태그 머지 버전입니다.\n\n";

  const content =
    header +
    "const WORDS_DE_B1 = " +
    JSON.stringify(merged, null, 2) +
    ";\n\n" +
    "if (typeof module !== 'undefined' && module.exports) {\n" +
    "  module.exports = { WORDS_DE_B1 };\n" +
    "}\n";

  fs.writeFileSync(outPath, content, "utf8");
  console.log(`✅ B1 태그 머지 완료: ${merged.length}개 단어 → ${outPath}`);
}

// 직접 실행될 때만 main 호출
if (require.main === module) {
  main();
}