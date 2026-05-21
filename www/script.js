// KarlLang v10 - typing/card/copy modes, CEFR progress, search, TTS/bookmark

// ============================================
// ========== 0. DATA LAYER (NEW SCHEMA) ======
// ============================================

const WORDS_DE_A1_SAFE = typeof WORDS_DE_A1 !== "undefined" ? WORDS_DE_A1 : [];
const WORDS_DE_A2_SAFE = typeof WORDS_DE_A2 !== "undefined" ? WORDS_DE_A2 : [];
const WORDS_DE_B1_SAFE = typeof WORDS_DE_B1 !== "undefined" ? WORDS_DE_B1 : [];
const WORDS_DE_B2_SAFE = typeof WORDS_DE_B2 !== "undefined" ? WORDS_DE_B2 : [];

const WORDS_ES_A1_SAFE = typeof WORDS_ES_A1 !== "undefined" ? WORDS_ES_A1 : [];
const WORDS_ES_A2_SAFE = typeof WORDS_ES_A2 !== "undefined" ? WORDS_ES_A2 : [];
const WORDS_ES_B1_SAFE = typeof WORDS_ES_B1 !== "undefined" ? WORDS_ES_B1 : [];
const WORDS_ES_B2_SAFE = typeof WORDS_ES_B2 !== "undefined" ? WORDS_ES_B2 : [];
const WORDS_EN_A1_SAFE = typeof WORDS_EN_A1 !== "undefined" ? WORDS_EN_A1 : [];
const WORDS_EN_A2_SAFE = typeof WORDS_EN_A2 !== "undefined" ? WORDS_EN_A2 : [];
const WORDS_EN_B1_SAFE = typeof WORDS_EN_B1 !== "undefined" ? WORDS_EN_B1 : [];
const WORDS_EN_B2_SAFE = typeof WORDS_EN_B2 !== "undefined" ? WORDS_EN_B2 : [];
const WORDS_FR_A1_SAFE = typeof WORDS_FR_A1 !== "undefined" ? WORDS_FR_A1 : [];
const WORDS_FR_A2_SAFE = typeof WORDS_FR_A2 !== "undefined" ? WORDS_FR_A2 : [];
const WORDS_FR_B1_SAFE = typeof WORDS_FR_B1 !== "undefined" ? WORDS_FR_B1 : [];
const WORDS_FR_B2_SAFE = typeof WORDS_FR_B2 !== "undefined" ? WORDS_FR_B2 : [];
const WORDS_IT_A1_SAFE = typeof WORDS_IT_A1 !== "undefined" ? WORDS_IT_A1 : [];
const WORDS_IT_A2_SAFE = typeof WORDS_IT_A2 !== "undefined" ? WORDS_IT_A2 : [];
const WORDS_IT_B1_SAFE = typeof WORDS_IT_B1 !== "undefined" ? WORDS_IT_B1 : [];
const WORDS_IT_B2_SAFE = typeof WORDS_IT_B2 !== "undefined" ? WORDS_IT_B2 : [];
const WORDS_PT_A1_SAFE = typeof WORDS_PT_A1 !== "undefined" ? WORDS_PT_A1 : [];
const WORDS_PT_A2_SAFE = typeof WORDS_PT_A2 !== "undefined" ? WORDS_PT_A2 : [];
const WORDS_PT_B1_SAFE = typeof WORDS_PT_B1 !== "undefined" ? WORDS_PT_B1 : [];
const WORDS_PT_B2_SAFE = typeof WORDS_PT_B2 !== "undefined" ? WORDS_PT_B2 : [];
const WORDS_PL_A1_SAFE = typeof WORDS_PL_A1 !== "undefined" ? WORDS_PL_A1 : [];
const WORDS_PL_A2_SAFE = typeof WORDS_PL_A2 !== "undefined" ? WORDS_PL_A2 : [];
const WORDS_PL_B1_SAFE = typeof WORDS_PL_B1 !== "undefined" ? WORDS_PL_B1 : [];
const WORDS_PL_B2_SAFE = typeof WORDS_PL_B2 !== "undefined" ? WORDS_PL_B2 : [];
const WORDS_NL_A1_SAFE = typeof WORDS_NL_A1 !== "undefined" ? WORDS_NL_A1 : [];
const WORDS_NL_A2_SAFE = typeof WORDS_NL_A2 !== "undefined" ? WORDS_NL_A2 : [];
const WORDS_NL_B1_SAFE = typeof WORDS_NL_B1 !== "undefined" ? WORDS_NL_B1 : [];
const WORDS_NL_B2_SAFE = typeof WORDS_NL_B2 !== "undefined" ? WORDS_NL_B2 : [];
const WORDS_RU_A1_SAFE = typeof WORDS_RU_A1 !== "undefined" ? WORDS_RU_A1 : [];
const WORDS_RU_A2_SAFE = typeof WORDS_RU_A2 !== "undefined" ? WORDS_RU_A2 : [];
const WORDS_RU_B1_SAFE = typeof WORDS_RU_B1 !== "undefined" ? WORDS_RU_B1 : [];
const WORDS_RU_B2_SAFE = typeof WORDS_RU_B2 !== "undefined" ? WORDS_RU_B2 : [];
const WORDS_SV_A1_SAFE = typeof WORDS_SV_A1 !== "undefined" ? WORDS_SV_A1 : [];
const WORDS_SV_A2_SAFE = typeof WORDS_SV_A2 !== "undefined" ? WORDS_SV_A2 : [];
const WORDS_SV_B1_SAFE = typeof WORDS_SV_B1 !== "undefined" ? WORDS_SV_B1 : [];
const WORDS_SV_B2_SAFE = typeof WORDS_SV_B2 !== "undefined" ? WORDS_SV_B2 : [];
const WORDS_KO_A1_SAFE = typeof WORDS_KO_A1 !== "undefined" ? WORDS_KO_A1 : [];
const WORDS_KO_A2_SAFE = typeof WORDS_KO_A2 !== "undefined" ? WORDS_KO_A2 : [];
const WORDS_KO_B1_SAFE = typeof WORDS_KO_B1 !== "undefined" ? WORDS_KO_B1 : [];
const WORDS_KO_B2_SAFE = typeof WORDS_KO_B2 !== "undefined" ? WORDS_KO_B2 : [];
const WORDS_JA_A1_SAFE = typeof WORDS_JA_A1 !== "undefined" ? WORDS_JA_A1 : [];
const WORDS_JA_A2_SAFE = typeof WORDS_JA_A2 !== "undefined" ? WORDS_JA_A2 : [];
const WORDS_JA_B1_SAFE = typeof WORDS_JA_B1 !== "undefined" ? WORDS_JA_B1 : [];
const WORDS_JA_B2_SAFE = typeof WORDS_JA_B2 !== "undefined" ? WORDS_JA_B2 : [];
const WORDS_ZH_A1_SAFE = typeof WORDS_ZH_A1 !== "undefined" ? WORDS_ZH_A1 : [];
const WORDS_ZH_A2_SAFE = typeof WORDS_ZH_A2 !== "undefined" ? WORDS_ZH_A2 : [];
const WORDS_ZH_B1_SAFE = typeof WORDS_ZH_B1 !== "undefined" ? WORDS_ZH_B1 : [];
const WORDS_ZH_B2_SAFE = typeof WORDS_ZH_B2 !== "undefined" ? WORDS_ZH_B2 : [];

const ALL_WORDS_DE = [
  ...WORDS_DE_A1_SAFE,
  ...WORDS_DE_A2_SAFE,
  ...WORDS_DE_B1_SAFE,
  ...WORDS_DE_B2_SAFE,
];

const ALL_WORDS_ES = [
  ...WORDS_ES_A1_SAFE,
  ...WORDS_ES_A2_SAFE,
  ...WORDS_ES_B1_SAFE,
  ...WORDS_ES_B2_SAFE,
];

const ALL_WORDS_EN = [
  ...WORDS_EN_A1_SAFE,
  ...WORDS_EN_A2_SAFE,
  ...WORDS_EN_B1_SAFE,
  ...WORDS_EN_B2_SAFE,
];

const ALL_WORDS_FR = [
  ...WORDS_FR_A1_SAFE,
  ...WORDS_FR_A2_SAFE,
  ...WORDS_FR_B1_SAFE,
  ...WORDS_FR_B2_SAFE,
];

const ALL_WORDS_IT = [
  ...WORDS_IT_A1_SAFE,
  ...WORDS_IT_A2_SAFE,
  ...WORDS_IT_B1_SAFE,
  ...WORDS_IT_B2_SAFE,
];

const ALL_WORDS_PT = [
  ...WORDS_PT_A1_SAFE,
  ...WORDS_PT_A2_SAFE,
  ...WORDS_PT_B1_SAFE,
  ...WORDS_PT_B2_SAFE,
];

const ALL_WORDS_PL = [
  ...WORDS_PL_A1_SAFE,
  ...WORDS_PL_A2_SAFE,
  ...WORDS_PL_B1_SAFE,
  ...WORDS_PL_B2_SAFE,
];

const ALL_WORDS_NL = [
  ...WORDS_NL_A1_SAFE,
  ...WORDS_NL_A2_SAFE,
  ...WORDS_NL_B1_SAFE,
  ...WORDS_NL_B2_SAFE,
];

const ALL_WORDS_RU = [
  ...WORDS_RU_A1_SAFE,
  ...WORDS_RU_A2_SAFE,
  ...WORDS_RU_B1_SAFE,
  ...WORDS_RU_B2_SAFE,
];

const ALL_WORDS_SV = [
  ...WORDS_SV_A1_SAFE,
  ...WORDS_SV_A2_SAFE,
  ...WORDS_SV_B1_SAFE,
  ...WORDS_SV_B2_SAFE,
];
const ALL_WORDS_KO = [
  ...WORDS_KO_A1_SAFE,
  ...WORDS_KO_A2_SAFE,
  ...WORDS_KO_B1_SAFE,
  ...WORDS_KO_B2_SAFE,
];
const ALL_WORDS_JA = [
  ...WORDS_JA_A1_SAFE,
  ...WORDS_JA_A2_SAFE,
  ...WORDS_JA_B1_SAFE,
  ...WORDS_JA_B2_SAFE,
];
const ALL_WORDS_ZH = [
  ...WORDS_ZH_A1_SAFE,
  ...WORDS_ZH_A2_SAFE,
  ...WORDS_ZH_B1_SAFE,
  ...WORDS_ZH_B2_SAFE,
];

/* ============================================
   ========== 1. GLOBAL CONSTANTS & STATE ======
   ============================================ */

const STORAGE_KEYS = {
  SETTINGS: "karllang_settings_v3",
  SRS_PREFIX: "karllang_word_", // 여기는 그대로 두고
  STATS: "karllang_stats_v4", // ✅ 언어별 통계용 새 버전
  WORD_STATS: "karllang_word_stats_v4", // ✅ 언어별 북마크/틀린단어용 새 버전
  DAILY_SUMMARY: "karllang_daily_summary_v1",
  ATTENDANCE: "karllang_attendance_v1",
  STUDY_WORD_SET: "karllang_study_word_set_v1",
  USER_DATA_SCHEMA: "karllang_user_data_schema_v1",
};

function getCurrentStudyLang() {
  return (SETTINGS.studyLang || "de").toLowerCase();
}
// 앱 버전은 UI/기능 업데이트 추적용이다. 학습기록 리셋 조건으로 쓰지 않는다.
const APP_VERSION = "1.0.0";

if (typeof window !== "undefined") {
  window.APP_VERSION = APP_VERSION;
  window.__APP_VERSION__ = APP_VERSION;
}

// 🔢 지금 사용하는 단어 세트 버전.
// 이 값이 바뀌어도 기본은 migration/보존이며, 단어 ID 체계가 깨질 때만 리셋한다.
const DATA_VERSION = "karllang_words_v1_1_20260509";
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
// ✅ v1: 학습 언어는 독일어/스페인어 노출/허용
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

const SRS_LEVELS = [0, 1, 2, 3, 4, 5];
const SRS_INTERVALS = [0, 1, 2, 4, 7, 15];

const APP_STATE = {
  phase: "READY", // READY, QUESTION, ANSWER, FINISHED
  currentCard: null,
  queue: [],
  completed: 0,
  totalTarget: 0,
  newCount: 0,
  reviewCount: 0,
  sessionMode: null,
  sessionCorrectCount: 0,
  sessionWrongCount: 0,
  sessionHardCount: 0,
  sessionNormalCount: 0,
  sessionEasyCount: 0,
  sessionSummarySaved: false,
  sessionWrongWords: [],
  currentView: "study",
};

let SETTINGS = { ...DEFAULT_SETTINGS };
let CURRENT_LANG = "ko";
// 🔹 훈련소 모드 활성화 여부 (정규 학습 vs 훈련소 구분용)
let TRAINING_MODE_ACTIVE = false;
let TRAINING_MODE_KIND = "none"; // "typing" | "copy" | "mix"
let TRAINING_MIX_WORDS = []; // Mix 모드에서 쓸 단어 리스트
let TRAINING_MIX_INDEX = 0; // 현재 몇 번째 단어인지
let TRAINING_MIX_STEP = 0; // 0=카드, 1=카피, 2=타이핑

const DOM = {};

// ===== UI 언어 메타 정보 =====
const LANG_META = {
  ko: { name_local: "한국어", name_en: "Korean" },
  en: { name_local: "English", name_en: "English" },
  de: { name_local: "Deutsch", name_en: "German" },
  es: { name_local: "Español", name_en: "Spanish" },
  fr: { name_local: "Français", name_en: "French" },
  it: { name_local: "Italiano", name_en: "Italian" },
  pt: { name_local: "Português", name_en: "Portuguese" },
  pl: { name_local: "Polski", name_en: "Polish" },
  nl: { name_local: "Nederlands", name_en: "Dutch" },
  ja: { name_local: "日本語", name_en: "Japanese" },
  zh: { name_local: "中文", name_en: "Chinese" },
  ru: { name_local: "Русский", name_en: "Russian" },
  sv: { name_local: "Svenska", name_en: "Swedish" },
};

// ✅ UI 언어 드롭다운 라벨: UI 언어 기준으로 이름 바꾸기
function getUiLangLabel(code, uiLang) {
  if (!code) return "";

  // 공통 fallback: 메타 정보 → 코드 대문자
  const fallback = () => {
    const meta = LANG_META[code] || {};
    return meta.name_local || meta.name_en || code.toUpperCase();
  };

  switch (uiLang) {
    case "ko": {
      const map = {
        ko: "한국어",
        en: "영어",
        de: "독일어",
        es: "스페인어",
        fr: "프랑스어",
        it: "이탈리아어",
        pt: "포르투갈어",
        pl: "폴란드어",
        nl: "네덜란드어",
        ja: "일본어",
        zh: "중국어",
        ru: "러시아어",
      };
      return map[code] || fallback();
    }

    case "en": {
      const map = {
        ko: "Korean",
        en: "English",
        de: "German",
        es: "Spanish",
        fr: "French",
        it: "Italian",
        pt: "Portuguese",
        pl: "Polish",
        nl: "Dutch",
        ja: "Japanese",
        zh: "Chinese",
        ru: "Russian",
      };
      return map[code] || fallback();
    }

    case "de": {
      const map = {
        ko: "Koreanisch",
        en: "Englisch",
        de: "Deutsch",
        es: "Spanisch",
        fr: "Französisch",
        it: "Italienisch",
        pt: "Portugiesisch",
        pl: "Polnisch",
        nl: "Niederländisch",
        ja: "Japanisch",
        zh: "Chinesisch",
        ru: "Russisch",
      };
      return map[code] || fallback();
    }

    case "es": {
      const map = {
        ko: "coreano",
        en: "inglés",
        de: "alemán",
        es: "español",
        fr: "francés",
        it: "italiano",
        pt: "portugués",
        pl: "polaco",
        nl: "neerlandés",
        ja: "japonés",
        zh: "chino",
        ru: "ruso",
      };
      return map[code] || fallback();
    }

    case "fr": {
      const map = {
        ko: "coréen",
        en: "anglais",
        de: "allemand",
        es: "espagnol",
        fr: "français",
        it: "italien",
        pt: "portugais",
        pl: "polonais",
        nl: "néerlandais",
        ja: "japonais",
        zh: "chinois",
        ru: "russe",
      };
      return map[code] || fallback();
    }

    case "it": {
      const map = {
        ko: "coreano",
        en: "inglese",
        de: "tedesco",
        es: "spagnolo",
        fr: "francese",
        it: "italiano",
        pt: "portoghese",
        pl: "polacco",
        nl: "olandese",
        ja: "giapponese",
        zh: "cinese",
        ru: "russo",
      };
      return map[code] || fallback();
    }

    case "pt": {
      const map = {
        ko: "coreano",
        en: "inglês",
        de: "alemão",
        es: "espanhol",
        fr: "francês",
        it: "italiano",
        pt: "português",
        pl: "polonês",
        nl: "neerlandês",
        ja: "japonês",
        zh: "chinês",
        ru: "russo",
      };
      return map[code] || fallback();
    }

    case "ja": {
      const map = {
        ko: "韓国語",
        en: "英語",
        de: "ドイツ語",
        es: "スペイン語",
        fr: "フランス語",
        it: "イタリア語",
        pt: "ポルトガル語",
        pl: "ポーランド語",
        nl: "オランダ語",
        ja: "日本語",
        zh: "中国語",
        ru: "ロシア語",
      };
      return map[code] || fallback();
    }

    case "zh": {
      // 간체 기준
      const map = {
        ko: "韩语",
        en: "英语",
        de: "德语",
        es: "西班牙语",
        fr: "法语",
        it: "意大利语",
        pt: "葡萄牙语",
        pl: "波兰语",
        nl: "荷兰语",
        ja: "日语",
        zh: "中文",
        ru: "俄语",
      };
      return map[code] || fallback();
    }

    case "ru": {
      const map = {
        ko: "корейский",
        en: "английский",
        de: "немецкий",
        es: "испанский",
        fr: "французский",
        it: "итальянский",
        pt: "португальский",
        pl: "польский",
        nl: "нидерландский",
        ja: "японский",
        zh: "китайский",
        ru: "русский",
      };
      return map[code] || fallback();
    }

    default:
      return fallback();
  }
}

function getFeedbackButtonLabel(uiLang) {
  const map = {
    ko: "피드백 보내기",
    en: "Send Feedback",
    de: "Feedback senden",
    es: "Enviar comentarios",
    fr: "Envoyer un retour",
    it: "Invia feedback",
    pt: "Enviar feedback",
    ja: "フィードバックを送る",
    zh: "发送反馈",
    ru: "Отправить отзыв",
  };
  return map[uiLang] || map.en;
}

function refreshUiLangSelectLabels() {
  const uiLang = CURRENT_LANG || "ko";
  [DOM.startUiLang, DOM.settingsUiLang].forEach((select) => {
    if (!select) return;
    Array.from(select.options).forEach((opt) => {
      const code = opt.value;
      if (!code) return;
      opt.textContent = getUiLangLabel(code, uiLang);
    });
  });
}

// ==========================================
// [Haptics] 진동 유틸 (네이티브 + PWA 겸용)
// ==========================================
// 🔹 햅틱 플러그인 래퍼 (Capacitor 5/6 둘 다 커버)
const NativeHaptics = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics) ||
    window.Capacitor.Haptics ||
    null
  : null;

async function triggerHaptic(type) {
  // 설정에서 끄면 바로 무시
  if (window.SETTINGS && SETTINGS.hapticEnabled === false) {
    return;
  }

  // 1) 네이티브 햅틱 우선
  if (NativeHaptics) {
    try {
      switch (type) {
        case "light":
          await NativeHaptics.impact({ style: "LIGHT" });
          break;
        case "medium":
          await NativeHaptics.impact({ style: "MEDIUM" });
          break;
        case "success":
          await NativeHaptics.notification({ type: "SUCCESS" });
          break;
        case "error":
          await NativeHaptics.notification({ type: "ERROR" });
          break;
        default:
          await NativeHaptics.vibrate();
          break;
      }
      return; // 네이티브에서 성공했으면 여기서 끝
    } catch (e) {
      console.warn("Native haptics failed", e);
    }
  }

  // 2) 웹/PWA fallback (iOS 사파리/PWA에서는 어차피 안 됨)
  if (navigator.vibrate) {
    switch (type) {
      case "light":
        navigator.vibrate(10);
        break;
      case "medium":
        navigator.vibrate([15, 30]);
        break;
      case "success":
        navigator.vibrate([10, 30, 10]);
        break;
      case "error":
        navigator.vibrate([30, 60, 30]);
        break;
      default:
        navigator.vibrate(20);
    }
  }
}

