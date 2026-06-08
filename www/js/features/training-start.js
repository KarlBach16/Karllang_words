// Training mode entry and word-pool selection.

function handleTrainingStart() {
  const pack = t() || {};
  const selectedTrainingMode =
    DOM.trainingModeSelect && DOM.trainingModeSelect.value
      ? DOM.trainingModeSelect.value
      : "cram";

  if (selectedTrainingMode === "word_drop") {
    startWordDrop();
    return;
  }

  const useMistakes =
    DOM.trainingSourceMistakes &&
    DOM.trainingSourceMistakes.classList.contains("is-on");
  const useHard =
    DOM.trainingSourceHard &&
    DOM.trainingSourceHard.classList.contains("is-on");
  const useBookmark =
    DOM.trainingSourceBookmark &&
    DOM.trainingSourceBookmark.classList.contains("is-on");

  // 🔴 체크박스 전부 해제 상태
  if (!useMistakes && !useHard && !useBookmark) {
    const msg = trKey(
      "training_select_target_warning",
      "훈련할 대상을 하나 이상 선택해 주세요.",
    );

    if (DOM.trainingSummary) {
      DOM.trainingSummary.textContent = msg;
      DOM.trainingSummary.style.color = "#e11d48"; // 경고색 유지
    } else {
      alert(msg);
    }
    return;
  }

  // 기본 상태로 리셋
  if (DOM.trainingSummary) {
    DOM.trainingSummary.style.color = "#6b7280";
    DOM.trainingSummary.textContent = "";
  }

  // 🔹 1) 통계 + 단어 맵
  const allStats = getWordStatsAll(); // { id: { ... } }
  const allWords = getAllWords();

  const mapById = {};
  allWords.forEach((w) => {
    // 현재 학습 언어에 form 있는 단어만 대상으로
    if (belongsToCurrentStudyLang(w)) {
      mapById[String(w.id)] = w;
    }
  });

  // 🔹 2) 최근성 + 점수 기준으로 후보 뽑기
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const RECENT_DAYS = 30; // 최근 30일
  const RECENT_MS = RECENT_DAYS * ONE_DAY;

  // 기본 상수(상한선): 드롭다운 없을 때 fallback
  const MAX_TRAINING_WORDS = 50;

  const now = Date.now();
  const items = [];

  for (const [id, rawStats] of Object.entries(allStats)) {
    const word = mapById[id];
    if (!word) continue;

    const stats = {
      hardCount: rawStats.hardCount || 0,
      wrongAttempts: rawStats.wrongAttempts || 0,
      bookmarked: !!rawStats.bookmarked,
      lastWrongAt: rawStats.lastWrongAt || 0,
      lastHardAt: rawStats.lastHardAt || 0,
    };

    const hasWrong = stats.wrongAttempts > 0;
    const hasHard = stats.hardCount > 0;
    const isBookmarked = stats.bookmarked;

    // 🔹 1) 날짜가 있는 경우 → 진짜로 최근 30일만
    const hasRecentMistake =
      (stats.lastWrongAt && now - stats.lastWrongAt <= RECENT_MS) ||
      (stats.lastHardAt && now - stats.lastHardAt <= RECENT_MS) ||
      (!stats.lastWrongAt && !stats.lastHardAt && (hasWrong || hasHard));

    let include = false;

    // 틀린 단어: 최근 + 오답 존재
    if (useMistakes && hasWrong && hasRecentMistake) {
      include = true;
    }
    // hard 단어: 최근 + hard 존재
    if (useHard && hasHard && hasRecentMistake) {
      include = true;
    }
    // 북마크: 최근성과 상관없이 항상 포함
    if (useBookmark && isBookmarked) {
      include = true;
    }

    if (!include) continue;

    const st = getWordState(word);

    // 🔹 충분히 익힌 단어(level 높음)는 기본적으로 제외
    //    단, 북마크는 예외로 그대로 포함
    if (!isBookmarked && st.level >= 3) {
      continue;
    }

    // 점수: hard + wrong (많이 문제된 애일수록 점수↑)
    const score = stats.hardCount + stats.wrongAttempts;

    items.push({
      word,
      state: st,
      stats,
      score,
    });
  }

  // 🔴 필터 후 아무것도 없으면 안내 메시지
  if (items.length === 0) {
    const msg =
      pack.training_no_match || "No words match the selected conditions.";

    if (DOM.trainingSummary) {
      DOM.trainingSummary.textContent = msg;
      DOM.trainingSummary.style.color = "#e11d48";
    } else {
      alert(msg);
    }
    return;
  }

  // 🔹 3) 점수 기준 정렬 (score ↓, 그다음 최근에 틀린 순)
  items.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;

    const aTime = Math.max(a.stats.lastWrongAt || 0, a.stats.lastHardAt || 0);
    const bTime = Math.max(b.stats.lastWrongAt || 0, b.stats.lastHardAt || 0);
    return bTime - aTime;
  });

  // 🔹 4) 드롭다운에서 "훈련 단어 수" 읽기 (없으면 기본 50개)
  let maxTrainingWords = MAX_TRAINING_WORDS;
  if (DOM.trainingCountSelect && DOM.trainingCountSelect.value) {
    const v = parseInt(DOM.trainingCountSelect.value, 10);
    if (!Number.isNaN(v) && v > 0) {
      maxTrainingWords = v;
    }
  }

  const selectedItems = items.slice(0, maxTrainingWords);

  // 🔹 5) 훈련 모드 → STUDY 모드 + KIND 매핑 (현재는 깜지 전용)
  let trainingMode = "copy";
  let modeKind = "cram";

  if (DOM.trainingModeSelect && DOM.trainingModeSelect.value) {
    const v = DOM.trainingModeSelect.value;

    if (v === "cram") {
      trainingMode = "copy"; // 깜지는 copy UI 재사용
      modeKind = "cram";
    } else if (v === "mix") {
      // 혹시 예전 localStorage 값이 'mix'로 남아 있어도 강제로 깜지로
      trainingMode = "copy";
      modeKind = "cram";
    } else {
      // 그 외 값도 전부 깜지로 통일
      trainingMode = "copy";
      modeKind = "cram";
    }
  }

  // ✅ 여기에서 한 번 "자, 드가자" 햅틱
  if (typeof triggerHaptic === "function") {
    triggerHaptic("medium");
  }

  // 🔹 6) 훈련 플래그를 먼저 세팅 (중요: 학습요약 숨김이 이 타이밍에 먹어야 함)
  TRAINING_MODE_ACTIVE = true;
  TRAINING_MODE_KIND = modeKind;

  // 그 다음에 설정/UI/번역 적용
  SETTINGS.mode = trainingMode;
  saveSettings();
  hydrateSettingsToUI();
  applyTranslations();

  // (보험) 최종 상태에서 요약 숨김 다시 강제
  updateStudyStartSummary();

  TRAINING_MIX_WORDS = [];
  TRAINING_MIX_INDEX = 0;
  TRAINING_MIX_STEP = 0;

  TRAINING_CRAM_WORDS = [];
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_INDEX = 0;
  TRAINING_CRAM_REPEAT_TOTAL = 3; // 깜지는 각 단어당 3회 고정

  // 🔹 7) 현재는 깜지 모드만 사용
  const words = selectedItems.map((item) => item.word);
  TRAINING_CRAM_WORDS = words;
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_TOTAL = 3;
  TRAINING_CRAM_REPEAT_INDEX = 0;

  APP_STATE.totalTarget = words.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  APP_STATE.sessionWrongWords = [];

  logAnalyticsEvent("start_training_session", {
    ...getTrainingAnalyticsParams("cram", {
      target_count: words.length,
    }),
    repeat_count: TRAINING_CRAM_REPEAT_TOTAL,
  });

  if (DOM.trainingSummary) {
    DOM.trainingSummary.style.color = "#6b7280";
    DOM.trainingSummary.textContent =
      `깜지 모드: ${words.length}개 단어를 ` +
      `${TRAINING_CRAM_REPEAT_TOTAL}회씩 따라쓰기 합니다.`;
  }

  showView("study");
  showCramQuestion();
  return;
}

function belongsToCurrentStudyLang(word) {
  if (!word) return false;
  const study = SETTINGS.studyLang || "de";

  // 새 스키마: 원본 학습 언어는 lemma, 나머지는 meanings를 확인한다.
  if (study === "de") {
    return !!word.lemma;
  }

  // 다른 언어: meanings에 해당 언어 있는지 확인
  return !!(word.meanings && word.meanings[study]);
}
