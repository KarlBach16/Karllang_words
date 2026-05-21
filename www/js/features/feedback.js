// Feedback mail helpers and lightweight device/app-version detection.

function detectOsName() {
  const ua = (navigator.userAgent || "").toLowerCase();

  if (ua.includes("android")) return "Android";
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod"))
    return "iOS";
  if (ua.includes("windows nt")) return "Windows";
  if (ua.includes("mac os x")) return "macOS";
  if (ua.includes("linux")) return "Linux";
  return "unknown";
}

function detectDeviceName() {
  const ua = (navigator.userAgent || "").toLowerCase();

  if (ua.includes("iphone")) return "iPhone";
  if (ua.includes("ipad")) return "iPad";
  if (ua.includes("android")) return "Android device";

  if (window.Capacitor && typeof window.Capacitor.getPlatform === "function") {
    const platform = window.Capacitor.getPlatform();
    if (platform) return platform;
  }

  return "unknown";
}

let FEEDBACK_APP_VERSION_CACHE = null;

async function getAppVersionForFeedback() {
  if (FEEDBACK_APP_VERSION_CACHE) return FEEDBACK_APP_VERSION_CACHE;

  if (NativeApp && typeof NativeApp.getInfo === "function") {
    try {
      const info = await NativeApp.getInfo();
      const nativeVersion = info && (info.version || info.build);
      if (nativeVersion) {
        FEEDBACK_APP_VERSION_CACHE = String(nativeVersion);
        return FEEDBACK_APP_VERSION_CACHE;
      }
    } catch (e) {}
  }

  if (typeof window !== "undefined") {
    if (window.APP_VERSION) {
      FEEDBACK_APP_VERSION_CACHE = String(window.APP_VERSION);
      return FEEDBACK_APP_VERSION_CACHE;
    }
    if (window.__APP_VERSION__) {
      FEEDBACK_APP_VERSION_CACHE = String(window.__APP_VERSION__);
      return FEEDBACK_APP_VERSION_CACHE;
    }
  }

  FEEDBACK_APP_VERSION_CACHE = "unknown";
  return FEEDBACK_APP_VERSION_CACHE;
}

async function openFeedbackMail() {
  const to = "karllang.app@gmail.com";
  const subject = "KarlLang Feedback";
  const uiLang = SETTINGS.uiLang || CURRENT_LANG || "unknown";
  const studyLang = SETTINGS.studyLang || "unknown";
  const appVersion = await getAppVersionForFeedback();
  const device = detectDeviceName();
  const os = detectOsName();

  const body =
    `App version: ${appVersion}\n` +
    `UI language: ${uiLang}\n` +
    `Study language: ${studyLang}\n` +
    `Device: ${device}\n` +
    `OS: ${os}\n\n` +
    "Feedback:\n";

  const href =
    `mailto:${encodeURIComponent(to)}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = href;
}
