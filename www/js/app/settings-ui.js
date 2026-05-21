// Apply persisted settings to visible controls.

function hydrateSettingsToUI() {
  if (DOM.startUiLang) {
    DOM.startUiLang.value = SETTINGS.uiLang;
  }
  if (DOM.startStudyLang) {
    DOM.startStudyLang.value = SETTINGS.studyLang;
  }

  if (DOM.settingsUiLang) {
    DOM.settingsUiLang.value = SETTINGS.uiLang;
  }
  if (DOM.settingsStudyLang) {
    DOM.settingsStudyLang.value = SETTINGS.studyLang;
  }

  if (DOM.modeSelect) {
    DOM.modeSelect.value = SETTINGS.mode;
  }

  if (SETTINGS.goalCard == null) {
    SETTINGS.goalCard = SETTINGS.goalTyping || 5;
    saveSettings();
  }

  if (DOM.goalSelectTyping) {
    DOM.goalSelectTyping.value = String(SETTINGS.goalTyping);
  }

  if (DOM.goalSelectCard) {
    DOM.goalSelectCard.value = String(SETTINGS.goalCard);
    const group = DOM.goalSelectCard.closest(".control-group");
    if (group) {
      group.style.display = "none";
    }
  }

  if (DOM.newWordCefrSelect) {
    // 첫 실행에서 undefined 들어가는 거 막고 기본값은 "all"로 강제
    const cefr = SETTINGS.newWordCefr || "all";
    DOM.newWordCefrSelect.value = cefr;

    // iOS 첫 실행에서 라벨이 안 보이는 문제 방지용:
    // 여기서 한 번 강제로 옵션 텍스트를 모두 세팅해 준다.
    Array.from(DOM.newWordCefrSelect.options).forEach((opt) => {
      const v = opt.value || "all";
      opt.textContent = getCefrDisplayLabel(v);
    });
  }

  if (DOM.newWordCategorySelect) {
    DOM.newWordCategorySelect.value = SETTINGS.newWordCategory || "all";
  }

  if (DOM.soundToggle) {
    if (SETTINGS.soundEnabled) {
      DOM.soundToggle.classList.add("is-on");
    } else {
      DOM.soundToggle.classList.remove("is-on");
    }
  }
  if (DOM.hapticToggle) {
    if (SETTINGS.hapticEnabled) {
      DOM.hapticToggle.classList.add("is-on");
    } else {
      DOM.hapticToggle.classList.remove("is-on");
    }
  }
  SETTINGS.studyReminderTime = normalizeReminderTime(
    SETTINGS.studyReminderTime,
  );
  populateStudyReminderTimeSelect();
  if (DOM.studyReminderTime) {
    DOM.studyReminderTime.value = SETTINGS.studyReminderTime;
  }
  updateStudyReminderToggle();
}
