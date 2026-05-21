// localStorage helpers and user-data migration utilities.

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    // ignore
  }
}

function parseStoredJson(raw, fallback = null) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function getStoredStudyLangFallback() {
  const parsed = parseStoredJson(safeGet(STORAGE_KEYS.SETTINGS), null);
  const lang =
    parsed && typeof parsed.studyLang === "string" ? parsed.studyLang : "de";
  return lang.toLowerCase();
}

function looksLikeFlatStats(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    (Object.prototype.hasOwnProperty.call(obj, "totalReviewed") ||
      Object.prototype.hasOwnProperty.call(obj, "newLearned"))
  );
}

function looksLikeWordStatEntry(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    (Object.prototype.hasOwnProperty.call(obj, "bookmarked") ||
      Object.prototype.hasOwnProperty.call(obj, "wrongAttempts") ||
      Object.prototype.hasOwnProperty.call(obj, "hardCount") ||
      Object.prototype.hasOwnProperty.call(obj, "lastWrongAt") ||
      Object.prototype.hasOwnProperty.call(obj, "lastHardAt"))
  );
}

function looksLikeFlatWordStats(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return Object.values(obj).some(looksLikeWordStatEntry);
}

function migrateJsonStorageKey({ fromKey, toKey, transform }) {
  const current = parseStoredJson(safeGet(toKey), null);
  if (current && typeof current === "object") return false;

  const legacy = parseStoredJson(safeGet(fromKey), null);
  if (!legacy || typeof legacy !== "object") return false;

  const migrated = transform ? transform(legacy) : legacy;
  safeSet(toKey, JSON.stringify(migrated));
  return true;
}

function normalizeStatsStorageShape() {
  const raw = safeGet(STORAGE_KEYS.STATS);
  const parsed = parseStoredJson(raw, null);
  if (!looksLikeFlatStats(parsed)) return false;

  const lang = getStoredStudyLangFallback();
  safeSet(STORAGE_KEYS.STATS, JSON.stringify({ [lang]: parsed }));
  return true;
}

function normalizeWordStatsStorageShape() {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  const parsed = parseStoredJson(raw, null);
  if (!looksLikeFlatWordStats(parsed)) return false;

  const lang = getStoredStudyLangFallback();
  safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify({ [lang]: parsed }));
  return true;
}

function migrateUserData() {
  const currentSchema = safeGet(STORAGE_KEYS.USER_DATA_SCHEMA);

  // 예전 키나 단일언어 저장 구조가 남아 있으면 삭제하지 않고 현재 구조로 옮긴다.
  migrateJsonStorageKey({
    fromKey: "karllang_stats_v3",
    toKey: STORAGE_KEYS.STATS,
    transform: (legacy) =>
      looksLikeFlatStats(legacy)
        ? { [getStoredStudyLangFallback()]: legacy }
        : legacy,
  });

  migrateJsonStorageKey({
    fromKey: "karllang_word_stats_v3",
    toKey: STORAGE_KEYS.WORD_STATS,
    transform: (legacy) =>
      looksLikeFlatWordStats(legacy)
        ? { [getStoredStudyLangFallback()]: legacy }
        : legacy,
  });

  normalizeStatsStorageShape();
  normalizeWordStatsStorageShape();

  if (currentSchema !== USER_DATA_SCHEMA_VERSION) {
    safeSet(STORAGE_KEYS.USER_DATA_SCHEMA, USER_DATA_SCHEMA_VERSION);
  }
}

function shouldResetLearningDataForDataVersion(previousVersion, nextVersion) {
  if (!previousVersion || previousVersion === nextVersion) return false;

  // 단어 ID 체계가 실제로 깨지는 버전만 여기에 명시한다.
  // UI/기능 업데이트와 일반 단어 데이터 보강은 학습기록을 보존한다.
  const wordIdBreakingChanges = new Set([]);
  return wordIdBreakingChanges.has(`${previousVersion}->${nextVersion}`);
}

//학습 진도 초기화용
function resetKarlLangData() {
  Object.keys(localStorage)
    .filter((key) => key.toLowerCase().includes("karllang"))
    .forEach((key) => localStorage.removeItem(key));
  location.reload();
}
