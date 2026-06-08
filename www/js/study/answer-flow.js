function renderAnswerWithSpeaker(studyText, meaningText, word) {
  const stats = getWordStatsById(String(word.id));

  // 기본값: 타이핑/카피용
  //  - 큰 글자: 학습 언어
  //  - 작은 글자: 뜻(UI 언어)
  let mainText = studyText || "";
  let smallMeaning = meaningText || "";

  // 🔹 카드 모드일 때만 순서 반전
  //  - 뒷면에서는 "뜻을 크게", "학습 언어를 작게"
  if (SETTINGS.mode === "card") {
    mainText = meaningText || "";
    smallMeaning = studyText || "";
  }

  const readingValue = getStudyReadingValue(word);
  const readingLineHtml = readingValue
    ? '<div class="answer-reading-row"><span class="answer-reading-text">' +
      escapeHtml(readingValue) +
      "</span></div>"
    : "";
  const meaningLineHtml =
    '<div class="answer-meaning-row">' +
    '<span class="answer-meaning-text">' +
    escapeHtml(smallMeaning) +
    "</span>" +
    "</div>";
  const answerSubHtml =
    SETTINGS.mode === "card"
      ? meaningLineHtml + readingLineHtml
      : readingLineHtml + meaningLineHtml;

  DOM.questionDisplay.innerHTML =
    '<span class="answer-text answer-main">' +
    escapeHtml(mainText) +
    "</span>" +
    answerSubHtml +
    '<div class="answer-line answer-actions">' +
    '<button class="icon-btn speaker-icon" id="speakerBtn" type="button" aria-label="발음 듣기"></button>' +
    '<button class="icon-btn info-icon" id="detailBtn" type="button" aria-label="자세히 보기">i</button>' +
    '<button class="icon-btn bookmark-btn" id="bookmarkToggle" type="button" aria-label="단어장에 추가">' +
    (stats.bookmarked ? "★" : "☆") +
    "</button>" +
    "</div>";

  // 힌트 영역 비우기
  if (DOM.hintDisplay) {
    DOM.hintDisplay.textContent = "";
  }

  // 입력 영역 숨기기
  if (DOM.inputArea) {
    DOM.inputArea.style.display = "none";
  }
  if (DOM.answerInput) {
    DOM.answerInput.value = "";
    DOM.answerInput.disabled = true;
  }

  // 발음 버튼
  const btnSpeak = document.getElementById("speakerBtn");
  if (btnSpeak) {
    btnSpeak.addEventListener("click", () => {
      speakStudyText(studyText);
    });
  }

  // 북마크 버튼
  const btnBookmark = document.getElementById("bookmarkToggle");
  if (btnBookmark) {
    btnBookmark.addEventListener("click", () => {
      if (typeof triggerHaptic === "function") {
        triggerHaptic("light");
      }
      toggleBookmark(String(word.id));
    });
  }

  // 디테일 버튼
  const btnDetail = document.getElementById("detailBtn");
  if (btnDetail) {
    btnDetail.addEventListener("click", () => openWordDetail(word));
  }

  updateTtsUiState();
}

