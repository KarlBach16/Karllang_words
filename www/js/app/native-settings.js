// Native Settings bridge. JS remains the source of truth for every setting.

let NATIVE_SETTINGS_LISTENER_READY = false;
let NATIVE_SETTINGS_OBSERVER = null;

function getNativeSettingsText(element, fallback = "") {
  return element?.textContent?.trim() || fallback;
}

function getNativeSettingsSelect(select) {
  if (!select) return { value: "", options: [] };

  return {
    value: select.value || "",
    options: Array.from(select.options).map((option) => ({
      value: option.value,
      label: option.textContent?.trim() || option.value,
    })),
  };
}

function getNativeSettingsPayload() {
  return {
    isActive: APP_STATE.currentView === "settings",
    title: getNativeSettingsText(DOM.settingsViewTitle, "Settings"),
    language: {
      title: getNativeSettingsText(DOM.settingsLanguageTitle, "Language"),
      uiLabel: getNativeSettingsText(DOM.settingsUiLangLabel, "App language"),
      studyLabel: getNativeSettingsText(
        DOM.settingsStudyLangLabel,
        "Study language",
      ),
      ui: getNativeSettingsSelect(DOM.settingsUiLang),
      study: getNativeSettingsSelect(DOM.settingsStudyLang),
    },
    account: {
      title: getNativeSettingsText(DOM.settingsAccountTitle, "Account"),
      status: getNativeSettingsText(DOM.accountStatusText, "Guest mode"),
      detail: getNativeSettingsText(DOM.accountStatusDetail),
      signedIn: AUTH_STATE?.signedIn === true,
      appleLabel: getNativeSettingsText(
        DOM.accountAppleLoginBtn,
        "Sign in with Apple",
      ),
      googleLabel: getNativeSettingsText(
        DOM.accountGoogleLoginBtn,
        "Sign in with Google",
      ),
      signOutLabel: getNativeSettingsText(DOM.accountSignOutBtn, "Sign out"),
    },
    sync: {
      // The native view can be requested before the hidden attribute has
      // reflected the most recent auth refresh. Auth state is authoritative.
      visible: AUTH_STATE?.signedIn === true,
      title: getNativeSettingsText(DOM.accountSyncSectionTitle, "Sync"),
      status: getNativeSettingsText(DOM.accountSyncStatus),
      checkLabel: getNativeSettingsText(DOM.accountSyncCheckBtn, "Check sync"),
      checking: DOM.accountSyncCheckBtn?.disabled === true,
      panelVisible: DOM.accountSyncPanel?.hidden !== true,
      detail: getNativeSettingsText(DOM.accountSyncDetail),
      uploadLabel: getNativeSettingsText(
        DOM.accountSyncUploadBtn,
        "Upload this device",
      ),
      uploadVisible: DOM.accountSyncUploadBtn?.hidden !== true,
      uploadDisabled: DOM.accountSyncUploadBtn?.disabled === true,
      downloadLabel: getNativeSettingsText(
        DOM.accountSyncDownloadBtn,
        "Use cloud data",
      ),
      downloadVisible: DOM.accountSyncDownloadBtn?.hidden !== true,
      downloadDisabled: DOM.accountSyncDownloadBtn?.disabled === true,
    },
    feedback: {
      title: getNativeSettingsText(DOM.settingsFeedbackTitle, "Feedback"),
      soundLabel: getNativeSettingsText(DOM.soundToggleLabel, "Sound"),
      soundEnabled: SETTINGS.soundEnabled !== false,
      hapticLabel: getNativeSettingsText(DOM.hapticToggleLabel, "Haptics"),
      hapticEnabled: SETTINGS.hapticEnabled !== false,
      reminderLabel: getNativeSettingsText(
        DOM.studyReminderToggleLabel,
        "Study reminder",
      ),
      reminderEnabled: SETTINGS.studyReminderEnabled === true,
      reminderTimeLabel: getNativeSettingsText(
        DOM.studyReminderTimeLabel,
        "Reminder time",
      ),
      reminderTime: getNativeSettingsSelect(DOM.studyReminderTime),
      feedbackLabel: getNativeSettingsText(
        DOM.settingsFeedbackBtn,
        "Send feedback",
      ),
    },
  };
}

function dispatchNativeSettingsAction(detail = {}) {
  const action = detail.action;
  const value = detail.value;

  const click = (element) => element?.click();
  const change = (element, nextValue) => {
    if (!element || !nextValue || element.value === nextValue) return;
    element.value = nextValue;
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };

  switch (action) {
    case "ui_language":
      change(DOM.settingsUiLang, value);
      break;
    case "study_language":
      change(DOM.settingsStudyLang, value);
      break;
    case "sound":
      click(DOM.soundToggle);
      break;
    case "haptic":
      click(DOM.hapticToggle);
      break;
    case "reminder":
      click(DOM.studyReminderToggle);
      break;
    case "reminder_time":
      change(DOM.studyReminderTime, value);
      break;
    case "sign_in_apple":
      click(DOM.accountAppleLoginBtn);
      break;
    case "sign_in_google":
      click(DOM.accountGoogleLoginBtn);
      break;
    case "sign_out":
      click(DOM.accountSignOutBtn);
      break;
    case "sync_check":
      click(DOM.accountSyncCheckBtn);
      break;
    case "sync_upload":
      click(DOM.accountSyncUploadBtn);
      break;
    case "sync_download":
      click(DOM.accountSyncDownloadBtn);
      break;
    case "feedback":
      click(DOM.settingsFeedbackBtn);
      break;
    default:
      return;
  }

  // Most actions update synchronously. Async auth/sync/reminder changes are
  // observed below and publish another snapshot when their DOM state changes.
  scheduleNativeChromeUpdate({ force: true });
}

function initNativeSettingsBridge() {
  if (NATIVE_SETTINGS_LISTENER_READY) return;
  NATIVE_SETTINGS_LISTENER_READY = true;

  const plugin = getNativeChromePlugin();
  if (plugin && typeof plugin.addListener === "function") {
    plugin.addListener("settingsAction", dispatchNativeSettingsAction);
  }

  if (DOM.settingsView && typeof MutationObserver !== "undefined") {
    NATIVE_SETTINGS_OBSERVER = new MutationObserver(() => {
      scheduleNativeChromeUpdate({ force: true });
    });
    NATIVE_SETTINGS_OBSERVER.observe(DOM.settingsView, {
      attributes: true,
      attributeFilter: ["hidden", "disabled", "class"],
      childList: true,
      subtree: true,
      characterData: true,
    });
  }
}
