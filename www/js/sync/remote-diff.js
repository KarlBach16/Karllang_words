// Read-only remote/local sync comparison. This never writes local or remote data.

const SYNC_DIFF_CHECK_DELAY_MS = 1200;
const SYNC_DIFF_FOREGROUND_MIN_INTERVAL_MS = 60 * 1000;
const SYNC_MANUAL_STATUS_MIN_MS = 1200;

let SYNC_DIFF_TIMER = null;
let SYNC_DIFF_PROMISE = null;
let SYNC_DIFF_PROMISE_USER_ID = null;
let SYNC_DIFF_CHECKED_USER_ID = null;
let SYNC_DIFF_LAST_CHECK_AT = 0;
let SYNC_DIFF_LIFECYCLE_READY = false;
let SYNC_STATUS_KEY = null;
let SYNC_STATUS_FALLBACK = "";

function setAccountSyncStatus(key, fallback) {
  SYNC_STATUS_KEY = key;
  SYNC_STATUS_FALLBACK = fallback || "";
  if (!DOM.accountSyncStatus) return;
  DOM.accountSyncStatus.textContent = key ? trKey(key, fallback || "") : "";
}

function refreshAccountSyncStatusTranslation() {
  setAccountSyncStatus(SYNC_STATUS_KEY, SYNC_STATUS_FALLBACK);
}

function countByStudyLang(rows) {
  const counts = {};
  (rows || []).forEach((row) => {
    const lang = row.study_lang || "unknown";
    counts[lang] = (counts[lang] || 0) + 1;
  });
  return counts;
}

function normalizeBooleanForDiff(value) {
  return value === true;
}

function normalizeWordProgressForDiff(row) {
  return {
    study_lang: row.study_lang,
    word_id: String(row.word_id),
    srs_level: toSyncInteger(row.srs_level),
    last_reviewed: toSyncInteger(row.last_reviewed),
    next_due: toSyncInteger(row.next_due),
    is_new: row.is_new !== false,
    bookmarked: normalizeBooleanForDiff(row.bookmarked),
    wrong_attempts: toSyncInteger(row.wrong_attempts),
    hard_count: toSyncInteger(row.hard_count),
    last_wrong_at: toSyncInteger(row.last_wrong_at),
    last_hard_at: toSyncInteger(row.last_hard_at),
    total_views: toSyncInteger(row.total_views),
  };
}

function normalizeLanguageStatsForDiff(row) {
  return {
    study_lang: row.study_lang,
    total_reviewed: toSyncInteger(row.total_reviewed),
    new_learned: toSyncInteger(row.new_learned),
    last_studied_at: toSyncInteger(row.last_studied_at),
  };
}

function normalizeRemoteSettingsForDiff(remoteSettings) {
  return {
    study_lang: normalizeRemoteStudyLang(remoteSettings.study_lang),
    mode: normalizeRemoteMode(remoteSettings.mode),
    goal_typing: normalizeRemoteGoal(remoteSettings.goal_typing),
    goal_card: normalizeRemoteGoal(remoteSettings.goal_card),
    new_word_cefr: normalizeRemoteCefr(remoteSettings.new_word_cefr),
    new_word_category: remoteSettings.new_word_category || "all",
    sound_enabled: remoteSettings.sound_enabled !== false,
    haptic_enabled: remoteSettings.haptic_enabled !== false,
    reminder_enabled: remoteSettings.reminder_enabled === true,
    reminder_time: normalizeReminderTime(remoteSettings.reminder_time),
  };
}

function sortByJsonValue(items) {
  return [...items].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  );
}

function rowsMatchForDiff(localRows, remoteRows, normalizeRow) {
  const localNormalized = sortByJsonValue((localRows || []).map(normalizeRow));
  const remoteNormalized = sortByJsonValue((remoteRows || []).map(normalizeRow));
  return JSON.stringify(localNormalized) === JSON.stringify(remoteNormalized);
}

function settingsMatchForDiff(userId, remoteSettings) {
  if (!remoteSettings || typeof buildServerSettingsPayload !== "function") {
    return false;
  }

  const localSettings = buildServerSettingsPayload(userId);
  const remoteComparableSettings = normalizeRemoteSettingsForDiff(remoteSettings);
  const comparableKeys = [
    "study_lang",
    "mode",
    "goal_typing",
    "goal_card",
    "new_word_cefr",
    "new_word_category",
    "sound_enabled",
    "haptic_enabled",
    "reminder_enabled",
    "reminder_time",
  ];

  return comparableKeys.every(
    (key) => localSettings[key] === remoteComparableSettings[key],
  );
}

function buildSyncDiffSummary(userId, localSnapshot, remoteSnapshot) {
  const localAttendanceDates = (localSnapshot.attendance || [])
    .map((row) => row.date_key)
    .sort();
  const remoteAttendanceDates = (remoteSnapshot.attendance || [])
    .map((row) => row.date_key)
    .sort();

  const wordProgressMatch = rowsMatchForDiff(
    localSnapshot.wordProgress,
    remoteSnapshot.wordProgress,
    normalizeWordProgressForDiff,
  );
  const languageStatsMatch = rowsMatchForDiff(
    localSnapshot.languageStats,
    remoteSnapshot.languageStats,
    normalizeLanguageStatsForDiff,
  );
  const attendanceMatch =
    JSON.stringify(localAttendanceDates) === JSON.stringify(remoteAttendanceDates);
  const settingsMatch = settingsMatchForDiff(userId, remoteSnapshot.settings);

  return {
    hasDifference:
      !wordProgressMatch ||
      !languageStatsMatch ||
      !attendanceMatch ||
      !settingsMatch,
    firstMigrationCompleted:
      remoteSnapshot.syncMeta?.first_migration_completed === true,
    settingsMatch,
    wordProgressMatch,
    languageStatsMatch,
    attendanceMatch,
    local: {
      wordProgress: localSnapshot.wordProgress.length,
      languageStats: localSnapshot.languageStats.length,
      attendance: localSnapshot.attendance.length,
      wordProgressByLang: countByStudyLang(localSnapshot.wordProgress),
    },
    remote: {
      wordProgress: remoteSnapshot.wordProgress.length,
      languageStats: remoteSnapshot.languageStats.length,
      attendance: remoteSnapshot.attendance.length,
      wordProgressByLang: countByStudyLang(remoteSnapshot.wordProgress),
      lastPushAt: remoteSnapshot.syncMeta?.last_push_at || null,
      lastPullAt: remoteSnapshot.syncMeta?.last_pull_at || null,
    },
  };
}