// ✅ 정답 처리 공통
function applyAnswerResult(isCorrect, item) {
  const pack = t() || {};
  const word = item.word;
  const studyText = buildStudyForm(word);
  const meaningText = getMeaning(word);

  item._sessionAnswerCorrect = isCorrect === true;

  // 피드백 텍스트
  if (DOM.feedback) {
    if (SETTINGS.mode === "card") {
      DOM.feedback.textContent = "";
    } else {
      DOM.feedback.textContent = isCorrect
        ? pack.correct || "정답입니다!"
        : pack.incorrect || "아쉽네요.";
    }
  }

  // 카드 이펙트 + 정답 영역 + 발음
  applyAnswerEffect(isCorrect);
  renderAnswerWithSpeaker(studyText, meaningText, word);
  speakStudyText(studyText);

  setPhase("ANSWER");
  updateTypingHintUi();

  if (DOM.skipBtn) {
    DOM.skipBtn.style.display = "none";
  }

  // ==========================
  //   1) 훈련소 모드일 때
  // ==========================
  if (TRAINING_MODE_ACTIVE) {
    // 난이도 버튼 숨김
    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "none";
    }

    // 메인 버튼은 항상 "다음"
    if (DOM.mainBtn) {
      DOM.mainBtn.style.display = "inline-block";
      DOM.mainBtn.textContent = pack.next || "다음";
    }

    // 졸업 버튼 노출 조건
    if (DOM.masteryMainBtn) {
      const isMix = TRAINING_MODE_KIND === "mix";
      // mix 모드에서 0=카드, 1=카피, 2=타이핑(마지막 스텝)
      const isLastTypingStep = isMix && TRAINING_MIX_STEP === 2;

      // mix가 아니면 항상 보이고,
      // mix면 마지막 타이핑 스텝에서만 보이게
      const shouldShowMastery = !isMix || isLastTypingStep;

      if (shouldShowMastery) {
        const lang = CURRENT_LANG || "ko";
        DOM.masteryMainBtn.style.display = "inline-block";
        DOM.masteryMainBtn.disabled = false;
        DOM.masteryMainBtn.textContent = lang === "en" ? "Mastered" : "졸업";
        DOM.masteryMainBtn.classList.remove("mastery-done");
      } else {
        DOM.masteryMainBtn.style.display = "none";
      }
    }

    // ==========================
    //   2) 일반 학습 모드일 때
    // ==========================
  } else {
    // 일반 학습에서는 졸업 버튼 숨기고
    if (DOM.masteryMainBtn) {
      DOM.masteryMainBtn.style.display = "none";
    }
    // 난이도 버튼 사용
    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "block";
    }
    updateRatingButtonsForHint(item);
    // 메인 버튼은 숨김 (지금 구조 유지)
    if (DOM.mainBtn) {
      DOM.mainBtn.style.display = "none";
    }
  }
}

