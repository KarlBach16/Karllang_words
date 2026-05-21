// Study reminder notification scheduling and settings helpers.

const NativeLocalNotifications = window.Capacitor
  ? (window.Capacitor.Plugins &&
      window.Capacitor.Plugins.LocalNotifications) ||
    window.Capacitor.LocalNotifications ||
    null
  : null;

const NativeAppSettings = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeAppSettings) ||
    window.Capacitor.NativeAppSettings ||
    null
  : null;

const STUDY_REMINDER_NOTIFICATION_ID = 20260507;
const DEFAULT_STUDY_REMINDER_TIME = "20:30";

function isStudyReminderSupported() {
  return isNativePlatform() && !!NativeLocalNotifications;
}

function normalizeReminderTime(value) {
  const raw = String(value || "").trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return DEFAULT_STUDY_REMINDER_TIME;

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return DEFAULT_STUDY_REMINDER_TIME;
  }
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatReminderTimeLabel(time) {
  const normalized = normalizeReminderTime(time);
  const [hourRaw, minuteRaw] = normalized.split(":");
  const hour = Number(hourRaw);
  const suffix = hour < 12 ? "AM" : "PM";
  const displayHour = hour % 12 || 12;
  return `${suffix} ${String(displayHour).padStart(2, "0")}:${minuteRaw}`;
}

function populateStudyReminderTimeSelect() {
  if (!DOM.studyReminderTime) return;

  const current = normalizeReminderTime(
    SETTINGS.studyReminderTime || DEFAULT_STUDY_REMINDER_TIME,
  );
  DOM.studyReminderTime.innerHTML = "";

  for (let hour = 0; hour < 24; hour += 1) {
    for (const minute of [0, 30]) {
      const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0",
      )}`;
      const option = document.createElement("option");
      option.value = value;
      option.textContent = formatReminderTimeLabel(value);
      DOM.studyReminderTime.appendChild(option);
    }
  }

  DOM.studyReminderTime.value = current;
}

function getStudyReminderTimeParts() {
  const time = normalizeReminderTime(SETTINGS.studyReminderTime);
  const [hour, minute] = time.split(":").map((part) => Number(part));
  return { hour, minute, time };
}

function getSystemNotificationLang() {
  const raw =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    "en";
  const base = raw.toString().split("-")[0].toLowerCase();
  return TRANSLATIONS && TRANSLATIONS[base] ? base : "en";
}

function getReminderTranslation(key, fallback) {
  const lang = getSystemNotificationLang();
  const pack = (TRANSLATIONS && TRANSLATIONS[lang]) || TRANSLATIONS.en || {};
  return pack[key] || fallback;
}

function getStudyReminderNotificationText() {
  return {
    title: getReminderTranslation(
      "study_reminder_notification_title",
      "KarlLang",
    ),
    body: getReminderTranslation(
      "study_reminder_notification_body",
      "기억은 생각보다 빨리 흐려져요. 오늘 배운 단어를 한 번만 다시 떠올려보세요.",
    ),
  };
}

async function cancelStudyReminderNotification() {
  if (!isStudyReminderSupported()) return;
  try {
    await NativeLocalNotifications.cancel({
      notifications: [{ id: STUDY_REMINDER_NOTIFICATION_ID }],
    });
  } catch {
    // ignore
  }
}

async function getStudyReminderPermissionDisplay() {
  if (!isStudyReminderSupported()) return "unsupported";
  try {
    const permission = await NativeLocalNotifications.checkPermissions();
    return permission && permission.display ? permission.display : "prompt";
  } catch {
    return "unknown";
  }
}

function canOpenNativeAppSettings() {
  return !!(
    isNativePlatform() &&
    NativeAppSettings &&
    typeof NativeAppSettings.openAppSettings === "function"
  );
}

async function openNativeAppSettings() {
  if (!canOpenNativeAppSettings()) return false;
  try {
    await NativeAppSettings.openAppSettings();
    return true;
  } catch {
    return false;
  }
}

async function scheduleStudyReminderNotification({ requestPermission = true } = {}) {
  if (!isStudyReminderSupported()) return false;

  try {
    let permission = await NativeLocalNotifications.checkPermissions();
    if (permission.display !== "granted" && requestPermission) {
      permission = await NativeLocalNotifications.requestPermissions();
      if (permission.display !== "granted") {
        permission = await NativeLocalNotifications.checkPermissions();
      }
    }
    if (permission.display !== "granted") return false;

    const text = getStudyReminderNotificationText();
    const reminderTime = getStudyReminderTimeParts();
    await cancelStudyReminderNotification();
    await NativeLocalNotifications.schedule({
      notifications: [
        {
          id: STUDY_REMINDER_NOTIFICATION_ID,
          title: text.title,
          body: text.body,
          schedule: {
            on: {
              hour: reminderTime.hour,
              minute: reminderTime.minute,
            },
            repeats: true,
          },
        },
      ],
    });
    return true;
  } catch {
    return false;
  }
}

function updateStudyReminderToggle() {
  if (!DOM.studyReminderToggle) return;
  DOM.studyReminderToggle.classList.toggle(
    "is-on",
    SETTINGS.studyReminderEnabled === true,
  );
}

async function setStudyReminderEnabled(enabled) {
  if (!isStudyReminderSupported()) {
    SETTINGS.studyReminderEnabled = false;
    saveSettings();
    updateStudyReminderToggle();
    showSystemToast(
      trKey("settings.reminder.unsupported", "앱에서만 알림을 사용할 수 있습니다."),
    );
    return;
  }

  if (!enabled) {
    SETTINGS.studyReminderEnabled = false;
    saveSettings();
    updateStudyReminderToggle();
    await cancelStudyReminderNotification();
    return;
  }

  const scheduled = await scheduleStudyReminderNotification({
    requestPermission: true,
  });
  SETTINGS.studyReminderEnabled = scheduled;
  saveSettings();
  updateStudyReminderToggle();

  if (scheduled) {
    showSystemToast(
      trKey("settings.reminder.enabled", "매일 저녁 학습 알림을 보냅니다."),
    );
    return;
  }

  const permissionDisplay = await getStudyReminderPermissionDisplay();
  showSystemToast(
    permissionDisplay === "denied"
      ? trKey(
          "settings.reminder.open_settings",
          "기기 설정에서 알림을 허용해 주세요.",
        )
      : trKey("settings.reminder.denied", "알림 권한이 허용되지 않았습니다."),
  );

  if (permissionDisplay === "denied") {
    setTimeout(() => {
      openNativeAppSettings();
    }, 350);
  }
}

function ensureStudyReminderSchedule() {
  if (!SETTINGS.studyReminderEnabled || !isStudyReminderSupported()) return;
  scheduleStudyReminderNotification({ requestPermission: false });
}
