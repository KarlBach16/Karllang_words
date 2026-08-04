// App settings defaults, language guards, and persistence.

// 앱 버전은 UI/기능 업데이트 추적용이다. 학습기록 리셋 조건으로 쓰지 않는다.
const APP_VERSION = "1.0.0";

if (typeof window !== "undefined") {
  window.APP_VERSION = APP_VERSION;
  window.__APP_VERSION__ = APP_VERSION;
}

// 지금 사용하는 단어 세트 버전.
// 이 값이 바뀌어도 기본은 migration/보존이며, 단어 ID 체계가 깨질 때만 리셋한다.
const DATA_VERSION = "karllang_words_v1_2_20260804";
const USER_DATA_SCHEMA_VERSION = "2";

const DEFAULT_SETTINGS = {
  mode: "copy",
  goalTyping: 5,
  goalCard: 5,
  newWordCefr: "A1",
  uiLang: "ko",
  studyLang: "de",
  soundEnabled: true,
  newWordCategory: "all",
  appVersion: APP_VERSION,
  dataVersion: DATA_VERSION,
  seenOnboarding: false,
  hapticEnabled: true,
  studyReminderEnabled: false,
  studyReminderTime: "20:30",
};

const ENABLE_MULTI_STUDY_LANG = false;
const ALLOWED_STUDY_LANGS = ENABLE_MULTI_STUDY_LANG
  ? [
      "de",
      "es",
      "en",
      "fr",
      "it",
      "pt",
      "pl",
      "nl",
      "ru",
      "sv",
      "ko",
      "ja",
      "zh",
    ]
  : [
      "de",
      "es",
      "en",
      "fr",
      "it",
      "pt",
      "pl",
      "nl",
      "ru",
      "sv",
      "ko",
      "ja",
      "zh",
    ];

const UI_LANG_CODES = [
  "ko",
  "en",
  "de",
  "es",
  "fr",
  "it",
  "pt",
  "ja",
  "zh",
  "ru",
];

function sanitizeStudyLang() {
  const lang = (SETTINGS.studyLang || "de").toLowerCase();
  if (!ALLOWED_STUDY_LANGS.includes(lang)) {
    SETTINGS.studyLang = "de";
    // 저장값까지 즉시 정리 (다음 실행 때도 유지되도록)
    saveSettings();
  }
}

function sanitizeUiLang() {
  const lang = (SETTINGS.uiLang || "ko").toLowerCase();
  if (!UI_LANG_CODES.includes(lang)) {
    SETTINGS.uiLang = "ko";
    CURRENT_LANG = SETTINGS.uiLang;
    saveSettings();
  }
}

function normalizeStudyMode(mode) {
  if (mode === "copy_de") return "copy";
  if (mode === "typing_de") return "typing";
  if (mode === "cram" || mode === "mix" || mode === "word_drop") return "copy";
  if (["card", "copy", "typing"].includes(mode)) return mode;
  return "copy";
}

function detectInitialUiLang() {
  if (typeof navigator === "undefined") {
    return "en"; // 브라우저 아닌 환경 대비 안전장치
  }

  const navLang = (
    navigator.language ||
    navigator.userLanguage ||
    "en"
  ).toLowerCase();

  if (navLang.startsWith("ko")) return "ko";
  if (navLang.startsWith("de")) return "de";
  if (navLang.startsWith("ja")) return "ja";
  if (navLang.startsWith("zh")) return "zh";
  if (navLang.startsWith("es")) return "es";
  if (navLang.startsWith("fr")) return "fr";
  if (navLang.startsWith("it")) return "it";
  if (navLang.startsWith("pt")) return "pt";
  if (navLang.startsWith("ru")) return "ru";

  return "en"; // 기본값
}

function loadSettings() {
  migrateUserData();

  const raw = safeGet(STORAGE_KEYS.SETTINGS);

  // 1) 첫 방문(저장값 없음)
  if (!raw) {
    SETTINGS = { ...DEFAULT_SETTINGS };

    // 첫 방문일 때 브라우저 언어 기준으로 UI 언어 추정
    const guessed = detectInitialUiLang();
    SETTINGS.uiLang = guessed;
    CURRENT_LANG = SETTINGS.uiLang;

    // UI/학습 언어 강제 정리(안전장치)
    sanitizeUiLang();
    sanitizeStudyLang();

    return;
  }

  // 2) 저장값 있음
  try {
    const parsed = JSON.parse(raw);
    SETTINGS = { ...DEFAULT_SETTINGS, ...parsed };

    const normalizedMode = normalizeStudyMode(SETTINGS.mode);

    CURRENT_LANG = SETTINGS.uiLang || "ko";

    // 저장값 강제 정리
    sanitizeUiLang();
    sanitizeStudyLang();

    let shouldSaveSettings = false;

    if (SETTINGS.mode !== normalizedMode) {
      SETTINGS.mode = normalizedMode;
      shouldSaveSettings = true;
    }

    if (SETTINGS.appVersion !== APP_VERSION) {
      SETTINGS.appVersion = APP_VERSION;
      shouldSaveSettings = true;
    }

    // 단어 데이터 버전 변경은 기본적으로 기록을 보존한다.
    // 단어 ID 체계가 깨지는 버전만 shouldResetLearningDataForDataVersion에 등록해 리셋한다.
    const study = (SETTINGS.studyLang || "de").toLowerCase();
    const previousDataVersion = SETTINGS.dataVersion || "";
    if (previousDataVersion !== DATA_VERSION) {
      if (
        shouldResetLearningDataForDataVersion(previousDataVersion, DATA_VERSION)
      ) {
        resetSrsForLang(study);
        resetStatsForLang(study);
        resetWordStatsForLang(study);
      }

      SETTINGS.dataVersion = DATA_VERSION;
      shouldSaveSettings = true;
    }
    if (typeof SETTINGS.seenOnboarding === "undefined") {
      SETTINGS.seenOnboarding = false;
      shouldSaveSettings = true;
    }

    if (shouldSaveSettings) {
      saveSettings();
    }
  } catch {
    SETTINGS = { ...DEFAULT_SETTINGS };
    CURRENT_LANG = SETTINGS.uiLang || "ko";

    // 파싱 실패 시에도 강제 정리
    sanitizeUiLang();
    sanitizeStudyLang();
  }
}

function saveSettings() {
  safeSet(STORAGE_KEYS.SETTINGS, JSON.stringify(SETTINGS));
  if (typeof scheduleAutoSyncPush === "function") {
    scheduleAutoSyncPush("settings");
  }
}
