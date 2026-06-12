// Remote snapshot application helpers. Writes happen only when called manually.

const SYNC_BACKUP_PREFIX = "karllang_sync_backup_";

function getCurrentKarlLangStorageSnapshot() {
  const snapshot = {};
  if (typeof window === "undefined" || !window.localStorage) return snapshot;

  for (let idx = 0; idx < window.localStorage.length; idx += 1) {
    const key = window.localStorage.key(idx);
    if (!key || !key.startsWith("karllang")) continue;
    snapshot[key] = safeGet(key);
  }

  return snapshot;
}

function backupCurrentLocalSyncData() {
  const backupKey = `${SYNC_BACKUP_PREFIX}${Date.now()}`;
  const payload = {
    createdAt: new Date().toISOString(),
    data: getCurrentKarlLangStorageSnapshot(),
  };

  safeSet(backupKey, JSON.stringify(payload));
  console.info("[sync] local backup created.", {
    backupKey,
    keys: Object.keys(payload.data).length,
  });
  return backupKey;
}

function clearLocalSrsStateForSync() {
  if (typeof window === "undefined" || !window.localStorage) return;

  const keys = [];
  for (let idx = 0; idx < window.localStorage.length; idx += 1) {
    const key = window.localStorage.key(idx);
    if (key && key.startsWith(STORAGE_KEYS.SRS_PREFIX)) {
      keys.push(key);
    }
  }

  keys.forEach((key) => window.localStorage.removeItem(key));
}

function applySrsStatesByLang(srsStatesByLang) {
  clearLocalSrsStateForSync();

  Object.entries(srsStatesByLang || {}).forEach(([lang, byWordId]) => {
    Object.entries(byWordId || {}).forEach(([wordId, state]) => {
      const key = getSrsKey(wordId, lang);
      safeSet(
        key,
        JSON.stringify({
          level: normalizeSyncSrsLevel(state.level),
          lastReviewed: toSyncInteger(state.lastReviewed),
          nextDue: toSyncInteger(state.nextDue),
          isNew: state.isNew !== false,
        }),
      );
    });
  });
}

function applyRemoteLocalPreview(localPreview) {
  const preview = localPreview || {};
  const backupKey = backupCurrentLocalSyncData();
  const currentUiLang = SETTINGS.uiLang || CURRENT_LANG || "ko";

  withAutoSyncSuppressed(() => {
    if (preview.settings) {
      SETTINGS = { ...DEFAULT_SETTINGS, ...preview.settings, uiLang: currentUiLang };
      CURRENT_LANG = SETTINGS.uiLang || "ko";
      saveSettings();
    }

    safeSet(STORAGE_KEYS.STATS, JSON.stringify(preview.statsByLang || {}));
    safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(preview.wordStatsByLang || {}));
    saveAttendanceDates(preview.attendanceDates || []);
    applySrsStatesByLang(preview.srsStatesByLang || {});
    clearStudyWordSetCache();
    safeSet(STORAGE_KEYS.USER_DATA_SCHEMA, USER_DATA_SCHEMA_VERSION);
  });

  hydrateSettingsToUI();
  refreshUiLangSelectLabels();
  applyTranslations();
  updateCefrProgress();
  updateStudyStartSummary();
  renderAttendance();
  showReadyState();

  const summary = {
    backupKey,
    statsLangs: Object.keys(preview.statsByLang || {}).length,
    wordStatsLangs: Object.keys(preview.wordStatsByLang || {}).length,
    srsLangs: Object.keys(preview.srsStatesByLang || {}).length,
    attendance: (preview.attendanceDates || []).length,
  };
  console.info("[sync] remote local preview applied.", summary);
  return summary;
}

async function applyRemoteSyncSnapshot() {
  const localPreview = await previewRemoteLocalSnapshot();
  return applyRemoteLocalPreview(localPreview);
}
