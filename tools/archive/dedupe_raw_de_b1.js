// scripts/dedupe_raw_de_b1.js

const fs = require('fs');
const path = require('path');
const { RAW_DE_B1_SOURCE } = require('../../data/de/raw/raw_de_b1_source');

function dedupeExact() {
  const seen = new Set();
  const unique = [];
  const dupList = [];

  RAW_DE_B1_SOURCE.forEach((entry, index) => {
    const key = [
      entry.lemma,
      entry.pos,
      entry.gender ?? '',
      entry.plural ?? '',
      entry.raw_line ?? ''
    ].join('||');

    if (seen.has(key)) {
      dupList.push({ index, entry });
    } else {
      seen.add(key);
      unique.push(entry);
    }
  });

  console.log('🔧 B1 RAW 완전 중복 제거');
  console.log(`- 원본 개수: ${RAW_DE_B1_SOURCE.length}`);
  console.log(`- 제거된 완전 중복 개수: ${dupList.length}`);
  console.log(`- 결과 개수: ${unique.length}`);

  return { unique, dupList };
}

function saveCleanRaw(uniqueList) {
  const outPath = path.join(__dirname, '../data/de/raw/raw_de_b1_clean.js');

  const header = `// data/de/raw/raw_de_b1_clean.js
// ✅ RAW_DE_B1_SOURCE에서 완전 중복 제거한 버전 (자동 생성 파일)

const RAW_DE_B1_SOURCE = ${JSON.stringify(uniqueList, null, 2)};

module.exports = { RAW_DE_B1_SOURCE };
`;

  fs.writeFileSync(outPath, header, 'utf8');
  console.log(`✅ 정제된 RAW 저장 완료: ${outPath}`);
}

(function main() {
  const { unique, dupList } = dedupeExact();
  saveCleanRaw(unique);

  console.log('\n💡 사용 팁');
  console.log('- convert_raw_de_b1.js에서 이제 raw_de_b1_source.js 대신 raw_de_b1_clean.js를 require 해서 쓰면 됨.');
})();