async function checkRemoteLocalSyncDiff(userId = getCurrentAuthUserId()) {
  if (!userId) return null;
  if (SYNC_DIFF_PROMISE && SYNC_DIFF_PROMISE_USER_ID === userId) {
    return SYNC_DIFF_PROMISE;
  }

  const diffPromise = (async () => {
    const remoteSnapshot = await fetchRemoteSyncSnapshot(userId);
    if (remoteSnapshot.syncMeta?.first_migration_completed !== true) {
      console.info("[sync] remote/local diff skipped before first sync.");
      return null;
    }

    const localSnapshot = buildLocalSyncSnapshot(userId);
    const summary = buildSyncDiffSummary(userId, localSnapshot, remoteSnapshot);
    console.info("[sync] remote/local diff checked.", summary);
    if (summary.hasDifference && typeof showPostMigrationSyncChoice === "function") {
      showPostMigrationSyncChoice(remoteSnapshot);
    }
    return summary;
  })();

  SYNC_DIFF_PROMISE = diffPromise;
  SYNC_DIFF_PROMISE_USER_ID = userId;

  try {
    return await diffPromise;
  } catch (error) {
    console.info("[sync] remote/local diff check skipped.", error);
    return null;
  } finally {
    if (SYNC_DIFF_PROMISE === diffPromise) {
      SYNC_DIFF_PROMISE = null;
      SYNC_DIFF_PROMISE_USER_ID = null;
    }
  }
}

function scheduleRemoteLocalDiffCheck(reason = "startup", options = {}) {
  const userId = getCurrentAuthUserId();
  if (!userId) return;

  const force = options.force === true;
  const now = Date.now();
  if (!force && SYNC_DIFF_CHECKED_USER_ID === userId) return;
  if (
    force &&
    SYNC_DIFF_LAST_CHECK_AT > 0 &&
    now - SYNC_DIFF_LAST_CHECK_AT < SYNC_DIFF_FOREGROUND_MIN_INTERVAL_MS
  ) {
    return;
  }

  if (SYNC_DIFF_TIMER) {
    clearTimeout(SYNC_DIFF_TIMER);
  }

  SYNC_DIFF_TIMER = setTimeout(async () => {
    SYNC_DIFF_TIMER = null;
    const summary = await checkRemoteLocalSyncDiff(userId);
    SYNC_DIFF_LAST_CHECK_AT = Date.now();
    if (summary) {
      SYNC_DIFF_CHECKED_USER_ID = userId;
      console.info("[sync] startup diff check complete.", {
        reason,
        hasDifference: summary.hasDifference,
      });
    }
  }, SYNC_DIFF_CHECK_DELAY_MS);
}

function resetRemoteLocalDiffState() {
  SYNC_DIFF_CHECKED_USER_ID = null;
  SYNC_DIFF_PROMISE = null;
  SYNC_DIFF_PROMISE_USER_ID = null;
  setAccountSyncStatus(null, "");
  if (SYNC_DIFF_TIMER) {
    clearTimeout(SYNC_DIFF_TIMER);
    SYNC_DIFF_TIMER = null;
  }
}

async function runManualRemoteSyncCheck() {
  const userId = getCurrentAuthUserId();
  if (!userId) return null;

  const startedAt = Date.now();
  const button = DOM.accountSyncCheckBtn;
  const status = DOM.accountSyncStatus;
  if (button) {
    button.disabled = true;
  }
  if (status) {
    setAccountSyncStatus("account.sync_checking_short", "Checking...");
  }

  try {
    if (typeof flushAutoSyncPush === "function") {
      await flushAutoSyncPush("manual_check");
    }
    const summary = await checkRemoteLocalSyncDiff(userId);
    const elapsed = Date.now() - startedAt;
    if (elapsed < SYNC_MANUAL_STATUS_MIN_MS) {
      await new Promise((resolve) =>
        setTimeout(resolve, SYNC_MANUAL_STATUS_MIN_MS - elapsed),
      );
    }
    if (summary && status) {
      if (summary.hasDifference) {
        setAccountSyncStatus(null, "");
      } else {
        setAccountSyncStatus(
          "account.sync_up_to_date",
          "Cloud data is up to date.",
        );
      }
    }
    return summary;
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = trKey("account.sync_check", "Check sync");
    }
  }
}

function initRemoteSyncLifecycleChecks() {
  if (SYNC_DIFF_LIFECYCLE_READY) return;
  SYNC_DIFF_LIFECYCLE_READY = true;

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      scheduleRemoteLocalDiffCheck("visibility_resume", { force: true });
    }
  });

  window.addEventListener("focus", () => {
    scheduleRemoteLocalDiffCheck("window_focus", { force: true });
  });

  if (NativeApp && typeof NativeApp.addListener === "function") {
    NativeApp.addListener("appStateChange", (state) => {
      if (state?.isActive) {
        scheduleRemoteLocalDiffCheck("native_resume", { force: true });
      }
    });
  }
}
