function getWordStatsAll() {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  const lang = getCurrentStudyLang();

  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};

    const byLang = parsed[lang];
    if (byLang && typeof byLang === "object") {
      return byLang;
    }
    return {};
  } catch {
    return {};
  }
}

function saveWordStatsAll(objForCurrentLang) {
  const lang = getCurrentStudyLang();
  let base = {};

  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        base = parsed;
      }
    } catch {
      base = {};
    }
  }

  base[lang] = objForCurrentLang;
  safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(base));
  if (typeof scheduleAutoSyncPush === "function") {
    scheduleAutoSyncPush("word_stats");
  }
}

function getWordStatsById(id) {
  const all = getWordStatsAll();
  const base = all[id] || {};
  const totalViews = typeof base.totalViews === "number" ? base.totalViews : 0;

  return {
    hardCount: base.hardCount || 0,
    wrongAttempts: base.wrongAttempts || 0,
    bookmarked: !!base.bookmarked,
    level: base.level || 0,
    lastWrongAt: base.lastWrongAt || 0,
    lastHardAt: base.lastHardAt || 0,
    totalViews: totalViews,
  };
}

function setWordStatsById(id, updater) {
  const all = getWordStatsAll();
  const current = all[id] || {
    hardCount: 0,
    wrongAttempts: 0,
    bookmarked: false,
    level: 0,
    lastWrongAt: 0,
    lastHardAt: 0,
    totalViews: 0,
  };

  const next = updater(current);
  all[id] = next;
  saveWordStatsAll(all);
  return next;
}

function incrementTotalViews(wordId) {
  setWordStatsById(String(wordId), (s) => {
    let baseCount;
    if (typeof s.totalViews === "number") {
      baseCount = s.totalViews;
    } else {
      baseCount = (s.level || 0) + (s.wrongAttempts || 0);
    }
    return { ...s, totalViews: baseCount + 1 };
  });
}

function incrementWrongAttempt(wordId) {
  setWordStatsById(String(wordId), (s) => ({
    ...s,
    wrongAttempts: (s.wrongAttempts || 0) + 1,
    lastWrongAt: Date.now(),
  }));
}

function markWordMastered(wordId, options = {}) {
  const id = String(wordId);
  const keepBookmark = options.keepBookmark === true;

  setWordStatsById(id, (s) => ({
    ...s,
    hardCount: 0,
    wrongAttempts: 0,
    lastWrongAt: 0,
    lastHardAt: 0,
    bookmarked: keepBookmark ? s.bookmarked : false,
  }));

  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (!keepBookmark && APP_STATE.currentView === "bookmark") {
    renderBookmarks();
  }
}

function toggleBookmark(wordId) {
  const stats = setWordStatsById(wordId, (s) => ({
    ...s,
    bookmarked: !s.bookmarked,
  }));

  const btn = document.getElementById("bookmarkToggle");
  if (btn) {
    btn.textContent = stats.bookmarked ? "★" : "☆";
  }
  const btnCopy = document.getElementById("copyBookmarkBtn");
  if (btnCopy) {
    btnCopy.textContent = stats.bookmarked ? "★" : "☆";
  }

  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (APP_STATE.currentView === "bookmark") {
    renderBookmarks();
  }
}
