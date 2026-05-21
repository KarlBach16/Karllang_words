function getTrainingModeFallback(mode) {
  const lang = CURRENT_LANG || SETTINGS.uiLang || "ko";
  if (mode === "word_drop") {
    return lang === "ko" ? "워드 드롭" : "Word Drop";
  }
  return lang === "ko" ? "크램" : "Cram";
}

function getTrainingModeHintFallback(mode) {
  const lang = CURRENT_LANG || SETTINGS.uiLang || "ko";
  if (mode === "word_drop") {
    return lang === "ko"
      ? "오답·북마크 단어를 섞어 빠르게 타이핑하는 훈련입니다."
      : "Type falling words quickly with wrong and bookmarked words mixed in.";
  }
  return lang === "ko"
    ? "선택한 단어를 반복해서 따라 쓰며 익히는 훈련입니다."
    : "Practice selected words by repeatedly typing them.";
}

function updateTrainingModeHint() {
  if (!DOM.trainingModeHint) return;

  const mode =
    DOM.trainingModeSelect && DOM.trainingModeSelect.value
      ? DOM.trainingModeSelect.value
      : "cram";

  if (mode === "word_drop") {
    DOM.trainingModeHint.textContent = trKey(
      "training.mode_hint_word_drop",
      getTrainingModeHintFallback("word_drop"),
    );
  } else {
    DOM.trainingModeHint.textContent = trKey(
      "training.mode_hint_cram",
      getTrainingModeHintFallback("cram"),
    );
  }
}

function updateTrainingSummaryPreview() {
  const summaryEl = DOM.trainingSummary;

  updateTrainingModeHint();

  if (!summaryEl) return;

  const useMistakes =
    DOM.trainingSourceMistakes &&
    DOM.trainingSourceMistakes.classList.contains("is-on");
  const useHard =
    DOM.trainingSourceHard &&
    DOM.trainingSourceHard.classList.contains("is-on");
  const useBookmark =
    DOM.trainingSourceBookmark &&
    DOM.trainingSourceBookmark.classList.contains("is-on");

  const hasAnySource = useMistakes || useHard || useBookmark;

  if (DOM.trainingModeSelect && DOM.trainingModeSelect.value === "word_drop") {
    summaryEl.style.color = "#6b7280";
    summaryEl.textContent = "";
    return;
  }

  if (!hasAnySource) {
    summaryEl.style.color = "#D32F2F";

    summaryEl.textContent = trKey(
      "training_select_target_warning",
      "훈련할 대상을 하나 이상 선택해 주세요.",
    );

    if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = true;

    return;
  }

  summaryEl.style.color = "#666";
  summaryEl.textContent = "";

  if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = false;
}
