// Word Drop training mode. Refactor-only extraction from script.js.

const WORD_DROP_STATE = {
  active: false,
  pendingStart: false,
  rafId: null,
  startTimerId: null,
  countdownTimerId: null,
  countdownValue: 0,
  currentWord: null,
  currentText: "",
  yPosition: 0,
  score: 0,
  targetCount: 10,
  completedCount: 0,
  correctCount: 0,
  missedCount: 0,
  lane: 1,
  resolving: false,
  composing: false,
  clearUntil: 0,
  speed: 48,
  startedAt: 0,
  lastFrameAt: 0,
  recentIds: [],
  mistakeWords: [],
  pools: {
    allWords: [],
    mistakeWords: [],
    bookmarkedWords: [],
  },
};

const WORD_DROP_BASE_SPEED = 48;

function getWordDropText(word) {
  return (buildGermanForm(word) || getPrimaryStudyText(word) || "").trim();
}

function dedupeWordsById(words) {
  const seen = new Set();
  const result = [];
  words.forEach((word) => {
    if (!word || word.id == null) return;
    const id = String(word.id);
    if (seen.has(id)) return;
    seen.add(id);
    result.push(word);
  });
  return result;
}

function getNormalizedCefrLevel(word) {
  const level = (word && word.cefr ? word.cefr : "")
    .toString()
    .trim()
    .toUpperCase();
  return ["A1", "A2", "B1", "B2"].includes(level) ? level : "";
}

function getWordDropNormalLevels(allWords, statsById) {
  const selected = (SETTINGS.newWordCefr || "all").toString().toUpperCase();
  const levels = new Set();

  if (["A1", "A2", "B1", "B2"].includes(selected)) {
    levels.add(selected);
  }

  const studiedCountByLevel = {};
  const recentReviewedByLevel = {};

  allWords.forEach((word) => {
    const cefr = getNormalizedCefrLevel(word);
    if (!cefr) return;

    const state = getWordState(word);
    const stats = statsById[String(word.id)] || {};
    const totalViews = stats.totalViews || 0;
    const studied =
      state.isNew === false ||
      (state.lastReviewed || 0) > 0 ||
      totalViews > 0 ||
      (stats.level || 0) > 0;

    if (!studied) return;

    studiedCountByLevel[cefr] =
      (studiedCountByLevel[cefr] || 0) + Math.max(1, totalViews);

    if (state.lastReviewed) {
      recentReviewedByLevel[cefr] = Math.max(
        recentReviewedByLevel[cefr] || 0,
        state.lastReviewed,
      );
    }
  });

  const mostStudied = Object.entries(studiedCountByLevel).sort(
    (a, b) => b[1] - a[1],
  )[0];
  if (mostStudied) {
    levels.add(mostStudied[0]);
  }

  const mostRecent = Object.entries(recentReviewedByLevel).sort(
    (a, b) => b[1] - a[1],
  )[0];
  if (mostRecent) {
    levels.add(mostRecent[0]);
  }

  if (levels.size === 0) {
    levels.add("A1");
  }

  return levels;
}

function buildWordDropPools() {
  const statsById = getWordStatsAll();
  const allWords = dedupeWordsById(
    getAllWords()
      .filter((word) => belongsToCurrentStudyLang(word))
      .filter((word) => getWordDropText(word).length > 0),
  );
  const normalLevels = getWordDropNormalLevels(allWords, statsById);
  const normalWords = allWords.filter((word) =>
    normalLevels.has(getNormalizedCefrLevel(word)),
  );

  const mistakeWords = [];
  const bookmarkedWords = [];

  allWords.forEach((word) => {
    const stats = statsById[String(word.id)] || {};
    if ((stats.wrongAttempts || 0) > 0) {
      mistakeWords.push(word);
    }
    if (stats.bookmarked) {
      bookmarkedWords.push(word);
    }
  });

  return {
    allWords,
    normalWords: normalWords.length > 0 ? normalWords : allWords,
    mistakeWords: dedupeWordsById(mistakeWords),
    bookmarkedWords: dedupeWordsById(bookmarkedWords),
  };
}

function pickNonRecent(pool, recentIds) {
  if (!pool || pool.length === 0) return null;
  const recent = new Set((recentIds || []).map((id) => String(id)));
  const filtered = pool.filter((word) => !recent.has(String(word.id)));
  const source = filtered.length > 0 ? filtered : pool;
  return source[Math.floor(Math.random() * source.length)] || null;
}

