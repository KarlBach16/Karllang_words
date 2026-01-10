// scripts/check_raw_de_b1_duplicates.js

const { RAW_DE_B1_SOURCE } = require('../../data/de/raw/raw_de_b1_source');

/**
 * 1) raw_line까지 완전 동일한 중복 체크
 */
function checkExactDuplicates() {
  const seen = new Map();
  const exactDups = [];

  RAW_DE_B1_SOURCE.forEach((entry, index) => {
    // key: lemma + pos + gender + plural + raw_line
    const key = [
      entry.lemma,
      entry.pos,
      entry.gender,
      entry.plural,
      entry.raw_line
    ].join('||');

    if (seen.has(key)) {
      exactDups.push({
        key,
        firstIndex: seen.get(key),
        secondIndex: index,
      });
    } else {
      seen.set(key, index);
    }
  });

  console.log('🔍 [1] 완전 동일 엔트리 중복 검사 결과');
  if (exactDups.length === 0) {
    console.log('✅ raw_line까지 완전히 같은 중복 없음');
  } else {
    console.log(`⚠️ 완전 중복 ${exactDups.length}개 발견`);
    exactDups.forEach((dup, i) => {
      const first = RAW_DE_B1_SOURCE[dup.firstIndex];
      const second = RAW_DE_B1_SOURCE[dup.secondIndex];
      console.log(`\n#${i + 1} ---------------------`);
      console.log(`- key: ${dup.key}`);
      console.log(`- firstIndex: ${dup.firstIndex}`, first);
      console.log(`- secondIndex: ${dup.secondIndex}`, second);
    });
  }

  return exactDups;
}

/**
 * 2) lemma + pos + gender 기준 중복 (동음이의어 포함)
 *    → 여기서는 "있다"는 것만 보여주고, 지울지 말지는 사람이 판단
 */
function checkLemmaPosGenderDuplicates() {
  const map = new Map();

  RAW_DE_B1_SOURCE.forEach((entry, index) => {
    const key = [entry.lemma, entry.pos, entry.gender].join('||');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push({ index, entry });
  });

  const multiList = [];
  map.forEach((list, key) => {
    if (list.length > 1) {
      multiList.push({ key, list });
    }
  });

  console.log('\n🔍 [2] lemma + pos + gender 기준 중복(동음이의어 포함)');
  if (multiList.length === 0) {
    console.log('✅ lemma+pos+gender 기준 중복 없음');
  } else {
    console.log(`⚠️ lemma+pos+gender 기준으로 2개 이상인 항목 ${multiList.length}개`);
    multiList.forEach((group, i) => {
      console.log(`\n#${i + 1} === ${group.key} ===`);
      group.list.forEach(item => {
        console.log(`- index ${item.index}: plural=${item.entry.plural}, raw_line=${item.entry.raw_line}`);
      });
    });
  }

  return multiList;
}

// 메인 실행
console.log('🔧 B1 RAW 중복 검사 시작');
const exact = checkExactDuplicates();
const lemmaGroups = checkLemmaPosGenderDuplicates();
console.log('\n✅ 검사 완료');
console.log(`   - 완전 중복 개수: ${exact.length}`);
console.log(`   - lemma+pos+gender 중복 그룹 수: ${lemmaGroups.length}`);