// ===== Capacitor App 플러그인 (안드로이드 back 버튼용) =====
const NativeApp = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.App) ||
    window.Capacitor.App ||
    null
  : null;

let LAST_BACK_TIME = 0;
const FORCE_START_SCREEN_FOR_DESIGN = false;

function prepareIntroVisual() {
  const body = document.body;
  const logo = document.querySelector("#introScreen .hero-logo");
  if (!body || !logo) {
    if (body) body.classList.add("intro-ready");
    return;
  }

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    body.classList.add("intro-ready");
  };

  if (logo.complete && logo.naturalWidth > 0) {
    if (typeof logo.decode === "function") {
      logo.decode().then(reveal).catch(reveal);
    } else {
      reveal();
    }
    return;
  }

  logo.addEventListener("load", reveal, { once: true });
  logo.addEventListener("error", reveal, { once: true });
  setTimeout(reveal, 700);
}

function showSystemToast(message, duration = 1500) {
  if (!DOM.systemToast) return;
  DOM.systemToast.textContent = message;
  DOM.systemToast.classList.add("visible");
  setTimeout(() => {
    if (DOM.systemToast && DOM.systemToast.textContent === message) {
      DOM.systemToast.textContent = "";
      DOM.systemToast.classList.remove("visible");
    }
  }, duration);
}

function handleAndroidBack() {
  // 1) 단어 상세 오버레이 열려 있으면 닫기
  if (DOM.detailOverlay && DOM.detailOverlay.classList.contains("active")) {
    closeWordDetail();
    return;
  }

  // 2) 학습 세션 진행 중이면 → 확인 후 학습 시작 상태로
  if (APP_STATE.phase === "QUESTION" || APP_STATE.phase === "ANSWER") {
    const msg = trKey(
      "confirm.exit_session",
      "학습을 종료하고 학습 시작 화면으로 돌아갈까요?",
    );
    if (window.confirm(msg)) {
      showReadyState();
      showView("study");
    }
    return;
  }

  // 3) 단어 하위 화면에서는 → 단어 허브로
  if (
    APP_STATE.currentView === "mistakes" ||
    APP_STATE.currentView === "bookmark" ||
    APP_STATE.currentView === "search"
  ) {
    showView("words");
    return;
  }

  // 4) 세션 완료(FINISHED) 또는 다른 탭에 있으면 → Study 뷰로
  if (APP_STATE.phase === "FINISHED") {
    showReadyState();
    showView("study");
    return;
  }

  if (APP_STATE.currentView !== "study") {
    showView("study");
    return;
  }

  // 5) Study + READY 상태 → 두 번 눌러야 종료
  const now = Date.now();
  if (now - LAST_BACK_TIME < 2000) {
    if (NativeApp && typeof NativeApp.exitApp === "function") {
      NativeApp.exitApp();
    }
  } else {
    LAST_BACK_TIME = now;
    const msg = trKey("back.exit_hint", "한 번 더 누르면 앱이 종료됩니다.");
    showSystemToast(msg);
  }
}

function setupAndroidBackHandler() {
  if (!NativeApp || typeof NativeApp.addListener !== "function") return;
  NativeApp.addListener("backButton", () => {
    handleAndroidBack();
  });
}

/* ============================================
   ========== 2. DOM CACHE / ELEMENTS ==========
   ============================================ */

function cacheDOM() {
  // 시작 화면
  DOM.startScreen = document.getElementById("startScreen");
  DOM.startUiLang = document.getElementById("startUiLang");
  DOM.startStudyLang = document.getElementById("startStudyLang");
  DOM.startAppBtn = document.getElementById("startAppBtn");
  DOM.startTitle = document.getElementById("startTitle");
  DOM.startDescription = document.getElementById("startDescription");
  DOM.startTagline = document.querySelector(".tagline");
  DOM.startUiLabel = document.querySelector("label[for='startUiLang']");
  DOM.startStudyLabel = document.querySelector("label[for='startStudyLang']");

  // 메인 래퍼
  DOM.app = document.getElementById("app");
  DOM.appTitle = document.getElementById("appTitle");
  DOM.appHeader = document.getElementById("appHeader");
  DOM.appHeaderTitle = document.getElementById("appHeaderTitle");

  DOM.bottomTabs = document.querySelectorAll(".bottom-tab");

  // 뷰
  DOM.studyView = document.getElementById("studyView");
  DOM.userView = document.getElementById("userView");
  DOM.trainingView = document.getElementById("trainingView");
  DOM.wordHubView = document.getElementById("wordHubView");
  DOM.vocabView = document.getElementById("vocabView");
  DOM.searchView = document.getElementById("searchView");
  DOM.settingsView = document.getElementById("settingsView");

  // 학습 진행
  // 학습 진행
  DOM.progressBar = document.getElementById("progressBar");
  DOM.progressText = document.getElementById("progress");
  DOM.sessionProgress = document.getElementById("sessionProgress");
  DOM.mainCard = document.getElementById("mainCard");
  DOM.studySettingsGrid = document.querySelector(".study-settings-grid");
  DOM.studySummaryText = document.getElementById("studySummaryText");
  DOM.questionDisplay = document.getElementById("questionDisplay");
  DOM.hintDisplay = document.getElementById("hintDisplay");
  DOM.inputArea = document.getElementById("inputArea");
  DOM.answerInput = document.getElementById("answerInput");
  DOM.copyGhost = document.getElementById("copyGhost");
  DOM.feedback = document.getElementById("feedback");
  DOM.systemToast = document.getElementById("systemToast");
  DOM.hintBtn = document.getElementById("hintBtn");
  DOM.mainBtn = document.getElementById("mainBtn");
  DOM.skipBtn = document.getElementById("skipBtn");
  DOM.ratingArea = document.getElementById("ratingArea");
  DOM.ratingButtons = document.querySelectorAll(".btn-rating");
  DOM.masteryMainBtn = document.getElementById("masteryMainBtn");

  // 통계
  DOM.endStatsArea = document.getElementById("endStatsArea");
  DOM.endTitle = document.getElementById("endTitle");
  DOM.endSummaryTitle = document.getElementById("endSummaryTitle");
  DOM.endTotal = document.getElementById("endTotal");
  DOM.endNew = document.getElementById("endNew");
  DOM.endReview = document.getElementById("endReview");
  DOM.endCorrect = document.getElementById("endCorrect");
  DOM.endWrong = document.getElementById("endWrong");
  DOM.endEasy = document.getElementById("endEasy");
  DOM.endWrongWordsBlock = document.getElementById("endWrongWordsBlock");
  DOM.endWrongWordsTitle = document.getElementById("endWrongWordsTitle");
  DOM.endWrongWordsList = document.getElementById("endWrongWordsList");
  DOM.trainWrongBtn = document.getElementById("trainWrongBtn");
  DOM.restartBtn = document.getElementById("restartBtn");

  // 사용자 설정
  DOM.modeSelect = document.getElementById("modeSelect");
  DOM.goalSelectTyping = document.getElementById("goalSelectTyping");
  DOM.goalSelectCard = document.getElementById("goalSelectCard");
  DOM.newWordCefrSelect = document.getElementById("newWordCefrSelect");
  DOM.newWordCategoryLabel = document.getElementById("newWordCategoryLabel");
  DOM.newWordCategorySelect = document.getElementById("newWordCategorySelect");
  DOM.newWordSetBtn = document.getElementById("newWordSetBtn");
  DOM.attendanceTitle = document.getElementById("attendanceTitle");
  DOM.attendanceWeek = document.getElementById("attendanceWeek");

  // CEFR 진행도
  DOM.cefrBars = {
    A1: document.getElementById("cefrBarA1"),
    A2: document.getElementById("cefrBarA2"),
    B1: document.getElementById("cefrBarB1"),
    B2: document.getElementById("cefrBarB2"),
  };
  DOM.cefrCounts = {
    A1: document.getElementById("cefrCountA1"),
    A2: document.getElementById("cefrCountA2"),
    B1: document.getElementById("cefrCountB1"),
    B2: document.getElementById("cefrCountB2"),
  };
  DOM.cefrLabels = {
    A1: document.querySelector('.cefr-row[data-level="A1"] .cefr-label'),
    A2: document.querySelector('.cefr-row[data-level="A2"] .cefr-label'),
    B1: document.querySelector('.cefr-row[data-level="B1"] .cefr-label'),
    B2: document.querySelector('.cefr-row[data-level="B2"] .cefr-label'),
  };

  // 단어장
  DOM.wordHubTitle = document.getElementById("wordHubTitle");
  DOM.wordHubMistakes = document.getElementById("wordHubMistakes");
  DOM.wordHubBookmark = document.getElementById("wordHubBookmark");
  DOM.wordHubSearch = document.getElementById("wordHubSearch");
  DOM.wordHubMistakesLabel = document.getElementById("wordHubMistakesLabel");
  DOM.wordHubBookmarkLabel = document.getElementById("wordHubBookmarkLabel");
  DOM.wordHubSearchLabel = document.getElementById("wordHubSearchLabel");
  DOM.wordbookList = document.getElementById("wordbookList");

  // 북마크 뷰
  DOM.bookmarkView = document.getElementById("bookmarkView");
  DOM.bookmarkList = document.getElementById("bookmarkList");
  DOM.bookmarkViewTitle = document.querySelector("#bookmarkView .view-title");

  // 검색
  DOM.searchMode = document.getElementById("searchMode");
  DOM.searchInput = document.getElementById("searchInput");
  DOM.searchResults = document.getElementById("searchResults");
  DOM.searchLabel = document.querySelector("label[for='searchMode']");

  // 설정 뷰
  DOM.settingsUiLang = document.getElementById("settingsUiLang");
  DOM.settingsStudyLang = document.getElementById("settingsStudyLang");
  DOM.settingsLanguageTitle = document.getElementById("settingsLanguageTitle");
  DOM.settingsFeedbackTitle = document.getElementById("settingsFeedbackTitle");
  DOM.soundToggle = document.getElementById("soundToggle");
  DOM.soundToggleLabel = document.getElementById("soundToggleLabel");
  DOM.hapticToggle = document.getElementById("hapticToggle");
  DOM.hapticToggleLabel = document.getElementById("hapticToggleLabel");
  DOM.studyReminderToggle = document.getElementById("studyReminderToggle");
  DOM.studyReminderToggleLabel = document.getElementById(
    "studyReminderToggleLabel",
  );
  DOM.studyReminderTime = document.getElementById("studyReminderTime");
  DOM.studyReminderTimeLabel = document.getElementById(
    "studyReminderTimeLabel",
  );
  DOM.settingsFeedbackBtn = document.getElementById("settingsFeedbackBtn");

  // 사용자 뷰 제목/라벨
  DOM.userViewTitle = document.querySelector("#userView .view-title");
  DOM.userCefrTitle = document.getElementById("userCefrTitle");

  DOM.modeLabel = document.querySelector("label[for='modeSelect']");
  DOM.goalTypingLabel = document.querySelector("label[for='goalSelectTyping']");
  DOM.goalCardLabel = document.querySelector("label[for='goalSelectCard']");
  DOM.newWordCefrLabel = document.querySelector(
    "label[for='newWordCefrSelect']",
  );
  DOM.newWordCategoryLabel = document.querySelector(
    "label[for='newWordCategorySelect']",
  );

  DOM.vocabViewTitle = document.querySelector("#vocabView .view-title");
  DOM.trainingViewTitle = document.querySelector("#trainingView .view-title");
  DOM.trainingTargetLabel = document.getElementById("trainingTargetLabel");
  DOM.trainingModeLabel = document.querySelector(
    "label[for='trainingModeSelect']",
  );
  DOM.trainingModeHint = document.getElementById("trainingModeHint");
  DOM.trainingCountLabel = document.querySelector(
    "label[for='trainingCountSelect']",
  );
  DOM.searchViewTitle = document.querySelector("#searchView .view-title");
  DOM.settingsViewTitle = document.querySelector("#settingsView .view-title");
  DOM.settingsUiLangLabel = document.querySelector(
    "label[for='settingsUiLang']",
  );
  DOM.settingsStudyLangLabel = document.querySelector(
    "label[for='settingsStudyLang']",
  );
  DOM.detailOverlay = document.getElementById("wordDetailOverlay");
  DOM.detailTitle = document.getElementById("detailTitle");
  DOM.detailPos = document.getElementById("detailPos");
  DOM.detailMeaning = document.getElementById("detailMeaning");
  DOM.detailExtra = document.getElementById("detailExtra");
  DOM.detailExtraRow = document.getElementById("detailExtraRow");
  DOM.trainingSourceMistakes = document.getElementById(
    "trainingSourceMistakes",
  );
  DOM.trainingSourceHard = document.getElementById("trainingSourceHard");
  DOM.trainingSourceBookmark = document.getElementById(
    "trainingSourceBookmark",
  );
  DOM.trainingModeSelect = document.getElementById("trainingModeSelect");
  DOM.trainingCountSelect = document.getElementById("trainingCountSelect");
  DOM.trainingStartBtn = document.getElementById("trainingStartBtn");
  DOM.trainingSummary = document.getElementById("trainingSummary");
  DOM.wordDropView = document.getElementById("wordDropView");
  DOM.wordDropProgressBar = document.getElementById("wordDropProgressBar");
  DOM.wordDropArena = document.getElementById("wordDropArena");
  DOM.wordDropWord = document.getElementById("wordDropWord");
  DOM.wordDropReady = document.getElementById("wordDropReady");
  DOM.wordDropReadyText = document.getElementById("wordDropReadyText");
  DOM.wordDropInput = document.getElementById("wordDropInput");
  DOM.wordDropGameOver = document.getElementById("wordDropGameOver");
  DOM.wordDropEndTitle = document.getElementById("wordDropEndTitle");
  DOM.wordDropFinalScore = document.getElementById("wordDropFinalScore");
  DOM.wordDropMistakes = document.getElementById("wordDropMistakes");
  DOM.wordDropRestartBtn = document.getElementById("wordDropRestartBtn");
  DOM.wordDropReviewBtn = document.getElementById("wordDropReviewBtn");
  DOM.endShareOpenBtn = document.getElementById("endShareOpenBtn");
  DOM.wordDropShareOpenBtn = document.getElementById("wordDropShareOpenBtn");
  DOM.shareCardOverlay = document.getElementById("shareCardOverlay");
  DOM.shareCardTitle = document.getElementById("shareCardTitle");
  DOM.shareCardPreview = document.getElementById("shareCardPreview");
  DOM.shareCardSaveBtn = document.getElementById("shareCardSaveBtn");
  DOM.shareCardNativeBtn = document.getElementById("shareCardNativeBtn");
  DOM.shareCardCloseBtn = document.getElementById("shareCardCloseBtn");
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

    // 🔹 첫 방문일 때 브라우저 언어 기준으로 UI 언어 추정
    const guessed = detectInitialUiLang();
    SETTINGS.uiLang = guessed;
    CURRENT_LANG = SETTINGS.uiLang;

    // ✅ UI/학습 언어 강제 정리(안전장치)
    sanitizeUiLang();
    sanitizeStudyLang();

    return;
  }

  // 2) 저장값 있음
  try {
    const parsed = JSON.parse(raw);
    SETTINGS = { ...DEFAULT_SETTINGS, ...parsed };

    // 예전 모드 이름 보정
    if (SETTINGS.mode === "copy_de") {
      SETTINGS.mode = "copy";
    }

    CURRENT_LANG = SETTINGS.uiLang || "ko";

    // ✅ 저장값 강제 정리
    sanitizeUiLang();
    sanitizeStudyLang();

    let shouldSaveSettings = false;

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

    // ✅ 파싱 실패 시에도 강제 정리
    sanitizeUiLang();
    sanitizeStudyLang();
  }
}

function saveSettings() {
  safeSet(STORAGE_KEYS.SETTINGS, JSON.stringify(SETTINGS));
}

/* ============================================
   ========== 4. TRANSLATION ENGINE ============
   ============================================ */

function t() {
  if (typeof TRANSLATIONS === "undefined") return {};

  const lang = CURRENT_LANG || "ko";
  const packExact = TRANSLATIONS[lang];

  if (packExact) return packExact;

  // ✅ UI 언어 번역팩이 없으면: 영어 → 한국어 순으로 폴백
  if (TRANSLATIONS["en"]) return TRANSLATIONS["en"];
  if (TRANSLATIONS["ko"]) return TRANSLATIONS["ko"];

  return {};
}

// ============================================
// 4-x. i18n 키 -> 실제 번역 키 매핑
// ============================================

