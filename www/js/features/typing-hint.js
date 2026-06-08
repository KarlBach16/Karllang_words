// Typing mode hint state and UI helpers.

let TYPING_HINT_COUNT = 0;

function getTypingHintTargetText(item) {
  if (!item || !item.word) return "";

  const text = buildStudyForm(item.word) || getPrimaryStudyText(item.word) || "";
  return (
    text
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)[0] || ""
  );
}

function getTypingHintMaxCount(text) {
  const parts = (text || "").split(" ");
  if (parts.length >= 2) {
    const wordPart = parts.slice(1).join(" ");
    const wordChars = Array.from(wordPart).filter(
      (ch) => ch !== " " && ch !== "\u00A0",
    );
    if (!wordChars.length) return 1;
    return 1 + Math.min(2, wordChars.length);
  }

  const chars = Array.from(text || "").filter(
    (ch) => ch !== " " && ch !== "\u00A0",
  );
  if (!chars.length) return 0;
  return Math.max(1, Math.ceil(chars.length * 0.4));
}

function isTypingHintAvailable() {
  return (
    SETTINGS.mode === "typing" &&
    APP_STATE.phase === "QUESTION" &&
    APP_STATE.currentCard &&
    !TRAINING_MODE_ACTIVE &&
    !WRONG_PRACTICE_ACTIVE
  );
}

function updateTypingHintUi() {
  const buttonGroup = DOM.mainBtn ? DOM.mainBtn.parentElement : null;
  const available = isTypingHintAvailable();

  if (buttonGroup) {
    buttonGroup.classList.toggle("typing-hint-active", available);
  }

  if (DOM.hintBtn) {
    DOM.hintBtn.style.display = available ? "inline-block" : "none";
    DOM.hintBtn.textContent = trKey("study.button.hint", "Hint");

    const target = available
      ? getTypingHintTargetText(APP_STATE.currentCard)
      : "";
    const max = getTypingHintMaxCount(target);
    const atLimit = available && max > 0 && TYPING_HINT_COUNT >= max;
    DOM.hintBtn.disabled = !available || atLimit || max === 0;
    DOM.hintBtn.classList.toggle("hint-limit", atLimit);
  }

  if (DOM.copyGhost && SETTINGS.mode === "typing") {
    const target = available
      ? getTypingHintTargetText(APP_STATE.currentCard)
      : "";
    if (available && TYPING_HINT_COUNT > 0 && target) {
      DOM.copyGhost.innerHTML = buildTypingHintGhostHtml(
        target,
        TYPING_HINT_COUNT,
      );
    } else if (SETTINGS.mode !== "copy") {
      DOM.copyGhost.textContent = "";
    }
  }
}

function handleTypingHint() {
  if (!isTypingHintAvailable()) return;

  const item = APP_STATE.currentCard;
  const target = getTypingHintTargetText(item);
  const max = getTypingHintMaxCount(target);
  if (!target || max <= 0) return;

  TYPING_HINT_COUNT = Math.min(max, TYPING_HINT_COUNT + 1);
  item._typingHintUsed = true;
  updateTypingHintUi();

  if (DOM.answerInput) {
    focusInputWithoutScroll(DOM.answerInput);
  }
}

function updateRatingButtonsForHint(item) {
  if (!DOM.ratingButtons) return;

  const shouldDisableEasy =
    item && item._typingHintUsed === true && SETTINGS.mode === "typing";

  DOM.ratingButtons.forEach((btn) => {
    const isEasy = btn.getAttribute("data-rating") === "easy";
    btn.disabled = shouldDisableEasy && isEasy;
    btn.classList.toggle("rating-disabled", shouldDisableEasy && isEasy);
  });
}
