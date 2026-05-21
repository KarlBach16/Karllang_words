function resetSrsForLang(lang) {
  const allWords = getAllWords();
  allWords.forEach((w) => {
    const key = getSrsKey(w.id, lang);
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  });
}

function resetStatsForLang(lang) {
  const raw = safeGet(STORAGE_KEYS.STATS);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw) || {};
    delete parsed[lang];
    safeSet(STORAGE_KEYS.STATS, JSON.stringify(parsed));
  } catch (e) {}
}

function resetWordStatsForLang(lang) {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw) || {};
    delete parsed[lang];
    safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(parsed));
  } catch (e) {}
}
