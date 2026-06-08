// Local storage to Supabase row mappers. These functions do not write remotely.

function toSyncInteger(value, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.floor(parsed));
}

function normalizeSyncSrsLevel(value) {
  const parsed = toSyncInteger(value, 0);
  return Math.min(5, Math.max(0, parsed));
}

function parseJsonObjectFromStorage(key) {
  const parsed = parseStoredJson(safeGet(key), null);
  return parsed && typeof parsed === "object" && !Array.isArray(parsed)
    ? parsed
    : {};
}

function getStoredStatsByLang() {
  return parseJsonObjectFromStorage(STORAGE_KEYS.STATS);
}

function getStoredWordStatsByLang() {
  return parseJsonObjectFromStorage(STORAGE_KEYS.WORD_STATS);
}

function getStoredSrsStatesByLang() {
  const result = {};
  if (typeof window === "undefined" || !window.localStorage) return result;

  ALLOWED_STUDY_LANGS.forEach((lang) => {
    const prefix = `${STORAGE_KEYS.SRS_PREFIX}${lang}_`;
    const states = {};

    for (let idx = 0; idx < window.localStorage.length; idx += 1) {
      const key = window.localStorage.key(idx);
      if (!key || !key.startsWith(prefix)) continue;

      const wordId = key.slice(prefix.length);
      if (!wordId) continue;

      const parsed = parseStoredJson(safeGet(key), null);
      if (!parsed || typeof parsed !== "object") continue;

      states[wordId] = {
        level: normalizeSyncSrsLevel(parsed.level),
        lastReviewed: toSyncInteger(parsed.lastReviewed),
        nextDue: toSyncInteger(parsed.nextDue),
        isNew: parsed.isNew !== false,
      };
    }

    if (Object.keys(states).length > 0) {
      result[lang] = states;
    }
  });

  return result;
}

function getSyncWordIdsForLang(lang, srsByLang, wordStatsByLang) {
  const ids = new Set();
  const srs = srsByLang[lang] || {};
  const stats = wordStatsByLang[lang] || {};

  Object.keys(srs).forEach((id) => ids.add(String(id)));
  Object.keys(stats).forEach((id) => ids.add(String(id)));

  return Array.from(ids).sort();
}

function getLastStudiedAtForLang(lang, srsByLang, wordStatsByLang) {
  let latest = 0;
  const srs = srsByLang[lang] || {};
  const stats = wordStatsByLang[lang] || {};

  Object.values(srs).forEach((state) => {
    latest = Math.max(
      latest,
      toSyncInteger(state.lastReviewed),
      toSyncInteger(state.nextDue),
    );
  });

  Object.values(stats).forEach((entry) => {
    latest = Math.max(
      latest,
      toSyncInteger(entry.lastWrongAt),
      toSyncInteger(entry.lastHardAt),
    );
  });

  return latest;
}

function mapLocalWordProgressRows(userId) {
  const srsByLang = getStoredSrsStatesByLang();
  const wordStatsByLang = getStoredWordStatsByLang();
  const rows = [];

  ALLOWED_STUDY_LANGS.forEach((lang) => {
    const ids = getSyncWordIdsForLang(lang, srsByLang, wordStatsByLang);
    const srs = srsByLang[lang] || {};
    const stats = wordStatsByLang[lang] || {};

    ids.forEach((wordId) => {
      const state = srs[wordId] || {};
      const entry = stats[wordId] || {};

      rows.push({
        user_id: userId,
        study_lang: lang,
        word_id: String(wordId),
        srs_level: normalizeSyncSrsLevel(
          typeof state.level === "undefined" ? entry.level : state.level,
        ),
        last_reviewed: toSyncInteger(state.lastReviewed),
        next_due: toSyncInteger(state.nextDue),
        is_new: state.isNew !== false,
        bookmarked: entry.bookmarked === true,
        wrong_attempts: toSyncInteger(entry.wrongAttempts),
        hard_count: toSyncInteger(entry.hardCount),
        last_wrong_at: toSyncInteger(entry.lastWrongAt),
        last_hard_at: toSyncInteger(entry.lastHardAt),
        total_views:
          typeof entry.totalViews === "number"
            ? toSyncInteger(entry.totalViews)
            : toSyncInteger(entry.level) + toSyncInteger(entry.wrongAttempts),
      });
    });
  });

  return rows;
}

function mapLocalLanguageStatsRows(userId) {
  const statsByLang = getStoredStatsByLang();
  const srsByLang = getStoredSrsStatesByLang();
  const wordStatsByLang = getStoredWordStatsByLang();
  const rows = [];

  ALLOWED_STUDY_LANGS.forEach((lang) => {
    const stats = statsByLang[lang] || {};
    const totalReviewed = toSyncInteger(stats.totalReviewed);
    const newLearned = toSyncInteger(stats.newLearned);
    const lastStudiedAt = getLastStudiedAtForLang(
      lang,
      srsByLang,
      wordStatsByLang,
    );

    if (!totalReviewed && !newLearned && !lastStudiedAt) return;

    rows.push({
      user_id: userId,
      study_lang: lang,
      total_reviewed: totalReviewed,
      new_learned: newLearned,
      last_studied_at: lastStudiedAt,
    });
  });

  return rows;
}

function mapLocalAttendanceRows(userId) {
  return getAttendanceDates().map((dateKey) => ({
    user_id: userId,
    date_key: dateKey,
  }));
}

function buildLocalSyncSnapshot(userId) {
  if (!userId) {
    return {
      wordProgress: [],
      languageStats: [],
      attendance: [],
    };
  }

  return {
    wordProgress: mapLocalWordProgressRows(userId),
    languageStats: mapLocalLanguageStatsRows(userId),
    attendance: mapLocalAttendanceRows(userId),
  };
}
