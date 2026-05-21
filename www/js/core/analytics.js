// Analytics helpers. Native logging is used only when Capacitor exposes it.

async function logAnalyticsEvent(name, params = {}) {
  const nativeAnalytics = window.Capacitor?.Plugins?.NativeAnalytics;
  if (window.Capacitor?.isNativePlatform?.() && nativeAnalytics?.logEvent) {
    try {
      await nativeAnalytics.logEvent({ name, params });
    } catch (e) {
      console.error("[analytics] error", e);
    }
  }
}

function getSessionAnalyticsParams() {
  return {
    study_lang: SETTINGS.studyLang,
    ui_lang: CURRENT_LANG,
    mode: SETTINGS.mode,
    cefr: SETTINGS.newWordCefr,
    category: SETTINGS.newWordCategory,
  };
}

function getTabAnalyticsName(view) {
  const map = {
    user: "home",
    study: "study",
    training: "training",
    words: "words",
    settings: "settings",
  };
  return map[view] || null;
}

function logLanguageChange(eventName, fromLang, toLang) {
  if (!fromLang || !toLang || fromLang === toLang) return;
  logAnalyticsEvent(eventName, {
    from_lang: fromLang,
    to_lang: toLang,
  });
}