// 타이핑 모드 채점
function evaluateTypingAnswer(userInput, item) {
  const word = item.word;
  const pack = t() || {};
  const trimmed = (userInput || "").replace(/\s+/g, " ").trim();

  if (!trimmed) {
    if (DOM.feedback) {
      DOM.feedback.textContent = pack.type_answer || "정답을 입력해 주세요.";
    }
    if (DOM.answerInput) {
      focusInputWithoutScroll(DOM.answerInput);
    }
    return "retry";
  }

  const targetLang = SETTINGS.studyLang || "de";
  const form = getFormForLang(word, targetLang);
  const baseRaw = (form.base || form.word || "").trim();

  // 정답 기준 텍스트가 없으면 그냥 통과
  if (!baseRaw) {
    return "correct";
  }

  // ==============================
  //   1) 관사 보정이 필요 없는 언어일 때
  // ==============================
  if (targetLang !== "de") {
    const candidates = baseRaw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const answerLower = trimmed.toLowerCase();

    // 콤마로 나뉜 것 중 하나와 정확히 일치하면 정답
    if (candidates.some((c) => answerLower === c.toLowerCase())) {
      return "correct";
    }

    // 전체 그대로 친 경우도 정답 인정
    if (answerLower === baseRaw.toLowerCase()) {
      return "correct";
    }

    return "wrong";
  }

  // ==============================
  //   2) 관사가 정답 앞에 붙는 언어일 때
  // ==============================
  const article = form.article || "";
  const inputNorm = trimmed;

  // ---- 작은 헬퍼: 선택 영역 ----
  function selectAll() {
    if (!DOM.answerInput) return;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(0, inputNorm.length);
  }

  function selectArticleOnly() {
    if (!DOM.answerInput) return;
    const firstSpaceIdx = inputNorm.indexOf(" ");
    const end = firstSpaceIdx === -1 ? inputNorm.length : firstSpaceIdx;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(0, end);
  }

  function selectNounOnly() {
    if (!DOM.answerInput) return;
    const firstSpaceIdx = inputNorm.indexOf(" ");
    if (firstSpaceIdx === -1) {
      // 공백이 없으면 그냥 전체 선택
      selectAll();
      return;
    }
    const start = firstSpaceIdx + 1;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(start, inputNorm.length);
  }

  // ==============================
  //   2-1) 관사 없는 단어 (동사, 형용사 등)
  // ==============================
  if (!article) {
    const rawPos = word.pos || "";
    const isNounLike = /^(noun|n|subst)/i.test(rawPos);

    const firstChar = baseRaw[0] || "";
    const startsUpper = /^[A-ZÄÖÜ]/.test(firstChar);

    const sameIgnoreCase = inputNorm.toLowerCase() === baseRaw.toLowerCase();
    const exact = inputNorm === baseRaw;

    // 🔹 명사 + 대문자 시작(고유명사 격) → 첫 글자 대문자 필수
    if (isNounLike && startsUpper) {
      if (!sameIgnoreCase) {
        if (!item._properNounWrongOnce) {
          item._properNounWrongOnce = true;
          if (DOM.feedback) {
            DOM.feedback.textContent =
              pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
          }
          selectAll();
          return "retry";
        }
        return "wrong";
      }

      if (sameIgnoreCase && !exact) {
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.proper_capitalization ||
            pack.noun_capitalization ||
            "명사는 첫 글자를 대문자로 써 주세요.";
        }
        selectAll();
        return "retry";
      }

      return "correct";
    }

    // 🔹 동사/형용사/부사 등: 소문자 기준
    if (!sameIgnoreCase) {
      if (!item._nonNounWrongOnce) {
        item._nonNounWrongOnce = true;
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
        }
        selectAll();
        return "retry";
      }
      return "wrong";
    }

    if (sameIgnoreCase && !exact) {
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.verb_lowercase || "동사·형용사·부사 등은 소문자로 써 주세요.";
      }
      selectAll();
      return "retry";
    }

    return "correct";
  }

  // ==============================
  //   2-2) 관사 있는 명사 처리
  //   → 정답 기준: "관사 소문자 + 명사 대문자"
  // ==============================
  const expected = `${article} ${baseRaw}`;

  const parts = inputNorm.split(" ");
  const inputArticle = parts[0] || "";
  const inputRest = parts.slice(1).join(" ");

  const articleExact = inputArticle === article; // ✅ 대소문자까지 완전 일치해야 정답
  const articleIgnoreCase = inputArticle.toLowerCase() === article.toLowerCase();

  const restSameIgnoreCase = inputRest.toLowerCase() === baseRaw.toLowerCase();
  const restExact = inputRest === baseRaw;

  // ---- 1) 관사부터 체크 ----
  if (!articleExact) {
    // 형태는 맞는데 대소문자만 틀린 경우 (예: "Der Hund")
    if (articleIgnoreCase) {
      if (!item._articleCaseOnce) {
        item._articleCaseOnce = true;
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.article_lowercase ||
            "관사는 항상 소문자로 써 주세요 (der/die/das).";
        }
        selectArticleOnly();
        return "retry";
      }
      return "wrong";
    }

    // 아예 틀린 관사(den, dem, dir 등)일 때
    if (!item._articleWrongOnce) {
      item._articleWrongOnce = true;
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.article_hint || "관사를 다시 확인해 주세요.";
      }
      selectArticleOnly();
      return "retry";
    }
    return "wrong";
  }

  // ---- 2) 관사는 정확 → 명사 철자/대문자 체크 ----
  if (!restSameIgnoreCase) {
    if (!item._nounSpellingOnce) {
      item._nounSpellingOnce = true;
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
      }
      selectNounOnly();
      return "retry";
    }
    return "wrong";
  }

  if (restSameIgnoreCase && !restExact) {
    if (DOM.feedback) {
      DOM.feedback.textContent =
        pack.noun_capitalization || "명사는 첫 글자를 대문자로 써 주세요.";
    }
    selectNounOnly();
    return "retry";
  }

  // 관사(소문자) + 명사(대문자)까지 완벽
  return "correct";
}