// 앱 내부에서 쓸 "공식 키"
const I18N_KEYS = {
  /* ----- 앱 공통 ----- */
  "app.title": "app_title",

  /* ----- 메뉴 ----- */
  "menu.user": "menu_user",
  "menu.study": "menu_study",
  "menu.training": "menu_training",
  "menu.mistakes": "menu_mistakes",
  "menu.bookmark": "menu_bookmark",
  "menu.search": "menu_search",
  "menu.settings": "menu_settings",
  "bottom.training": "bottom_training",
  "bottom.words": "bottom_words",
  "word_hub.title": "word_hub_title",
  "word_hub.mistakes": "word_hub_mistakes",
  "word_hub.bookmark": "word_hub_bookmark",
  "word_hub.search": "word_hub_search",

  /* ----- 훈련소 뷰 ----- */
  "training.title": "training_title",
  "training.target_label": "training_target_label",
  "training.source_mistakes": "training_source_mistakes",
  "training.source_hard": "training_source_hard",
  "training.source_bookmark": "training_source_bookmark",
  "training.mode_label": "training_mode_label",
  "training.mode_cram": "training_mode_cram",
  "training.mode_word_drop": "training_mode_word_drop",
  "training.mode_hint_cram": "training_mode_hint_cram",
  "training.mode_hint_word_drop": "training_mode_hint_word_drop",
  "training.count_label": "training_count_label",
  "training.count_unit": "training_count_unit",
  "training.start_button": "training_start_button",
  "training.summary_hint": "training_summary_hint",
  "training.done_simple": "training_done_simple",
  "training.done": "training_done",
  "training.cram_retry_hint": "cram_retry_hint",
  "word_drop.end_title": "word_drop_end_title",
  "word_drop.input_placeholder": "word_drop_input_placeholder",
  "word_drop.result": "word_drop_result",
  "word_drop.correct": "word_drop_correct",
  "word_drop.missed": "word_drop_missed",
  "word_drop.no_missed": "word_drop_no_missed",
  "word_drop.restart": "word_drop_restart",
  "word_drop.review": "word_drop_review",
  "word_drop.tap_to_start": "word_drop_tap_to_start",

  /* ----- 사용자 뷰 ----- */
  "user.title": "user_title",
  "user.settings_title": "user_settings_title",
  "user.cefr_title": "user_cefr_title",
  "user.level_title_cjk": "user_level_title_cjk",

  /* ----- 설정 뷰 ----- */
  "settings.title": "settings_title",
  "settings.language_title": "settings_language_title",
  "settings.feedback_title": "settings_feedback_title",
  "settings.ui_lang_label": "settings_ui_lang_label",
  "settings.study_lang_label": "settings_study_lang_label",
  "settings.sound.label": "sound_label",
  "sound.on": "sound_on",
  "sound.off": "sound_off",
  "settings.haptic.label": "haptic_label",
  "settings.reminder.label": "study_reminder_label",
  "settings.reminder.enabled": "study_reminder_enabled",
  "settings.reminder.denied": "study_reminder_denied",
  "settings.reminder.open_settings": "study_reminder_open_settings",
  "settings.reminder.unsupported": "study_reminder_unsupported",
  "settings.reminder.time_label": "study_reminder_time_label",
  "settings.reminder.notification_title": "study_reminder_notification_title",
  "settings.reminder.notification_body": "study_reminder_notification_body",

  /* ----- 시작 화면 / 학습 메인 ----- */
  "common.start": "start",

  "study.start_tagline": "start_tagline",
  "study.start_title": "start_title",
  "study.start_description": "start_description",
  "study.start_ui_label": "start_ui_label",
  "study.start_study_label": "start_study_label",
  "study.start_prompt": "start_prompt",
  "study.type_answer": "type_answer",

  "study.button.start": "start",
  "study.button.confirm": "confirm",
  "study.button.show_answer": "show_answer",
  "study.button.answer": "answer",
  "study.button.hint": "hint",

  "study.feedback.correct": "correct",
  "study.feedback.incorrect": "incorrect",

  /* ----- 난이도 평가 ----- */
  "difficulty.prompt": "difficulty_prompt",
  "difficulty.hard": "hard",
  "difficulty.normal": "normal",
  "difficulty.easy": "easy",

  /* ----- 학습 설정 라벨 ----- */
  "study.mode_label": "mode",
  "study.goal_typing_label": "goal_typing",
  "study.goal_card_label": "goal_card",
  "study.new_word_cefr_label": "new_word_cefr",

  "study.category_label": "category_label",
  "study.category.all": "category_all",
  "study.category.exam": "category_exam",
  "study.category.smalltalk": "category_smalltalk",
  "study.category.daily": "category_daily",
  "study.category.basic": "category_basic",
  "study.category.travel": "category_travel",
  "study.category.work": "category_work",
  "study.new_word_set": "new_word_set",
  "study.new_word_set_ready": "new_word_set_ready",

  /* ----- 틀린 단어 / 북마크 / 검색 타이틀 ----- */
  "mistakes.title": "mistakes_title",
  "mistakes.empty": "mistakes_empty",

  "bookmark.title": "bookmark_title",
  "bookmark.empty": "bookmark_empty",

  "search.title": "search_title",
  "search.mode_label": "search_mode_label",
  "search.placeholder": "search_placeholder",
  "search.empty": "search_empty",
  "search.no_result": "search_no_result",

  /* ----- 요약 ----- */
  "summary.title": "summary_title",
  "summary.total": "summary_total",
  "summary.new": "summary_new",
  "summary.review": "summary_review",
  "summary.share_title": "share_card_title",
  "summary.share_save": "share_card_save",
  "summary.share_native": "share_card_native",
  "summary.share_open": "share_card_open",
  "summary.share_saved": "share_card_saved",
  "summary.share_failed": "share_card_failed",
  "summary.share_tagline": "share_card_tagline",
  "summary.share_difficult": "share_card_difficult",
  "summary.share_no_difficult": "share_card_no_difficult",
  "summary.share_mode": "share_card_mode",
  "summary.share_accuracy": "share_card_accuracy",
  "summary.share_streak": "share_card_streak",
  "summary.restart": "restart",
  "summary.no_words_today": "no_words_today",
  "study.copy_check_spelling": "copy_check_spelling",
};

// 공통 번역 함수: 공식 키 → 번역 텍스트
function trKey(key, fallback) {
  const pack = t() || {};
  const realKey = I18N_KEYS[key] || key; // 매핑 없으면 key 그대로 사용
  const val = pack[realKey];

  if (val == null || val === "") {
    return fallback !== undefined ? fallback : key;
  }
  return val;
}

// ============================================
// 4-1. CEFR 라벨 변환 (동아시아 전용)
// ============================================
const EAST_ASIA_LANGS = ["ko", "zh", "ja"];

// 학습 언어가 동아시아(ko/zh/ja)인지 여부
function isEastAsiaStudy() {
  const study = SETTINGS.studyLang || "de";
  return EAST_ASIA_LANGS.includes(study);
}

/**
 * CEFR 값 표시용 포맷터
 * - 기본(비 동아시아 학습언어): A1/A2/B1/B2 그대로
 * - 동아시아 학습언어(ko/zh/ja): 표시만 초급1/2, 중급1/2 계열로 변환
 * - 내부 저장/필터 값은 A1/A2/B1/B2 유지
 */
function formatCefrLabelForDisplay(rawValue, pack) {
  const vRaw = (rawValue || "").toString();
  const v = vRaw.toUpperCase();
  const lang = CURRENT_LANG || "en";
  const study = SETTINGS.studyLang || "de";
  const isStudyEA = EAST_ASIA_LANGS.includes(study);
  const isUiEA = EAST_ASIA_LANGS.includes(lang);

  pack = pack || t() || {};

  // "ALL" 처리
  if (v === "ALL") {
    // UI 언어 기준으로 전체 레벨 문구
    if (lang === "ko") return "전체 레벨";
    if (lang === "zh") return "全部级别";
    if (lang === "ja") return "全レベル";
    return pack.new_word_cefr_all || "All levels";
  }

  const KNOWN = ["A1", "A2", "B1", "B2"];
  if (!KNOWN.includes(v)) {
    // 이상한 값이 들어오면 그냥 원문 돌려보냄
    return v;
  }

  // 학습 언어가 동아시아가 아니면 → CEFR 그대로
  if (!isStudyEA) {
    return v;
  }

  // 숫자(1/2) 결정: A1/B1 → 1, A2/B2 → 2
  const num = v === "A1" || v === "B1" ? "1" : "2";

  let grade = "";

  if (isUiEA) {
    // UI도 동아시아일 때: 초급1 / 중급2 / 고급1 ...
    if (v === "A1" || v === "A2") {
      if (lang === "ko") grade = "초급";
      else if (lang === "zh") grade = "初级";
      else if (lang === "ja") grade = "初級";
    } else if (v === "B1" || v === "B2") {
      if (lang === "ko") grade = "중급";
      else if (lang === "zh") grade = "中级";
      else if (lang === "ja") grade = "中級";
    }
  } else {
    // UI가 비동아시아일 때: Beginner / Intermediate / Advanced
    if (v === "A1" || v === "A2") {
      if (lang === "de") grade = "Anfänger";
      else if (lang === "es") grade = "Principiante";
      else if (lang === "fr") grade = "Débutant";
      else if (lang === "it") grade = "Principiante";
      else if (lang === "pt") grade = "Iniciante";
      else if (lang === "ru") grade = "Начальный";
      else if (lang === "nl") grade = "Beginner";
      else if (lang === "pl") grade = "Początkujący";
      else if (lang === "sv") grade = "Nybörjare";
      else grade = "Beginner";
    } else if (v === "B1" || v === "B2") {
      if (lang === "de") grade = "Mittelstufe";
      else if (lang === "es") grade = "Intermedio";
      else if (lang === "fr") grade = "Intermédiaire";
      else if (lang === "it") grade = "Intermedio";
      else if (lang === "pt") grade = "Intermediário";
      else if (lang === "ru") grade = "Средний";
      else if (lang === "nl") grade = "Gemiddeld";
      else if (lang === "pl") grade = "Średniozaawansowany";
      else if (lang === "sv") grade = "Mellan";
      else grade = "Intermediate";
    }
  }

  // 혹시 grade 못 찾으면 CEFR만 보여줌 (안전장치)
  if (!grade) return v;

  // 예:
  //  - ko UI + ko 학습: "초급 1"
  //  - en UI + ko 학습: "Beginner 1"
  //  - de UI + ko 학습: "Anfänger 1"
  return `${grade} ${num}`;
}

function populateUiLangSelect(selectEl) {
  selectEl.innerHTML = "";

  for (const code of UI_LANG_CODES) {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = LANG_META[code].name_local;
    selectEl.appendChild(opt);
  }
}

// 카테고리용 i18n 키 매핑
const CATEGORY_I18N_KEYS = {
  basic: "study.category.basic",
  daily: "study.category.daily",
  travel: "study.category.travel",
  work: "study.category.work",
  smalltalk: "study.category.smalltalk",
};

function getCategoryLabel(catId) {
  const uiLang = CURRENT_LANG || "ko";
  // 1) exam -> UI 언어 기준 공통 라벨 사용 (Goethe/DELE/TOEIC 표기 금지)
  if (catId === "exam") {
    return trKey("study.category.exam", "Exam");
  }

  // 2) all → i18n 우선, 없으면 하드코딩 폴백
  if (catId === "all") {
    const fromI18n = trKey("study.category.all", "");
    if (fromI18n && fromI18n !== "study.category.all") {
      return fromI18n;
    }

    // 마지막 안전망
    if (uiLang === "en") return "All";
    if (uiLang === "de") return "Alle";
    if (uiLang === "es") return "Todo";
    if (uiLang === "fr") return "Tous";
    if (uiLang === "it") return "Tutti";
    if (uiLang === "pt") return "Todos";
    if (uiLang === "ja") return "すべて";
    if (uiLang === "zh") return "全部";
    if (uiLang === "ru") return "Все";
    return "전체";
  }

  // 3) 나머지 카테고리(basic, daily, travel, work, smalltalk...)

  // 3-1) i18n(Translations.js) 우선
  const i18nKey = `study.category.${catId}`;
  const i18nLabel = trKey(i18nKey, "");

  if (i18nLabel && i18nLabel !== i18nKey) {
    return i18nLabel;
  }

  // 3-2) i18n에 없으면 CATEGORY_META.labels에서 폴백
  if (typeof CATEGORY_META !== "undefined") {
    const meta = CATEGORY_META[catId];
    if (meta && meta.labels) {
      const labels = meta.labels;
      const metaLabel = labels[uiLang] || labels.en || labels.ko || null;

      if (metaLabel) return metaLabel;
    }
  }

  // 3-3) 정말 아무 것도 없으면 id 그대로
  return catId;
}

function applyTranslations() {
  const pack = t();
  if (!pack) return;

  // ✅ UI 언어 드롭다운 옵션 텍스트 갱신
  refreshUiLangSelectLabels();
  // 메인 타이틀
  if (DOM.appTitle) {
    DOM.appTitle.textContent = trKey("app.title", "KarlLang");
  }

  // 시작 화면
  if (DOM.startTitle) {
    DOM.startTitle.textContent = trKey("study.start_title", "언어 설정");
  }
  if (DOM.startDescription) {
    DOM.startDescription.textContent = trKey(
      "study.start_description",
      "앱에서 사용할 언어와 학습할 언어를 선택하세요.",
    );
  }
  if (DOM.startTagline) {
    DOM.startTagline.textContent = trKey(
      "study.start_tagline",
      DOM.startTagline.textContent,
    );
  }
  if (DOM.startUiLabel) {
    DOM.startUiLabel.textContent = trKey(
      "study.start_ui_label",
      DOM.startUiLabel.textContent,
    );
  }
  if (DOM.startStudyLabel) {
    DOM.startStudyLabel.textContent = trKey(
      "study.start_study_label",
      DOM.startStudyLabel.textContent,
    );
  }
  if (DOM.startAppBtn) {
    DOM.startAppBtn.textContent = trKey("common.start", "Start");
  }

  // 메인 버튼들
  if (DOM.mainBtn) {
    if (APP_STATE.phase === "READY") {
      DOM.mainBtn.textContent = trKey("study.button.start", "Start");
    } else if (SETTINGS.mode === "card") {
      DOM.mainBtn.textContent = trKey("study.button.show_answer", "Answer");
    } else {
      DOM.mainBtn.textContent = trKey("study.button.confirm", "Confirm");
    }
  }

  // 학습 화면: READY 상태에서의 안내 문구도 언어에 맞게 즉시 갱신
  if (DOM.questionDisplay && APP_STATE.phase === "READY") {
    DOM.questionDisplay.textContent = trKey(
      "study.start_prompt",
      "시작 버튼을 누르세요.",
    );
  }
  if (DOM.hintDisplay && APP_STATE.phase === "READY") {
    DOM.hintDisplay.textContent = "";
  }
  if (DOM.skipBtn) {
    DOM.skipBtn.textContent = trKey("study.button.answer", "Answer");
  }
  if (DOM.hintBtn) {
    DOM.hintBtn.textContent = trKey("study.button.hint", "Hint");
  }

  // 난이도 문구
  if (DOM.ratingArea) {
    const title = DOM.ratingArea.querySelector(".rating-title");
    if (title) {
      title.textContent = trKey("difficulty.prompt", "난이도를 평가해 주세요:");
    }
  }
  if (DOM.ratingButtons && DOM.ratingButtons.length === 3) {
    DOM.ratingButtons[0].textContent = trKey("difficulty.hard", "어려움");
    DOM.ratingButtons[1].textContent = trKey("difficulty.normal", "보통");
    DOM.ratingButtons[2].textContent = trKey("difficulty.easy", "쉬움");
  }

  // 하단 탭 / 단어 허브
  if (DOM.bottomTabs && DOM.bottomTabs.length) {
    const labels = {
      user: trKey("menu.user", "홈"),
      study: trKey("menu.study", "학습"),
      training: trKey("bottom.training", "훈련"),
      words: trKey("bottom.words", "단어"),
      settings: trKey("menu.settings", "설정"),
    };
    DOM.bottomTabs.forEach((tab) => {
      const label = tab.querySelector("span");
      const view = tab.dataset.view;
      if (label && labels[view]) label.textContent = labels[view];
    });
  }
  if (DOM.wordHubTitle) {
    DOM.wordHubTitle.textContent = trKey("word_hub.title", "단어");
  }
  if (DOM.wordHubMistakesLabel) {
    DOM.wordHubMistakesLabel.textContent = trKey(
      "word_hub.mistakes",
      "어려운 단어",
    );
  }
  if (DOM.wordHubBookmarkLabel) {
    DOM.wordHubBookmarkLabel.textContent = trKey(
      "word_hub.bookmark",
      "북마크",
    );
  }
  if (DOM.wordHubSearchLabel) {
    DOM.wordHubSearchLabel.textContent = trKey("word_hub.search", "검색");
  }

  // 사용자 뷰 제목들
  if (DOM.userViewTitle)
    DOM.userViewTitle.textContent = trKey("user.title", "사용자");

  if (DOM.userCefrTitle) {
    const study = SETTINGS.studyLang || "de";
    const isCjkStudy = EAST_ASIA_LANGS.includes(study);

    if (isCjkStudy) {
      DOM.userCefrTitle.textContent = trKey(
        "user.level_title_cjk",
        "단어 진척도",
      );
    } else {
      DOM.userCefrTitle.textContent = trKey(
        "user.cefr_title",
        "CEFR 단어 진척도",
      );
    }
  }

  renderAttendance();

  // 사용자 설정 라벨
  if (DOM.modeLabel) {
    DOM.modeLabel.textContent = trKey("study.mode_label", "모드");
  }
  if (DOM.goalTypingLabel) {
    DOM.goalTypingLabel.textContent = trKey(
      "study.goal_typing_label",
      "학습 단어 수",
    );
  }
  if (DOM.goalCardLabel) {
    DOM.goalCardLabel.textContent = trKey("study.goal_card_label", "카드 목표");
  }
  if (DOM.newWordCefrLabel) {
    DOM.newWordCefrLabel.textContent = trKey(
      "study.new_word_cefr_label",
      "레벨",
    );
  }

  // 카테고리 드롭다운 라벨
  if (DOM.newWordCategoryLabel) {
    DOM.newWordCategoryLabel.textContent = trKey(
      "study.category_label",
      "카테고리",
    );
  }

  // 카테고리 옵션 라벨
  if (DOM.newWordCategorySelect) {
    Array.from(DOM.newWordCategorySelect.options).forEach((opt) => {
      const v = opt.value;
      if (!v) return;
      opt.textContent = getCategoryLabel(v);
    });
  }
  if (DOM.newWordSetBtn) {
    DOM.newWordSetBtn.textContent = trKey("study.new_word_set", "새 단어 세트");
  }

  // 모드 선택 옵션
  if (DOM.modeSelect) {
    Array.from(DOM.modeSelect.options).forEach((opt) => {
      const v = opt.value;
      if (!v) return;

      if (v === "typing_de") {
        opt.textContent = trKey("typing_mode", "Typing");
      } else if (v === "card") {
        opt.textContent = trKey("card_mode", "Cards");
      } else if (v === "copy") {
        opt.textContent = trKey("copy_mode", "Copy");
      }
    });
  }

  // 목표 개수: 숫자만
  if (DOM.goalSelectTyping) {
    Array.from(DOM.goalSelectTyping.options).forEach((opt) => {
      const n = opt.value;
      if (!n) return;
      opt.textContent = n;
    });
  }

  if (DOM.goalSelectCard) {
    Array.from(DOM.goalSelectCard.options).forEach((opt) => {
      const n = opt.value;
      if (!n) return;
      opt.textContent = n;
    });
  }

  // 새 단어 레벨 드롭다운
  if (DOM.newWordCefrSelect) {
    Array.from(DOM.newWordCefrSelect.options).forEach((opt) => {
      const v = opt.value || "all";
      opt.textContent = getCefrDisplayLabel(v);
    });
  }
  refreshCefrRowLabels();

  // 틀린 단어 뷰
  if (DOM.vocabViewTitle) {
    DOM.vocabViewTitle.textContent = trKey("mistakes.title", "틀린 단어");
  }

  // 북마크 뷰
  if (DOM.bookmarkViewTitle) {
    DOM.bookmarkViewTitle.textContent = trKey("bookmark.title", "북마크");
  }

  // 훈련소 뷰
  if (DOM.trainingViewTitle) {
    DOM.trainingViewTitle.textContent = trKey("training.title", "훈련소");
  }

  // 🔹 훈련 대상 라벨
  if (DOM.trainingTargetLabel) {
    DOM.trainingTargetLabel.textContent = trKey(
      "training.target_label",
      "훈련 대상",
    );
  }
  // 훈련대상 토글 각각의 라벨
  if (DOM.trainingSourceMistakes) {
    const row = DOM.trainingSourceMistakes.closest(".training-source-row");
    if (row) {
      const span = row.querySelector("span");
      if (span) {
        span.textContent = trKey("training.source_mistakes", "틀린 단어");
      }
    }
  }
  if (DOM.trainingSourceHard) {
    const row = DOM.trainingSourceHard.closest(".training-source-row");
    if (row) {
      const span = row.querySelector("span");
      if (span) {
        span.textContent = trKey("training.source_hard", "어려운 단어");
      }
    }
  }
  if (DOM.trainingSourceBookmark) {
    const row = DOM.trainingSourceBookmark.closest(".training-source-row");
    if (row) {
      const span = row.querySelector("span");
      if (span) {
        span.textContent = trKey("training.source_bookmark", "북마크");
      }
    }
  }

  // 🔹 훈련 모드 라벨 + 옵션
  if (DOM.trainingModeLabel) {
    DOM.trainingModeLabel.textContent = trKey(
      "training.mode_label",
      "훈련 모드",
    );
  }
  if (DOM.trainingModeSelect) {
    Array.from(DOM.trainingModeSelect.options).forEach((opt) => {
      if (opt.value === "cram") {
        opt.textContent = trKey(
          "training.mode_cram",
          getTrainingModeFallback("cram"),
        );
      } else if (opt.value === "word_drop") {
        opt.textContent = trKey(
          "training.mode_word_drop",
          getTrainingModeFallback("word_drop"),
        );
      }
    });
  }
  updateTrainingModeHint();
  updateAppHeader();

  if (DOM.wordDropInput) {
    DOM.wordDropInput.placeholder = trKey(
      "word_drop.input_placeholder",
      "떨어지는 단어 입력",
    );
  }
  if (DOM.wordDropEndTitle) {
    DOM.wordDropEndTitle.textContent = trKey(
      "word_drop.end_title",
      "Word Drop 종료",
    );
  }
  if (DOM.wordDropRestartBtn) {
    DOM.wordDropRestartBtn.textContent = trKey(
      "word_drop.restart",
      "다시 시작",
    );
  }
  if (DOM.wordDropReviewBtn) {
    DOM.wordDropReviewBtn.textContent = trKey(
      "word_drop.review",
      "복습하기",
    );
  }
  if (DOM.shareCardSaveBtn) {
    DOM.shareCardSaveBtn.textContent = trKey("summary.share_save", "이미지 저장");
  }
  if (DOM.shareCardNativeBtn) {
    DOM.shareCardNativeBtn.textContent = trKey(
      "summary.share_native",
      "공유하기",
    );
  }
  if (DOM.shareCardTitle) {
    DOM.shareCardTitle.textContent = trKey("summary.share_open", "공유 이미지");
  }
  [DOM.endShareOpenBtn, DOM.wordDropShareOpenBtn].forEach((btn) => {
    if (btn) {
      btn.textContent = trKey("summary.share_open", "공유 이미지 만들기");
    }
  });

  // 🔹 훈련 단어 수 라벨 + 옵션 텍스트
  if (DOM.trainingCountLabel) {
    DOM.trainingCountLabel.textContent = trKey(
      "training.count_label",
      "훈련 단어 수",
    );
  }
  if (DOM.trainingCountSelect) {
    const unit = trKey("training.count_unit", "개");
    Array.from(DOM.trainingCountSelect.options).forEach((opt) => {
      const n = opt.value;
      if (!n) return;
      opt.textContent = `${n}${unit}`;
    });
  }

  // 🔹 훈련 세션 시작 버튼
  if (DOM.trainingStartBtn) {
    DOM.trainingStartBtn.textContent = trKey(
      "training.start_button",
      "훈련 세션 시작",
    );
  }

  // 🔹 하단 요약/결과 영역은 시작 전에는 비워 둔다.
  if (DOM.trainingSummary) {
    DOM.trainingSummary.textContent = "";
  }
  // 검색 뷰
  if (DOM.searchViewTitle) {
    DOM.searchViewTitle.textContent = trKey("search.title", "단어 검색");
  }
  if (DOM.searchLabel) {
    DOM.searchLabel.textContent = trKey("search.mode_label", "검색 기준");
  }

  // 검색 모드 옵션: UI/학습 언어 이름
  if (DOM.searchMode) {
    const uiLang = CURRENT_LANG || "ko";
    const studyLang = SETTINGS.studyLang || "de";

    function getLangNameForUI(code) {
      const meta = LANG_META[code];
      const localName = meta ? meta.name_local : null;

      if (code === "de") {
        return t().study_lang_de || localName || "Deutsch";
      }
      if (code === "en") {
        return t().study_lang_en || localName || "English";
      }
      if (code === "it") {
        return t().study_lang_it || localName || "Italiano";
      }
      if (code === "pt") {
        return t().study_lang_pt || localName || "Português";
      }
      if (code === "pl") {
        return t().study_lang_pl || localName || "Polski";
      }
      if (code === "nl") {
        return t().study_lang_nl || localName || "Nederlands";
      }
      if (code === "ru") {
        return t().study_lang_ru || localName || "Русский";
      }
      if (code === "sv") {
        return t().study_lang_sv || localName || "Svenska";
      }
      if (code === "ko") {
        return t().study_lang_ko || localName || "한국어";
      }

      if (localName) return localName;

      return code.toUpperCase();
    }

    const uiName = getLangNameForUI(uiLang);
    const studyName = getLangNameForUI(studyLang);

    const optUi =
      DOM.searchMode.querySelector('option[value="ui"]') ||
      DOM.searchMode.options[0];
    const optStudy =
      DOM.searchMode.querySelector('option[value="study"]') ||
      DOM.searchMode.options[1];

    if (optUi) optUi.textContent = uiName;
    if (optStudy) optStudy.textContent = studyName;
  }

  if (DOM.searchInput) {
    DOM.searchInput.placeholder = trKey(
      "search.placeholder",
      "단어를 입력하세요",
    );
  }

  // 설정 뷰
  if (DOM.settingsViewTitle)
    DOM.settingsViewTitle.textContent = trKey("settings.title", "설정");
  if (DOM.settingsLanguageTitle) {
    DOM.settingsLanguageTitle.textContent = trKey(
      "settings.language_title",
      "언어 설정",
    );
  }
  if (DOM.settingsFeedbackTitle) {
    DOM.settingsFeedbackTitle.textContent = trKey(
      "settings.feedback_title",
      "피드백 설정",
    );
  }

  if (DOM.settingsUiLangLabel)
    DOM.settingsUiLangLabel.textContent = trKey(
      "settings.ui_lang_label",
      "UI 언어",
    );

  if (DOM.settingsStudyLangLabel)
    DOM.settingsStudyLangLabel.textContent = trKey(
      "settings.study_lang_label",
      "학습 언어",
    );

  // 사운드 토글 라벨
  if (DOM.soundToggleLabel) {
    DOM.soundToggleLabel.textContent = trKey("settings.sound.label", "사운드");
  }
  // 진동(햅틱) 토글 라벨
  if (DOM.hapticToggleLabel) {
    DOM.hapticToggleLabel.textContent = trKey("settings.haptic.label", "진동");
  }
  if (DOM.studyReminderToggleLabel) {
    DOM.studyReminderToggleLabel.textContent = trKey(
      "settings.reminder.label",
      "학습 알림",
    );
  }
  if (DOM.studyReminderTimeLabel) {
    DOM.studyReminderTimeLabel.textContent = trKey(
      "settings.reminder.time_label",
      "알림 시간",
    );
  }
  if (DOM.settingsFeedbackBtn) {
    DOM.settingsFeedbackBtn.textContent = getFeedbackButtonLabel(
      CURRENT_LANG || "en",
    );
  }

  // 학습 언어 드롭다운 표시용 텍스트
  const studyLangLabelMap = {
    de: pack.study_lang_de || "Deutsch",
    es: pack.study_lang_es || "Español",
    en: pack.study_lang_en || "English",
    fr: pack.study_lang_fr || "Français",
    it: pack.study_lang_it || "Italiano",
    pt: pack.study_lang_pt || "Português",
    pl: pack.study_lang_pl || "Polski",
    nl: pack.study_lang_nl || "Nederlands",
    ru: pack.study_lang_ru || "Русский",
    sv: pack.study_lang_sv || "Svenska",
    ko: pack.study_lang_ko || "한국어",
    ja: pack.study_lang_ja || "日本語",
    zh: pack.study_lang_zh || "中文",
  };

  if (DOM.startStudyLang) {
    Array.from(DOM.startStudyLang.options).forEach((opt) => {
      const code = opt.value;
      if (studyLangLabelMap[code]) {
        opt.textContent = studyLangLabelMap[code];
      }
    });
  }

  if (DOM.settingsStudyLang) {
    Array.from(DOM.settingsStudyLang.options).forEach((opt) => {
      const code = opt.value;
      if (studyLangLabelMap[code]) {
        opt.textContent = studyLangLabelMap[code];
      }
    });
  }

  updateStudyStartSummary();
  updateProgressBar();

  if (APP_STATE.currentView === "search") {
    handleSearch();
  }
}

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
  // 🚨 수정: 변수명을 DOM.trainingSummary로 통일 (형 코드 기준)
  const summaryEl = DOM.trainingSummary;

  updateTrainingModeHint();

  // 요소 없으면 종료
  if (!summaryEl) return;

  // 2. 스위치들이 켜져 있는지 확인
  const useMistakes =
    DOM.trainingSourceMistakes &&
    DOM.trainingSourceMistakes.classList.contains("is-on");
  const useHard =
    DOM.trainingSourceHard &&
    DOM.trainingSourceHard.classList.contains("is-on");
  const useBookmark =
    DOM.trainingSourceBookmark &&
    DOM.trainingSourceBookmark.classList.contains("is-on");

  // 선택된 게 하나라도 있는지 체크
  const hasAnySource = useMistakes || useHard || useBookmark;

  if (
    DOM.trainingModeSelect &&
    DOM.trainingModeSelect.value === "word_drop"
  ) {
    summaryEl.style.color = "#6b7280";
    summaryEl.textContent = "";
    return;
  }

  // ----------------------------------------------------
  // [경우 1] 아무것도 선택 안 함 → 경고 (빨간색) & 시작 버튼 잠금
  // ----------------------------------------------------
  if (!hasAnySource) {
    summaryEl.style.color = "#D32F2F"; // 빨간색

    summaryEl.textContent = trKey(
      "training_select_target_warning",
      "훈련할 대상을 하나 이상 선택해 주세요.",
    );

    if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = true;

    return;
  }

  // ----------------------------------------------------
  // [경우 2] 하나 이상 선택됨 → 안내 (회색) & 시작 버튼 풀기
  // ----------------------------------------------------
  summaryEl.style.color = "#666"; // 회색

  summaryEl.textContent = "";

  if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = false;
}

