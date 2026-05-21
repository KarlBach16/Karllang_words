// Study word-set cache helpers.

// ✅ 일반 학습 세션에서 뽑은 단어들 공유용
let LAST_STUDY_WORD_IDS = [];
let LAST_STUDY_META = {
  day: null,
  filterKey: null,
};

function loadStudyWordSet() {
  const parsed = parseStoredJson(safeGet(STORAGE_KEYS.STUDY_WORD_SET), null);
  if (!parsed || !Array.isArray(parsed.ids)) {
    return { ids: [], day: null, filterKey: null };
  }
  return {
    ids: parsed.ids.map((id) => String(id)).filter(Boolean),
    day: parsed.day || null,
    filterKey: parsed.filterKey || null,
  };
}

function saveStudyWordSet(ids, meta = {}) {
  safeSet(
    STORAGE_KEYS.STUDY_WORD_SET,
    JSON.stringify({
      ids: (ids || []).map((id) => String(id)).filter(Boolean),
      day: meta.day || nowDay(),
      filterKey: meta.filterKey || null,
    }),
  );
}

function clearStudyWordSetCache() {
  LAST_STUDY_WORD_IDS = [];
  LAST_STUDY_META = { day: null, filterKey: null };
  try {
    window.localStorage.removeItem(STORAGE_KEYS.STUDY_WORD_SET);
  } catch {
    // ignore
  }
}