function advanceTrainingStep() {
  const pack = t() || {};
  if (!TRAINING_MODE_ACTIVE) return;

  // ========= 1) 깜지 모드 =========
  if (TRAINING_MODE_KIND === "cram") {
    const words = TRAINING_CRAM_WORDS || [];

    // 안전장치: 단어가 없으면 종료
    if (!words.length) {
      TRAINING_MODE_ACTIVE = false;
      TRAINING_MODE_KIND = "none";
      TRAINING_CRAM_WORDS = [];
      TRAINING_CRAM_INDEX = 0;
      TRAINING_CRAM_REPEAT_INDEX = 0;
      TRAINING_CRAM_REPEAT_TOTAL = 3;

      showReadyState();
      showView("training");
      if (DOM.trainingSummary) {
        DOM.trainingSummary.style.color = "#16a34a";
        DOM.trainingSummary.textContent = trKey(
          "training.done_simple",
          "훈련 세션이 종료되었습니다.",
        );
      }
      return;
    }

    // 아직 이 단어에서 반복 남았을 때 → 같은 단어로 다음 단계 고스트
    if (TRAINING_CRAM_REPEAT_INDEX < TRAINING_CRAM_REPEAT_TOTAL - 1) {
      TRAINING_CRAM_REPEAT_INDEX += 1;
      showCramQuestion();
      return;
    }

    // 이 단어 깜지 완료 → 다음 단어로
    TRAINING_CRAM_REPEAT_INDEX = 0;
    TRAINING_CRAM_INDEX += 1;
    APP_STATE.completed = TRAINING_CRAM_INDEX;

    // 모든 단어 끝났으면 종료
    if (TRAINING_CRAM_INDEX >= words.length) {
      completeCramTrainingSession();
      return;
    }

    // 다음 단어 깜지 시작
    showCramQuestion();
    return;
  }

  // ========= 2) Mix 모드: 카드 → 카피 → 타이핑 =========
  if (TRAINING_MODE_KIND === "mix") {
    const words = TRAINING_MIX_WORDS || [];
    if (!words.length) {
      TRAINING_MODE_ACTIVE = false;
      TRAINING_MODE_KIND = "none";
      TRAINING_MIX_WORDS = [];
      TRAINING_MIX_INDEX = 0;
      TRAINING_MIX_STEP = 0;

      showReadyState();
      showView("training");
      if (DOM.trainingSummary) {
        DOM.trainingSummary.style.color = "#e11d48";
        DOM.trainingSummary.textContent =
          pack.training_no_words || "훈련할 단어가 없습니다.";
      }
      return;
    }

    if (TRAINING_MIX_STEP === 0) {
      // 카드 → 카피
      TRAINING_MIX_STEP = 1;
    } else if (TRAINING_MIX_STEP === 1) {
      // 카피 → 타이핑
      TRAINING_MIX_STEP = 2;
    } else {
      // 타이핑 끝 → 이 단어 완료
      TRAINING_MIX_INDEX += 1;
      TRAINING_MIX_STEP = 0;

      // 모든 단어 완료
      if (TRAINING_MIX_INDEX >= words.length) {
        TRAINING_MODE_ACTIVE = false;
        TRAINING_MODE_KIND = "none";
        TRAINING_MIX_WORDS = [];
        TRAINING_MIX_INDEX = 0;
        TRAINING_MIX_STEP = 0;

        showReadyState();
        showView("training");

        if (DOM.trainingSummary) {
          DOM.trainingSummary.style.color = "#16a34a";
          DOM.trainingSummary.textContent =
            pack.training_done ||
            `훈련 완료: ${words.length}개 단어를 카드·따라쓰기·타이핑으로 연습했습니다.`;
        }
        return;
      }
    }

    // 진행도: "완료한 단어 수" 기준
    APP_STATE.completed = TRAINING_MIX_INDEX;
    APP_STATE.totalTarget = words.length;

    // 스텝에 맞게 모드 전환
    if (TRAINING_MIX_STEP === 0) {
      SETTINGS.mode = "card";
    } else if (TRAINING_MIX_STEP === 1) {
      SETTINGS.mode = "copy";
    } else {
      SETTINGS.mode = "typing";
    }
    saveSettings();
    hydrateSettingsToUI();
    applyTranslations();

    const currentWord = words[TRAINING_MIX_INDEX];
    const st = getWordState(currentWord);
    APP_STATE.queue = [
      {
        word: currentWord,
        state: st,
        isNew: st.isNew,
      },
    ];

    updateProgressBar();
    showNextQuestion();
    return;
  }

  // ========= 3) 일반 typing / copy 훈련 =========
  if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
    TRAINING_MODE_ACTIVE = false;
    TRAINING_MODE_KIND = "none";
    TRAINING_MIX_WORDS = [];
    TRAINING_MIX_INDEX = 0;
    TRAINING_MIX_STEP = 0;

    showReadyState();
    showView("training");
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#16a34a";
      DOM.trainingSummary.textContent = trKey(
        "training.done_simple",
        "훈련 세션이 종료되었습니다.",
      );
    }
    return;
  }

  APP_STATE.queue.shift();
  APP_STATE.completed = (APP_STATE.completed || 0) + 1;

  if (APP_STATE.queue.length === 0) {
    TRAINING_MODE_ACTIVE = false;
    TRAINING_MODE_KIND = "none";
    TRAINING_MIX_WORDS = [];
    TRAINING_MIX_INDEX = 0;
    TRAINING_MIX_STEP = 0;

    showReadyState();
    showView("training");
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#16a34a";
      DOM.trainingSummary.textContent = trKey(
        "training.done_simple",
        "훈련 세션이 종료되었습니다.",
      );
    }
    return;
  }

  updateProgressBar();
  showNextQuestion();
}