/* ============================================
   ========== 5. WORD / SRS ENGINE ============
   ============================================ */

function getAllWords() {
  const study = (SETTINGS.studyLang || "de").toLowerCase();
  if (study === "en") return ALL_WORDS_EN || [];
  if (study === "fr") return ALL_WORDS_FR || [];
  if (study === "it") return ALL_WORDS_IT || [];
  if (study === "pt") return ALL_WORDS_PT || [];
  if (study === "pl") return ALL_WORDS_PL || [];
  if (study === "nl") return ALL_WORDS_NL || [];
  if (study === "ru") return ALL_WORDS_RU || [];
  if (study === "sv") return ALL_WORDS_SV || [];
  if (study === "ko") return ALL_WORDS_KO || [];
  if (study === "ja") return ALL_WORDS_JA || [];
  if (study === "zh") return ALL_WORDS_ZH || [];
  if (study === "es") return ALL_WORDS_ES || [];
  if (study === "de") return ALL_WORDS_DE || [];
  return ALL_WORDS_DE || [];
}

const LEGACY_ARTICLE_TO_GENDER = {
  de: {
    der: "masculine",
    die: "feminine",
    das: "neuter",
  },
};

function getWordArticle(word, langCode) {
  if (!word) return "";
  const lang = (langCode || word.lang || SETTINGS.studyLang || "de").toLowerCase();
  const article = typeof word.article === "string" ? word.article.trim() : "";
  if (article) return article;

  const legacyGender = typeof word.gender === "string" ? word.gender.trim().toLowerCase() : "";
  if (LEGACY_ARTICLE_TO_GENDER[lang] && LEGACY_ARTICLE_TO_GENDER[lang][legacyGender]) {
    return legacyGender;
  }

  return "";
}

function getWordGrammarGender(word, langCode) {
  if (!word) return "";
  const lang = (langCode || word.lang || SETTINGS.studyLang || "de").toLowerCase();
  const gender = typeof word.gender === "string" ? word.gender.trim() : "";
  if (!gender) return "";

  const normalized = gender.toLowerCase();
  if (["masculine", "feminine", "neuter", "common"].includes(normalized)) {
    return normalized;
  }

  return LEGACY_ARTICLE_TO_GENDER[lang]?.[normalized] || "";
}

// ✅ 학습 언어별 form 꺼내는 공통 헬퍼
function getFormForLang(word, lang) {
  if (!word) return {};

  // 새 스키마: lemma, article, gender, plural, pos가 최상위에 있음
  if (lang === "de") {
    return {
      word: word.lemma || "",
      base: word.lemma || "",
      article: getWordArticle(word, lang),
      gender: getWordGrammarGender(word, lang),
      plural: word.plural || "",
      pos: word.pos || "",
    };
  }

  // 다른 언어는 meanings에서 가져옴
  const meaning = word.meanings ? word.meanings[lang] : "";
  return {
    word: meaning || word.lemma || "",
    base: meaning || word.lemma || "",
  };
}

function buildGermanForm(word) {
  if (!word) return "";

  const targetLang = SETTINGS.studyLang || "de";

  if (targetLang === "de") {
    const article = getWordArticle(word, targetLang);
    const lemma = (word.lemma || "").trim();

    // 명사: 관사 + 단어
    if (article && lemma) {
      return `${article} ${lemma}`;
    }
    // 동사/형용사/부사 등: 단어만
    return lemma;
  }

  // 다른 언어: meanings에서 가져옴
  const meaning = word.meanings ? word.meanings[targetLang] : "";
  return meaning || word.lemma || "";
}

function getMeaning(word, options) {
  if (!word) return "";

  const uiLang = CURRENT_LANG || "ko";
  const primaryOnly = !options || options.primaryOnly !== false;

  let text = "";

  // 새 스키마: word.meanings에서 직접 가져옴
  if (word.meanings) {
    text = word.meanings[uiLang] || word.meanings.en || "";
  }

  if (!text) return "";

  if (primaryOnly) {
    const idx = text.indexOf(",");
    if (idx !== -1) {
      text = text.slice(0, idx);
    }
  }

  return text.trim();
}

// Optional reading/romanization accessor (schema extension)
// Priority: reading map -> legacy meta fallback.
function getReadingForLang(word, langCode) {
  if (!word) return "";
  const lang = (langCode || "").toLowerCase();
  const reading = word.reading;
  if (reading && typeof reading === "object") {
    const v = reading[lang];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  const meta = word.meta || {};
  if (lang === "ja" && typeof meta.ja_reading === "string" && meta.ja_reading.trim()) {
    return meta.ja_reading.trim();
  }
  if (lang === "zh" && typeof meta.zh_pinyin === "string" && meta.zh_pinyin.trim()) {
    return meta.zh_pinyin.trim();
  }
  return "";
}

function hasKanji(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u4E00-\u9FFF]/.test(text);
}

function hasCjkHan(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u3400-\u4DBF\u4E00-\u9FFF]/.test(text);
}

function hasHangul(text) {
  if (!text || typeof text !== "string") return false;
  return /[\uAC00-\uD7A3]/.test(text);
}

function hasCyrillic(text) {
  if (!text || typeof text !== "string") return false;
  return /[\u0400-\u04FF]/.test(text);
}

function getStudyReadingValue(word) {
  if (!word) return "";
  const studyLang = (SETTINGS.studyLang || "de").toLowerCase();
  const rawLemma = (word.lemma || "").trim();

  if (studyLang === "ja") {
    return hasKanji(rawLemma) ? getReadingForLang(word, "ja") : "";
  }
  if (studyLang === "zh") {
    return hasCjkHan(rawLemma) ? getReadingForLang(word, "zh") : "";
  }
  if (studyLang === "ko") {
    return hasHangul(rawLemma) ? getReadingForLang(word, "ko") : "";
  }
  if (studyLang === "ru") {
    return hasCyrillic(rawLemma) ? getReadingForLang(word, "ru") : "";
  }
  return "";
}

function getSrsKey(wordId, langOverride) {
  const lang = (langOverride || getCurrentStudyLang() || "de").toLowerCase();
  // 예: karllang_word_de_101, karllang_word_en_101
  return `${STORAGE_KEYS.SRS_PREFIX}${lang}_${wordId}`;
}

function getWordState(word) {
  const key = getSrsKey(word.id);

  const raw = safeGet(key);
  if (!raw) {
    return {
      id: word.id,
      level: 0,
      lastReviewed: 0,
      nextDue: 0,
      isNew: true,
    };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      id: word.id,
      level: parsed.level || 0,
      lastReviewed: parsed.lastReviewed || 0,
      nextDue: parsed.nextDue || 0,
      isNew: parsed.isNew !== false,
    };
  } catch {
    return {
      id: word.id,
      level: 0,
      lastReviewed: 0,
      nextDue: 0,
      isNew: true,
    };
  }
}

function saveWordState(state) {
  const key = getSrsKey(state.id);
  safeSet(
    key,
    JSON.stringify({
      level: state.level,
      lastReviewed: state.lastReviewed,
      nextDue: state.nextDue,
      isNew: state.isNew,
    }),
  );
}

/**
 * SETTINGS에 맞게 큐 구성
 */
function buildQueue() {
  const today = nowDay();

  // 1) CEFR 필터 값 정리
  let cefrFilter = SETTINGS.newWordCefr;
  if (!cefrFilter || cefrFilter === "" || cefrFilter === null) {
    cefrFilter = "all";
  }
  cefrFilter = cefrFilter.toString().toUpperCase();

  const ALLOWED = ["ALL", "A1", "A2", "B1", "B2"];
  if (!ALLOWED.includes(cefrFilter)) {
    cefrFilter = "ALL";
    SETTINGS.newWordCefr = "all";
    saveSettings();
  }

  const allWords = getAllWords();

  // 2) 카테고리 값 정리
  const catFilter = (SETTINGS.newWordCategory || "all")
    .toString()
    .toLowerCase();

  // 단어셋은 사용자가 "새 단어 세트" 버튼을 누르기 전까지 유지한다.
  const studyLang = SETTINGS.studyLang || "de";
  const filterKey = `${studyLang}|${cefrFilter}|${catFilter}`;
  const storedStudySet = loadStudyWordSet();
  const cachedIds =
    LAST_STUDY_WORD_IDS && LAST_STUDY_WORD_IDS.length > 0
      ? LAST_STUDY_WORD_IDS
      : storedStudySet.ids;

  if (
    !TRAINING_MODE_ACTIVE &&
    cachedIds &&
    cachedIds.length > 0
  ) {
    const byId = {};
    allWords.forEach((w) => {
      if (!w || typeof w.id === "undefined") return;
      byId[String(w.id)] = w;
    });

    const queue = [];
    cachedIds.forEach((id) => {
      const w = byId[id];
      if (!w) return;
      const st = getWordState(w);
      queue.push({
        word: w,
        state: st,
        isNew: !!st.isNew,
      });
    });

    if (queue.length > 0) {
      APP_STATE.queue = queue;
      APP_STATE.totalTarget = queue.length;
      APP_STATE.completed = 0;
      APP_STATE.newCount = 0;
      APP_STATE.reviewCount = 0;
      resetSessionReport();
      LAST_STUDY_WORD_IDS = queue.map((item) => String(item.word.id));
      LAST_STUDY_META = {
        day: storedStudySet.day || today,
        filterKey: storedStudySet.filterKey || filterKey,
      };

      return;
    }

    clearStudyWordSetCache();
  }

  // 3) 필터링 (기존 로직 그대로)
  const filtered = allWords.filter((w) => {
    // 3-1) CEFR 필터
    const wc = (w.cefr || "").toString().trim().toUpperCase();

    if (cefrFilter !== "ALL") {
      if (!wc) return false;
      if (wc !== cefrFilter) return false;
    }

    // 3-2) 카테고리 필터 (tags 기반)
    if (catFilter !== "all") {
      if (!Array.isArray(w.tags) || !w.tags.includes(catFilter)) {
        return false;
      }
    }

    // 3-3) UI 언어 기준 의미가 없는 단어는 학습 대상에서 제외
    const meaning = getMeaning(w);
    if (!meaning) return false;

    return true;
  });

  // 4) 새 단어 / 복습 단어 분리
  const due = [];
  const newWords = [];

  filtered.forEach((w) => {
    const st = getWordState(w);

    if (st.isNew) {
      newWords.push({ word: w, state: st });
    } else if (st.nextDue <= today) {
      due.push({ word: w, state: st });
    }
  });

  // 5) 복습 단어 정렬
  due.sort((a, b) => {
    if (a.state.level !== b.state.level) {
      return a.state.level - b.state.level;
    }
    return a.state.nextDue - b.state.nextDue;
  });

  // 새 단어 셔플 (A 지옥 방지)
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  shuffleArray(newWords);

  // 6) 목표 개수만큼 큐 채우기
  let target = parseInt(SETTINGS.goalTyping, 10);
  if (!target || target < 1) {
    target = 5;
  }

  const queue = [];

  // 먼저 복습
  for (const item of due) {
    if (queue.length >= target) break;
    queue.push({ ...item, isNew: false });
  }

  // 나머지 새 단어
  for (const item of newWords) {
    if (queue.length >= target) break;
    queue.push({ ...item, isNew: true });
  }

  APP_STATE.queue = queue;
  APP_STATE.totalTarget = queue.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  resetSessionReport();

  LAST_STUDY_WORD_IDS = queue.map((item) => String(item.word.id));
  LAST_STUDY_META = {
    day: today,
    filterKey: filterKey,
  };
  saveStudyWordSet(LAST_STUDY_WORD_IDS, LAST_STUDY_META);
}

