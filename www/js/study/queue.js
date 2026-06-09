function buildQueue() {
  const today = nowDay();

  let cefrFilter = SETTINGS.newWordCefr;
  if (!cefrFilter || cefrFilter === "" || cefrFilter === null) {
    cefrFilter = "all";
  }
  cefrFilter = cefrFilter.toString().toUpperCase();

  const ALLOWED = ["ALL", "A1", "A2", "B1", "B2"];
  if (!ALLOWED.includes(cefrFilter)) {
    cefrFilter = "ALL";
    SETTINGS.newWordCefr = "all";
    saveSettings();
  }

  const allWords = getAllWords();

  const catFilter = (SETTINGS.newWordCategory || "all")
    .toString()
    .toLowerCase();

  const studyLang = SETTINGS.studyLang || "de";
  let target = parseInt(SETTINGS.goalTyping, 10);
  if (!target || target < 1) {
    target = 5;
  }

  const filterKey = `${studyLang}|${cefrFilter}|${catFilter}|goal:${target}`;
  const storedStudySet = loadStudyWordSet();
  const memoryCacheMatches =
    LAST_STUDY_WORD_IDS &&
    LAST_STUDY_WORD_IDS.length > 0 &&
    LAST_STUDY_META &&
    LAST_STUDY_META.filterKey === filterKey;
  const storedCacheMatches = storedStudySet.filterKey === filterKey;
  const cachedIds = memoryCacheMatches
    ? LAST_STUDY_WORD_IDS
    : storedCacheMatches
    ? storedStudySet.ids
    : [];

  if (!TRAINING_MODE_ACTIVE && cachedIds && cachedIds.length > 0) {
    const byId = {};
    allWords.forEach((w) => {
      if (!w || typeof w.id === "undefined") return;
      byId[String(w.id)] = w;
    });

    const queue = [];
    cachedIds.forEach((id) => {
      const w = byId[id];
      if (!w) return;
      const st = getWordState(w);
      queue.push({
        word: w,
        state: st,
        isNew: !!st.isNew,
      });
    });

    if (queue.length > 0) {
      APP_STATE.queue = queue;
      APP_STATE.totalTarget = queue.length;
      APP_STATE.completed = 0;
      APP_STATE.newCount = 0;
      APP_STATE.reviewCount = 0;
      resetSessionReport();
      LAST_STUDY_WORD_IDS = queue.map((item) => String(item.word.id));
      LAST_STUDY_META = {
        day: storedStudySet.day || today,
        filterKey: storedStudySet.filterKey || filterKey,
      };

      return;
    }

    clearStudyWordSetCache();
  } else if (!TRAINING_MODE_ACTIVE && !storedCacheMatches) {
    clearStudyWordSetCache();
  }

  const filtered = allWords.filter((w) => {
    const wc = (w.cefr || "").toString().trim().toUpperCase();

    if (cefrFilter !== "ALL") {
      if (!wc) return false;
      if (wc !== cefrFilter) return false;
    }

    if (catFilter !== "all") {
      if (!Array.isArray(w.tags) || !w.tags.includes(catFilter)) {
        return false;
      }
    }

    const meaning = getMeaning(w);
    if (!meaning) return false;

    return true;
  });

  const due = [];
  const newWords = [];

  filtered.forEach((w) => {
    const st = getWordState(w);

    if (st.isNew) {
      newWords.push({ word: w, state: st });
    } else if (st.nextDue <= today) {
      due.push({ word: w, state: st });
    }
  });

  due.sort((a, b) => {
    if (a.state.level !== b.state.level) {
      return a.state.level - b.state.level;
    }
    return a.state.nextDue - b.state.nextDue;
  });

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  shuffleArray(newWords);

  const queue = [];

  for (const item of due) {
    if (queue.length >= target) break;
    queue.push({ ...item, isNew: false });
  }

  for (const item of newWords) {
    if (queue.length >= target) break;
    queue.push({ ...item, isNew: true });
  }

  APP_STATE.queue = queue;
  APP_STATE.totalTarget = queue.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  resetSessionReport();

  LAST_STUDY_WORD_IDS = queue.map((item) => String(item.word.id));
  LAST_STUDY_META = {
    day: today,
    filterKey: filterKey,
  };
  saveStudyWordSet(LAST_STUDY_WORD_IDS, LAST_STUDY_META);
}