function handleConfirm() {
  // 🔹 깜지(훈련소 cram) 모드는 여기서 전부 처리하고 나머지 로직은 건너뜀
  if (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram") {
    handleCramSubmit();
    return;
  }

  if (WRONG_PRACTICE_ACTIVE && APP_STATE.phase === "ANSWER") {
    advanceWrongPracticeStep();
    return;
  }

  // 🔻 여기부터는 기존 코드 그대로 유지
  // 🔹 훈련소에서 정답 화면(ANSWER)일 때는 "다음" 버튼으로 스텝/단어 이동
  if (TRAINING_MODE_ACTIVE && APP_STATE.phase === "ANSWER") {
    advanceTrainingStep();
    return;
  }

  if (APP_STATE.phase === "READY") {
    buildQueue();
    if (APP_STATE.totalTarget === 0) {
      const pack = t() || {};
      DOM.feedback.textContent =
        pack.no_words_today || "오늘은 학습할 단어가 없습니다.";
      return;
    }
    logAnalyticsEvent("start_session", {
      ...getSessionAnalyticsParams(),
      target_count: APP_STATE.totalTarget,
    });
    recordAttendanceForStudyStart();
    showNextQuestion();
    return;
  }

  if (APP_STATE.phase !== "QUESTION") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  if (SETTINGS.mode === "card") {
    applyAnswerResult(true, item);
    return;
  }
  // 따라쓰기 모드
  if (SETTINGS.mode === "copy") {
    const pack = t() || {};
    const word = item.word;
    const speakText = buildStudyForm(word);

    const rawInput = DOM.answerInput.value || "";
    const userInput = rawInput.trim();

    if (!userInput) {
      DOM.feedback.textContent = pack.type_answer || "정답을 입력해 주세요.";
      focusInputWithoutScroll(DOM.answerInput);
      return;
    }

    let target = "";
    if (DOM.copyGhost && DOM.copyGhost.textContent) {
      target = DOM.copyGhost.textContent.trim();
    } else {
      target = speakText.trim();
    }

    if (userInput !== target) {
      // 🔹 따라쓰기 오타: 약한 피드백 + 카드 빨간색
      //    (applyAnswerEffect(false)가 에러 햅틱 + card-wrong 클래스 처리)
      applyAnswerEffect(false);

      DOM.feedback.textContent = trKey(
        "study.copy_check_spelling",
        "철자를 다시 확인하세요.",
      );

      focusInputWithoutScroll(DOM.answerInput);
      return;
    }

    renderAnswerWithSpeaker(speakText, getMeaning(word), word);
    if (DOM.feedback) {
      DOM.feedback.textContent = pack.copy_ok || pack.correct || "정확합니다";
    }

    speakStudyText(speakText);

    applyAnswerEffect(true);

    setPhase("ANSWER");
    updateTypingHintUi();
    updateRatingButtonsForHint(null);
    const isPracticeFlow = TRAINING_MODE_ACTIVE || WRONG_PRACTICE_ACTIVE;
    DOM.ratingArea.style.display = isPracticeFlow ? "none" : "block";
    const shouldShowPracticeNext =
      WRONG_PRACTICE_ACTIVE ||
      (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram");
    DOM.mainBtn.style.display = shouldShowPracticeNext ? "inline-block" : "none";
    if (shouldShowPracticeNext) {
      DOM.mainBtn.textContent = pack.next || "다음";
    }
    DOM.skipBtn.style.display = "none";
    return;
  }

  // 타이핑 모드
  const userInput = DOM.answerInput.value;
  const result = evaluateTypingAnswer(userInput, item);

  if (result === "retry") {
    // 🔹 첫 번째 틀림(재도전 구간)에서는 약한 햅틱만 한 번
    if (typeof triggerHaptic === "function") {
      triggerHaptic("light");
    }
    return;
  }

  if (result === "wrong") {
    // 🔹 완전 오답 확정일 때만 오답 카운트 + 강한 햅틱 (applyAnswerResult → applyAnswerEffect(false))
    incrementWrongAttempt(item.word.id);
  }

  const isCorrect = result === "correct";
  applyAnswerResult(isCorrect, item);
}

function handleSkip() {
  if (APP_STATE.phase !== "QUESTION") return;
  if (SETTINGS.mode !== "typing") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  incrementWrongAttempt(item.word.id);
  applyAnswerResult(false, item);
}

function recordSessionResult(item, rating) {
  if (!item || !item.word) return;

  if (rating === "hard") {
    APP_STATE.sessionHardCount = (APP_STATE.sessionHardCount || 0) + 1;
  } else if (rating === "normal") {
    APP_STATE.sessionNormalCount = (APP_STATE.sessionNormalCount || 0) + 1;
  } else if (rating === "easy") {
    APP_STATE.sessionEasyCount = (APP_STATE.sessionEasyCount || 0) + 1;
  }

  const wasHardForSession = item._sessionAnswerCorrect === false || rating === "hard";
  if (wasHardForSession) {
    const id = String(item.word.id);
    const existing = (APP_STATE.sessionWrongWords || []).some(
      (word) => String(word.id) === id,
    );
    if (!existing) {
      APP_STATE.sessionWrongWords.push(item.word);
    }
  }

  if (APP_STATE.sessionMode === "typing") {
    if (item._sessionAnswerCorrect === false) {
      APP_STATE.sessionWrongCount = (APP_STATE.sessionWrongCount || 0) + 1;
    } else {
      APP_STATE.sessionCorrectCount = (APP_STATE.sessionCorrectCount || 0) + 1;
    }
  }
}

/**
 * 난이도 평가 버튼 클릭
 */
function handleRating(rating) {
  if (APP_STATE.phase !== "ANSWER") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  if (
    rating === "easy" &&
    SETTINGS.mode === "typing" &&
    item._typingHintUsed === true
  ) {
    updateRatingButtonsForHint(item);
    return;
  }

  if (typeof triggerHaptic === "function") {
    triggerHaptic("light");
  }

  const today = nowDay();
  const prevState = item.state || {
    id: item.word.id,
    level: 0,
    lastReviewed: 0,
    nextDue: 0,
    isNew: item.isNew,
  };

  let level = prevState.level || 0;

  if (rating === "hard") {
    level = Math.max(1, level);
  } else if (rating === "normal") {
    level = Math.min(SRS_LEVELS.length - 1, level + 1);
  } else if (rating === "easy") {
    level = Math.min(SRS_LEVELS.length - 1, level + 2);
  }

  const interval = SRS_INTERVALS[level] || 1;
  const nextDue = today + interval;

  const newState = {
    id: prevState.id,
    level,
    lastReviewed: today,
    nextDue,
    isNew: false,
  };
  saveWordState(newState);

  const stats = getStats();
  stats.totalReviewed += 1;

  if (item.isNew) {
    stats.newLearned += 1;
    APP_STATE.newCount += 1;
  } else {
    APP_STATE.reviewCount += 1;
  }
  saveStats(stats);

  recordSessionResult(item, rating);

  const wordId = String(item.word.id);
  setWordStatsById(wordId, (s) => ({
    ...s,
    hardCount: rating === "hard" ? (s.hardCount || 0) + 1 : s.hardCount || 0,
    // 🔹 hard 선택했을 때만 최근 시각 갱신
    lastHardAt: rating === "hard" ? Date.now() : s.lastHardAt || 0,
    level,
  }));

  if (APP_STATE.queue.length > 0) {
    APP_STATE.queue.shift();
  }
  APP_STATE.completed += 1;

  updateCefrProgress();
  updateProgressBar();
  renderWordbookIfNeeded();

  if (APP_STATE.queue.length === 0) {
    showEndStats();
  } else {
    showNextQuestion();
  }
}