/* ============================================
   ========== 6. STUDY VIEW / QUESTION =========
   ============================================ */
function fadeSwapText(el, newText) {
  if (!el) return;

  // 이미 애니메이션 중이면, 그냥 텍스트만 교체
  if (el.classList.contains("changing")) {
    el.textContent = newText;
    return;
  }

  el.classList.add("changing");

  // CSS transition 0.2s에 맞춰서 텍스트 교체 후 클래스 제거
  setTimeout(() => {
    el.textContent = newText;
    el.classList.remove("changing");
  }, 80);
}
function formatProgressText(done, total, level) {
  const pack = t() || {};
  const left = Math.max(total - done, 0);

  if (pack.progress_template) {
    return pack.progress_template
      .replace("{done}", String(done))
      .replace("{total}", String(total))
      .replace("{left}", String(left))
      .replace("{level}", String(level));
  }

  const leftLabel = pack.left_label || "개 남음";
  if (CURRENT_LANG === "en") {
    return `${done}/${total} (${left} ${
      pack.left_label || "left"
    }) [Lv.${level}]`;
  }
  return `${done}/${total} (${left} ${leftLabel}) [Lv.${level}]`;
}

function updateProgressBar() {
  const total = APP_STATE.totalTarget || 0;
  const done = APP_STATE.completed || 0;

  // 🔹 상단 바 (지금은 CSS에서 숨겼지만, 로직은 유지)
  if (DOM.progressBar) {
    const percent = total > 0 ? (done / total) * 100 : 0;
    DOM.progressBar.style.width = `${percent}%`;
  }

  const level =
    APP_STATE.currentCard && APP_STATE.currentCard.state
      ? APP_STATE.currentCard.state.level || 0
      : 0;

  if (DOM.progressText) {
    DOM.progressText.textContent = formatProgressText(done, total, level);
  }

  // 🔹 훈련 모드 여부
  const isTrainingMode =
    (typeof TRAINING_MODE_ACTIVE !== "undefined" && TRAINING_MODE_ACTIVE) ||
    (typeof TRAINING_MODE_KIND !== "undefined" &&
      TRAINING_MODE_KIND &&
      TRAINING_MODE_KIND !== "none");

  if (!DOM.sessionProgress) {
    return;
  }

  // ==========================
  // 1) 훈련소(깜지) 전용 진행 표시
  // ==========================
  if (
    isTrainingMode &&
    typeof TRAINING_MODE_KIND !== "undefined" &&
    TRAINING_MODE_KIND === "cram"
  ) {
    const words =
      typeof TRAINING_CRAM_WORDS !== "undefined" && TRAINING_CRAM_WORDS
        ? TRAINING_CRAM_WORDS
        : [];
    const totalWords = words.length || total;

    if (totalWords > 0) {
      // TRAINING_CRAM_INDEX: 0,1,2,... (현재 단어 인덱스)
      let idx =
        typeof TRAINING_CRAM_INDEX === "number" ? TRAINING_CRAM_INDEX : done;

      if (idx < 0) idx = 0;
      if (idx >= totalWords) idx = totalWords - 1;

      const current = idx + 1; // 0-based → 1-based
      DOM.sessionProgress.textContent = `${current}/${totalWords}`;
    } else {
      DOM.sessionProgress.textContent = "";
    }

    return; // 🔚 훈련소일 때는 여기서 끝
  }

  // ==========================
  // 2) 일반 학습 세션 진행 표시
  // ==========================
  if (total > 0) {
    const remaining = APP_STATE.queue ? APP_STATE.queue.length : 0;
    let currentIndex;

    if (remaining > 0) {
      // 예: total=5, remaining=5 → 1/5
      //     total=5, remaining=4 → 2/5
      //     total=5, remaining=1 → 5/5
      currentIndex = total - remaining + 1;
    } else {
      // 큐 비었으면 세션 끝 → total/total
      currentIndex = total;
    }

    if (currentIndex < 1) currentIndex = 1;
    if (currentIndex > total) currentIndex = total;

    DOM.sessionProgress.textContent = `${currentIndex}/${total}`;
  } else {
    DOM.sessionProgress.textContent = "";
  }
}
// ✅ raw POS를 공통 키로 정규화
function normalizePosKey(rawPos) {
  if (!rawPos) return "";
  const s = rawPos.toString().trim().toLowerCase();

  if (["nomen", "noun", "명사", "名詞"].includes(s)) return "noun";
  if (["verb", "verben", "동사", "動詞"].includes(s)) return "verb";
  if (["adjektiv", "adjective", "형용사", "形容詞"].includes(s)) return "adj";
  if (["adverb", "부사", "副詞"].includes(s)) return "adv";
  if (["pronomen", "pronoun", "대명사", "代名詞"].includes(s)) return "pron";
  if (["artikel", "article", "관사", "冠詞"].includes(s)) return "art";
  if (["präposition", "praeposition", "preposition"].includes(s)) return "prep";
  if (["konjunktion", "conjunction"].includes(s)) return "conj";
  if (["interjektion", "interjection"].includes(s)) return "interj";
  if (["partikel", "particle"].includes(s)) return "part";

  return "";
}

function getPosLabelForLang(posKey, lang) {
  const table = {
    noun: {
      de: "Nomen",
      en: "noun",
      ko: "명사",
      es: "sustantivo",
      fr: "nom",
      it: "sostantivo",
      pt: "substantivo",
      pl: "rzeczownik",
      nl: "zelfstandig naamwoord",
      ru: "существительное",
      sv: "substantiv",
      ja: "名詞",
      zh: "名词",
    },
    verb: {
      de: "Verb",
      en: "verb",
      ko: "동사",
      es: "verbo",
      fr: "verbe",
      it: "verbo",
      pt: "verbo",
      pl: "czasownik",
      nl: "werkwoord",
      ru: "глагол",
      sv: "verb",
      ja: "動詞",
      zh: "动词",
    },
    adj: {
      de: "Adjektiv",
      en: "adjective",
      ko: "형용사",
      es: "adjetivo",
      fr: "adjectif",
      it: "aggettivo",
      pt: "adjetivo",
      pl: "przymiotnik",
      nl: "bijvoeglijk naamwoord",
      ru: "прилагательное",
      sv: "adjektiv",
      ja: "形容詞",
      zh: "形容词",
    },
    adv: {
      de: "Adverb",
      en: "adverb",
      ko: "부사",
      es: "adverbio",
      fr: "adverbe",
      it: "avverbio",
      pt: "advérbio",
      pl: "przysłówek",
      nl: "bijwoord",
      ru: "наречие",
      sv: "adverb",
      ja: "副詞",
      zh: "副词",
    },
    pron: {
      de: "Pronomen",
      en: "pronoun",
      ko: "대명사",
      es: "pronombre",
      fr: "pronom",
      it: "pronome",
      pt: "pronome",
      pl: "zaimek",
      nl: "voornaamwoord",
      ru: "местоимение",
      sv: "pronomen",
      ja: "代名詞",
      zh: "代词",
    },
    art: {
      de: "Artikel",
      en: "article",
      ko: "관사",
      es: "artículo",
      fr: "article",
      it: "articolo",
      pt: "artigo",
      pl: "rodzajnik",
      nl: "lidwoord",
      ru: "артикль",
      sv: "artikel",
      ja: "冠詞",
      zh: "冠词",
    },
    prep: {
      de: "Präposition",
      en: "preposition",
      ko: "전치사",
      es: "preposición",
      fr: "préposition",
      it: "preposizione",
      pt: "preposição",
      pl: "przyimek",
      nl: "voorzetsel",
      ru: "предлог",
      sv: "preposition",
      ja: "前置詞",
      zh: "介词",
    },
    conj: {
      de: "Konjunktion",
      en: "conjunction",
      ko: "접속사",
      es: "conjunción",
      fr: "conjonction",
      it: "congiunzione",
      pt: "conjunção",
      pl: "spójnik",
      nl: "voegwoord",
      ru: "союз",
      sv: "konjunktion",
      ja: "接続詞",
      zh: "连词",
    },
    interj: {
      de: "Interjektion",
      en: "interjection",
      ko: "감탄사",
      es: "interjección",
      fr: "interjection",
      it: "interiezione",
      pt: "interjeição",
      pl: "wykrzyknik",
      nl: "tussenwerpsel",
      ru: "междометие",
      sv: "interjektion",
      ja: "間投詞",
      zh: "感叹词",
    },
    part: {
      de: "Partikel",
      en: "particle",
      ko: "조사",
      es: "partícula",
      fr: "particule",
      it: "particella",
      pt: "partícula",
      pl: "partykuła",
      nl: "partikel",
      ru: "частица",
      sv: "partikel",
      ja: "助詞",
      zh: "助词",
    },
  };

  const row = table[posKey];
  if (!row) return "";

  return row[lang] || row["en"] || "";
}

function getPosWithMeaning(word) {
  if (!word) return "";

  // 새 스키마: pos가 최상위에 있음
  const rawPos = word.pos || "";
  if (!rawPos) return "";

  const posKey = normalizePosKey(rawPos);

  const studyLang = SETTINGS.studyLang || "de";
  const uiLang = CURRENT_LANG || "ko";

  const studyLabel = posKey
    ? getPosLabelForLang(posKey, studyLang) || rawPos
    : rawPos;
  const uiLabel = posKey
    ? getPosLabelForLang(posKey, uiLang) || studyLabel || rawPos
    : studyLabel || rawPos;

  if (studyLabel && uiLabel && studyLabel !== uiLabel) {
    return `${studyLabel} ${uiLabel}`;
  }

  return studyLabel || uiLabel || rawPos;
}

const CONJ_LABELS = {
  base: {
    de: "Grundform",
    en: "Base form",
    ko: "기본형 (Grundform)",
    es: "Forma base",
  },
  pres_ich: {
    de: "Präsens (ich)",
    en: "Present (ich)",
    ko: "현재형 ich",
    es: "Presente (ich)",
  },
  pres_du: {
    de: "Präsens (du)",
    en: "Present (du)",
    ko: "현재형 du",
    es: "Presente (du)",
  },
  pres_er: {
    de: "Präsens (er/sie/es)",
    en: "Present (er/sie/es)",
    ko: "현재형 er/sie/es",
    es: "Presente (él/ella)",
  },
  praet: {
    de: "Präteritum",
    en: "Simple past",
    ko: "과거형 (Präteritum)",
    es: "Pretérito",
  },
  part2: {
    de: "Partizip II",
    en: "Past participle",
    ko: "과거분사 (Partizip II)",
    es: "Participio pasado",
  },
};

function getConjLabel(key, uiLang) {
  const row = CONJ_LABELS[key];
  if (!row) {
    return key;
  }
  return row[uiLang] || row.en || row.de || key;
}

function getDisplayWordSide(word) {
  const mode = SETTINGS.mode;
  const targetLang = SETTINGS.studyLang || "de";

  const targetText = buildGermanForm(word);
  const meaning = getMeaning(word);

  if (mode === "typing_de" || mode === "copy") {
    return {
      question: meaning,
      answer: targetText,
      answerLang: targetLang,
    };
  } else {
    return {
      question: targetText,
      answer: meaning,
      answerLang: targetLang,
    };
  }
}

function getTrainingAnalyticsParams(mode, extra = {}) {
  return {
    study_lang: SETTINGS.studyLang,
    ui_lang: CURRENT_LANG,
    training_mode: mode,
    target_count: APP_STATE.totalTarget || 0,
    ...extra,
  };
}

function getPrimaryStudyText(word) {
  if (!word) return "";

  const targetLang = SETTINGS.studyLang || "de";

  let text = "";

  if (targetLang === "de") {
    text = (word.lemma || "").trim();
  } else {
    text = (word.meanings && word.meanings[targetLang]) || word.lemma || "";
  }

  if (!text) return "";

  const idx = text.indexOf(",");
  if (idx !== -1) {
    text = text.slice(0, idx);
  }

  return text.trim();
}

function showNextQuestion() {
  // 1. 카드 페이드 아웃 (꿀렁거림 숨기기용)
  if (DOM.mainCard) {
    DOM.mainCard.classList.add("swapping");
  }

  // 0.15초(CSS 시간) 뒤에 내용 교체하고 다시 보여줌
  setTimeout(() => {
    // ------------------------------------------------
    // (여기부터는 원래 로직 그대로)
    // ------------------------------------------------

    // 🔰 카드 배경 이펙트 초기화
    if (DOM.mainCard) {
      DOM.mainCard.classList.remove("card-correct", "card-wrong");
    }

    // 🔰 졸업 버튼 상태 초기화
    if (DOM.masteryMainBtn) {
      const lang = CURRENT_LANG || "ko";
      DOM.masteryMainBtn.style.display = "none";
      DOM.masteryMainBtn.disabled = false;
      DOM.masteryMainBtn.textContent = lang === "en" ? "Mastered" : "졸업";
      DOM.masteryMainBtn.classList.remove("mastery-done");
    }

    if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
      showEndStats();
      // ★ 끝났을 때도 페이드 인 해줘야 함
      if (DOM.mainCard) DOM.mainCard.classList.remove("swapping");
      return;
    }

    const item = APP_STATE.queue[0];
    APP_STATE.currentCard = item;
    TYPING_HINT_COUNT = 0;
    item._typingHintUsed = false;

    // 🔹 훈련소 모드 여부 (뷰 + 플래그 둘 다 체크)
    const isTrainingMode =
      (APP_STATE && APP_STATE.currentView === "training") ||
      (typeof TRAINING_MODE_ACTIVE !== "undefined" && TRAINING_MODE_ACTIVE) ||
      (typeof WRONG_PRACTICE_ACTIVE !== "undefined" &&
        WRONG_PRACTICE_ACTIVE) ||
      (typeof TRAINING_MODE_KIND !== "undefined" &&
        TRAINING_MODE_KIND !== "none");

    // 🔹 정규 학습에서만 조회수 증가 (훈련소는 카운트 제외)
    if (!isTrainingMode) {
      incrementTotalViews(item.word.id);
    }

    setPhase("QUESTION");

    if (DOM.mainCard) {
      DOM.mainCard.style.display = "block";
    }
    if (DOM.endStatsArea) {
      DOM.endStatsArea.style.display = "none";
    }

    const side = getDisplayWordSide(item.word);
    const hintText = getPosWithMeaning(item.word);

    if (DOM.questionDisplay) {
      // fadeSwapText 대신 그냥 textContent 써도 됨 (카드가 통째로 페이드되니까)
      DOM.questionDisplay.textContent = side.question;
      DOM.questionDisplay.classList.remove("changing"); // 혹시 남아있을 잔재 제거
    }
    if (DOM.hintDisplay) {
      DOM.hintDisplay.textContent = hintText;
      DOM.hintDisplay.classList.remove("changing");
    }
    if (DOM.feedback) {
      DOM.feedback.textContent = "";
    }

    // ============================================================
    // [Gemini Fix] 배지 UI 업데이트 (정규 학습 전용)
    // ============================================================
    const badgeEl =
      DOM.cardLevelBadge || document.getElementById("cardLevelBadge");

    if (badgeEl) {
      if (isTrainingMode) {
        // ✅ 훈련소(깜지/훈련/믹스)에서는 배지 완전 숨김
        badgeEl.style.display = "none";
        badgeEl.textContent = "";
        badgeEl.style.border = "none";
        badgeEl.style.backgroundColor = "transparent";
        badgeEl.style.color = "inherit";
      } else {
        // ✅ 일반 학습에서만 배지 표시
        badgeEl.style.display = "block";

        const stats = getWordStatsById(item.word.id);
        const viewCount = stats.totalViews;

        if (viewCount <= 1) {
          // 처음 보거나(1) 아예 안 본 경우(0)
          badgeEl.textContent = "New";
          badgeEl.style.color = "#00C853";
          badgeEl.style.backgroundColor = "#E8F5E9";
          badgeEl.style.border = "1px solid #C8E6C9";
        } else {
          // "3번째 봄" (번역팩 연동)
          let msg =
            typeof trKey === "function"
              ? trKey("card_view_count", "{n}번째 봄")
              : "{n}번째 봄";

          msg = msg.replace("{n}", viewCount);

          badgeEl.textContent = msg;
          badgeEl.style.color = "#555";
          badgeEl.style.backgroundColor = "#fff";
          badgeEl.style.border = "1px solid #e0e0e0";
        }
      }
    }
    // ============================================================

    if (DOM.copyGhost) {
      if (SETTINGS.mode === "copy") {
        const studyLang = (SETTINGS.studyLang || "de").toLowerCase();
        let ghostText = "";

        if (studyLang === "de") {
          ghostText = buildGermanForm(item.word);
        } else {
          const primary = getPrimaryStudyText(item.word);
          ghostText = primary || side.answer;
        }

        DOM.copyGhost.textContent = ghostText || "";
      } else {
        DOM.copyGhost.textContent = "";
      }
    }

    if (SETTINGS.mode === "typing_de" || SETTINGS.mode === "copy") {
      if (DOM.inputArea) DOM.inputArea.style.display = "block";
      if (DOM.answerInput) {
        DOM.answerInput.value = "";
        DOM.answerInput.disabled = false;

        const pack = t() || {};
        if (SETTINGS.mode === "copy") {
          DOM.answerInput.placeholder = "";
        } else {
          DOM.answerInput.placeholder = "";
        }
        // 모바일에서 키보드 올라오면 화면 튀는 문제 방지:
        // copy 모드에서는 자동 포커스 제거 (타이핑만 자동 포커스)
        if (SETTINGS.mode === "typing_de") {
          focusInputWithoutScroll(DOM.answerInput);
          requestAnimationFrame(refocusAnswerInputForTyping);
          setTimeout(refocusAnswerInputForTyping, 80);
        }
      }

      if (DOM.mainBtn) {
        const pack2 = t() || {};
        const shouldShowConfirm =
          SETTINGS.mode !== "copy" ||
          (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram");
        DOM.mainBtn.style.display = shouldShowConfirm ? "inline-block" : "none";
        DOM.mainBtn.textContent = pack2.confirm || "확인";
      }

      if (DOM.skipBtn) {
        DOM.skipBtn.style.display =
          SETTINGS.mode === "typing_de" ? "inline-block" : "none";
      }
    } else {
      if (DOM.inputArea) {
        DOM.inputArea.style.display = "none";
      }
      if (DOM.mainBtn) {
        const pack = t() || {};
        DOM.mainBtn.textContent = pack.show_answer || pack.answer || "정답";
        DOM.mainBtn.style.display = "inline-block";
      }
      if (DOM.skipBtn) {
        DOM.skipBtn.style.display = "none";
      }
    }

    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "none";
    }
    updateRatingButtonsForHint(null);
    updateTypingHintUi();

    updateProgressBar();
    updateStudyStartSummary();

    // ------------------------------------------------
    // 2. 카드 페이드 인 (내용 다 바꿨으니 짠! 하고 보여주기)
    if (DOM.mainCard) {
      DOM.mainCard.classList.remove("swapping");
    }
  }, 150); // CSS transition 시간(0.15s)과 맞춤
}

/* ============================================
   ========== 7. ANSWER / RATING / TTS =========
   ============================================ */

function getWordStatsAll() {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  const lang = getCurrentStudyLang();

  if (!raw) return {};

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};

    const byLang = parsed[lang];
    if (byLang && typeof byLang === "object") {
      return byLang;
    }
    return {};
  } catch {
    return {};
  }
}

function saveWordStatsAll(objForCurrentLang) {
  const lang = getCurrentStudyLang();
  let base = {};

  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        base = parsed;
      }
    } catch {
      base = {};
    }
  }

  base[lang] = objForCurrentLang;
  safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(base));
}
/* [수정 1] getWordStatsById & setWordStatsById 함수 교체 */

function getWordStatsById(id) {
  const all = getWordStatsAll();
  const base = all[id] || {};

  // [New] totalViews(본 횟수) 가져오기. 없으면 0.
  const totalViews = typeof base.totalViews === "number" ? base.totalViews : 0;

  return {
    hardCount: base.hardCount || 0,
    wrongAttempts: base.wrongAttempts || 0,
    bookmarked: !!base.bookmarked,
    level: base.level || 0,
    lastWrongAt: base.lastWrongAt || 0,
    lastHardAt: base.lastHardAt || 0,
    totalViews: totalViews, // 여기에 추가됨
  };
}

