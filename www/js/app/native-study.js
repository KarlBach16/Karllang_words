// Native study-ready screen delegates all state changes to the existing DOM.

let NATIVE_STUDY_LISTENER_READY = false;

function getNativeStudySelect(select) {
  if (!select) return { value: "", options: [] };
  return {
    value: select.value || "",
    options: Array.from(select.options).map((option) => ({
      value: option.value,
      label: option.textContent?.trim() || option.value,
    })),
  };
}

function getNativeStudyControlLabel(select, fallback = "") {
  return (
    select?.closest(".control-group")?.querySelector("label")?.textContent?.trim() ||
    fallback
  );
}

function getNativeStudyPayload() {
  return {
    ready:
      APP_STATE.currentView === "study" &&
      APP_STATE.phase === "READY" &&
      !TRAINING_MODE_ACTIVE,
    prompt: DOM.questionDisplay?.textContent?.trim() || "",
    startLabel: DOM.mainBtn?.textContent?.trim() || "",
    rows: [
      {
        key: "mode",
        title: getNativeStudyControlLabel(DOM.modeSelect, "Mode"),
        option: getNativeStudySelect(DOM.modeSelect),
      },
      {
        key: "goal",
        title: getNativeStudyControlLabel(DOM.goalSelectTyping, "Goal"),
        option: getNativeStudySelect(DOM.goalSelectTyping),
      },
      {
        key: "category",
        title: getNativeStudyControlLabel(DOM.newWordCategorySelect, "Category"),
        option: getNativeStudySelect(DOM.newWordCategorySelect),
      },
      {
        key: "cefr",
        title: getNativeStudyControlLabel(DOM.newWordCefrSelect, "Level"),
        option: getNativeStudySelect(DOM.newWordCefrSelect),
      },
    ],
    newSetLabel: DOM.newWordSetBtn?.textContent?.trim() || "",
  };
}

function dispatchNativeStudyAction(detail = {}) {
  const action = detail.action;
  const value = detail.value;
  const change = (select) => {
    if (!select || !value || select.value === value) return;
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  };

  if (action === "study_mode") change(DOM.modeSelect);
  else if (action === "study_goal") change(DOM.goalSelectTyping);
  else if (action === "study_category") change(DOM.newWordCategorySelect);
  else if (action === "study_cefr") change(DOM.newWordCefrSelect);
  else if (action === "study_new_set") DOM.newWordSetBtn?.click();
  else if (action === "study_start") DOM.mainBtn?.click();
  else return;

  scheduleNativeChromeUpdate({ force: true });
}

function initNativeStudyBridge() {
  if (NATIVE_STUDY_LISTENER_READY) return;
  NATIVE_STUDY_LISTENER_READY = true;
  window.addEventListener("karllang:nativeStudyAction", (event) => {
    dispatchNativeStudyAction(event.detail || {});
  });
}