function pickWordForDrop({
  allWords,
  normalWords,
  mistakeWords,
  bookmarkedWords,
  score,
}) {
  if (!allWords || allWords.length === 0) return null;

  let ratio;
  if (score < 10) {
    ratio = { normal: 0.8, mistake: 0.15, bookmark: 0.05 };
  } else if (score < 30) {
    ratio = { normal: 0.6, mistake: 0.3, bookmark: 0.1 };
  } else {
    ratio = { normal: 0.45, mistake: 0.4, bookmark: 0.15 };
  }

  const r = Math.random();
  let poolType;
  if (r < ratio.mistake) {
    poolType = "mistake";
  } else if (r < ratio.mistake + ratio.bookmark) {
    poolType = "bookmark";
  } else {
    poolType = "normal";
  }

  const fallbackPool =
    normalWords && normalWords.length > 0 ? normalWords : allWords;
  let pool = fallbackPool;
  if (poolType === "mistake" && mistakeWords.length > 0) {
    pool = mistakeWords;
  } else if (poolType === "bookmark" && bookmarkedWords.length > 0) {
    pool = bookmarkedWords;
  }

  return pickNonRecent(pool, WORD_DROP_STATE.recentIds);
}

function updateWordDropHud() {
  if (DOM.wordDropProgressBar) {
    const ratio =
      WORD_DROP_STATE.targetCount > 0
        ? WORD_DROP_STATE.completedCount / WORD_DROP_STATE.targetCount
        : 0;
    const percent = Math.max(0, Math.min(100, ratio * 100));
    DOM.wordDropProgressBar.style.width = `${percent}%`;
  }
}

function getWordDropTargetCount() {
  if (DOM.trainingCountSelect && DOM.trainingCountSelect.value) {
    const value = parseInt(DOM.trainingCountSelect.value, 10);
    if (!Number.isNaN(value) && value > 0) return value;
  }
  return 10;
}

function completeWordDropItem({ missed }) {
  if (WORD_DROP_STATE.resolving) return;
  WORD_DROP_STATE.resolving = true;
  WORD_DROP_STATE.completedCount += 1;
  if (missed) {
    WORD_DROP_STATE.missedCount += 1;
  } else {
    WORD_DROP_STATE.correctCount += 1;
    WORD_DROP_STATE.score += 1;
  }

  updateWordDropHud();

  const finishOrNext = () => {
    WORD_DROP_STATE.resolving = false;
    if (!WORD_DROP_STATE.active) return;

    if (WORD_DROP_STATE.completedCount >= WORD_DROP_STATE.targetCount) {
      endWordDrop();
      return;
    }

    setNextWordDropWord();
  };

  if (missed) {
    playWordDropMissEffect();
    setTimeout(finishOrNext, 90);
  } else {
    playWordDropHitEffect();
    setTimeout(finishOrNext, 130);
  }
}

function focusWordDropInput() {
  if (
    (!WORD_DROP_STATE.active && !WORD_DROP_STATE.pendingStart) ||
    !DOM.wordDropInput
  ) {
    return;
  }
  syncAppViewportHeight();
  DOM.wordDropInput.focus({ preventScroll: true });
}

function setWordDropReadyMessage(text, { counting = false } = {}) {
  if (DOM.wordDropReady) {
    DOM.wordDropReady.classList.add("is-visible");
    DOM.wordDropReady.classList.toggle("is-counting", counting);
  }
  if (DOM.wordDropReadyText) {
    DOM.wordDropReadyText.textContent = text;
  }
}

function getWordDropTapToStartText() {
  return trKey("word_drop.tap_to_start", "입력창을 터치하세요");
}

function hideWordDropReadyMessage() {
  if (DOM.wordDropReady) {
    DOM.wordDropReady.classList.remove("is-visible", "is-counting");
  }
}

function updateWordDropKeyboardChrome(active) {
  document.body.classList.toggle("word-drop-keyboard-active", !!active);
}

function beginWordDropGameplay() {
  if (!WORD_DROP_STATE.pendingStart) return;

  WORD_DROP_STATE.pendingStart = false;
  WORD_DROP_STATE.active = true;
  WORD_DROP_STATE.startedAt = Date.now();
  WORD_DROP_STATE.lastFrameAt = 0;
  hideWordDropReadyMessage();
  updateWordDropKeyboardChrome(true);

  setNextWordDropWord();
  WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
}