function setWordStatsById(id, updater) {
  const all = getWordStatsAll();

  // [New] 초기화할 때 totalViews: 0 추가
  const current = all[id] || {
    hardCount: 0,
    wrongAttempts: 0,
    bookmarked: false,
    level: 0,
    lastWrongAt: 0,
    lastHardAt: 0,
    totalViews: 0,
  };

  const next = updater(current);
  all[id] = next;
  saveWordStatsAll(all);
  return next;
}
/* [수정 2] 조회수 증가 함수 추가 (setWordStatsById 바로 밑에 붙여넣기) */

function incrementTotalViews(wordId) {
  setWordStatsById(String(wordId), (s) => {
    let baseCount;
    if (typeof s.totalViews === "number") {
      baseCount = s.totalViews;
    } else {
      // 기존 데이터가 없으면 (레벨 + 틀린 횟수)로 대충 퉁쳐서 시작
      baseCount = (s.level || 0) + (s.wrongAttempts || 0);
    }
    return { ...s, totalViews: baseCount + 1 };
  });
}
// ✅ 특정 단어를 "문제 단어 + 북마크"에서 졸업시키는 헬퍼
//    - options.keepBookmark === true 이면 북마크는 유지
function markWordMastered(wordId, options = {}) {
  const id = String(wordId);
  const keepBookmark = options.keepBookmark === true;

  setWordStatsById(id, (s) => ({
    ...s,
    hardCount: 0,
    wrongAttempts: 0,
    lastWrongAt: 0,
    lastHardAt: 0,
    // 자동 졸업(깜지)에서는 북마크를 유지할 수 있도록 분기
    bookmarked: keepBookmark ? s.bookmarked : false,
  }));

  // 뷰 갱신
  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (!keepBookmark && APP_STATE.currentView === "bookmark") {
    // keepBookmark=true면 북마크 목록에서는 그대로 보여야 하니까
    renderBookmarks();
  }
}

function incrementWrongAttempt(wordId) {
  setWordStatsById(String(wordId), (s) => ({
    ...s,
    wrongAttempts: (s.wrongAttempts || 0) + 1,
    lastWrongAt: Date.now(), // 🔹 최근 오답 시각
  }));
}

function toggleBookmark(wordId) {
  const stats = setWordStatsById(wordId, (s) => ({
    ...s,
    bookmarked: !s.bookmarked,
  }));

  const btn = document.getElementById("bookmarkToggle");
  if (btn) {
    btn.textContent = stats.bookmarked ? "★" : "☆";
  }
  const btnCopy = document.getElementById("copyBookmarkBtn");
  if (btnCopy) {
    btnCopy.textContent = stats.bookmarked ? "★" : "☆";
  }

  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (APP_STATE.currentView === "bookmark") {
    renderBookmarks();
  }
}

function renderAnswerWithSpeaker(fullGerman, meaningText, word) {
  const stats = getWordStatsById(String(word.id));

  // 기본값: 타이핑/카피용
  //  - 큰 글자: 독일어
  //  - 작은 글자: 뜻(UI 언어)
  let mainText = fullGerman || "";
  let smallMeaning = meaningText || "";

  // 🔹 카드 모드일 때만 순서 반전
  //  - 앞면에서 이미 독일어를 봤으니
  //  - 뒷면에서는 "뜻을 크게", "독일어를 작게"
  if (SETTINGS.mode === "card") {
    mainText = meaningText || "";
    smallMeaning = fullGerman || "";
  }

  const readingValue = getStudyReadingValue(word);
  const readingLineHtml = readingValue
    ? '<div class="answer-reading-row"><span class="answer-reading-text">' +
      escapeHtml(readingValue) +
      "</span></div>"
    : "";
  const meaningLineHtml =
    '<div class="answer-meaning-row">' +
    '<span class="answer-meaning-text">' +
    escapeHtml(smallMeaning) +
    "</span>" +
    "</div>";
  const answerSubHtml =
    SETTINGS.mode === "card"
      ? meaningLineHtml + readingLineHtml
      : readingLineHtml + meaningLineHtml;

  DOM.questionDisplay.innerHTML =
    '<span class="answer-text answer-main">' +
    escapeHtml(mainText) +
    "</span>" +
    answerSubHtml +
    '<div class="answer-line answer-actions">' +
    '<button class="icon-btn speaker-icon" id="speakerBtn" type="button" aria-label="발음 듣기"></button>' +
    '<button class="icon-btn info-icon" id="detailBtn" type="button" aria-label="자세히 보기">i</button>' +
    '<button class="icon-btn bookmark-btn" id="bookmarkToggle" type="button" aria-label="단어장에 추가">' +
    (stats.bookmarked ? "★" : "☆") +
    "</button>" +
    "</div>";

  // 힌트 영역 비우기
  if (DOM.hintDisplay) {
    DOM.hintDisplay.textContent = "";
  }

  // 입력 영역 숨기기
  if (DOM.inputArea) {
    DOM.inputArea.style.display = "none";
  }
  if (DOM.answerInput) {
    DOM.answerInput.value = "";
    DOM.answerInput.disabled = true;
  }

  // 발음 버튼
  const btnSpeak = document.getElementById("speakerBtn");
  if (btnSpeak) {
    btnSpeak.addEventListener("click", () => {
      // 카드 모드든 아니든 독일어를 읽어야 하니 fullGerman 사용
      speakGerman(fullGerman);
    });
  }

  // 북마크 버튼
  const btnBookmark = document.getElementById("bookmarkToggle");
  if (btnBookmark) {
    btnBookmark.addEventListener("click", () => {
      if (typeof triggerHaptic === "function") {
        triggerHaptic("light");
      }
      toggleBookmark(String(word.id));
    });
  }

  // 디테일 버튼
  const btnDetail = document.getElementById("detailBtn");
  if (btnDetail) {
    btnDetail.addEventListener("click", () => openWordDetail(word));
  }

  updateTtsUiState();
}

// ✅ 정답 처리 공통
function applyAnswerResult(isCorrect, item) {
  const pack = t() || {};
  const word = item.word;
  const german = buildGermanForm(word);
  const meaningText = getMeaning(word);

  item._sessionAnswerCorrect = isCorrect === true;

  // 피드백 텍스트
  if (DOM.feedback) {
    if (SETTINGS.mode === "card") {
      DOM.feedback.textContent = "";
    } else {
      DOM.feedback.textContent = isCorrect
        ? pack.correct || "정답입니다!"
        : pack.incorrect || "아쉽네요.";
    }
  }

  // 카드 이펙트 + 정답 영역 + 발음
  applyAnswerEffect(isCorrect);
  renderAnswerWithSpeaker(german, meaningText, word);
  speakGerman(german);

  setPhase("ANSWER");
  updateTypingHintUi();

  if (DOM.skipBtn) {
    DOM.skipBtn.style.display = "none";
  }

  // ==========================
  //   1) 훈련소 모드일 때
  // ==========================
  if (TRAINING_MODE_ACTIVE) {
    // 난이도 버튼 숨김
    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "none";
    }

    // 메인 버튼은 항상 "다음"
    if (DOM.mainBtn) {
      DOM.mainBtn.style.display = "inline-block";
      DOM.mainBtn.textContent = pack.next || "다음";
    }

    // 졸업 버튼 노출 조건
    if (DOM.masteryMainBtn) {
      const isMix = TRAINING_MODE_KIND === "mix";
      // mix 모드에서 0=카드, 1=카피, 2=타이핑(마지막 스텝)
      const isLastTypingStep = isMix && TRAINING_MIX_STEP === 2;

      // mix가 아니면 항상 보이고,
      // mix면 마지막 타이핑 스텝에서만 보이게
      const shouldShowMastery = !isMix || isLastTypingStep;

      if (shouldShowMastery) {
        const lang = CURRENT_LANG || "ko";
        DOM.masteryMainBtn.style.display = "inline-block";
        DOM.masteryMainBtn.disabled = false;
        DOM.masteryMainBtn.textContent = lang === "en" ? "Mastered" : "졸업";
        DOM.masteryMainBtn.classList.remove("mastery-done");
      } else {
        DOM.masteryMainBtn.style.display = "none";
      }
    }

    // ==========================
    //   2) 일반 학습 모드일 때
    // ==========================
  } else {
    // 일반 학습에서는 졸업 버튼 숨기고
    if (DOM.masteryMainBtn) {
      DOM.masteryMainBtn.style.display = "none";
    }
    // 난이도 버튼 사용
    if (DOM.ratingArea) {
      DOM.ratingArea.style.display = "block";
    }
    updateRatingButtonsForHint(item);
    // 메인 버튼은 숨김 (지금 구조 유지)
    if (DOM.mainBtn) {
      DOM.mainBtn.style.display = "none";
    }
  }
}

// ✅ 디테일 팝업용 풀 뜻
function getFullMeaningForDetail(word) {
  if (!word) return "";

  const uiLang = CURRENT_LANG || "ko";

  // 새 스키마: word.meanings
  if (word.meanings && typeof word.meanings[uiLang] === "string") {
    const raw = word.meanings[uiLang].trim();
    if (raw) return raw;
  }

  // 여러 언어 뜻 모아서 보여주기
  if (word.meanings && typeof word.meanings === "object") {
    const parts = [];
    const labelMap = {
      ko: "KO",
      en: "EN",
      de: "DE",
      es: "ES",
      fr: "FR",
      it: "IT",
      pt: "PT",
      ja: "JA",
      zh: "ZH",
      ru: "RU",
    };
    for (const [lang, value] of Object.entries(word.meanings)) {
      if (!value) continue;
      const label = labelMap[lang] || lang.toUpperCase();
      parts.push(`[${label}] ${value}`);
    }
    if (parts.length > 0) {
      return parts.join(" / ");
    }
  }

  return getMeaning(word, { primaryOnly: false }) || "";
}

// ✅ 디테일 팝업 하단 "기타" 영역
function getExtraDetailForWord(word) {
  if (!word) return "";

  const uiLang = CURRENT_LANG || "ko";
  const studyLang = SETTINGS.studyLang || "de";
  const lines = [];

  // CEFR
  if (word.cefr) {
    const cefr = String(word.cefr).toUpperCase();
    lines.push(`CEFR: ${cefr}`);
  }

  // 기본형 (lemma)
  const base = (word.lemma || "").trim();

  if (base) {
    let labelBase;
    switch (uiLang) {
      case "ko":
        labelBase = "기본형";
        break;
      case "en":
        labelBase = "Base form";
        break;
      case "de":
        labelBase = "Grundform";
        break;
      case "es":
        labelBase = "Forma base";
        break;
      case "fr":
        labelBase = "Forme de base";
        break;
      case "it":
        labelBase = "Forma base";
        break;
      case "pt":
        labelBase = "Forma base";
        break;
      case "ja":
        labelBase = "基本形";
        break;
      case "zh":
        labelBase = "基本形式";
        break;
      case "ru":
        labelBase = "основная форма";
        break;
      default:
        labelBase = "Base form";
    }
    lines.push(`${labelBase}: ${base}`);
  }

  // 읽기/로마니제이션 (언어별 reading map)
  const reading =
    studyLang === "ja"
      ? hasKanji(base)
        ? getReadingForLang(word, studyLang)
        : ""
      : studyLang === "zh"
      ? hasCjkHan(base)
        ? getReadingForLang(word, studyLang)
        : ""
      : getReadingForLang(word, studyLang);
  if (reading) {
    let labelReading;
    switch (uiLang) {
      case "ko":
        labelReading = "읽기";
        break;
      case "en":
        labelReading = "Reading";
        break;
      case "de":
        labelReading = "Lesung";
        break;
      case "es":
        labelReading = "Lectura";
        break;
      case "fr":
        labelReading = "Lecture";
        break;
      case "it":
        labelReading = "Lettura";
        break;
      case "pt":
        labelReading = "Leitura";
        break;
      case "ja":
        labelReading = "読み";
        break;
      case "zh":
        labelReading = "读音";
        break;
      case "ru":
        labelReading = "Чтение";
        break;
      default:
        labelReading = "Reading";
    }
    lines.push(`${labelReading}: ${reading}`);
  }

  // 복수형 (명사만)
  if (word.plural) {
    let labelPlural;
    switch (uiLang) {
      case "ko":
        labelPlural = "복수형";
        break;
      case "en":
        labelPlural = "Plural";
        break;
      case "de":
        labelPlural = "Plural";
        break;
      case "es":
        labelPlural = "Plural";
        break;
      case "fr":
        labelPlural = "Pluriel";
        break;
      case "it":
        labelPlural = "Plurale";
        break;
      case "pt":
        labelPlural = "Plural";
        break;
      case "ja":
        labelPlural = "複数形";
        break;
      case "zh":
        labelPlural = "复数";
        break;
      case "ru":
        labelPlural = "Множественное";
        break;
      default:
        labelPlural = "Plural";
    }
    lines.push(`${labelPlural}: ${word.plural}`);
  }

  // 동사 변화 (conj)
  const conj = word.conj;
  if (conj && typeof conj === "object") {
    const presList = [];
    let past = null;
    let part2 = null;
    let aux = null;

    for (const [key, value] of Object.entries(conj)) {
      if (!value) continue;

      if (key.startsWith("pres_")) {
        presList.push(value);
      } else if (key === "praet") {
        past = value;
      } else if (key === "part2") {
        part2 = value;
      } else if (key === "aux") {
        aux = value;
      }
    }

    if (presList.length > 0) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "현재형";
          break;
        case "en":
          label = "Present";
          break;
        case "de":
          label = "Präsens";
          break;
        case "es":
          label = "Presente";
          break;
        case "fr":
          label = "Présent";
          break;
        case "it":
          label = "Presente";
          break;
        case "pt":
          label = "Presente";
          break;
        case "ja":
          label = "現在形";
          break;
        case "zh":
          label = "现在时";
          break;
        case "ru":
          label = "Настоящее время";
          break;
        default:
          label = "Present";
      }
      lines.push(`${label}: ${presList.join(" | ")}`);
    }

    if (past) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "과거형";
          break;
        case "en":
          label = "Simple past";
          break;
        case "de":
          label = "Präteritum";
          break;
        case "es":
          label = "Pretérito";
          break;
        case "fr":
          label = "Passé";
          break;
        case "it":
          label = "Passato";
          break;
        case "pt":
          label = "Pretérito";
          break;
        case "ja":
          label = "過去形";
          break;
        case "zh":
          label = "过去时";
          break;
        case "ru":
          label = "Прошедшее время";
          break;
        default:
          label = "Simple past";
      }
      lines.push(`${label}: ${past}`);
    }

    if (part2) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "과거분사";
          break;
        case "en":
          label = "Past participle";
          break;
        case "de":
          label = "Partizip II";
          break;
        case "es":
          label = "Participio pasado";
          break;
        case "fr":
          label = "Participe passé";
          break;
        case "it":
          label = "Participio passato";
          break;
        case "pt":
          label = "Particípio passado";
          break;
        case "ja":
          label = "過去分詞";
          break;
        case "zh":
          label = "过去分词";
          break;
        case "ru":
          label = "Причастие II";
          break;
        default:
          label = "Past participle";
      }
      lines.push(`${label}: ${part2}`);
    }

    if (aux) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "조동사";
          break;
        case "en":
          label = "Auxiliary";
          break;
        case "de":
          label = "Hilfsverb";
          break;
        default:
          label = "Aux";
      }
      lines.push(`${label}: ${aux}`);
    }
  }

  // 예문
  if (Array.isArray(word.examples) && word.examples.length > 0) {
    const first = word.examples[0];

    let labelEx;
    switch (uiLang) {
      case "ko":
        labelEx = "예";
        break;
      case "en":
        labelEx = "Ex";
        break;
      case "de":
        labelEx = "Bsp";
        break;
      case "es":
        labelEx = "Ej";
        break;
      case "fr":
        labelEx = "Ex";
        break;
      case "it":
        labelEx = "Es";
        break;
      case "pt":
        labelEx = "Ex";
        break;
      case "ja":
        labelEx = "例";
        break;
      case "zh":
        labelEx = "例";
        break;
      case "ru":
        labelEx = "Прим";
        break;
      default:
        labelEx = "Ex";
    }

    // 새 스키마: examples는 문자열 배열
    if (typeof first === "string") {
      lines.push(`${labelEx}: ${first}`);
    }
  }

  return lines.join(" | ");
}

function openWordDetail(word) {
  if (!DOM.detailOverlay) return;

  const studyLang = SETTINGS.studyLang || "de";

  let studyText = "";
  if (studyLang === "de") {
    studyText = buildGermanForm(word);
  } else {
    const primary = getPrimaryStudyText(word);
    if (primary) {
      studyText = primary;
    } else {
      // 새 스키마: meanings에서 가져옴
      studyText =
        (word.meanings && word.meanings[studyLang]) || word.lemma || "";
    }
  }

  const posText = getPosWithMeaning(word);
  const fullMeaning = getFullMeaningForDetail(word); // ✅ 뜻 전체
  const extraText = getExtraDetailForWord(word); // ✅ CEFR/기본형/변화형/예문

  if (DOM.detailTitle) DOM.detailTitle.textContent = studyText || "";
  if (DOM.detailPos) DOM.detailPos.textContent = posText || "-";
  if (DOM.detailMeaning) DOM.detailMeaning.textContent = fullMeaning || "-";

  if (DOM.detailExtraRow && DOM.detailExtra) {
    if (extraText) {
      DOM.detailExtraRow.style.display = "flex";
      DOM.detailExtra.textContent = extraText;
    } else {
      DOM.detailExtraRow.style.display = "none";
      DOM.detailExtra.textContent = "";
    }
  }

  DOM.detailOverlay.classList.add("active");
}

function closeWordDetail() {
  if (!DOM.detailOverlay) return;
  DOM.detailOverlay.classList.remove("active");
}

