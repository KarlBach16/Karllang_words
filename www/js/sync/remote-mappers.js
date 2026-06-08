// Supabase rows to local storage shape mappers. These functions do not write.

function normalizeRemoteStudyLang(value) {
  const lang = (value || "de").toString().toLowerCase();
  return ALLOWED_STUDY_LANGS.includes(lang) ? lang : "de";
}

function normalizeRemoteUiLang(value) {
  const lang = (value || "en").toString().toLowerCase();
  return UI_LANG_CODES.includes(lang) ? lang : "en";
}

function normalizeRemoteMode(value) {
  return normalizeStudyMode(value);
}

function normalizeRemoteGoal(value) {
  const parsed = parseInt(value, 10);
  return [5, 10, 20, 30, 50].includes(parsed) ? parsed : 5;
}

function normalizeRemoteCefr(value) {
  const raw = (value || "A1").toString();
  if (raw.toLowerCase() === "all") return "all";
  const upper = raw.toUpperCase();
  return ["A1", "A2", "B1", "B2"].includes(upper) ? upper : "A1";
}

function mapRemoteSettingsToLocal(remoteSettings) {
  if (!remoteSettings || typeof remoteSettings !== "object") return null;

  return {
    ...SETTINGS,
    uiLang: normalizeRemoteUiLang(remoteSettings.ui_lang),
    studyLang: normalizeRemoteStudyLang(remoteSettings.study_lang),
    mode: normalizeRemoteMode(remoteSettings.mode),
    goalTyping: normalizeRemoteGoal(remoteSettings.goal_typing),
    goalCard: normalizeRemoteGoal(remoteSettings.goal_card),
    newWordCefr: normalizeRemoteCefr(remoteSettings.new_word_cefr),
    newWordCategory: remoteSettings.new_word_category || "all",
    soundEnabled: remoteSettings.sound_enabled !== false,
    hapticEnabled: remoteSettings.haptic_enabled !== false,
    studyReminderEnabled: remoteSettings.reminder_enabled === true,
    studyReminderTime: normalizeReminderTime(remoteSettings.reminder_time),
    appVersion: APP_VERSION,
    dataVersion: DATA_VERSION,
    seenOnboarding: true,
  };
}

function mapRemoteLanguageStatsToLocal(rows) {
  const result = {};
  if (!Array.isArray(rows)) return result;

  rows.forEach((row) => {
    const lang = normalizeRemoteStudyLang(row.study_lang);
    result[lang] = {
      totalReviewed: toSyncInteger(row.total_reviewed),
      newLearned: toSyncInteger(row.new_learned),
    };
  });

  return result;
}

function ensureRemoteWordStatsLang(result, lang) {
  if (!result[lang]) result[lang] = {};
  return result[lang];
}

function mapRemoteWordProgressToLocalWordStats(rows) {
  const result = {};
  if (!Array.isArray(rows)) return result;

  rows.forEach((row) => {
    const lang = normalizeRemoteStudyLang(row.study_lang);
    const wordId = String(row.word_id || "");
    if (!wordId) return;

    const byLang = ensureRemoteWordStatsLang(result, lang);
    byLang[wordId] = {
      hardCount: toSyncInteger(row.hard_count),
      wrongAttempts: toSyncInteger(row.wrong_attempts),
      bookmarked: row.bookmarked === true,
      level: normalizeSyncSrsLevel(row.srs_level),
      lastWrongAt: toSyncInteger(row.last_wrong_at),
      lastHardAt: toSyncInteger(row.last_hard_at),
      totalViews: toSyncInteger(row.total_views),
    };
  });

  return result;
}

function mapRemoteWordProgressToLocalSrs(rows) {
  const result = {};
  if (!Array.isArray(rows)) return result;

  rows.forEach((row) => {
    const lang = normalizeRemoteStudyLang(row.study_lang);
    const wordId = String(row.word_id || "");
    if (!wordId) return;

    if (!result[lang]) result[lang] = {};
    result[lang][wordId] = {
      level: normalizeSyncSrsLevel(row.srs_level),
      lastReviewed: toSyncInteger(row.last_reviewed),
      nextDue: toSyncInteger(row.next_due),
      isNew: row.is_new !== false,
    };
  });

  return result;
}

function mapRemoteAttendanceToLocal(rows) {
  if (!Array.isArray(rows)) return [];

  return Array.from(
    new Set(
      rows
        .map((row) => String(row.date_key || "").slice(0, 10))
        .filter((dateKey) => /^\d{4}-\d{2}-\d{2}$/.test(dateKey)),
    ),
  ).sort();
}

function buildRemoteLocalPreview(remoteSnapshot) {
  const snapshot = remoteSnapshot || {};
  return {
    settings: mapRemoteSettingsToLocal(snapshot.settings),
    statsByLang: mapRemoteLanguageStatsToLocal(snapshot.languageStats),
    wordStatsByLang: mapRemoteWordProgressToLocalWordStats(snapshot.wordProgress),
    srsStatesByLang: mapRemoteWordProgressToLocalSrs(snapshot.wordProgress),
    attendanceDates: mapRemoteAttendanceToLocal(snapshot.attendance),
    syncMeta: snapshot.syncMeta || null,
  };
}

async function previewRemoteLocalSnapshot() {
  const remoteSnapshot = await fetchRemoteSyncSnapshot();
  const localPreview = buildRemoteLocalPreview(remoteSnapshot);

  console.info("[sync] remote local preview built.", {
    statsLangs: Object.keys(localPreview.statsByLang).length,
    wordStatsLangs: Object.keys(localPreview.wordStatsByLang).length,
    srsLangs: Object.keys(localPreview.srsStatesByLang).length,
    attendance: localPreview.attendanceDates.length,
    hasSettings: !!localPreview.settings,
  });

  return localPreview;
}
