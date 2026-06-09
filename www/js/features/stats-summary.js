// Overall stats, attendance, streak, and daily session summary helpers.

function nowDay() {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftLocalDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getWeekStartMonday(date = new Date()) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + diff);
  return start;
}

function getAttendanceDates() {
  const raw = safeGet(STORAGE_KEYS.ATTENDANCE);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.dates)) return [];
    return parsed.dates
      .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(String(date)))
      .sort();
  } catch {
    return [];
  }
}

function saveAttendanceDates(dates) {
  const uniqueDates = Array.from(new Set(dates)).sort();
  safeSet(
    STORAGE_KEYS.ATTENDANCE,
    JSON.stringify({
      dates: uniqueDates,
    }),
  );
  if (typeof scheduleAutoSyncPush === "function") {
    scheduleAutoSyncPush("attendance");
  }
}

function recordAttendanceForStudyStart() {
  const today = getLocalDateKey();
  const dates = getAttendanceDates();
  if (dates.includes(today)) return;
  dates.push(today);
  saveAttendanceDates(dates);
  renderAttendance();
}

function getLearningStreakDays(summary = getDailySummary()) {
  const dates = getAttendanceDates();
  if (summary && Number(summary.total) > 0) {
    dates.push(getLocalDateKey());
  }

  const set = new Set(dates);
  let streak = 0;
  let cursor = new Date();

  while (set.has(getLocalDateKey(cursor))) {
    streak += 1;
    cursor = shiftLocalDate(cursor, -1);
  }

  return streak;
}

function renderAttendance() {
  if (!DOM.attendanceWeek) return;

  const dates = getAttendanceDates();
  const set = new Set(dates);
  const weekStart = getWeekStartMonday();
  const weekDates = Array.from({ length: 7 }, (_, idx) =>
    getLocalDateKey(shiftLocalDate(weekStart, idx)),
  );
  const weekdayLabels = trKey("attendance_weekdays", "월 화 수 목 금 토 일")
    .split(/\s+/)
    .filter(Boolean);

  if (DOM.attendanceTitle) {
    DOM.attendanceTitle.textContent = trKey("attendance_title", "출석");
  }

  DOM.attendanceWeek.innerHTML = "";
  weekDates.forEach((date, idx) => {
    const item = document.createElement("div");
    item.className = "attendance-day";
    if (set.has(date)) {
      item.classList.add("is-attended");
    }
    if (date === getLocalDateKey()) {
      item.classList.add("is-today");
    }

    const label = document.createElement("div");
    label.className = "attendance-day-label";
    label.textContent = weekdayLabels[idx] || "";

    const dot = document.createElement("div");
    dot.className = "attendance-dot";

    item.appendChild(label);
    item.appendChild(dot);
    DOM.attendanceWeek.appendChild(item);
  });
}

function getStats() {
  const raw = safeGet(STORAGE_KEYS.STATS);
  const lang = getCurrentStudyLang();

  if (!raw) {
    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {
        totalReviewed: 0,
        newLearned: 0,
      };
    }

    const byLang = parsed[lang];
    if (byLang && typeof byLang === "object") {
      return {
        totalReviewed: byLang.totalReviewed || 0,
        newLearned: byLang.newLearned || 0,
      };
    }

    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  } catch {
    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  }
}

function saveStats(statsForCurrentLang) {
  const lang = getCurrentStudyLang();
  let base = {};

  const raw = safeGet(STORAGE_KEYS.STATS);
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

  base[lang] = {
    totalReviewed: statsForCurrentLang.totalReviewed || 0,
    newLearned: statsForCurrentLang.newLearned || 0,
  };

  safeSet(STORAGE_KEYS.STATS, JSON.stringify(base));
  if (typeof scheduleAutoSyncPush === "function") {
    scheduleAutoSyncPush("stats");
  }
}

