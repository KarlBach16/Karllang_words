// SRS state helpers.

const SRS_LEVELS = [0, 1, 2, 3, 4, 5];
const SRS_INTERVALS = [0, 1, 2, 4, 7, 15];

function getSrsKey(wordId, langOverride) {
  const lang = (langOverride || getCurrentStudyLang() || "de").toLowerCase();
  // 예: karllang_word_de_101, karllang_word_en_101
  return `${STORAGE_KEYS.SRS_PREFIX}${lang}_${wordId}`;
}

function getWordState(word) {
  const key = getSrsKey(word.id);

  const raw = safeGet(key);
  if (!raw) {
    return {
      id: word.id,
      level: 0,
      lastReviewed: 0,
      nextDue: 0,
      isNew: true,
    };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      id: word.id,
      level: parsed.level || 0,
      lastReviewed: parsed.lastReviewed || 0,
      nextDue: parsed.nextDue || 0,
      isNew: parsed.isNew !== false,
    };
  } catch {
    return {
      id: word.id,
      level: 0,
      lastReviewed: 0,
      nextDue: 0,
      isNew: true,
    };
  }
}

function saveWordState(state) {
  const key = getSrsKey(state.id);
  safeSet(
    key,
    JSON.stringify({
      level: state.level,
      lastReviewed: state.lastReviewed,
      nextDue: state.nextDue,
      isNew: state.isNew,
    }),
  );
}
