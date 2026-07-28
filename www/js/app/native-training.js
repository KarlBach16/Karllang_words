// Native training setup delegates state changes to the existing DOM controls.

let NATIVE_TRAINING_LISTENER_READY = false;

function getNativeTrainingPayload() {
  const selected = (button) => button?.classList.contains("is-on") === true;
  const optionPayload = (select) => ({
    value: select?.value || "",
    options: Array.from(select?.options || []).map((option) => ({ value: option.value, label: option.textContent?.trim() || option.value })),
  });
  return {
    targets: [
      { action: "training_mistakes", label: DOM.trainingSourceMistakes?.previousElementSibling?.textContent?.trim() || "", enabled: selected(DOM.trainingSourceMistakes) },
      { action: "training_hard", label: DOM.trainingSourceHard?.previousElementSibling?.textContent?.trim() || "", enabled: selected(DOM.trainingSourceHard) },
      { action: "training_bookmark", label: DOM.trainingSourceBookmark?.previousElementSibling?.textContent?.trim() || "", enabled: selected(DOM.trainingSourceBookmark) },
    ],
    targetTitle: DOM.trainingTargetLabel?.textContent?.trim() || "",
    modeTitle: DOM.trainingModeLabel?.textContent?.trim() || "",
    mode: optionPayload(DOM.trainingModeSelect),
    countTitle: DOM.trainingCountLabel?.textContent?.trim() || "",
    count: optionPayload(DOM.trainingCountSelect),
    startLabel: DOM.trainingStartBtn?.textContent?.trim() || "",
  };
}

function dispatchNativeTrainingAction(detail = {}) {
  const action = detail.action;
  const target = {
    training_mistakes: DOM.trainingSourceMistakes,
    training_hard: DOM.trainingSourceHard,
    training_bookmark: DOM.trainingSourceBookmark,
  }[action];
  if (target) { target.click(); updateTrainingSummaryPreview(); scheduleNativeChromeUpdate({ force: true }); return; }
  if (action === "training_mode" && DOM.trainingModeSelect) { DOM.trainingModeSelect.value = detail.value || "cram"; DOM.trainingModeSelect.dispatchEvent(new Event("change", { bubbles: true })); updateTrainingSummaryPreview(); scheduleNativeChromeUpdate({ force: true }); return; }
  if (action === "training_count" && DOM.trainingCountSelect) { DOM.trainingCountSelect.value = detail.value || "5"; DOM.trainingCountSelect.dispatchEvent(new Event("change", { bubbles: true })); scheduleNativeChromeUpdate({ force: true }); return; }
  if (action === "training_start") DOM.trainingStartBtn?.click();
}

function initNativeTrainingBridge() {
  if (NATIVE_TRAINING_LISTENER_READY) return;
  NATIVE_TRAINING_LISTENER_READY = true;

  window.addEventListener("karllang:nativeTrainingAction", (event) => {
    dispatchNativeTrainingAction(event.detail || {});
  });

  if (!isNativePlatform()) return;
  const plugin = getNativeChromePlugin();
  if (plugin?.addListener) {
    plugin.addListener("trainingAction", dispatchNativeTrainingAction);
  }
}
