// Session wrong-word review flow.

let WRONG_PRACTICE_ACTIVE = false;
let WRONG_PRACTICE_PREVIOUS_MODE = null;
let WRONG_PRACTICE_RETURN_VIEW = "study";

function restoreWrongPracticeMode() {
  if (WRONG_PRACTICE_PREVIOUS_MODE) {
    SETTINGS.mode = WRONG_PRACTICE_PREVIOUS_MODE;
    WRONG_PRACTICE_PREVIOUS_MODE = null;
    hydrateSettingsToUI();
    applyTranslations();
  }
  WRONG_PRACTICE_ACTIVE = false;
}

function finishWrongPractice() {
  const returnView = WRONG_PRACTICE_RETURN_VIEW || "study";
  WRONG_PRACTICE_RETURN_VIEW = "study";
  restoreWrongPracticeMode();

  if (returnView === "study") {
    showView("study");
    setPhase("FINISHED");
    if (DOM.mainCard) {
      DOM.mainCard.style.display = "none";
    }
    if (DOM.endStatsArea) {
      DOM.endStatsArea.style.display = "block";
    }
    return;
  }

  showReadyState();
  showView(returnView);
}

function advanceWrongPracticeStep() {
  if (!WRONG_PRACTICE_ACTIVE) return;

  if (APP_STATE.queue && APP_STATE.queue.length > 0) {
    APP_STATE.queue.shift();
  }
  APP_STATE.completed = (APP_STATE.completed || 0) + 1;

  if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
    finishWrongPractice();
    return;
  }

  updateProgressBar();
  showNextQuestion();
}

function startWrongWordsTraining(returnView = "study") {
  const words = APP_STATE.sessionWrongWords || [];
  if (!words.length) return;
  const safeReturnView =
    typeof returnView === "string" &&
    ["study", "training", "wordDrop"].includes(returnView)
      ? returnView
      : "study";

  TRAINING_MODE_ACTIVE = false;
  TRAINING_MODE_KIND = "none";
  TRAINING_MIX_WORDS = [];
  TRAINING_MIX_INDEX = 0;
  TRAINING_MIX_STEP = 0;
  TRAINING_CRAM_WORDS = [];
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_INDEX = 0;

  WRONG_PRACTICE_ACTIVE = true;
  WRONG_PRACTICE_PREVIOUS_MODE = SETTINGS.mode;
  WRONG_PRACTICE_RETURN_VIEW = safeReturnView;

  SETTINGS.mode = "copy";
  hydrateSettingsToUI();
  applyTranslations();

  APP_STATE.queue = words.map((word) => {
    const state = getWordState(word);
    return {
      word,
      state,
      isNew: !!state.isNew,
    };
  });
  APP_STATE.currentCard = null;
  APP_STATE.totalTarget = APP_STATE.queue.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;

  showView("study");
  showNextQuestion();
}
