// Auto-submit support for copy/cram answer inputs, including IME cleanup.

let ANSWER_INPUT_COMPOSING = false;
let ANSWER_INPUT_CLEAR_UNTIL = 0;

function getAutoSubmitTargetText() {
  if (APP_STATE.phase !== "QUESTION") return "";

  if (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram") {
    const word = (TRAINING_CRAM_WORDS || [])[TRAINING_CRAM_INDEX];
    return (word ? buildGermanForm(word) : "").trim();
  }

  if (SETTINGS.mode === "copy") {
    const item = APP_STATE.currentCard;
    if (!item || !item.word) return "";
    if (DOM.copyGhost && DOM.copyGhost.textContent) {
      return DOM.copyGhost.textContent.trim();
    }
    return (buildGermanForm(item.word) || "").trim();
  }

  return "";
}

function checkAnswerInputAutoSubmit() {
  if (!DOM.answerInput || APP_STATE.phase !== "QUESTION") return false;

  if (ANSWER_INPUT_CLEAR_UNTIL && Date.now() < ANSWER_INPUT_CLEAR_UNTIL) {
    DOM.answerInput.value = "";
    return false;
  }

  const isCram =
    TRAINING_MODE_ACTIVE &&
    TRAINING_MODE_KIND === "cram";
  const isCopy = !isCram && SETTINGS.mode === "copy";
  if (!isCram && !isCopy) return false;

  const typed = (DOM.answerInput.value || "").trim().normalize("NFC");
  const target = getAutoSubmitTargetText().normalize("NFC");
  if (!typed || !target || typed !== target) return false;

  // IME 조합 중에도 화면에 보이는 값이 이미 정답이면 바로 인정한다.
  ANSWER_INPUT_COMPOSING = false;
  ANSWER_INPUT_CLEAR_UNTIL = Date.now() + 120;
  handleConfirm();

  if (DOM.answerInput && Date.now() < ANSWER_INPUT_CLEAR_UNTIL) {
    DOM.answerInput.value = "";
  }

  requestAnimationFrame(() => {
    if (DOM.answerInput && Date.now() < ANSWER_INPUT_CLEAR_UNTIL) {
      DOM.answerInput.value = "";
    }
  });
  setTimeout(() => {
    if (DOM.answerInput && Date.now() < ANSWER_INPUT_CLEAR_UNTIL) {
      DOM.answerInput.value = "";
    }
  }, 40);
  setTimeout(() => {
    if (DOM.answerInput && Date.now() < ANSWER_INPUT_CLEAR_UNTIL) {
      DOM.answerInput.value = "";
    }
  }, 100);

  return true;
}

function scheduleAnswerInputAutoSubmitCheck() {
  checkAnswerInputAutoSubmit();
  requestAnimationFrame(checkAnswerInputAutoSubmit);
  setTimeout(checkAnswerInputAutoSubmit, 0);
  setTimeout(checkAnswerInputAutoSubmit, 40);
}