// 타이핑 모드 채점
function evaluateTypingAnswer(userInput, item) {
  const word = item.word;
  const pack = t() || {};
  const trimmed = (userInput || "").replace(/\s+/g, " ").trim();

  if (!trimmed) {
    if (DOM.feedback) {
      DOM.feedback.textContent = pack.type_answer || "정답을 입력해 주세요.";
    }
    if (DOM.answerInput) {
      focusInputWithoutScroll(DOM.answerInput);
    }
    return "retry";
  }

  const targetLang = SETTINGS.studyLang || "de";
  const form = getFormForLang(word, targetLang);
  const baseRaw = (form.base || form.word || "").trim();

  // 정답 기준 텍스트가 없으면 그냥 통과
  if (!baseRaw) {
    return "correct";
  }

  // ==============================
  //   1) 독일어가 아닐 때 (예: 영어)
  // ==============================
  if (targetLang !== "de") {
    const candidates = baseRaw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const answerLower = trimmed.toLowerCase();

    // 콤마로 나뉜 것 중 하나와 정확히 일치하면 정답
    if (candidates.some((c) => answerLower === c.toLowerCase())) {
      return "correct";
    }

    // 전체 그대로 친 경우도 정답 인정
    if (answerLower === baseRaw.toLowerCase()) {
      return "correct";
    }

    return "wrong";
  }

  // ==============================
  //   2) 독일어일 때
  // ==============================
  const article = form.article || "";
  const inputNorm = trimmed;

  // ---- 작은 헬퍼: 선택 영역 ----
  function selectAll() {
    if (!DOM.answerInput) return;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(0, inputNorm.length);
  }

  function selectArticleOnly() {
    if (!DOM.answerInput) return;
    const firstSpaceIdx = inputNorm.indexOf(" ");
    const end = firstSpaceIdx === -1 ? inputNorm.length : firstSpaceIdx;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(0, end);
  }

  function selectNounOnly() {
    if (!DOM.answerInput) return;
    const firstSpaceIdx = inputNorm.indexOf(" ");
    if (firstSpaceIdx === -1) {
      // 공백이 없으면 그냥 전체 선택
      selectAll();
      return;
    }
    const start = firstSpaceIdx + 1;
    focusInputWithoutScroll(DOM.answerInput);
    DOM.answerInput.setSelectionRange(start, inputNorm.length);
  }

  // ==============================
  //   2-1) 관사 없는 단어 (동사, 형용사 등)
  // ==============================
  if (!article) {
    const rawPos = word.pos || "";
    const isNounLike = /^(noun|n|subst)/i.test(rawPos);

    const firstChar = baseRaw[0] || "";
    const startsUpper = /^[A-ZÄÖÜ]/.test(firstChar);

    const sameIgnoreCase = inputNorm.toLowerCase() === baseRaw.toLowerCase();
    const exact = inputNorm === baseRaw;

    // 🔹 명사 + 대문자 시작(고유명사 격) → 첫 글자 대문자 필수
    if (isNounLike && startsUpper) {
      if (!sameIgnoreCase) {
        if (!item._properNounWrongOnce) {
          item._properNounWrongOnce = true;
          if (DOM.feedback) {
            DOM.feedback.textContent =
              pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
          }
          selectAll();
          return "retry";
        }
        return "wrong";
      }

      if (sameIgnoreCase && !exact) {
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.proper_capitalization ||
            pack.noun_capitalization ||
            "명사는 첫 글자를 대문자로 써 주세요.";
        }
        selectAll();
        return "retry";
      }

      return "correct";
    }

    // 🔹 동사/형용사/부사 등: 소문자 기준
    if (!sameIgnoreCase) {
      if (!item._nonNounWrongOnce) {
        item._nonNounWrongOnce = true;
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
        }
        selectAll();
        return "retry";
      }
      return "wrong";
    }

    if (sameIgnoreCase && !exact) {
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.verb_lowercase || "동사·형용사·부사 등은 소문자로 써 주세요.";
      }
      selectAll();
      return "retry";
    }

    return "correct";
  }

  // ==============================
  //   2-2) 관사 있는 명사 처리
  //   → 정답 기준: "관사 소문자 + 명사 대문자"
  // ==============================
  const expected = `${article} ${baseRaw}`;

  const parts = inputNorm.split(" ");
  const inputArticle = parts[0] || "";
  const inputRest = parts.slice(1).join(" ");

  const articleExact = inputArticle === article; // ✅ 대소문자까지 완전 일치해야 정답
  const articleIgnoreCase = inputArticle.toLowerCase() === article.toLowerCase();

  const restSameIgnoreCase = inputRest.toLowerCase() === baseRaw.toLowerCase();
  const restExact = inputRest === baseRaw;

  // ---- 1) 관사부터 체크 ----
  if (!articleExact) {
    // 형태는 맞는데 대소문자만 틀린 경우 (예: "Der Hund")
    if (articleIgnoreCase) {
      if (!item._articleCaseOnce) {
        item._articleCaseOnce = true;
        if (DOM.feedback) {
          DOM.feedback.textContent =
            pack.article_lowercase ||
            "관사는 항상 소문자로 써 주세요 (der/die/das).";
        }
        selectArticleOnly();
        return "retry";
      }
      return "wrong";
    }

    // 아예 틀린 관사(den, dem, dir 등)일 때
    if (!item._articleWrongOnce) {
      item._articleWrongOnce = true;
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.article_hint || "관사를 다시 확인해 주세요.";
      }
      selectArticleOnly();
      return "retry";
    }
    return "wrong";
  }

  // ---- 2) 관사는 정확 → 명사 철자/대문자 체크 ----
  if (!restSameIgnoreCase) {
    if (!item._nounSpellingOnce) {
      item._nounSpellingOnce = true;
      if (DOM.feedback) {
        DOM.feedback.textContent =
          pack.noun_spelling || "단어 철자를 다시 확인해 주세요.";
      }
      selectNounOnly();
      return "retry";
    }
    return "wrong";
  }

  if (restSameIgnoreCase && !restExact) {
    if (DOM.feedback) {
      DOM.feedback.textContent =
        pack.noun_capitalization || "명사는 첫 글자를 대문자로 써 주세요.";
    }
    selectNounOnly();
    return "retry";
  }

  // 관사(소문자) + 명사(대문자)까지 완벽
  return "correct";
}
function advanceTrainingStep() {
  const pack = t() || {};
  if (!TRAINING_MODE_ACTIVE) return;

  // ========= 1) 깜지 모드 =========
  if (TRAINING_MODE_KIND === "cram") {
    const words = TRAINING_CRAM_WORDS || [];

    // 안전장치: 단어가 없으면 종료
    if (!words.length) {
      TRAINING_MODE_ACTIVE = false;
      TRAINING_MODE_KIND = "none";
      TRAINING_CRAM_WORDS = [];
      TRAINING_CRAM_INDEX = 0;
      TRAINING_CRAM_REPEAT_INDEX = 0;
      TRAINING_CRAM_REPEAT_TOTAL = 3;

      showReadyState();
      showView("training");
      if (DOM.trainingSummary) {
        DOM.trainingSummary.style.color = "#16a34a";
        DOM.trainingSummary.textContent = trKey(
          "training.done_simple",
          "훈련 세션이 종료되었습니다.",
        );
      }
      return;
    }

    // 아직 이 단어에서 반복 남았을 때 → 같은 단어로 다음 단계 고스트
    if (TRAINING_CRAM_REPEAT_INDEX < TRAINING_CRAM_REPEAT_TOTAL - 1) {
      TRAINING_CRAM_REPEAT_INDEX += 1;
      showCramQuestion();
      return;
    }

    // 이 단어 깜지 완료 → 다음 단어로
    TRAINING_CRAM_REPEAT_INDEX = 0;
    TRAINING_CRAM_INDEX += 1;
    APP_STATE.completed = TRAINING_CRAM_INDEX;

    // 모든 단어 끝났으면 종료
    if (TRAINING_CRAM_INDEX >= words.length) {
      completeCramTrainingSession();
      return;
    }

    // 다음 단어 깜지 시작
    showCramQuestion();
    return;
  }

  // ========= 2) Mix 모드: 카드 → 카피 → 타이핑 =========
  if (TRAINING_MODE_KIND === "mix") {
    const words = TRAINING_MIX_WORDS || [];
    if (!words.length) {
      TRAINING_MODE_ACTIVE = false;
      TRAINING_MODE_KIND = "none";
      TRAINING_MIX_WORDS = [];
      TRAINING_MIX_INDEX = 0;
      TRAINING_MIX_STEP = 0;

      showReadyState();
      showView("training");
      if (DOM.trainingSummary) {
        DOM.trainingSummary.style.color = "#e11d48";
        DOM.trainingSummary.textContent =
          pack.training_no_words || "훈련할 단어가 없습니다.";
      }
      return;
    }

    if (TRAINING_MIX_STEP === 0) {
      // 카드 → 카피
      TRAINING_MIX_STEP = 1;
    } else if (TRAINING_MIX_STEP === 1) {
      // 카피 → 타이핑
      TRAINING_MIX_STEP = 2;
    } else {
      // 타이핑 끝 → 이 단어 완료
      TRAINING_MIX_INDEX += 1;
      TRAINING_MIX_STEP = 0;

      // 모든 단어 완료
      if (TRAINING_MIX_INDEX >= words.length) {
        TRAINING_MODE_ACTIVE = false;
        TRAINING_MODE_KIND = "none";
        TRAINING_MIX_WORDS = [];
        TRAINING_MIX_INDEX = 0;
        TRAINING_MIX_STEP = 0;

        showReadyState();
        showView("training");

        if (DOM.trainingSummary) {
          DOM.trainingSummary.style.color = "#16a34a";
          DOM.trainingSummary.textContent =
            pack.training_done ||
            `훈련 완료: ${words.length}개 단어를 카드·따라쓰기·타이핑으로 연습했습니다.`;
        }
        return;
      }
    }

    // 진행도: "완료한 단어 수" 기준
    APP_STATE.completed = TRAINING_MIX_INDEX;
    APP_STATE.totalTarget = words.length;

    // 스텝에 맞게 모드 전환
    if (TRAINING_MIX_STEP === 0) {
      SETTINGS.mode = "card";
    } else if (TRAINING_MIX_STEP === 1) {
      SETTINGS.mode = "copy";
    } else {
      SETTINGS.mode = "typing_de";
    }
    saveSettings();
    hydrateSettingsToUI();
    applyTranslations();

    const currentWord = words[TRAINING_MIX_INDEX];
    const st = getWordState(currentWord);
    APP_STATE.queue = [
      {
        word: currentWord,
        state: st,
        isNew: st.isNew,
      },
    ];

    updateProgressBar();
    showNextQuestion();
    return;
  }

  // ========= 3) 일반 typing / copy 훈련 =========
  if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
    TRAINING_MODE_ACTIVE = false;
    TRAINING_MODE_KIND = "none";
    TRAINING_MIX_WORDS = [];
    TRAINING_MIX_INDEX = 0;
    TRAINING_MIX_STEP = 0;

    showReadyState();
    showView("training");
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#16a34a";
      DOM.trainingSummary.textContent = trKey(
        "training.done_simple",
        "훈련 세션이 종료되었습니다.",
      );
    }
    return;
  }

  APP_STATE.queue.shift();
  APP_STATE.completed = (APP_STATE.completed || 0) + 1;

  if (APP_STATE.queue.length === 0) {
    TRAINING_MODE_ACTIVE = false;
    TRAINING_MODE_KIND = "none";
    TRAINING_MIX_WORDS = [];
    TRAINING_MIX_INDEX = 0;
    TRAINING_MIX_STEP = 0;

    showReadyState();
    showView("training");
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#16a34a";
      DOM.trainingSummary.textContent = trKey(
        "training.done_simple",
        "훈련 세션이 종료되었습니다.",
      );
    }
    return;
  }

  updateProgressBar();
  showNextQuestion();
}

function handleConfirm() {
  // 🔹 깜지(훈련소 cram) 모드는 여기서 전부 처리하고 나머지 로직은 건너뜀
  if (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram") {
    handleCramSubmit();
    return;
  }

  if (WRONG_PRACTICE_ACTIVE && APP_STATE.phase === "ANSWER") {
    advanceWrongPracticeStep();
    return;
  }

  // 🔻 여기부터는 기존 코드 그대로 유지
  // 🔹 훈련소에서 정답 화면(ANSWER)일 때는 "다음" 버튼으로 스텝/단어 이동
  if (TRAINING_MODE_ACTIVE && APP_STATE.phase === "ANSWER") {
    advanceTrainingStep();
    return;
  }

  if (APP_STATE.phase === "READY") {
    buildQueue();
    if (APP_STATE.totalTarget === 0) {
      const pack = t() || {};
      DOM.feedback.textContent =
        pack.no_words_today || "오늘은 학습할 단어가 없습니다.";
      return;
    }
    logAnalyticsEvent("start_session", {
      ...getSessionAnalyticsParams(),
      target_count: APP_STATE.totalTarget,
    });
    recordAttendanceForStudyStart();
    showNextQuestion();
    return;
  }

  if (APP_STATE.phase !== "QUESTION") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  if (SETTINGS.mode === "card") {
    applyAnswerResult(true, item);
    return;
  }
  // 따라쓰기 모드
  if (SETTINGS.mode === "copy") {
    const pack = t() || {};
    const word = item.word;
    const speakText = buildGermanForm(word);

    const rawInput = DOM.answerInput.value || "";
    const userInput = rawInput.trim();

    if (!userInput) {
      DOM.feedback.textContent = pack.type_answer || "정답을 입력해 주세요.";
      focusInputWithoutScroll(DOM.answerInput);
      return;
    }

    let target = "";
    if (DOM.copyGhost && DOM.copyGhost.textContent) {
      target = DOM.copyGhost.textContent.trim();
    } else {
      target = speakText.trim();
    }

    if (userInput !== target) {
      // 🔹 따라쓰기 오타: 약한 피드백 + 카드 빨간색
      //    (applyAnswerEffect(false)가 에러 햅틱 + card-wrong 클래스 처리)
      applyAnswerEffect(false);

      DOM.feedback.textContent = trKey(
        "study.copy_check_spelling",
        "철자를 다시 확인하세요.",
      );

      focusInputWithoutScroll(DOM.answerInput);
      return;
    }

    renderAnswerWithSpeaker(speakText, getMeaning(word), word);
    if (DOM.feedback) {
      DOM.feedback.textContent = pack.copy_ok || pack.correct || "정확합니다";
    }

    speakGerman(speakText);

    applyAnswerEffect(true);

    setPhase("ANSWER");
    updateTypingHintUi();
    updateRatingButtonsForHint(null);
    const isPracticeFlow = TRAINING_MODE_ACTIVE || WRONG_PRACTICE_ACTIVE;
    DOM.ratingArea.style.display = isPracticeFlow ? "none" : "block";
    const shouldShowPracticeNext =
      WRONG_PRACTICE_ACTIVE ||
      (TRAINING_MODE_ACTIVE && TRAINING_MODE_KIND === "cram");
    DOM.mainBtn.style.display = shouldShowPracticeNext ? "inline-block" : "none";
    if (shouldShowPracticeNext) {
      DOM.mainBtn.textContent = pack.next || "다음";
    }
    DOM.skipBtn.style.display = "none";
    return;
  }

  // 타이핑 모드
  const userInput = DOM.answerInput.value;
  const result = evaluateTypingAnswer(userInput, item);

  if (result === "retry") {
    // 🔹 첫 번째 틀림(재도전 구간)에서는 약한 햅틱만 한 번
    if (typeof triggerHaptic === "function") {
      triggerHaptic("light");
    }
    return;
  }

  if (result === "wrong") {
    // 🔹 완전 오답 확정일 때만 오답 카운트 + 강한 햅틱 (applyAnswerResult → applyAnswerEffect(false))
    incrementWrongAttempt(item.word.id);
  }

  const isCorrect = result === "correct";
  applyAnswerResult(isCorrect, item);
}

function handleSkip() {
  if (APP_STATE.phase !== "QUESTION") return;
  if (SETTINGS.mode !== "typing_de") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  incrementWrongAttempt(item.word.id);
  applyAnswerResult(false, item);
}

function recordSessionResult(item, rating) {
  if (!item || !item.word) return;

  if (rating === "hard") {
    APP_STATE.sessionHardCount = (APP_STATE.sessionHardCount || 0) + 1;
  } else if (rating === "normal") {
    APP_STATE.sessionNormalCount = (APP_STATE.sessionNormalCount || 0) + 1;
  } else if (rating === "easy") {
    APP_STATE.sessionEasyCount = (APP_STATE.sessionEasyCount || 0) + 1;
  }

  const wasHardForSession = item._sessionAnswerCorrect === false || rating === "hard";
  if (wasHardForSession) {
    const id = String(item.word.id);
    const existing = (APP_STATE.sessionWrongWords || []).some(
      (word) => String(word.id) === id,
    );
    if (!existing) {
      APP_STATE.sessionWrongWords.push(item.word);
    }
  }

  if (APP_STATE.sessionMode === "typing_de") {
    if (item._sessionAnswerCorrect === false) {
      APP_STATE.sessionWrongCount = (APP_STATE.sessionWrongCount || 0) + 1;
    } else {
      APP_STATE.sessionCorrectCount = (APP_STATE.sessionCorrectCount || 0) + 1;
    }
  }
}

/**
 * 난이도 평가 버튼 클릭
 */
function handleRating(rating) {
  if (APP_STATE.phase !== "ANSWER") return;

  const item = APP_STATE.currentCard;
  if (!item) return;

  if (
    rating === "easy" &&
    SETTINGS.mode === "typing_de" &&
    item._typingHintUsed === true
  ) {
    updateRatingButtonsForHint(item);
    return;
  }

  if (typeof triggerHaptic === "function") {
    triggerHaptic("light");
  }

  const today = nowDay();
  const prevState = item.state || {
    id: item.word.id,
    level: 0,
    lastReviewed: 0,
    nextDue: 0,
    isNew: item.isNew,
  };

  let level = prevState.level || 0;

  if (rating === "hard") {
    level = Math.max(1, level);
  } else if (rating === "normal") {
    level = Math.min(SRS_LEVELS.length - 1, level + 1);
  } else if (rating === "easy") {
    level = Math.min(SRS_LEVELS.length - 1, level + 2);
  }

  const interval = SRS_INTERVALS[level] || 1;
  const nextDue = today + interval;

  const newState = {
    id: prevState.id,
    level,
    lastReviewed: today,
    nextDue,
    isNew: false,
  };
  saveWordState(newState);

  const stats = getStats();
  stats.totalReviewed += 1;

  if (item.isNew) {
    stats.newLearned += 1;
    APP_STATE.newCount += 1;
  } else {
    APP_STATE.reviewCount += 1;
  }
  saveStats(stats);

  recordSessionResult(item, rating);

  const wordId = String(item.word.id);
  setWordStatsById(wordId, (s) => ({
    ...s,
    hardCount: rating === "hard" ? (s.hardCount || 0) + 1 : s.hardCount || 0,
    // 🔹 hard 선택했을 때만 최근 시각 갱신
    lastHardAt: rating === "hard" ? Date.now() : s.lastHardAt || 0,
    level,
  }));

  if (APP_STATE.queue.length > 0) {
    APP_STATE.queue.shift();
  }
  APP_STATE.completed += 1;

  updateCefrProgress();
  updateProgressBar();
  renderWordbookIfNeeded();

  if (APP_STATE.queue.length === 0) {
    showEndStats();
  } else {
    showNextQuestion();
  }
}

// 언어별 SRS 리셋
function resetSrsForLang(lang) {
  const allWords = getAllWords();
  allWords.forEach((w) => {
    const key = getSrsKey(w.id, lang);
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  });
}

function resetStatsForLang(lang) {
  const raw = safeGet(STORAGE_KEYS.STATS);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw) || {};
    delete parsed[lang];
    safeSet(STORAGE_KEYS.STATS, JSON.stringify(parsed));
  } catch (e) {}
}

function resetWordStatsForLang(lang) {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw) || {};
    delete parsed[lang];
    safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(parsed));
  } catch (e) {}
}

/* ============================================
   ========== 12. EVENT BINDINGS ==============
   ============================================ */