function startWordDropCountdown() {
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) return;

  WORD_DROP_STATE.countdownValue = 3;
  updateWordDropKeyboardChrome(true);
  setWordDropReadyMessage(String(WORD_DROP_STATE.countdownValue), {
    counting: true,
  });

  WORD_DROP_STATE.countdownTimerId = setInterval(() => {
    if (!WORD_DROP_STATE.pendingStart) {
      clearInterval(WORD_DROP_STATE.countdownTimerId);
      WORD_DROP_STATE.countdownTimerId = null;
      return;
    }

    WORD_DROP_STATE.countdownValue -= 1;
    if (WORD_DROP_STATE.countdownValue > 0) {
      setWordDropReadyMessage(String(WORD_DROP_STATE.countdownValue), {
        counting: true,
      });
      return;
    }

    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
    syncAppViewportHeight();
    beginWordDropGameplay();
  }, 650);
}

function prepareWordDropInputFocus() {
  if (!WORD_DROP_STATE.pendingStart || !DOM.wordDropInput) return;
  syncAppViewportHeight();
}

function cancelWordDropCountdown() {
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) {
    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
  }
  WORD_DROP_STATE.countdownValue = 0;
  updateWordDropKeyboardChrome(false);
  if (WORD_DROP_STATE.pendingStart && !WORD_DROP_STATE.active) {
    setWordDropReadyMessage(getWordDropTapToStartText());
  }
}

function handleWordDropInputFocus() {
  if (WORD_DROP_STATE.active) {
    updateWordDropKeyboardChrome(true);
    return;
  }
  if (!WORD_DROP_STATE.pendingStart) return;

  updateWordDropKeyboardChrome(true);

  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  WORD_DROP_STATE.startTimerId = setTimeout(() => {
    WORD_DROP_STATE.startTimerId = null;
    syncAppViewportHeight();
    startWordDropCountdown();
  }, 260);
}

function setNextWordDropWord() {
  const word = pickWordForDrop({
    ...WORD_DROP_STATE.pools,
    score: WORD_DROP_STATE.score,
  });

  if (!word) {
    endWordDrop();
    return;
  }

  WORD_DROP_STATE.currentWord = word;
  WORD_DROP_STATE.currentText = getWordDropText(word);
  WORD_DROP_STATE.yPosition = 0;
  WORD_DROP_STATE.lane = Math.floor(Math.random() * 3);
  WORD_DROP_STATE.speed = WORD_DROP_BASE_SPEED;
  WORD_DROP_STATE.recentIds.push(String(word.id));
  WORD_DROP_STATE.recentIds = WORD_DROP_STATE.recentIds.slice(-3);

  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = WORD_DROP_STATE.currentText;
    DOM.wordDropWord.classList.remove("word-drop-hit");
    DOM.wordDropWord.style.left = getWordDropLaneLeft();
    DOM.wordDropWord.style.setProperty("--word-drop-y", "0px");
    DOM.wordDropWord.style.transform = "translate(-50%, 0px)";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
  }
  updateWordDropHud();
  focusWordDropInput();
}

function playWordDropHitEffect() {
  if (!DOM.wordDropWord) return;
  DOM.wordDropWord.classList.remove("word-drop-hit");
  DOM.wordDropWord.style.setProperty(
    "--word-drop-y",
    `${WORD_DROP_STATE.yPosition}px`,
  );
  void DOM.wordDropWord.offsetWidth;
  DOM.wordDropWord.classList.add("word-drop-hit");
}

function playWordDropMissEffect() {
  if (!DOM.wordDropInput) return;
  DOM.wordDropInput.classList.remove("word-drop-input-miss");
  void DOM.wordDropInput.offsetWidth;
  DOM.wordDropInput.classList.add("word-drop-input-miss");
  setTimeout(() => {
    if (DOM.wordDropInput) {
      DOM.wordDropInput.classList.remove("word-drop-input-miss");
    }
  }, 140);
}

function getWordDropLaneLeft() {
  const arenaWidth = DOM.wordDropArena ? DOM.wordDropArena.clientWidth : 360;
  const safeWidth = Math.max(120, arenaWidth - 32);
  const wordWidth = DOM.wordDropWord
    ? Math.min(DOM.wordDropWord.offsetWidth || 0, safeWidth)
    : 0;
  const halfWord = Math.max(40, wordWidth / 2);
  const sidePadding = 12;
  const minCenter = halfWord + sidePadding;
  const maxCenter = arenaWidth - halfWord - sidePadding;

  if (WORD_DROP_STATE.lane === 0) {
    return `${Math.max(arenaWidth * 0.16666, minCenter)}px`;
  }
  if (WORD_DROP_STATE.lane === 2) {
    return `${Math.min(arenaWidth * 0.83333, maxCenter)}px`;
  }
  return "50%";
}

