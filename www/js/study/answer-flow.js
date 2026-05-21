function renderAnswerWithSpeaker(fullGerman, meaningText, word) {
  const stats = getWordStatsById(String(word.id));

  // 기본값: 타이핑/카피용
  //  - 큰 글자: 독일어
  //  - 작은 글자: 뜻(UI 언어)
  let mainText = fullGerman || "";
  let smallMeaning = meaningText || "";

  // 🔹 카드 모드일 때만 순서 반전
  //  - 앞면에서 이미 독일어를 봤으니
  //  - 뒷면에서는 "뜻을 크게", "독일어를 작게"
  if (SETTINGS.mode === "card") {
    mainText = meaningText || "";
    smallMeaning = fullGerman || "";
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
      // 카드 모드든 아니든 독일어를 읽어야 하니 fullGerman 사용
      speakGerman(fullGerman);
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
  const german = buildGermanForm(word);
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
  renderAnswerWithSpeaker(german, meaningText, word);
  speakGerman(german);

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
  //   1) 독일어가 아닐 때 (예: 영어)
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
  //   2) 독일어일 때
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
