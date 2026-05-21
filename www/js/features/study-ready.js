// Study ready-state and start-screen reset helpers.

function updateStudyStartSummary() {
  if (!DOM.studySummaryText) return;
  DOM.studySummaryText.textContent = "";
  DOM.studySummaryText.style.display = "none";
}

function resetSessionReport() {
  APP_STATE.sessionMode = SETTINGS.mode;
  APP_STATE.sessionCorrectCount = 0;
  APP_STATE.sessionWrongCount = 0;
  APP_STATE.sessionHardCount = 0;
  APP_STATE.sessionNormalCount = 0;
  APP_STATE.sessionEasyCount = 0;
  APP_STATE.sessionSummarySaved = false;
  APP_STATE.sessionWrongWords = [];
}

function clearStudyCardForReady() {
  if (DOM.endStatsArea) {
    DOM.endStatsArea.style.display = "none";
  }
  if (DOM.questionDisplay) {
    DOM.questionDisplay.textContent = "";
    DOM.questionDisplay.classList.remove("changing");
  }
  if (DOM.hintDisplay) {
    DOM.hintDisplay.textContent = "";
    DOM.hintDisplay.classList.remove("changing");
  }
  if (DOM.feedback) DOM.feedback.textContent = "";
  if (DOM.copyGhost) DOM.copyGhost.textContent = "";
  if (DOM.inputArea) DOM.inputArea.style.display = "none";
  if (DOM.answerInput) {
    DOM.answerInput.value = "";
    DOM.answerInput.disabled = true;
    DOM.answerInput.placeholder = "";
  }
  if (DOM.skipBtn) DOM.skipBtn.style.display = "none";
  if (DOM.ratingArea) DOM.ratingArea.style.display = "none";
  if (DOM.masteryMainBtn) DOM.masteryMainBtn.style.display = "none";
}

function showReadyState() {
  setPhase("READY");
  restoreWrongPracticeMode();
  APP_STATE.currentCard = null;
  APP_STATE.queue = [];
  APP_STATE.completed = 0;
  APP_STATE.totalTarget = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  resetSessionReport();
  clearStudyCardForReady();

  if (DOM.mainCard) {
    DOM.mainCard.style.display = "block";
    DOM.mainCard.classList.remove("card-correct", "card-wrong");
  }
  closeShareCardModal();
  const pack = t() || {};

  // [Gemini Fix] 시작 화면에서는 배지 강제로 끄기 (직접 ID 조회)
  const badgeEl = document.getElementById("cardLevelBadge");
  if (badgeEl) {
    badgeEl.style.display = "none";
    badgeEl.textContent = "";
  }
  if (DOM.questionDisplay) {
    DOM.questionDisplay.textContent =
      pack.start_prompt || "시작 버튼을 누르세요.";
    DOM.questionDisplay.classList.remove("changing");
  }
  TYPING_HINT_COUNT = 0;
  updateTypingHintUi();
  updateRatingButtonsForHint(null);

  if (DOM.mainBtn) {
    DOM.mainBtn.style.display = "inline-block";
    DOM.mainBtn.textContent = pack.start || "시작";
  }
  if (DOM.masteryMainBtn) {
    DOM.masteryMainBtn.style.display = "none";
    DOM.masteryMainBtn.disabled = false;
    DOM.masteryMainBtn.classList.remove("mastery-done");
  }
  if (DOM.ratingArea) {
    DOM.ratingArea.style.display = "none";
  }

  updateStudyStartSummary();
  updateProgressBar();
}