function recordWordDropMiss(word) {
  if (!word || word.id == null) return;

  const exists = WORD_DROP_STATE.mistakeWords.some(
    (item) => String(item.id) === String(word.id),
  );
  if (!exists) {
    WORD_DROP_STATE.mistakeWords.push(word);
  }
}

function formatWordDropResult() {
  const fallback = `정답 ${WORD_DROP_STATE.correctCount} · 놓침 ${WORD_DROP_STATE.missedCount}`;
  const template = trKey("word_drop.result", "");
  if (template && template !== "word_drop.result") {
    return template
      .replace("{correct}", WORD_DROP_STATE.correctCount)
      .replace("{missed}", WORD_DROP_STATE.missedCount);
  }

  const correctLabel = trKey("word_drop.correct", "정답");
  const missedLabel = trKey("word_drop.missed", "놓침");
  if (correctLabel && missedLabel) {
    return `${correctLabel} ${WORD_DROP_STATE.correctCount} · ${missedLabel} ${WORD_DROP_STATE.missedCount}`;
  }
  return fallback;
}

function getComparableWordDropInputValue() {
  if (!DOM.wordDropInput) return "";
  return DOM.wordDropInput.value.trim().normalize("NFC");
}

function getComparableWordDropCurrentText() {
  return (WORD_DROP_STATE.currentText || "").trim().normalize("NFC");
}

function checkWordDropAnswer() {
  if (!WORD_DROP_STATE.active || !DOM.wordDropInput) {
    return false;
  }

  if (WORD_DROP_STATE.clearUntil && Date.now() < WORD_DROP_STATE.clearUntil) {
    DOM.wordDropInput.value = "";
    return false;
  }

  if (WORD_DROP_STATE.resolving) return false;

  const typed = getComparableWordDropInputValue();
  const target = getComparableWordDropCurrentText();
  if (!typed || typed !== target) return false;

  // Korean/Japanese/Chinese IMEs can keep the final character in composition
  // until Enter/Space. If the visible value already matches, accept it now.
  WORD_DROP_STATE.composing = false;
  WORD_DROP_STATE.clearUntil = Date.now() + 260;
  DOM.wordDropInput.value = "";
  requestAnimationFrame(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  });
  setTimeout(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  }, 80);
  setTimeout(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  }, 180);

  speakGerman(WORD_DROP_STATE.currentText);
  completeWordDropItem({ missed: false });
  return true;
}

function handleWordDropInput() {
  checkWordDropAnswer();
}

function scheduleWordDropAnswerCheck() {
  checkWordDropAnswer();
  requestAnimationFrame(checkWordDropAnswer);
  setTimeout(checkWordDropAnswer, 0);
  setTimeout(checkWordDropAnswer, 40);
}

function runWordDropFrame(timestamp) {
  if (!WORD_DROP_STATE.active) return;

  if (!WORD_DROP_STATE.lastFrameAt) {
    WORD_DROP_STATE.lastFrameAt = timestamp;
  }

  const dt = Math.min(40, timestamp - WORD_DROP_STATE.lastFrameAt);
  WORD_DROP_STATE.lastFrameAt = timestamp;

  if (WORD_DROP_STATE.resolving) {
    WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
    return;
  }

  WORD_DROP_STATE.yPosition += (WORD_DROP_STATE.speed * dt) / 1000;

  const arenaHeight = DOM.wordDropArena ? DOM.wordDropArena.clientHeight : 360;
  const wordHeight = DOM.wordDropWord ? DOM.wordDropWord.offsetHeight : 40;
  const bottomLimit = Math.max(80, arenaHeight - wordHeight - 10);

  if (WORD_DROP_STATE.yPosition >= bottomLimit) {
    recordWordDropMiss(WORD_DROP_STATE.currentWord);
    completeWordDropItem({ missed: true });
  } else if (DOM.wordDropWord) {
    DOM.wordDropWord.style.setProperty(
      "--word-drop-y",
      `${WORD_DROP_STATE.yPosition}px`,
    );
    DOM.wordDropWord.style.transform = `translate(-50%, ${WORD_DROP_STATE.yPosition}px)`;
  }

  WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
}

