// scripts/check_b1_tags.js

const fs = require("fs");
const path = require("path");

// 1) 단어 데이터 (id 목록 검증용)
const { WORDS_DE_B1 } = require("../../data/de/words_de_b1.js");

// 2) 태그 데이터 (LLM이 뽑아준 결과)
//    경로/파일명은 네가 실제 쓴 걸로 맞춰라.
const TAGS_PATH = path.join(__dirname, "../data/de/tags/b1_tags_all.json");
const raw = fs.readFileSync(TAGS_PATH, "utf8");
const TAG_ITEMS = JSON.parse(raw);

// 허용 태그 목록
const ALLOWED_TAGS = ["exam", "basic", "daily", "travel", "work"];

function main() {
  console.log("🔍 B1 태그 검증 시작");

  const wordIdSet = new Set(WORDS_DE_B1.map((w) => w.id));
  const seenTagIds = new Set();

  // 1) 태그 형식 & 값 검증
  const invalidTagValues = [];
  const unknownIds = [];
  const emptyTags = [];

  TAG_ITEMS.forEach((item, idx) => {
    const where = `index ${idx}, id='${item.id}'`;
    seenTagIds.add(item.id);

    if (!Array.isArray(item.tags)) {
      throw new Error(`❌ tags가 배열이 아님: ${where}`);
    }

    if (item.tags.length === 0) {
      emptyTags.push(item.id);
    }

    item.tags.forEach((t) => {
      if (!ALLOWED_TAGS.includes(t)) {
        invalidTagValues.push({ id: item.id, tag: t });
      }
    });

    if (!wordIdSet.has(item.id)) {
      unknownIds.push(item.id);
    }
  });

  // 2) 단어 중에 태그 파일에 없는 애들
  const missingTagIds = [];
  WORDS_DE_B1.forEach((w) => {
    if (!seenTagIds.has(w.id)) {
      missingTagIds.push(w.id);
    }
  });

  // 3) 태그 분포
  const tagCount = {};
  ALLOWED_TAGS.forEach((t) => (tagCount[t] = 0));
  TAG_ITEMS.forEach((item) => {
    item.tags.forEach((t) => {
      if (ALLOWED_TAGS.includes(t)) {
        tagCount[t] += 1;
      }
    });
  });

  console.log("📊 태그 분포");
  Object.entries(tagCount).forEach(([tag, cnt]) => {
    console.log(`- ${tag}: ${cnt}`);
  });

  console.log("\n📌 요약");

  if (invalidTagValues.length > 0) {
    console.log(`❌ 허용되지 않은 태그 값 존재: ${invalidTagValues.length}건`);
    console.log(invalidTagValues.slice(0, 10));
  } else {
    console.log("✅ 모든 tags 값이 허용된 태그 집합 안에 있음");
  }

  if (emptyTags.length > 0) {
    console.log(`⚠️ tags가 빈 배열인 항목: ${emptyTags.length}개 (예시 10개)`);
    console.log(emptyTags.slice(0, 10));
  } else {
    console.log("✅ 빈 tags 배열 없음");
  }

  if (unknownIds.length > 0) {
    console.log(`⚠️ words_de_b1에 없는 id를 가진 태그 항목: ${unknownIds.length}개`);
    console.log(unknownIds.slice(0, 10));
  } else {
    console.log("✅ 모든 태그 항목 id가 WORDS_DE_B1 안에 존재");
  }

  if (missingTagIds.length > 0) {
    console.log(`⚠️ 태그 파일에 없는 단어 id: ${missingTagIds.length}개 (예시 10개)`);
    console.log(missingTagIds.slice(0, 10));
  } else {
    console.log("✅ 모든 단어가 태그 파일에도 존재");
  }

  console.log("\n🔚 검증 끝");
}

try {
  main();
} catch (e) {
  console.error("❌ 검증 중 에러:");
  console.error(e.message || e);
  process.exit(1);
}