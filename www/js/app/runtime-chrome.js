// Runtime viewport, phase, and keyboard chrome helpers.

let APP_LAYOUT_VIEWPORT_HEIGHT = 0;

function setPhase(phase) {
  APP_STATE.phase = phase;
  updateStudySettingsVisibility();
  updateKeyboardModeChrome();
}

function updateStudySettingsVisibility() {
  if (!DOM.studySettingsGrid) return;
  DOM.studySettingsGrid.style.display =
    APP_STATE.phase === "READY" ? "flex" : "none";
}

function isKeyboardStudyPhase() {
  return (
    (APP_STATE.currentView === "study" &&
      APP_STATE.phase === "QUESTION" &&
      (SETTINGS.mode === "typing_de" ||
        SETTINGS.mode === "copy" ||
        TRAINING_MODE_KIND === "cram")) ||
    (APP_STATE.currentView === "search" &&
      DOM.searchInput &&
      document.activeElement === DOM.searchInput)
  );
}

function updateKeyboardModeChrome() {
  document.body.classList.toggle("study-keyboard-active", isKeyboardStudyPhase());
  document.body.classList.toggle(
    "study-session-active",
    APP_STATE.currentView === "study" &&
      (APP_STATE.phase === "QUESTION" || APP_STATE.phase === "ANSWER"),
  );
}

function updateRuntimeChromeClass() {
  const isNative =
    !!(window.Capacitor &&
      typeof window.Capacitor.isNativePlatform === "function" &&
      window.Capacitor.isNativePlatform());
  document.body.classList.toggle("native-platform", isNative);
}

function focusInputWithoutScroll(inputEl) {
  if (!inputEl || typeof inputEl.focus !== "function") return;
  try {
    inputEl.focus({ preventScroll: true });
  } catch {
    inputEl.focus();
  }
}

function refocusAnswerInputForTyping() {
  if (
    APP_STATE.currentView !== "study" ||
    APP_STATE.phase !== "QUESTION" ||
    SETTINGS.mode !== "typing_de" ||
    !DOM.answerInput ||
    DOM.answerInput.disabled
  ) {
    return;
  }
  focusInputWithoutScroll(DOM.answerInput);
}

function isNativePlatform() {
  return !!(
    window.Capacitor &&
    typeof window.Capacitor.isNativePlatform === "function" &&
    window.Capacitor.isNativePlatform()
  );
}

function syncAppViewportHeight() {
  const viewport = window.visualViewport || null;
  const height = viewport && viewport.height ? viewport.height : window.innerHeight;
  const offsetTop = viewport && viewport.offsetTop ? viewport.offsetTop : 0;
  const isStudyKeyboard =
    document.body.classList.contains("study-keyboard-active") ||
    document.body.classList.contains("training-cram-active");

  if (height && Number.isFinite(height)) {
    document.documentElement.style.setProperty(
      "--app-viewport-height",
      `${Math.round(height)}px`,
    );
    if (!isStudyKeyboard || height > APP_LAYOUT_VIEWPORT_HEIGHT) {
      APP_LAYOUT_VIEWPORT_HEIGHT = Math.max(APP_LAYOUT_VIEWPORT_HEIGHT, height);
      document.documentElement.style.setProperty(
        "--app-layout-height",
        `${Math.round(APP_LAYOUT_VIEWPORT_HEIGHT)}px`,
      );
    }
  }
  if (Number.isFinite(offsetTop)) {
    document.documentElement.style.setProperty(
      "--app-viewport-offset-top",
      `${Math.round(offsetTop)}px`,
    );
  }
}
