function showNextQuestion() {
  // 1. 카드 페이드 아웃 (꿀렁거림 숨기기용)
  if (DOM.mainCard) {
    DOM.mainCard.classList.add("swapping");
  }

  // 0.15초(CSS 시간) 뒤에 내용 교체하고 다시 보여줌
  setTimeout(() => {
    // ------------------------------------------------
    // (여기부터는 원래 로직 그대로)
    // ------------------------------------------------

    // 🔰 카드 배경 이펙트 초기화
    if (DOM.mainCard) {
      DOM.mainCard.classList.remove("card-correct", "card-wrong");
    }

    // 🔰 졸업 버튼 상태 초기화
    if (DOM.masteryMainBtn) {
      const lang = CURRENT_LANG || "ko";
      DOM.masteryMainBtn.style.display = "none";
      DOM.masteryMainBtn.disabled = false;
      DOM.masteryMainBtn.textContent = lang === "en" ? "Mastered" : "졸업";
      DOM.masteryMainBtn.classList.remove("mastery-done");
    }

    if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
      showEndStats();
      // ★ 끝났을 때도 페이드 인 해줘야 함
      if (DOM.mainCard) DOM.mainCard.classList.remove("swapping");
      return;
    }

    const item = APP_STATE.queue[0];
    APP_STATE.currentCard = item;
    TYPING_HINT_COUNT = 0;
    item._typingHintUsed = false;

    // 🔹 훈련소 모드 여부 (뷰 + 플래그 둘 다 체크)
    const isTrainingMode =
      (APP_STATE && APP_STATE.currentView === "training") ||
      (typeof TRAINING_MODE_ACTIVE !== "undefined" && TRAINING_MODE_ACTIVE) ||
      (typeof WRONG_PRACTICE_ACTIVE !== "undefined" &&
        WRONG_PRACTICE_ACTIVE) ||
      (typeof TRAINING_MODE_KIND !== "undefined" &&
        TRAINING_MODE_KIND !== "none");

    // 🔹 정규 학습에서만 조회수 증가 (훈련소는 카운트 제외)
    if (!isTrainingMode) {
      incrementTotalViews(item.word.id);
    }

    setPhase("QUESTION");

    if (DOM.mainCard) {
      DOM.mainCard.style.display = "block";
    }
    if (DOM.endStatsArea) {
      DOM.endStatsArea.style.display = "none";
    }

    const side = getDisplayWordSide(item.word);
    const hintText = getPosWithMeaning(item.word);

    if (DOM.questionDisplay) {
      // fadeSwapText 대신 그냥 textContent 써도 됨 (카드가 통째로 페이드되니까)
      DOM.questionDisplay.textContent = side.question;
      DOM.questionDisplay.classList.remove("changing"); // 혹시 남아있을 잔재 제거
    }
    if (DOM.hintDisplay) {
      DOM.hintDisplay.textContent = hintText;
      DOM.hintDisplay.classList.remove("changing");
    }
    if (DOM.feedback) {
      DOM.feedback.textContent = "";
    }

    // ============================================================
    // [Gemini Fix] 배지 UI 업데이트 (정규 학습 전용)
    // ============================================================
    const badgeEl =
      DOM.cardLevelBadge || document.getElementById("cardLevelBadge");

    if (badgeEl) {
      if (isTrainingMode) {
        // ✅ 훈련소(깜지/훈련/믹스)에서는 배지 완전 숨김
        badgeEl.style.display = "none";
        badgeEl.textContent = "";
        badgeEl.style.border = "none";
        badgeEl.style.backgroundColor = "transparent";
        badgeEl.style.color = "inherit";
      } else {
        // ✅ 일반 학습에서만 배지 표시
        badgeEl.style.display = "block";

        const stats = getWordStatsById(item.word.id);
        const viewCount = stats.totalViews;

        if (viewCount <= 1) {
          // 처음 보거나(1) 아예 안 본 경우(0)
          badgeEl.textContent = "New";
          badgeEl.style.color = "#00C853";
          badgeEl.style.backgroundColor = "#E8F5E9";
          badgeEl.style.border = "1px solid #C8E6C9";
        } else {
          // "3번째 봄" (번역팩 연동)
          let msg =
            typeof trKey === "function"
              ? trKey("card_view_count", "{n}번째 봄")
              : "{n}번째 봄";

          msg = msg.replace("{n}", viewCount);

          badgeEl.textContent = msg;
          badgeEl.style.color = "#555";
          badgeEl.style.backgroundColor = "#fff";
          badgeEl.style.border = "1px solid #e0e0e0";
        }
      }
    }
    // ============================================================

    if (DOM.copyGhost) {
      if (SETTINGS.mode === "copy") {
        const studyLang = (SETTINGS.studyLang || "de").toLowerCase();
        let ghostText = "";

        if (studyLang === "de") {
          ghostText = buildGermanForm(item.word);
        } else {
          const primary = getPrimaryStudyText(item.word);
          ghostText = primary || side.answer;
        }

        DOM.copyGhost.textContent = ghostText || "";
      } else {
        DOM.copyGhost.textContent = "";
      }
    }

    if (SETTINGS.mode === "typing_de" || SETTINGS.mode === "copy") {
      if (DOM.inputArea) DOM.inputArea.style.display = "block";
      if (DOM.answerInput) {
        DOM.answerInput.value = "";
        DOM.answerInput.disabled = false;

        const pack = t() || {};
        if (SETTINGS.mode === "copy") {
          DOM.answerInput.placeholder = "";
        } else {
          DOM.answerInput.placeholder = "";
        }
        // 모바일에서 키보드 올라오면 화면 튀는 문제 방지:
        // copy 모드에서는 자동 포커스 제거 (타이핑만 자동 포커스)
        if (SETTINGS.mode === "typing_de") {
          focusInputWithoutScroll(DOM.answerInput);
          requestAnimationFrame(refocusAnswerInputForTyping);
          setTimeout(refocusAnswerInputForTyping, 80);
        }
      }

      if (DOM.mainBtn) {
        const pack2 = t() || {};
        const shouldShowConfirm =
          SETTINGS.mode !== "copy" ||
          (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram");
        DOM.mainBtn.style.display = shouldShowConfirm ? "inline-block" : "none";
        DOM.mainBtn.textContent = pack2.confirm || "확인";
      }

      if (DOM.skipBtn) {
        DOM.skipBtn.style.display =
          SETTINGS.mode === "typing_de" ? "inline-block" : "none";
      }
    } else {
      if (DOM.inputArea) {
        DOM.inputArea.style.display = "none";
      }
      if (DOM.mainBtn) {
        const pack = t() || {};
        DOM.mainBtn.textContent = pack.show_answer || pack.answer || "정답";
        DOM.mainBtn.style.display = "inline-block";
      }
      if (DOM.skipBtn) {
        DOM.skipBtn.style.display = "none";
      }
    }

    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "none";
    }
    updateRatingButtonsForHint(null);
    updateTypingHintUi();

    updateProgressBar();
    updateStudyStartSummary();

    // ------------------------------------------------
    // 2. 카드 페이드 인 (내용 다 바꿨으니 짠! 하고 보여주기)
    if (DOM.mainCard) {
      DOM.mainCard.classList.remove("swapping");
    }
  }, 150); // CSS transition 시간(0.15s)과 맞춤
}