function getEmptyDailySummary(day = nowDay()) {
  return {
    day,
    total: 0,
    newCount: 0,
    reviewCount: 0,
    correct: 0,
    wrong: 0,
    hard: 0,
    normal: 0,
    easy: 0,
    modeCounts: {},
    difficultWords: [],
  };
}

function getDailySummary() {
  const lang = getCurrentStudyLang();
  const today = nowDay();
  const raw = safeGet(STORAGE_KEYS.DAILY_SUMMARY);

  if (!raw) return getEmptyDailySummary(today);

  try {
    const parsed = JSON.parse(raw);
    const byLang = parsed && parsed[lang];
    if (!byLang || byLang.day !== today) {
      return getEmptyDailySummary(today);
    }

    return {
      ...getEmptyDailySummary(today),
      ...byLang,
      day: today,
    };
  } catch {
    return getEmptyDailySummary(today);
  }
}

function saveDailySummary(summary) {
  const lang = getCurrentStudyLang();
  let base = {};
  const raw = safeGet(STORAGE_KEYS.DAILY_SUMMARY);

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

  base[lang] = {
    ...getEmptyDailySummary(summary.day || nowDay()),
    ...summary,
  };
  safeSet(STORAGE_KEYS.DAILY_SUMMARY, JSON.stringify(base));
  if (typeof scheduleAutoSyncPush === "function") {
    scheduleAutoSyncPush("daily_summary");
  }
}

function getSessionModeKey(mode) {
  if (mode === "typing") return "typing";
  if (mode === "copy") return "copy";
  if (mode === "card") return "card";
  if (mode === "cram") return "cram";
  if (mode === "word_drop") return "word_drop";
  return "study";
}

function addDailyModeCount(summary, mode, count) {
  const key = getSessionModeKey(mode);
  const amount = Number(count) || 0;
  if (!amount) return;

  summary.modeCounts =
    summary.modeCounts && typeof summary.modeCounts === "object"
      ? summary.modeCounts
      : {};
  summary.modeCounts[key] = (summary.modeCounts[key] || 0) + amount;
}

function addDailyDifficultWords(summary, words) {
  if (!Array.isArray(words) || !words.length) return;

  const current = Array.isArray(summary.difficultWords)
    ? summary.difficultWords.slice()
    : [];
  const seen = new Set(current.map((item) => String(item.id || item.label)));

  words.forEach((word) => {
    if (!word) return;
    const id = String(word.id || getSessionReportWordLabel(word));
    if (!id || seen.has(id)) return;
    const label = getSessionReportWordLabel(word);
    if (!label) return;
    current.push({ id, label });
    seen.add(id);
  });

  summary.difficultWords = current.slice(0, 12);
}

function addCurrentSessionToDailySummary() {
  const summary = getDailySummary();
  if (APP_STATE.sessionSummarySaved) {
    return summary;
  }

  summary.total += APP_STATE.completed || 0;
  summary.newCount += APP_STATE.newCount || 0;
  summary.reviewCount += APP_STATE.reviewCount || 0;
  summary.correct += APP_STATE.sessionCorrectCount || 0;
  summary.wrong += APP_STATE.sessionWrongCount || 0;
  summary.hard += APP_STATE.sessionHardCount || 0;
  summary.normal += APP_STATE.sessionNormalCount || 0;
  summary.easy += APP_STATE.sessionEasyCount || 0;
  addDailyModeCount(summary, APP_STATE.sessionMode, APP_STATE.completed || 0);
  addDailyDifficultWords(summary, APP_STATE.sessionWrongWords || []);

  saveDailySummary(summary);
  APP_STATE.sessionSummarySaved = true;
  return summary;
}

function addTrainingSessionToDailySummary({ mode, total, correct, wrong, words }) {
  const summary = getDailySummary();
  const count = Number(total) || 0;
  summary.total += count;
  summary.reviewCount += count;
  summary.correct += Number(correct) || 0;
  summary.wrong += Number(wrong) || 0;
  addDailyModeCount(summary, mode, count);
  addDailyDifficultWords(summary, words || []);
  saveDailySummary(summary);
  return summary;
}
