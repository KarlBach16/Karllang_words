// Study session completion screen rendering.

function getSessionReportWordLabel(word) {
  if (!word) return "";

  const uiText = getMeaning(word);
  const studyText =
    getPrimaryStudyText(word) ||
    buildGermanForm(word) ||
    word.lemma ||
    "";

  if (uiText && studyText) {
    return `${uiText} - ${studyText}`;
  }
  return uiText || studyText || "";
}

function showEndStats() {
  setPhase("FINISHED");
  logAnalyticsEvent("complete_session", {
    ...getSessionAnalyticsParams(),
    total_count: APP_STATE.completed || 0,
    new_count: APP_STATE.newCount || 0,
    review_count: APP_STATE.reviewCount || 0,
    hard_count: APP_STATE.sessionHardCount || 0,
    normal_count: APP_STATE.sessionNormalCount || 0,
    easy_count: APP_STATE.sessionEasyCount || 0,
    mistake_count: APP_STATE.sessionWrongCount || 0,
  });
  DOM.mainCard.style.display = "none";
  DOM.endStatsArea.style.display = "block";

  const pack = t() || {};
  const dailySummary = addCurrentSessionToDailySummary();
  DOM.endTitle.innerHTML =
    '<span class="end-title-check">✓</span> ' +
    '<span class="end-title-text"></span>';
  const endTitleText = DOM.endTitle.querySelector(".end-title-text");
  if (endTitleText) {
    endTitleText.textContent =
      pack.session_done_title ||
      pack.summary_title ||
      pack.completed_title ||
      "학습 완료";
  }

  if (DOM.endSummaryTitle) {
    DOM.endSummaryTitle.textContent =
      pack.summary_block_title || "오늘 요약";
  }

  const isTypingSession = APP_STATE.sessionMode === "typing_de";
  const countUnit = CURRENT_LANG === "en" ? "" : "개";
  const renderSummaryLine = (el, label, value, valueClass = "") => {
    if (!el) return;
    el.className = "end-line";
    el.style.display = "flex";
    el.innerHTML =
      '<span class="end-line-label"></span>' +
      '<span class="end-line-value"></span>';

    const labelEl = el.querySelector(".end-line-label");
    const valueEl = el.querySelector(".end-line-value");
    if (labelEl) labelEl.textContent = label;
    if (valueEl) {
      valueEl.textContent = String(value) + countUnit;
      if (valueClass) valueEl.classList.add(valueClass);
    }
  };

  renderSummaryLine(
    DOM.endTotal,
    pack.summary_total || pack.total_completed || "학습 단어",
    dailySummary.total,
  );
  renderSummaryLine(
    DOM.endNew,
    pack.summary_new || pack.new_words || "새로 배운 단어",
    dailySummary.newCount,
  );
  renderSummaryLine(
    DOM.endReview,
    pack.summary_review || pack.reviewed_words || "복습 단어",
    dailySummary.reviewCount,
  );

  if (isTypingSession) {
    renderSummaryLine(
      DOM.endCorrect,
      pack.summary_correct || "정답",
      dailySummary.correct || 0,
    );

    renderSummaryLine(
      DOM.endWrong,
      pack.summary_wrong || "오답",
      dailySummary.wrong || 0,
    );

    if (DOM.endEasy) {
      DOM.endEasy.style.display = "none";
      DOM.endEasy.textContent = "";
    }
  } else {
    renderSummaryLine(
      DOM.endCorrect,
      pack.hard || "어려움",
      dailySummary.hard || 0,
      "end-value-hard",
    );

    renderSummaryLine(
      DOM.endWrong,
      pack.normal || "보통",
      dailySummary.normal || 0,
      "end-value-normal",
    );

    renderSummaryLine(
      DOM.endEasy,
      pack.easy || "쉬움",
      dailySummary.easy || 0,
      "end-value-easy",
    );
  }

  const wrongWords = APP_STATE.sessionWrongWords || [];
  if (DOM.endWrongWordsBlock && DOM.endWrongWordsList) {
    DOM.endWrongWordsList.innerHTML = "";
    if (wrongWords.length > 0) {
      DOM.endWrongWordsBlock.style.display = "block";
      if (DOM.endWrongWordsTitle) {
        DOM.endWrongWordsTitle.textContent =
          pack.summary_wrong_words_title ||
          "어려웠던 단어";
      }

      const visibleWrongWords = wrongWords.slice(0, 5);
      visibleWrongWords.forEach((word) => {
        const li = document.createElement("li");
        li.textContent = getSessionReportWordLabel(word);
        DOM.endWrongWordsList.appendChild(li);
      });

      if (wrongWords.length > visibleWrongWords.length) {
        const li = document.createElement("li");
        li.className = "end-word-more";
        const remainingCount = wrongWords.length - visibleWrongWords.length;
        li.textContent = trKey("common_list_more", "...외 {n}개").replace(
          "{n}",
          String(remainingCount),
        );
        DOM.endWrongWordsList.appendChild(li);
      }
    } else {
      DOM.endWrongWordsBlock.style.display = "none";
    }
  }

  if (DOM.trainWrongBtn) {
    DOM.trainWrongBtn.textContent =
      pack.train_wrong_words || "어려운 단어 연습";
    DOM.trainWrongBtn.style.display =
      wrongWords.length > 0 ? "inline-block" : "none";
  }

  prepareShareCard(dailySummary);

  DOM.restartBtn.textContent = pack.restart || "다시 시작";

  updateCefrProgress();
}