function attachEvents() {
  // 시작 화면
  if (DOM.startAppBtn) {
    DOM.startAppBtn.addEventListener("click", () => {
      SETTINGS.uiLang = DOM.startUiLang.value;
      SETTINGS.studyLang = DOM.startStudyLang.value;
      CURRENT_LANG = SETTINGS.uiLang;
      saveSettings();

      const introScreen = document.getElementById("introScreen");
      if (introScreen) {
        introScreen.style.display = "none";
      }

      DOM.startScreen.style.display = "none";
      DOM.app.style.display = "flex";

      hydrateSettingsToUI();
      applyTranslations();
      updateCefrProgress();
      showView("study");
      showReadyState();
    });
  }

  // 시작 화면: UI 언어 변경 시 즉시 미리보기
  if (DOM.startUiLang) {
    DOM.startUiLang.addEventListener("change", () => {
      const fromLang = CURRENT_LANG || SETTINGS.uiLang;
      const tempLang = DOM.startUiLang.value;

      // SETTINGS는 아직 확정(저장) 안 하고,
      // CURRENT_LANG만 바꿔서 "미리보기"만 적용
      CURRENT_LANG = tempLang;
      logLanguageChange("change_ui_language", fromLang, tempLang);

      // 번역 다시 적용 → 시작화면/학습화면 라벨, 버튼, 문구 전부 갱신
      applyTranslations();
      updateStudyStartSummary();
    });
  }

  if (DOM.startStudyLang) {
    DOM.startStudyLang.addEventListener("change", () => {
      const fromLang =
        DOM.startStudyLang.dataset.analyticsValue || SETTINGS.studyLang;
      const toLang = DOM.startStudyLang.value;
      DOM.startStudyLang.dataset.analyticsValue = toLang;
      logLanguageChange("change_study_language", fromLang, toLang);
    });
  }

  if (DOM.masteryMainBtn) {
    DOM.masteryMainBtn.addEventListener("click", () => {
      // 훈련소 정답 화면에서만 작동
      if (!TRAINING_MODE_ACTIVE) return;
      if (APP_STATE.phase !== "ANSWER") return;

      const item = APP_STATE.currentCard;
      if (!item) return;

      markWordMastered(item.word.id, { keepBookmark: false }); // 수동 졸업: 북마크도 함께 정리  // 틀린단어/북마크/훈련소 대상에서 제거

      const lang = CURRENT_LANG || "ko";
      DOM.masteryMainBtn.textContent = lang === "en" ? "Mastered" : "완료";
      DOM.masteryMainBtn.disabled = true;
      DOM.masteryMainBtn.classList.add("mastery-done");
    });
  }
  if (DOM.bottomTabs && DOM.bottomTabs.length) {
    DOM.bottomTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const view = tab.dataset.view;
        const tabName = getTabAnalyticsName(view);
        const willMove =
          view === "study"
            ? APP_STATE.currentView !== "study"
            : APP_STATE.currentView !== view;
        if (tabName && willMove) {
          logAnalyticsEvent("select_tab", { tab: tabName });
        }
        if (view === "study") {
          goToStudyFromNav();
          return;
        }
        if (view) showView(view);
      });
    });
  }
  if (DOM.wordHubMistakes)
    DOM.wordHubMistakes.addEventListener("click", () => showView("mistakes"));
  if (DOM.wordHubBookmark)
    DOM.wordHubBookmark.addEventListener("click", () => showView("bookmark"));
  if (DOM.wordHubSearch)
    DOM.wordHubSearch.addEventListener("click", () => showView("search"));

  if (DOM.mainBtn) DOM.mainBtn.addEventListener("click", handleConfirm);
  if (DOM.hintBtn) DOM.hintBtn.addEventListener("click", handleTypingHint);
  if (DOM.skipBtn) DOM.skipBtn.addEventListener("click", handleSkip);
  if (DOM.trainingStartBtn) {
    DOM.trainingStartBtn.addEventListener("click", handleTrainingStart);
  }

  if (DOM.wordDropInput) {
    DOM.wordDropInput.addEventListener("input", handleWordDropInput);
    DOM.wordDropInput.addEventListener("compositionstart", () => {
      WORD_DROP_STATE.composing = true;
    });
    DOM.wordDropInput.addEventListener("compositionend", () => {
      WORD_DROP_STATE.composing = false;
      scheduleWordDropAnswerCheck();
    });
    DOM.wordDropInput.addEventListener("focus", handleWordDropInputFocus);
    DOM.wordDropInput.addEventListener("blur", () => {
      if (WORD_DROP_STATE.pendingStart && !WORD_DROP_STATE.active) {
        cancelWordDropCountdown();
        return;
      }
      if (WORD_DROP_STATE.active) {
        updateWordDropKeyboardChrome(false);
        return;
      }
      setTimeout(focusWordDropInput, 0);
    });
  }

  if (DOM.wordDropRestartBtn) {
    DOM.wordDropRestartBtn.addEventListener("click", startWordDrop);
  }

  if (DOM.wordDropReviewBtn) {
    DOM.wordDropReviewBtn.addEventListener("click", () => {
      stopWordDrop();
      APP_STATE.sessionWrongWords = dedupeWordsById(
        WORD_DROP_STATE.mistakeWords,
      );
      startWrongWordsTraining("training");
    });
  }

  if (DOM.shareCardSaveBtn) {
    DOM.shareCardSaveBtn.addEventListener("click", downloadShareCardImage);
  }

  if (DOM.shareCardNativeBtn) {
    DOM.shareCardNativeBtn.addEventListener("click", shareCardImage);
  }

  if (DOM.endShareOpenBtn) {
    DOM.endShareOpenBtn.addEventListener("click", openShareCardModal);
  }

  if (DOM.wordDropShareOpenBtn) {
    DOM.wordDropShareOpenBtn.addEventListener("click", openShareCardModal);
  }

  if (DOM.shareCardOverlay) {
    const onShareBackdropClick = (e) => {
      if (
        e.target === DOM.shareCardOverlay ||
        e.target.classList.contains("detail-backdrop")
      ) {
        closeShareCardModal();
      }
    };
    DOM.shareCardOverlay.addEventListener("click", onShareBackdropClick);
  }

  if (DOM.shareCardCloseBtn) {
    DOM.shareCardCloseBtn.addEventListener("click", closeShareCardModal);
  }

  if (DOM.answerInput) {
    DOM.answerInput.addEventListener("input", scheduleAnswerInputAutoSubmitCheck);
    DOM.answerInput.addEventListener("compositionstart", () => {
      ANSWER_INPUT_COMPOSING = true;
    });
    DOM.answerInput.addEventListener("compositionend", () => {
      ANSWER_INPUT_COMPOSING = false;
      scheduleAnswerInputAutoSubmitCheck();
    });
    DOM.answerInput.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        APP_STATE.phase === "QUESTION" &&
        (SETTINGS.mode === "typing_de" || SETTINGS.mode === "copy")
      ) {
        handleConfirm();
      }
    });

  }

  if (DOM.ratingButtons) {
    DOM.ratingButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const rating = btn.getAttribute("data-rating");
        handleRating(rating);
      });
    });
  }

  if (DOM.restartBtn) {
    DOM.restartBtn.addEventListener("click", () => {
      showReadyState();
    });
  }

  if (DOM.trainWrongBtn) {
    DOM.trainWrongBtn.addEventListener("click", () =>
      startWrongWordsTraining("study"),
    );
  }

  if (DOM.modeSelect) {
    DOM.modeSelect.addEventListener("change", () => {
      SETTINGS.mode = DOM.modeSelect.value;
      saveSettings();

      showReadyState();
      applyTranslations();
      updateStudyStartSummary();
    });
  }

  if (DOM.newWordSetBtn) {
    DOM.newWordSetBtn.addEventListener("click", () => {
      clearStudyWordSetCache();
      showReadyState();
      updateStudyStartSummary();
      showSystemToast(
        trKey("study.new_word_set_ready", "다음 시작 때 새 단어 세트를 뽑습니다."),
      );
    });
  }

  if (DOM.goalSelectTyping) {
    DOM.goalSelectTyping.addEventListener("change", () => {
      const v = parseInt(DOM.goalSelectTyping.value, 10) || 5;
      SETTINGS.goalTyping = v;
      SETTINGS.goalCard = v;
      saveSettings();
      updateStudyStartSummary();

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.goalSelectCard) {
    DOM.goalSelectCard.addEventListener("change", () => {
      const v = parseInt(DOM.goalSelectCard.value, 10) || 5;
      SETTINGS.goalTyping = v;
      SETTINGS.goalCard = v;
      saveSettings();
      updateStudyStartSummary();

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.newWordCefrSelect) {
    DOM.newWordCefrSelect.addEventListener("change", () => {
      SETTINGS.newWordCefr = DOM.newWordCefrSelect.value;
      saveSettings();
      updateCefrProgress();
      updateStudyStartSummary();

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.newWordCategorySelect) {
    DOM.newWordCategorySelect.addEventListener("change", () => {
      SETTINGS.newWordCategory = DOM.newWordCategorySelect.value || "all";
      saveSettings();
      updateStudyStartSummary();

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.soundToggle) {
    DOM.soundToggle.addEventListener("click", () => {
      SETTINGS.soundEnabled = !SETTINGS.soundEnabled;
      saveSettings();

      // 🔹 사운드 토글 변경 시 가벼운 햅틱
      if (typeof triggerHaptic === "function") {
        triggerHaptic("light");
      }

      DOM.soundToggle.classList.toggle("is-on", SETTINGS.soundEnabled);
      updateTtsUiState();
    });
  }

  if (DOM.hapticToggle) {
    DOM.hapticToggle.addEventListener("click", () => {
      SETTINGS.hapticEnabled = !SETTINGS.hapticEnabled;
      saveSettings();

      // 🔹 햅틱 설정 바꿀 때도 가벼운 햅틱
      //    (SETTINGS.hapticEnabled === false면 triggerHaptic 안에서 바로 return)
      if (typeof triggerHaptic === "function") {
        triggerHaptic("light");
      }

      DOM.hapticToggle.classList.toggle("is-on", SETTINGS.hapticEnabled);
    });
  }

  if (DOM.studyReminderToggle) {
    DOM.studyReminderToggle.addEventListener("click", () => {
      setStudyReminderEnabled(SETTINGS.studyReminderEnabled !== true);
    });
  }

  if (DOM.studyReminderTime) {
    DOM.studyReminderTime.addEventListener("change", async () => {
      SETTINGS.studyReminderTime = normalizeReminderTime(
        DOM.studyReminderTime.value,
      );
      DOM.studyReminderTime.value = SETTINGS.studyReminderTime;
      saveSettings();

      if (SETTINGS.studyReminderEnabled === true) {
        const scheduled = await scheduleStudyReminderNotification({
          requestPermission: false,
        });
        if (!scheduled) {
          SETTINGS.studyReminderEnabled = false;
          saveSettings();
          updateStudyReminderToggle();
          const permissionDisplay = await getStudyReminderPermissionDisplay();
          showSystemToast(
            permissionDisplay === "denied"
              ? trKey(
                  "settings.reminder.open_settings",
                  "기기 설정에서 알림을 허용해 주세요.",
                )
              : trKey(
                  "settings.reminder.denied",
                  "알림 권한이 허용되지 않았습니다.",
                ),
          );
          if (permissionDisplay === "denied") {
            setTimeout(() => {
              openNativeAppSettings();
            }, 350);
          }
        }
      }
    });
  }

  if (DOM.settingsFeedbackBtn) {
    DOM.settingsFeedbackBtn.addEventListener("click", openFeedbackMail);
  }

  if (DOM.settingsUiLang) {
    DOM.settingsUiLang.addEventListener("change", () => {
      const fromLang = SETTINGS.uiLang;
      const toLang = DOM.settingsUiLang.value;
      logLanguageChange("change_ui_language", fromLang, toLang);
      SETTINGS.uiLang = toLang;
      CURRENT_LANG = SETTINGS.uiLang;
      saveSettings();

      applyTranslations();
      updateCefrProgress();
      updateStudyStartSummary();

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.settingsStudyLang) {
    DOM.settingsStudyLang.addEventListener("change", () => {
      const fromLang = SETTINGS.studyLang;
      const toLang = DOM.settingsStudyLang.value;
      logLanguageChange("change_study_language", fromLang, toLang);
      SETTINGS.studyLang = toLang;
      saveSettings();
      initTtsVoices();

      applyTranslations();
      updateCefrProgress();
      updateStudyStartSummary();

      if (APP_STATE.currentView === "search") {
        handleSearch();
      }

      if (APP_STATE.phase !== "READY") {
        showReadyState();
      }
    });
  }

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", handleSearch);
    DOM.searchInput.addEventListener("focus", () => {
      updateKeyboardModeChrome();
      syncAppViewportHeight();
    });
    DOM.searchInput.addEventListener("blur", () => {
      updateKeyboardModeChrome();
      syncAppViewportHeight();
    });
  }
  if (DOM.searchMode) {
    DOM.searchMode.addEventListener("change", handleSearch);
  }

  if (DOM.detailOverlay) {
    const onBackdropClick = (e) => {
      if (
        e.target === DOM.detailOverlay ||
        e.target.classList.contains("detail-backdrop")
      ) {
        closeWordDetail();
      }
    };
    DOM.detailOverlay.addEventListener("click", onBackdropClick);
  }

  const btnClose = document.getElementById("detailCloseBtn");
  if (btnClose) {
    btnClose.addEventListener("click", closeWordDetail);
  }
}

/* ============================================
   ========== 13. INIT / BOOTSTRAP ============
   ============================================ */

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
    // 🔹 첫 실행에서 undefined 들어가는 거 막고 기본값은 "all"로 강제
    const cefr = SETTINGS.newWordCefr || "all";
    DOM.newWordCefrSelect.value = cefr;

    // 🔹 iOS 첫 실행에서 라벨이 안 보이는 문제 방지용:
    //    여기서 한 번 강제로 옵션 텍스트를 모두 세팅해 준다.
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

function ensureMasteryMainBtn() {
  if (!DOM.mainBtn) return;

  let btn = document.getElementById("masteryMainBtn");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "masteryMainBtn";
    btn.type = "button";
    // 메인 버튼 클래스 그대로 복사 + 졸업용 클래스 하나 추가
    btn.className = (DOM.mainBtn.className || "") + " mastery-main-btn";
    btn.style.display = "none";
    btn.textContent = CURRENT_LANG === "en" ? "Mastered" : "졸업";

    const parent = DOM.mainBtn.parentElement;
    if (parent) {
      parent.insertBefore(btn, DOM.mainBtn.nextSibling);
      parent.classList.add("main-actions-row"); // 부모를 flex row로
    }
  }

  DOM.masteryMainBtn = btn;
}

function init() {
  // 1. 기존 앱 공통 초기화 -----------------------------
  cacheDOM();
  updateRuntimeChromeClass();
  loadSettings();
  syncAppViewportHeight();

  if (DOM.startUiLang) {
    populateUiLangSelect(DOM.startUiLang);
  }
  if (DOM.settingsUiLang) {
    populateUiLangSelect(DOM.settingsUiLang);
  }
  populateStudyReminderTimeSelect();

  hydrateSettingsToUI();
  ensureMasteryMainBtn();
  // ✅ 현재 UI 언어 기준으로 드롭다운 라벨 맞추기
  refreshUiLangSelectLabels();
  attachEvents();
  initTtsVoices();
  applyTranslations();
  updateCefrProgress();
  updateStudyStartSummary();
  ensureStudyReminderSchedule();
}

// ===== 인트로 / 시작 화면 + 초기화 제어 =====
document.addEventListener("DOMContentLoaded", () => {
  prepareIntroVisual();

  // 1) 공통 초기화 (DOM 캐시, 이벤트 바인딩, 번역 적용 등)
  init();

  window.addEventListener("resize", syncAppViewportHeight);
  window.addEventListener("orientationchange", syncAppViewportHeight);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", syncAppViewportHeight);
    window.visualViewport.addEventListener("scroll", syncAppViewportHeight);
  }

  const body = document.body;

  // 인트로 / 시작 / 앱 화면 DOM
  const introScreen = document.getElementById("introScreen");
  const startScreen = document.getElementById("startScreen");
  const appScreen = document.getElementById("app");
  const introStartBtn = document.getElementById("introStartBtn");
  const startAppBtn = document.getElementById("startAppBtn");

  // 공통 화면 전환 헬퍼
  function showScreen(target) {
    if (introScreen) introScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "none";
    if (appScreen) appScreen.style.display = "none";

    if (target) {
      target.style.display = "flex"; // intro / start / app 전부 flex 통일
    }

    window.scrollTo(0, 0);
  }

  // ✅ 시작 화면 디자인 작업 중에는 언어 선택 화면을 강제로 노출
  if (FORCE_START_SCREEN_FOR_DESIGN && startScreen) {
    showScreen(startScreen);
    body.classList.add("state-start");
    body.classList.remove("state-intro");
  } else if (SETTINGS.seenOnboarding) {
    // ----- 재방문 유저 -----
    if (introScreen && appScreen) {
      // 1) 짧게 인트로 보여주고
      showScreen(introScreen);
      body.classList.add("state-intro");
      body.classList.remove("state-start");

      // 2) 바로 앱 + 학습 화면으로 진입
      setTimeout(() => {
        body.classList.remove("state-intro");
        showScreen(appScreen);
        showView("study"); // 학습 뷰
        if (typeof showReadyState === "function") {
          showReadyState();
        }
      }, 1600); // 재방문은 1.6초 정도
    } else if (appScreen) {
      // 인트로 섹션이 없다면 바로 앱으로
      showScreen(appScreen);
      body.classList.remove("state-intro", "state-start");
      showView("study");
      if (typeof showReadyState === "function") {
        showReadyState();
      }
    } else if (startScreen) {
      // 최악의 경우: app 없고 start만 있으면 start라도
      showScreen(startScreen);
      body.classList.add("state-start");
      body.classList.remove("state-intro");
    }
  } else {
    // ----- 첫 방문 유저 -----
    if (introScreen && startScreen) {
      // 1) 인트로 → 2) 시작 화면(언어 선택)
      showScreen(introScreen);
      body.classList.add("state-intro");
      body.classList.remove("state-start");

      setTimeout(() => {
        body.classList.remove("state-intro");
        body.classList.add("state-start");
        showScreen(startScreen);
      }, 2200); // 첫 방문은 2.2초 정도
    } else if (startScreen) {
      // 인트로 섹션이 없으면 바로 시작 화면
      showScreen(startScreen);
      body.classList.add("state-start");
      body.classList.remove("state-intro");
    } else if (appScreen) {
      // 이것도 없으면 그냥 앱으로
      showScreen(appScreen);
      body.classList.remove("state-intro", "state-start");
      showView("study");
      if (typeof showReadyState === "function") {
        showReadyState();
      }
    }
  }

  // 🔘 인트로 화면에서 버튼 눌렀을 때
  if (introStartBtn) {
    introStartBtn.addEventListener("click", () => {
      if (SETTINGS.seenOnboarding && appScreen) {
        // 재방문: 인트로 스킵하고 바로 앱 + 학습
        body.classList.remove("state-intro", "state-start");
        showScreen(appScreen);
        showView("study");
        if (typeof showReadyState === "function") {
          showReadyState();
        }
      } else if (startScreen) {
        // 첫 방문: 인트로 → 시작 화면
        body.classList.remove("state-intro");
        body.classList.add("state-start");
        showScreen(startScreen);
      }
    });
  }

  // 🔘 시작 화면의 "시작" 버튼 (언어 선택 확정 + 온보딩 완료)
  if (startAppBtn && appScreen) {
    startAppBtn.addEventListener("click", () => {
      // UI 언어 / 학습 언어 저장
      if (DOM.startUiLang) {
        SETTINGS.uiLang = DOM.startUiLang.value;
      }
      if (DOM.startStudyLang) {
        SETTINGS.studyLang = DOM.startStudyLang.value;
      }

      // 온보딩 완료 플래그
      SETTINGS.seenOnboarding = true;
      saveSettings();

      // 선택한 UI 언어로 텍스트 다시 적용
      if (typeof applyTranslations === "function") {
        applyTranslations();
      }

      // 앱 화면 + 학습 뷰 진입
      body.classList.remove("state-intro", "state-start");
      showScreen(appScreen);
      showView("study");
      if (typeof showReadyState === "function") {
        showReadyState();
      }
    });
  }

  // 5) 훈련소 관련 DOM 이벤트 바인딩 (기존 그대로 유지)
  if (DOM.trainingCountSelect) {
    DOM.trainingCountSelect.addEventListener(
      "change",
      updateTrainingSummaryPreview,
    );
  }
  if (DOM.trainingModeSelect) {
    DOM.trainingModeSelect.addEventListener(
      "change",
      updateTrainingSummaryPreview,
    );
  }
  if (DOM.trainingSourceMistakes) {
    DOM.trainingSourceMistakes.addEventListener("click", () => {
      DOM.trainingSourceMistakes.classList.toggle("is-on");
      updateTrainingSummaryPreview();
    });
  }
  if (DOM.trainingSourceHard) {
    DOM.trainingSourceHard.addEventListener("click", () => {
      DOM.trainingSourceHard.classList.toggle("is-on");
      updateTrainingSummaryPreview();
    });
  }
  if (DOM.trainingSourceBookmark) {
    DOM.trainingSourceBookmark.addEventListener("click", () => {
      DOM.trainingSourceBookmark.classList.toggle("is-on");
      updateTrainingSummaryPreview();
    });
  }

  // 6) 페이지 처음 열릴 때도 요약 한 번 업데이트
  updateTrainingSummaryPreview();

  // 7) 안드로이드 하드웨어 back 버튼 핸들러
  setupAndroidBackHandler();
});

/* v1 iOS 출시 기준: PWA Service Worker 등록 비활성화 */
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./service-worker.js")
//       .then((reg) => console.log("서비스 워커 등록 성공:", reg))
//       .catch((err) => console.log("서비스 워커 등록 실패:", err));
//   });
// }