function stopWordDrop() {
  WORD_DROP_STATE.active = false;
  WORD_DROP_STATE.pendingStart = false;
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) {
    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
  }
  if (WORD_DROP_STATE.rafId) {
    cancelAnimationFrame(WORD_DROP_STATE.rafId);
    WORD_DROP_STATE.rafId = null;
  }
  hideWordDropReadyMessage();
  updateWordDropKeyboardChrome(false);
}

function endWordDrop() {
  stopWordDrop();
  document.body.classList.remove("word-drop-active");
  syncAppViewportHeight();
  const dailySummary = addTrainingSessionToDailySummary({
    mode: "word_drop",
    total: WORD_DROP_STATE.completedCount || 0,
    correct: WORD_DROP_STATE.correctCount || 0,
    wrong: WORD_DROP_STATE.missedCount || 0,
    words: WORD_DROP_STATE.mistakeWords || [],
  });
  logAnalyticsEvent("complete_training_session", {
    ...getTrainingAnalyticsParams("word_drop", {
      target_count: WORD_DROP_STATE.targetCount || 0,
    }),
    total_count: WORD_DROP_STATE.completedCount || 0,
    correct_count: WORD_DROP_STATE.correctCount || 0,
    wrong_count: WORD_DROP_STATE.missedCount || 0,
  });

  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = "";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
    DOM.wordDropInput.blur();
    DOM.wordDropInput.style.display = "none";
  }
  if (DOM.wordDropGameOver) {
    DOM.wordDropGameOver.style.display = "flex";
  }
  if (DOM.wordDropFinalScore) {
    DOM.wordDropFinalScore.textContent = formatWordDropResult();
  }
  if (DOM.wordDropMistakes) {
    const words = WORD_DROP_STATE.mistakeWords.slice(0, 8);
    DOM.wordDropMistakes.innerHTML = words.length
      ? words
          .map(
            (word) =>
              `<div>${escapeHtml(getSessionReportWordLabel(word))}</div>`,
          )
          .join("")
      : `<div>${escapeHtml(
          trKey("word_drop.no_missed", "이번 세션에서 놓친 단어가 없습니다."),
        )}</div>`;
  }
  if (DOM.wordDropReviewBtn) {
    DOM.wordDropReviewBtn.style.display =
      WORD_DROP_STATE.mistakeWords.length > 0 ? "inline-block" : "none";
  }
  prepareShareCard(dailySummary);
}

function startWordDrop() {
  const pools = buildWordDropPools();
  if (!pools.allWords.length) {
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#e11d48";
      DOM.trainingSummary.textContent = "Word Drop에 사용할 단어가 없습니다.";
    }
    return;
  }

  stopWordDrop();
  TRAINING_MODE_ACTIVE = false;
  TRAINING_MODE_KIND = "none";

  WORD_DROP_STATE.active = false;
  WORD_DROP_STATE.pendingStart = true;
  WORD_DROP_STATE.countdownValue = 0;
  WORD_DROP_STATE.currentWord = null;
  WORD_DROP_STATE.currentText = "";
  WORD_DROP_STATE.yPosition = 0;
  WORD_DROP_STATE.score = 0;
  WORD_DROP_STATE.targetCount = getWordDropTargetCount();
  WORD_DROP_STATE.completedCount = 0;
  WORD_DROP_STATE.correctCount = 0;
  WORD_DROP_STATE.missedCount = 0;
  WORD_DROP_STATE.lane = 1;
  WORD_DROP_STATE.resolving = false;
  WORD_DROP_STATE.composing = false;
  WORD_DROP_STATE.clearUntil = 0;
  WORD_DROP_STATE.speed = WORD_DROP_BASE_SPEED;
  WORD_DROP_STATE.startedAt = 0;
  WORD_DROP_STATE.lastFrameAt = 0;
  WORD_DROP_STATE.recentIds = [];
  WORD_DROP_STATE.mistakeWords = [];
  WORD_DROP_STATE.pools = pools;

  logAnalyticsEvent("start_training_session", {
    ...getTrainingAnalyticsParams("word_drop", {
      target_count: WORD_DROP_STATE.targetCount || 0,
    }),
  });

  if (DOM.wordDropGameOver) {
    DOM.wordDropGameOver.style.display = "none";
  }
  closeShareCardModal();
  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = "";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
    DOM.wordDropInput.style.display = "";
  }

  showView("wordDrop");
  updateWordDropHud();
  setWordDropReadyMessage(getWordDropTapToStartText());
  prepareWordDropInputFocus();
}
