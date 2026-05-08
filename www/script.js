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
  USER_DATA_SCHEMA: "karllang_user_data_schema_v1",
};

// HTML 안전하게 만들기용
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// 🔹 "전체 글자 + 밑줄" 고스트 HTML (모든 글자를 ghost-hidden으로)
function buildFullGhostHtml(full) {
  let html = "";
  for (let i = 0; i < full.length; i++) {
    const ch = full[i];

    if (ch === " " || ch === "\u00A0") {
      // 공백은 그대로
      html += ch;
    } else {
      // ✅ 글자는 보이게 두고, 밑줄/희미한 효과는 CSS에서 처리
      html += `<span class="ghost-char">${escapeHtml(ch)}</span>`;
    }
  }
  return html;
}

// 🔹 "앞 글자만 보이는" 고스트 HTML (단어 첫 글자만 노출, 나머지는 밑줄)
function buildFirstLetterGhostHtmlForCram(full) {
  let html = "";
  let startedWord = false;

  for (let i = 0; i < full.length; i++) {
    const ch = full[i];

    if (ch === " " || ch === "\u00A0") {
      // 공백은 그대로
      html += ch;
      startedWord = false;
    } else {
      if (!startedWord) {
        // 단어의 첫 글자는 보이게 (ghost-hidden 없음)
        html += `<span class="ghost-char">${escapeHtml(ch)}</span>`;
        startedWord = true;
      } else {
        // 나머지는 언더라인만 보이게 (희미한 글자)
        html += `<span class="ghost-char ghost-hidden">${escapeHtml(
          ch,
        )}</span>`;
      }
    }
  }

  return html;
}

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
let SHARE_CARD_CACHE = null;
// 🔊 TTS 상태 플래그 (구형 Android WebView 대응)
let TTS_SUPPORTED = false;
let TTS_READY = false;
let TTS_VOICE = null;
let TTS_WARNED_UNSUPPORTED = false;
const NativeTTS = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeTTS) || null
  : null;
// ✅ 일반 학습 세션에서 뽑은 단어들 공유용
let LAST_STUDY_WORD_IDS = [];
let LAST_STUDY_META = {
  day: null,
  filterKey: null,
};
// 🔹 훈련소 모드 활성화 여부 (정규 학습 vs 훈련소 구분용)
let TRAINING_MODE_ACTIVE = false;
let TRAINING_MODE_KIND = "none"; // "typing" | "copy" | "mix"
let TRAINING_MIX_WORDS = []; // Mix 모드에서 쓸 단어 리스트
let TRAINING_MIX_INDEX = 0; // 현재 몇 번째 단어인지
let TRAINING_MIX_STEP = 0; // 0=카드, 1=카피, 2=타이핑
let WRONG_PRACTICE_ACTIVE = false;
let WRONG_PRACTICE_PREVIOUS_MODE = null;
let WRONG_PRACTICE_RETURN_VIEW = "study";

// 🔹 깜지(반복 따라쓰기) 모드 상태
let TRAINING_CRAM_WORDS = []; // 깜지 대상 단어 리스트
let TRAINING_CRAM_INDEX = 0; // 현재 몇 번째 단어인지 (단어 기준)
let TRAINING_CRAM_REPEAT_TOTAL = 3; // 이 단어를 몇 번 쓸 건지 (1/3/5)
let TRAINING_CRAM_REPEAT_INDEX = 0; // 현재 몇 회째인지 (0-based)
// 현재 단어에서 "정말 모르겠다" 두 번째 확인 허용용 플래그
let TRAINING_CRAM_GIVEUP_ARMED = false;
const WORD_DROP_STATE = {
  active: false,
  pendingStart: false,
  rafId: null,
  startTimerId: null,
  countdownTimerId: null,
  countdownValue: 0,
  currentWord: null,
  currentText: "",
  yPosition: 0,
  score: 0,
  targetCount: 10,
  completedCount: 0,
  correctCount: 0,
  missedCount: 0,
  lane: 1,
  resolving: false,
  composing: false,
  clearUntil: 0,
  speed: 48,
  startedAt: 0,
  lastFrameAt: 0,
  recentIds: [],
  mistakeWords: [],
  pools: {
    allWords: [],
    mistakeWords: [],
    bookmarkedWords: [],
  },
};
const WORD_DROP_BASE_SPEED = 48;
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
const NativeLocalNotifications = window.Capacitor
  ? (window.Capacitor.Plugins &&
      window.Capacitor.Plugins.LocalNotifications) ||
    window.Capacitor.LocalNotifications ||
    null
  : null;
const NativeImageSaver = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeImageSaver) ||
    window.Capacitor.NativeImageSaver ||
    null
  : null;
const NativeAppSettings = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeAppSettings) ||
    window.Capacitor.NativeAppSettings ||
    null
  : null;

const STUDY_REMINDER_NOTIFICATION_ID = 20260507;
const DEFAULT_STUDY_REMINDER_TIME = "20:30";
let APP_LAYOUT_VIEWPORT_HEIGHT = 0;

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

/* ============================================
   ========== 3. LOCALSTORAGE UTILS ============
   ============================================ */

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    // ignore
  }
}

function parseStoredJson(raw, fallback = null) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function getStoredStudyLangFallback() {
  const parsed = parseStoredJson(safeGet(STORAGE_KEYS.SETTINGS), null);
  const lang =
    parsed && typeof parsed.studyLang === "string" ? parsed.studyLang : "de";
  return lang.toLowerCase();
}

function looksLikeFlatStats(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    (Object.prototype.hasOwnProperty.call(obj, "totalReviewed") ||
      Object.prototype.hasOwnProperty.call(obj, "newLearned"))
  );
}

function looksLikeWordStatEntry(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    (Object.prototype.hasOwnProperty.call(obj, "bookmarked") ||
      Object.prototype.hasOwnProperty.call(obj, "wrongAttempts") ||
      Object.prototype.hasOwnProperty.call(obj, "hardCount") ||
      Object.prototype.hasOwnProperty.call(obj, "lastWrongAt") ||
      Object.prototype.hasOwnProperty.call(obj, "lastHardAt"))
  );
}

function looksLikeFlatWordStats(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return Object.values(obj).some(looksLikeWordStatEntry);
}

function migrateJsonStorageKey({ fromKey, toKey, transform }) {
  const current = parseStoredJson(safeGet(toKey), null);
  if (current && typeof current === "object") return false;

  const legacy = parseStoredJson(safeGet(fromKey), null);
  if (!legacy || typeof legacy !== "object") return false;

  const migrated = transform ? transform(legacy) : legacy;
  safeSet(toKey, JSON.stringify(migrated));
  return true;
}

function normalizeStatsStorageShape() {
  const raw = safeGet(STORAGE_KEYS.STATS);
  const parsed = parseStoredJson(raw, null);
  if (!looksLikeFlatStats(parsed)) return false;

  const lang = getStoredStudyLangFallback();
  safeSet(STORAGE_KEYS.STATS, JSON.stringify({ [lang]: parsed }));
  return true;
}

function normalizeWordStatsStorageShape() {
  const raw = safeGet(STORAGE_KEYS.WORD_STATS);
  const parsed = parseStoredJson(raw, null);
  if (!looksLikeFlatWordStats(parsed)) return false;

  const lang = getStoredStudyLangFallback();
  safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify({ [lang]: parsed }));
  return true;
}

function migrateUserData() {
  const currentSchema = safeGet(STORAGE_KEYS.USER_DATA_SCHEMA);

  // 예전 키나 단일언어 저장 구조가 남아 있으면 삭제하지 않고 현재 구조로 옮긴다.
  migrateJsonStorageKey({
    fromKey: "karllang_stats_v3",
    toKey: STORAGE_KEYS.STATS,
    transform: (legacy) =>
      looksLikeFlatStats(legacy)
        ? { [getStoredStudyLangFallback()]: legacy }
        : legacy,
  });

  migrateJsonStorageKey({
    fromKey: "karllang_word_stats_v3",
    toKey: STORAGE_KEYS.WORD_STATS,
    transform: (legacy) =>
      looksLikeFlatWordStats(legacy)
        ? { [getStoredStudyLangFallback()]: legacy }
        : legacy,
  });

  normalizeStatsStorageShape();
  normalizeWordStatsStorageShape();

  if (currentSchema !== USER_DATA_SCHEMA_VERSION) {
    safeSet(STORAGE_KEYS.USER_DATA_SCHEMA, USER_DATA_SCHEMA_VERSION);
  }
}

function shouldResetLearningDataForDataVersion(previousVersion, nextVersion) {
  if (!previousVersion || previousVersion === nextVersion) return false;

  // 단어 ID 체계가 실제로 깨지는 버전만 여기에 명시한다.
  // UI/기능 업데이트와 일반 단어 데이터 보강은 학습기록을 보존한다.
  const wordIdBreakingChanges = new Set([]);
  return wordIdBreakingChanges.has(`${previousVersion}->${nextVersion}`);
}
//학습 진도 초기화용
function resetKarlLangData() {
  Object.keys(localStorage)
    .filter((key) => key.toLowerCase().includes("karllang"))
    .forEach((key) => localStorage.removeItem(key));
  location.reload();
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

// ✅ CEFR 값 표시용 공통 헬퍼
function getCefrDisplayLabel(value) {
  const pack = t() || {};
  return formatCefrLabelForDisplay(value, pack);
}

function refreshCefrRowLabels() {
  if (!DOM.cefrLabels) return;
  ["A1", "A2", "B1", "B2"].forEach((lvl) => {
    const el = DOM.cefrLabels[lvl];
    if (!el) return;
    el.textContent = getCefrDisplayLabel(lvl);
  });
}

function updateStudyStartSummary() {
  if (!DOM.studySummaryText) return;
  DOM.studySummaryText.textContent = "";
  DOM.studySummaryText.style.display = "none";
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

function nowDay() {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

function getLocalDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function shiftLocalDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function getWeekStartMonday(date = new Date()) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + diff);
  return start;
}

function getAttendanceDates() {
  const raw = safeGet(STORAGE_KEYS.ATTENDANCE);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.dates)) return [];
    return parsed.dates
      .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(String(date)))
      .sort();
  } catch {
    return [];
  }
}

function saveAttendanceDates(dates) {
  const uniqueDates = Array.from(new Set(dates)).sort();
  safeSet(
    STORAGE_KEYS.ATTENDANCE,
    JSON.stringify({
      dates: uniqueDates,
    }),
  );
}

function recordAttendanceForStudyStart() {
  const today = getLocalDateKey();
  const dates = getAttendanceDates();
  if (dates.includes(today)) return;
  dates.push(today);
  saveAttendanceDates(dates);
  renderAttendance();
}

function getLearningStreakDays(summary = getDailySummary()) {
  const dates = getAttendanceDates();
  if (summary && Number(summary.total) > 0) {
    dates.push(getLocalDateKey());
  }

  const set = new Set(dates);
  let streak = 0;
  let cursor = new Date();

  while (set.has(getLocalDateKey(cursor))) {
    streak += 1;
    cursor = shiftLocalDate(cursor, -1);
  }

  return streak;
}

function renderAttendance() {
  if (!DOM.attendanceWeek) return;

  const dates = getAttendanceDates();
  const set = new Set(dates);
  const weekStart = getWeekStartMonday();
  const weekDates = Array.from({ length: 7 }, (_, idx) =>
    getLocalDateKey(shiftLocalDate(weekStart, idx)),
  );
  const weekdayLabels = trKey("attendance_weekdays", "월 화 수 목 금 토 일")
    .split(/\s+/)
    .filter(Boolean);

  if (DOM.attendanceTitle) {
    DOM.attendanceTitle.textContent = trKey("attendance_title", "출석");
  }

  DOM.attendanceWeek.innerHTML = "";
  weekDates.forEach((date, idx) => {
    const item = document.createElement("div");
    item.className = "attendance-day";
    if (set.has(date)) {
      item.classList.add("is-attended");
    }
    if (date === getLocalDateKey()) {
      item.classList.add("is-today");
    }

    const label = document.createElement("div");
    label.className = "attendance-day-label";
    label.textContent = weekdayLabels[idx] || "";

    const dot = document.createElement("div");
    dot.className = "attendance-dot";

    item.appendChild(label);
    item.appendChild(dot);
    DOM.attendanceWeek.appendChild(item);
  });
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

  // ✅ 오늘 + 같은 필터이면, 지난 세트 재사용 시도
  const studyLang = SETTINGS.studyLang || "de";
  const filterKey = `${studyLang}|${cefrFilter}|${catFilter}`;

  if (
    // 훈련소(cram/훈련 모드) 아닐 때만 재사용
    !TRAINING_MODE_ACTIVE &&
    LAST_STUDY_WORD_IDS &&
    LAST_STUDY_WORD_IDS.length > 0 &&
    LAST_STUDY_META &&
    LAST_STUDY_META.day === today &&
    LAST_STUDY_META.filterKey === filterKey
  ) {
    // 🔁 지난 세트 기반으로 큐 재구성
    const byId = {};
    allWords.forEach((w) => {
      if (!w || typeof w.id === "undefined") return;
      byId[String(w.id)] = w;
    });

    const queue = [];
    LAST_STUDY_WORD_IDS.forEach((id) => {
      const w = byId[id];
      if (!w) return;
      const st = getWordState(w);
      queue.push({
        word: w,
        state: st,
        isNew: !!st.isNew,
      });
    });

    APP_STATE.queue = queue;
    APP_STATE.totalTarget = queue.length;
    APP_STATE.completed = 0;
    APP_STATE.newCount = 0;
    APP_STATE.reviewCount = 0;
    resetSessionReport();

    return; // 🔚 여기서 끝. 아래 SRS 새 뽑기 로직은 건너뜀
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

  // ✅ 오늘 세션 세트 저장 (모드 공유용)
  LAST_STUDY_WORD_IDS = queue.map((item) => String(item.word.id));
  LAST_STUDY_META = {
    day: today,
    filterKey: filterKey,
  };
}

function clearStudyWordSetCache() {
  LAST_STUDY_WORD_IDS = [];
  LAST_STUDY_META = { day: null, filterKey: null };
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

function getStudyReminderNotificationText() {
  return {
    title: trKey("settings.reminder.notification_title", "KarlLang"),
    body: trKey(
      "settings.reminder.notification_body",
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

function resetSessionReport() {
  APP_STATE.sessionMode = SETTINGS.mode;
  APP_STATE.sessionCorrectCount = 0;
  APP_STATE.sessionWrongCount = 0;
  APP_STATE.sessionHardCount = 0;
  APP_STATE.sessionNormalCount = 0;
  APP_STATE.sessionEasyCount = 0;
  APP_STATE.sessionSummarySaved = false;
  APP_STATE.sessionWrongWords = [];
}

function showReadyState() {
  setPhase("READY");
  restoreWrongPracticeMode();
  APP_STATE.currentCard = null;
  APP_STATE.queue = [];
  APP_STATE.completed = 0;
  APP_STATE.totalTarget = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  resetSessionReport();

  if (DOM.mainCard) {
    DOM.mainCard.style.display = "block";
    DOM.mainCard.classList.remove("card-correct", "card-wrong");
  }
  if (DOM.endStatsArea) {
    DOM.endStatsArea.style.display = "none";
  }
  closeShareCardModal();
  const pack = t() || {};

  // [Gemini Fix] 시작 화면에서는 배지 강제로 끄기 (직접 ID 조회)
  const badgeEl = document.getElementById("cardLevelBadge");
  if (badgeEl) {
    badgeEl.style.display = "none";
    badgeEl.textContent = ""; // 내용도 싹 비워버림 (확실하게)
  }
  if (DOM.questionDisplay) {
    fadeSwapText(
      DOM.questionDisplay,
      pack.start_prompt || "시작 버튼을 누르세요.",
    );
  }
  if (DOM.hintDisplay) {
    fadeSwapText(DOM.hintDisplay, "");
  }
  if (DOM.feedback) DOM.feedback.textContent = "";

  if (DOM.copyGhost) {
    DOM.copyGhost.textContent = "";
  }

  if (DOM.answerInput) {
    DOM.answerInput.value = "";
    DOM.answerInput.disabled = true;
    DOM.answerInput.placeholder = "";
  }
  if (DOM.inputArea) {
    DOM.inputArea.style.display = "none";
  }

  if (DOM.mainBtn) {
    DOM.mainBtn.style.display = "inline-block";
    DOM.mainBtn.textContent = pack.start || "시작";
  }
  if (DOM.skipBtn) {
    DOM.skipBtn.style.display = "none";
  }
  if (DOM.masteryMainBtn) {
    DOM.masteryMainBtn.style.display = "none";
    DOM.masteryMainBtn.disabled = false;
    DOM.masteryMainBtn.classList.remove("mastery-done");
  }
  if (DOM.ratingArea) {
    DOM.ratingArea.style.display = "none";
  }

  updateStudyStartSummary();
  updateProgressBar();
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

// 🔹 깜지 모드용: 반복 인덱스/총 반복에 따라 고스트 타입 결정
function getGhostTypeForCram(idx, total) {
  // idx: 0-based
  if (total === 1) {
    // 1회는 "앞 글자 힌트만"
    return "FIRST";
  }
  if (total === 3) {
    // 3회: FULL → FIRST → NONE
    if (idx === 0) return "FULL";
    if (idx === 1) return "FIRST";
    return "NONE";
  }
  if (total === 5) {
    // 5회: FULL → FIRST → FIRST → NONE → NONE
    if (idx === 0) return "FULL";
    if (idx === 1 || idx === 2) return "FIRST";
    return "NONE";
  }
  // 그 외는 안전하게 NONE
  return "NONE";
}

// 🔹 "앞 글자만 보이는" 고스트 문자열 생성
// 예: "das Haus" → "d__ H___"
function buildFirstLetterGhost(full) {
  let result = "";
  let startedWord = false;

  for (let i = 0; i < full.length; i++) {
    const ch = full[i];

    if (ch === " " || ch === "\u00A0") {
      // 공백이면 그대로
      result += ch;
      startedWord = false;
    } else {
      if (!startedWord) {
        // 단어의 첫 글자 그대로
        result += ch;
        startedWord = true;
      } else {
        // 나머지 글자는 언더스코어로 표시
        // (너 취향대로 · 나 ·로 바꿔도 됨)
        result += "_";
      }
    }
  }

  return result;
}

// 🔹 현재 깜지 반복 단계에 맞게 copyGhost 내용 세팅
function applyCramGhost(word) {
  if (!DOM.copyGhost) return;

  const full = buildGermanForm(word);
  const ghostType = getGhostTypeForCram(
    TRAINING_CRAM_REPEAT_INDEX,
    TRAINING_CRAM_REPEAT_TOTAL,
  );

  if (ghostType === "FULL") {
    // 🔹 1회차: 전체 글자(밑줄 버전) 고스트 HTML
    DOM.copyGhost.innerHTML = buildFullGhostHtml(full);
  } else if (ghostType === "FIRST") {
    // 🔹 2회차: 앞 글자만 보이고 나머지는 밑줄 + 투명 글자
    DOM.copyGhost.innerHTML = buildFirstLetterGhostHtmlForCram(full);
    // 또는 이름을 바꿨다면:
    // DOM.copyGhost.innerHTML = buildFirstLetterGhostHtml(full);
  } else {
    // 🔹 3회차: 아무 것도 안 보이게
    DOM.copyGhost.textContent = "";
  }
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

function normalizeAnswer(str) {
  return (str || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function getCramTargetText(word) {
  if (!word) return "";
  // 필요하면 form_de 같은 거 쓰고, 없으면 de
  const base = word.form_de || word.de || "";

  return normalizeAnswer(base);
}

// 🔹 깜지 모드용: 현재 단어 + 반복 상태에 맞게 copy 모드 카드 렌더
function showCramQuestion() {
  if (!TRAINING_MODE_ACTIVE || TRAINING_MODE_KIND !== "cram") {
    return;
  }

  const words = TRAINING_CRAM_WORDS || [];
  // 🔹 새 단어 진입마다 give-up 플래그 리셋
  TRAINING_CRAM_GIVEUP_ARMED = false;
  const word = words[TRAINING_CRAM_INDEX];

  // 🔚 더 이상 훈련할 단어가 없으면 세션 종료
  if (!word) {
    const cramTotal = TRAINING_CRAM_WORDS.length || TRAINING_CRAM_INDEX || 0;
    const cramWrong = (APP_STATE.sessionWrongWords || []).length;
    addTrainingSessionToDailySummary({
      mode: "cram",
      total: cramTotal,
      correct: Math.max(0, cramTotal - cramWrong),
      wrong: cramWrong,
      words: APP_STATE.sessionWrongWords || [],
    });
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
        "training_done_simple", // ✅ 키 수정 (training.done_simple → training_done_simple)
        "훈련 세션이 종료되었습니다.",
      );
    }
    return;
  }

  // 🔹 실제 단어가 있을 때만 조회수 증가
  if (TRAINING_CRAM_REPEAT_INDEX === 0) {
    incrementTotalViews(word.id);
  }

  setPhase("QUESTION");

  // 메인 카드 / 요약 영역 초기화
  if (DOM.mainCard) {
    DOM.mainCard.style.display = "block";
    DOM.mainCard.classList.remove("card-correct", "card-wrong");
  }
  if (DOM.endStatsArea) {
    DOM.endStatsArea.style.display = "none";
  }
  // 🔹 훈련소(크램)에서는 "몇번째 봄" 배지 완전 숨김
  const badgeEl =
    DOM.cardLevelBadge || document.getElementById("cardLevelBadge");
  if (badgeEl) {
    badgeEl.style.display = "none";
    badgeEl.textContent = "";
    badgeEl.style.border = "none";
    badgeEl.style.backgroundColor = "transparent";
    badgeEl.style.color = "inherit";
  }

  const targetText = buildGermanForm(word); // 정답(관사 포함 독일어)
  const meaning = getMeaning(word); // UI 언어 뜻

  // 질문: 뜻을 보여주고, 독일어(또는 학습 언어)를 쓰게
  const questionText = meaning || targetText;
  const hintText = getPosWithMeaning(word);

  if (DOM.questionDisplay) {
    fadeSwapText(DOM.questionDisplay, questionText);
  }
  if (DOM.hintDisplay) {
    fadeSwapText(DOM.hintDisplay, hintText);
  }
  if (DOM.feedback) {
    DOM.feedback.textContent = "";
  }

  // 🔹 고스트(전체 / 첫 글자만 / 없음) 설정
  applyCramGhost(word);

  // 입력창 세팅
  if (DOM.inputArea) {
    DOM.inputArea.style.display = "block";
  }
  if (DOM.answerInput) {
    DOM.answerInput.disabled = false;
    DOM.answerInput.value = "";
    DOM.answerInput.placeholder = "";
    focusInputWithoutScroll(DOM.answerInput);
  }

  // 버튼 / 난이도 영역
  if (DOM.mainBtn) {
    const pack = t() || {};
    DOM.mainBtn.style.display = "inline-block";
    DOM.mainBtn.textContent = pack.confirm || "확인";
  }
  if (DOM.skipBtn) {
    DOM.skipBtn.style.display = "none";
  }
  if (DOM.ratingArea) {
    DOM.ratingArea.style.display = "none";
  }

  // 진행도: 단어 기준으로 표시
  APP_STATE.totalTarget = words.length;
  APP_STATE.completed = TRAINING_CRAM_INDEX;
  updateProgressBar();
}

// 🔹 깜지 모드: 현재 입력을 채점하고, 다음 반복/다음 단어로 진행
function handleCramSubmit() {
  if (!TRAINING_MODE_ACTIVE || TRAINING_MODE_KIND !== "cram") {
    return;
  }

  const words = TRAINING_CRAM_WORDS || [];
  const word = words[TRAINING_CRAM_INDEX];
  if (!word) {
    return;
  }

  const inputEl = DOM.answerInput;
  if (!inputEl) return;

  const raw = inputEl.value || "";
  const value = raw.trim();
  const targetText = (buildGermanForm(word) || "").trim();

  // UI 언어 팩 (있어도 되고 없어도 됨)
  const pack = t() || {};

  // ✅ 1) 정답인 경우: 기존 로직 그대로
  if (value && value === targetText) {
    TRAINING_CRAM_GIVEUP_ARMED = false; // 이 단어는 정상 마무리

    applyAnswerEffect(true);
    speakGerman(targetText); // 🔈 훈련소 TTS: 정답 처리 직후 1회

    TRAINING_CRAM_REPEAT_INDEX++;

    // 아직 반복 남았으면 고스트/입력만 초기화하고 같은 단어 반복
    if (TRAINING_CRAM_REPEAT_INDEX < TRAINING_CRAM_REPEAT_TOTAL) {
      applyCramGhost(word);

      inputEl.value = "";
      inputEl.placeholder = "";
      focusInputWithoutScroll(inputEl);

      if (DOM.feedback) {
        DOM.feedback.textContent = "";
      }
      return;
    }

    // 반복 다 채웠으면 "졸업" 처리
    const keepBookmark = true; // 기존 설계 따름 (필요하면 옵션화)
    markWordMastered(word.id, { keepBookmark });

    TRAINING_CRAM_REPEAT_INDEX = 0;
    TRAINING_CRAM_INDEX++;
    APP_STATE.completed = TRAINING_CRAM_INDEX;

    // 다음 단어로
    showCramQuestion();
    return;
  }

  // ❌ 여기부터는 "정답이 아닌 경우" (비어 있거나, 틀렸거나)

  // 2) 아직 give-up 무장 안 된 첫 번째 실패 → 다시 쓰라고 함
  if (!TRAINING_CRAM_GIVEUP_ARMED) {
    TRAINING_CRAM_GIVEUP_ARMED = true;

    if (DOM.feedback) {
      DOM.feedback.textContent = trKey(
        "training.cram_retry_hint",
        "한 번 더 시도해 보세요.",
      );
    }

    applyAnswerEffect(false);

    focusInputWithoutScroll(inputEl);
    if (value) {
      inputEl.select();
    }

    return;
  }

  // 3) 같은 단어에서 두 번째 실패 → "정말 모르겠다"로 간주하고 강제 패스
  TRAINING_CRAM_GIVEUP_ARMED = false; // 다음 단어를 위해 초기화

  applyAnswerEffect(false);

  // markWordMastered() 호출 안 함
  if (!(APP_STATE.sessionWrongWords || []).some((w) => String(w.id) === String(word.id))) {
    APP_STATE.sessionWrongWords.push(word);
  }
  TRAINING_CRAM_REPEAT_INDEX = 0;
  TRAINING_CRAM_INDEX++;
  APP_STATE.completed = TRAINING_CRAM_INDEX;

  showCramQuestion();
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
          DOM.answerInput.placeholder = pack.type_answer || "정답 입력";
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
        DOM.mainBtn.style.display = "inline-block";
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

function showTtsWarning() {
  if (TTS_WARNED_UNSUPPORTED) return;
  TTS_WARNED_UNSUPPORTED = true;

  const msg = trKey(
    "tts_unsupported_notice",
    "이 기기에서는 발음 기능이 제한될 수 있습니다.",
  );

  if (DOM && DOM.feedback) {
    DOM.feedback.textContent = msg;
  } else if (DOM && DOM.hintDisplay) {
    DOM.hintDisplay.textContent = msg;
  } else {
    console.warn(msg);
  }
}

function showEnglishVoiceMissingWarning() {
  const msg = trKey(
    "tts_english_voice_missing",
    "영어 음성(EN-US/EN-GB)이 없어 발음을 재생하지 않았습니다. 기기 TTS에서 영어 음성을 설치해 주세요.",
  );
  if (DOM && DOM.feedback) {
    DOM.feedback.textContent = msg;
  } else if (DOM && DOM.hintDisplay) {
    DOM.hintDisplay.textContent = msg;
  } else {
    console.warn(msg);
  }
}

function getTtsLangCode(studyLang) {
  const target = (studyLang || "de").toLowerCase();
  if (target === "en") return "en-US";
  if (target === "ko") return "ko-KR";
  if (target === "fr") return "fr-FR";
  if (target === "it") return "it-IT";
  if (target === "es") return "es-ES";
  if (target === "pt") return "pt-PT";
  if (target === "pl") return "pl-PL";
  if (target === "nl") return "nl-NL";
  if (target === "ru") return "ru-RU";
  if (target === "sv") return "sv-SE";
  if (target === "ja") return "ja-JP";
  if (target === "zh") return "zh-CN";
  return "de-DE";
}

function hasNativeTtsSupport() {
  if (!NativeTTS) return false;

  const platform =
    window.Capacitor && typeof window.Capacitor.getPlatform === "function"
      ? window.Capacitor.getPlatform()
      : "web";
  const isNativeRuntime = platform === "android" || platform === "ios";
  return (
    isNativeRuntime &&
    typeof NativeTTS.speak === "function" &&
    typeof NativeTTS.stop === "function" &&
    typeof NativeTTS.isAvailable === "function"
  );
}

// 🔊 스피커 버튼 활성/비활성 반영
function updateTtsUiState() {
  const soundOn = SETTINGS.soundEnabled !== false;
  // 네이티브 TTS(플러그인) 또는 Web Speech 중 하나만 살아있어도 버튼 활성
  const canClick = soundOn && (hasNativeTtsSupport() || TTS_SUPPORTED);

  document.querySelectorAll("button.speaker-icon").forEach((el) => {
    el.disabled = !canClick;
    el.classList.toggle("tts-disabled", !canClick);
  });
}

function pickTtsVoiceForLang(voices, studyLang) {
  const lang = (studyLang || "de").toLowerCase();
  const prefixes =
    lang === "de"
      ? ["de-"]
      : lang === "en"
      ? ["en-us", "en-gb", "en-"]
      : lang === "ko"
      ? ["ko-"]
      : lang === "es"
      ? ["es-"]
      : [lang + "-"];

  const lower = (s) => (s || "").toLowerCase();
  const badNameTokens = [
    "novelty",
    "funny",
    "clown",
    "whisper",
    "robot",
    "monster",
    "alien",
    "zombie",
    "child",
    "kid",
    "baby",
  ];
  const femaleNameTokens = [
    "female",
    "woman",
    "girl",
    "samantha",
    "victoria",
    "karen",
    "moira",
    "aria",
    "jenny",
    "zira",
    "emma",
    "siri female",
  ];
  const maleNameTokens = [
    "male",
    "man",
    "boy",
    "david",
    "thomas",
    "daniel",
    "alex",
    "google uk english male",
  ];
  const goodNameTokens = [
    "google",
    "samantha",
    "victoria",
    "karen",
    "moira",
    "aria",
    "jenny",
    "zira",
    "natural",
    "enhanced",
    "premium",
    "neural",
  ];

  let best = null;
  let bestScore = -999;

  for (const v of voices || []) {
    const vLang = lower(v.lang);
    const vName = `${lower(v.name)} ${lower(v.voiceURI)}`;

    let prefixScore = -1;
    for (let i = 0; i < prefixes.length; i += 1) {
      if (vLang.startsWith(prefixes[i])) {
        prefixScore = prefixes.length - i;
        break;
      }
    }
    if (prefixScore < 0) continue;

    let score = prefixScore * 100;
    if (v.default) score += 10;

    for (const t of goodNameTokens) {
      if (vName.includes(t)) score += 6;
    }
    for (const t of femaleNameTokens) {
      if (vName.includes(t)) score += 14;
    }
    for (const t of maleNameTokens) {
      if (vName.includes(t)) score -= 8;
    }
    for (const t of badNameTokens) {
      if (vName.includes(t)) score -= 20;
    }

    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }

  return best || null;
}

// 🔊 TTS 보이스 초기화 (WebView voice loading 대응)
function initTtsVoices() {
  if (!("speechSynthesis" in window)) {
    TTS_SUPPORTED = false;
    TTS_READY = false;
    TTS_VOICE = null;
    updateTtsUiState();
    return;
  }

  TTS_SUPPORTED = true;

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) {
      TTS_READY = false;
      TTS_VOICE = null;
      updateTtsUiState();
      return;
    }

    // 해당 학습 언어 보이스가 있을 때만 ready
    const voice = pickTtsVoiceForLang(voices, SETTINGS.studyLang);
    TTS_VOICE = voice || null;
    TTS_READY = !!TTS_VOICE;
    updateTtsUiState();
  };

  loadVoices();

  if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

async function isNativeTtsAvailable(lang) {
  if (!hasNativeTtsSupport()) return false;
  try {
    const ret = await NativeTTS.isAvailable({ lang });
    return !!(ret && ret.available);
  } catch (e) {
    console.warn("Native TTS isAvailable failed", e);
    return false;
  }
}

function speakWithWebSpeech(text, targetLang, targetLangCode) {
  if (!("speechSynthesis" in window)) {
    TTS_SUPPORTED = false;
    TTS_READY = false;
    updateTtsUiState();
    showTtsWarning();
    return;
  }

  TTS_SUPPORTED = true;
  if (!TTS_READY) {
    // 첫 클릭 시점에 voices가 늦게 준비되는 기기 대응: 재조회만 하고 fallback 허용
    const voices = window.speechSynthesis.getVoices() || [];
    if (voices.length) {
      TTS_VOICE = pickTtsVoiceForLang(voices, SETTINGS.studyLang);
      TTS_READY = !!TTS_VOICE;
    }
    updateTtsUiState();
  }

  const utter = new SpeechSynthesisUtterance(text);

  // 영어는 반드시 영어 보이스가 잡힌 경우만 재생 (한국어 억양 fallback 방지)
  if (targetLang === "en" && !TTS_VOICE) {
    showEnglishVoiceMissingWarning();
    return;
  }

  if (TTS_VOICE) {
    utter.voice = TTS_VOICE;
    utter.lang = TTS_VOICE.lang || "de-DE";
  } else {
    utter.lang = targetLangCode;
  }

  utter.rate = 0.95;
  utter.pitch = 1;
  utter.onerror = (event) => {
    const error = event && event.error ? String(event.error) : "";
    // macOS/Safari/Chrome can report the previous utterance as canceled or
    // interrupted when we call cancel() before starting a new one. Playback of
    // the new utterance can still succeed, so this is not an unsupported state.
    if (error === "canceled" || error === "interrupted") {
      return;
    }
    showTtsWarning();
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function speakGerman(text) {
  if (!text) return;
  if (SETTINGS.soundEnabled === false) return;

  const targetLangCode = getTtsLangCode(SETTINGS.studyLang || "de");
  const targetLang = (SETTINGS.studyLang || "de").toLowerCase();

  // 1) 앱(iOS/Android)에서는 네이티브 TTS 우선
  if (hasNativeTtsSupport()) {
    isNativeTtsAvailable(targetLangCode)
      .then((available) => {
        if (!available) {
          speakWithWebSpeech(text, targetLang, targetLangCode);
          return;
        }
        return NativeTTS.speak({ text, lang: targetLangCode }).catch((e) => {
          console.warn("Native TTS failed, fallback to Web Speech", e);
          speakWithWebSpeech(text, targetLang, targetLangCode);
        });
      })
      .catch((e) => {
        console.warn("Native TTS availability check failed", e);
        speakWithWebSpeech(text, targetLang, targetLangCode);
      });
    return;
  }

  // 2) 웹/PWA에서는 기존 Web Speech fallback 유지
  speakWithWebSpeech(text, targetLang, targetLangCode);
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

// ✅ 정답/오답 시 카드 배경 이펙트
function applyAnswerEffect(isCorrect) {
  if (!DOM.mainCard) return;

  // ✅ 정답/오답 햅틱
  // triggerHaptic는 아까 전역에 만든 그 함수
  if (typeof triggerHaptic === "function") {
    triggerHaptic(isCorrect ? "success" : "error");
  }
  // 이전 상태 제거
  DOM.mainCard.classList.remove("card-correct", "card-wrong");

  // true → 정답, false → 오답
  if (isCorrect === true) {
    DOM.mainCard.classList.add("card-correct");
  } else if (isCorrect === false) {
    DOM.mainCard.classList.add("card-wrong");
  }
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
    const isPracticeFlow = TRAINING_MODE_ACTIVE || WRONG_PRACTICE_ACTIVE;
    DOM.ratingArea.style.display = isPracticeFlow ? "none" : "block";
    DOM.mainBtn.style.display = isPracticeFlow ? "inline-block" : "none";
    if (isPracticeFlow) {
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

function getSessionReportWordLabel(word) {
  if (!word) return "";

  const uiText = getMeaning(word);
  const studyText =
    getPrimaryStudyText(word) ||
    buildGermanForm(word) ||
    word.lemma ||
    "";

  if (uiText && studyText) {
    return `${uiText} - ${studyText}`;
  }
  return uiText || studyText || "";
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

function getWordDropText(word) {
  return (buildGermanForm(word) || getPrimaryStudyText(word) || "").trim();
}

function dedupeWordsById(words) {
  const seen = new Set();
  const result = [];
  words.forEach((word) => {
    if (!word || word.id == null) return;
    const id = String(word.id);
    if (seen.has(id)) return;
    seen.add(id);
    result.push(word);
  });
  return result;
}

function getNormalizedCefrLevel(word) {
  const level = (word && word.cefr ? word.cefr : "")
    .toString()
    .trim()
    .toUpperCase();
  return ["A1", "A2", "B1", "B2"].includes(level) ? level : "";
}

function getWordDropNormalLevels(allWords, statsById) {
  const selected = (SETTINGS.newWordCefr || "all").toString().toUpperCase();
  const levels = new Set();

  if (["A1", "A2", "B1", "B2"].includes(selected)) {
    levels.add(selected);
  }

  const studiedCountByLevel = {};
  const recentReviewedByLevel = {};

  allWords.forEach((word) => {
    const cefr = getNormalizedCefrLevel(word);
    if (!cefr) return;

    const state = getWordState(word);
    const stats = statsById[String(word.id)] || {};
    const totalViews = stats.totalViews || 0;
    const studied =
      state.isNew === false ||
      (state.lastReviewed || 0) > 0 ||
      totalViews > 0 ||
      (stats.level || 0) > 0;

    if (!studied) return;

    studiedCountByLevel[cefr] =
      (studiedCountByLevel[cefr] || 0) + Math.max(1, totalViews);

    if (state.lastReviewed) {
      recentReviewedByLevel[cefr] = Math.max(
        recentReviewedByLevel[cefr] || 0,
        state.lastReviewed,
      );
    }
  });

  const mostStudied = Object.entries(studiedCountByLevel).sort(
    (a, b) => b[1] - a[1],
  )[0];
  if (mostStudied) {
    levels.add(mostStudied[0]);
  }

  const mostRecent = Object.entries(recentReviewedByLevel).sort(
    (a, b) => b[1] - a[1],
  )[0];
  if (mostRecent) {
    levels.add(mostRecent[0]);
  }

  if (levels.size === 0) {
    levels.add("A1");
  }

  return levels;
}

function buildWordDropPools() {
  const statsById = getWordStatsAll();
  const allWords = dedupeWordsById(
    getAllWords()
      .filter((word) => belongsToCurrentStudyLang(word))
      .filter((word) => getWordDropText(word).length > 0),
  );
  const normalLevels = getWordDropNormalLevels(allWords, statsById);
  const normalWords = allWords.filter((word) =>
    normalLevels.has(getNormalizedCefrLevel(word)),
  );

  const mistakeWords = [];
  const bookmarkedWords = [];

  allWords.forEach((word) => {
    const stats = statsById[String(word.id)] || {};
    if ((stats.wrongAttempts || 0) > 0) {
      mistakeWords.push(word);
    }
    if (stats.bookmarked) {
      bookmarkedWords.push(word);
    }
  });

  return {
    allWords,
    normalWords: normalWords.length > 0 ? normalWords : allWords,
    mistakeWords: dedupeWordsById(mistakeWords),
    bookmarkedWords: dedupeWordsById(bookmarkedWords),
  };
}

function pickNonRecent(pool, recentIds) {
  if (!pool || pool.length === 0) return null;
  const recent = new Set((recentIds || []).map((id) => String(id)));
  const filtered = pool.filter((word) => !recent.has(String(word.id)));
  const source = filtered.length > 0 ? filtered : pool;
  return source[Math.floor(Math.random() * source.length)] || null;
}

function pickWordForDrop({
  allWords,
  normalWords,
  mistakeWords,
  bookmarkedWords,
  score,
}) {
  if (!allWords || allWords.length === 0) return null;

  let ratio;
  if (score < 10) {
    ratio = { normal: 0.8, mistake: 0.15, bookmark: 0.05 };
  } else if (score < 30) {
    ratio = { normal: 0.6, mistake: 0.3, bookmark: 0.1 };
  } else {
    ratio = { normal: 0.45, mistake: 0.4, bookmark: 0.15 };
  }

  const r = Math.random();
  let poolType;
  if (r < ratio.mistake) {
    poolType = "mistake";
  } else if (r < ratio.mistake + ratio.bookmark) {
    poolType = "bookmark";
  } else {
    poolType = "normal";
  }

  const fallbackPool =
    normalWords && normalWords.length > 0 ? normalWords : allWords;
  let pool = fallbackPool;
  if (poolType === "mistake" && mistakeWords.length > 0) {
    pool = mistakeWords;
  } else if (poolType === "bookmark" && bookmarkedWords.length > 0) {
    pool = bookmarkedWords;
  }

  return pickNonRecent(pool, WORD_DROP_STATE.recentIds);
}

function updateWordDropHud() {
  if (DOM.wordDropProgressBar) {
    const ratio =
      WORD_DROP_STATE.targetCount > 0
        ? WORD_DROP_STATE.completedCount / WORD_DROP_STATE.targetCount
        : 0;
    const percent = Math.max(0, Math.min(100, ratio * 100));
    DOM.wordDropProgressBar.style.width = `${percent}%`;
  }
}

function getWordDropTargetCount() {
  if (DOM.trainingCountSelect && DOM.trainingCountSelect.value) {
    const value = parseInt(DOM.trainingCountSelect.value, 10);
    if (!Number.isNaN(value) && value > 0) return value;
  }
  return 10;
}

function completeWordDropItem({ missed }) {
  if (WORD_DROP_STATE.resolving) return;
  WORD_DROP_STATE.resolving = true;
  WORD_DROP_STATE.completedCount += 1;
  if (missed) {
    WORD_DROP_STATE.missedCount += 1;
  } else {
    WORD_DROP_STATE.correctCount += 1;
    WORD_DROP_STATE.score += 1;
  }

  updateWordDropHud();

  const finishOrNext = () => {
    WORD_DROP_STATE.resolving = false;
    if (!WORD_DROP_STATE.active) return;

    if (WORD_DROP_STATE.completedCount >= WORD_DROP_STATE.targetCount) {
      endWordDrop();
      return;
    }

    setNextWordDropWord();
  };

  if (missed) {
    playWordDropMissEffect();
    setTimeout(finishOrNext, 90);
  } else {
    playWordDropHitEffect();
    setTimeout(finishOrNext, 130);
  }
}

function focusWordDropInput() {
  if (
    (!WORD_DROP_STATE.active && !WORD_DROP_STATE.pendingStart) ||
    !DOM.wordDropInput
  ) {
    return;
  }
  syncAppViewportHeight();
  DOM.wordDropInput.focus({ preventScroll: true });
}

function setWordDropReadyMessage(text, { counting = false } = {}) {
  if (DOM.wordDropReady) {
    DOM.wordDropReady.classList.add("is-visible");
    DOM.wordDropReady.classList.toggle("is-counting", counting);
  }
  if (DOM.wordDropReadyText) {
    DOM.wordDropReadyText.textContent = text;
  }
}

function getWordDropTapToStartText() {
  return trKey("word_drop.tap_to_start", "입력창을 터치하세요");
}

function hideWordDropReadyMessage() {
  if (DOM.wordDropReady) {
    DOM.wordDropReady.classList.remove("is-visible", "is-counting");
  }
}

function updateWordDropKeyboardChrome(active) {
  document.body.classList.toggle("word-drop-keyboard-active", !!active);
}

function beginWordDropGameplay() {
  if (!WORD_DROP_STATE.pendingStart) return;

  WORD_DROP_STATE.pendingStart = false;
  WORD_DROP_STATE.active = true;
  WORD_DROP_STATE.startedAt = Date.now();
  WORD_DROP_STATE.lastFrameAt = 0;
  hideWordDropReadyMessage();
  updateWordDropKeyboardChrome(true);

  setNextWordDropWord();
  WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
}

function startWordDropCountdown() {
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) return;

  WORD_DROP_STATE.countdownValue = 3;
  updateWordDropKeyboardChrome(true);
  setWordDropReadyMessage(String(WORD_DROP_STATE.countdownValue), {
    counting: true,
  });

  WORD_DROP_STATE.countdownTimerId = setInterval(() => {
    if (!WORD_DROP_STATE.pendingStart) {
      clearInterval(WORD_DROP_STATE.countdownTimerId);
      WORD_DROP_STATE.countdownTimerId = null;
      return;
    }

    WORD_DROP_STATE.countdownValue -= 1;
    if (WORD_DROP_STATE.countdownValue > 0) {
      setWordDropReadyMessage(String(WORD_DROP_STATE.countdownValue), {
        counting: true,
      });
      return;
    }

    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
    syncAppViewportHeight();
    beginWordDropGameplay();
  }, 650);
}

function prepareWordDropInputFocus() {
  if (!WORD_DROP_STATE.pendingStart || !DOM.wordDropInput) return;
  syncAppViewportHeight();
}

function cancelWordDropCountdown() {
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) {
    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
  }
  WORD_DROP_STATE.countdownValue = 0;
  updateWordDropKeyboardChrome(false);
  if (WORD_DROP_STATE.pendingStart && !WORD_DROP_STATE.active) {
    setWordDropReadyMessage(getWordDropTapToStartText());
  }
}

function handleWordDropInputFocus() {
  if (WORD_DROP_STATE.active) {
    updateWordDropKeyboardChrome(true);
    return;
  }
  if (!WORD_DROP_STATE.pendingStart) return;

  updateWordDropKeyboardChrome(true);

  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  WORD_DROP_STATE.startTimerId = setTimeout(() => {
    WORD_DROP_STATE.startTimerId = null;
    syncAppViewportHeight();
    startWordDropCountdown();
  }, 260);
}

function setNextWordDropWord() {
  const word = pickWordForDrop({
    ...WORD_DROP_STATE.pools,
    score: WORD_DROP_STATE.score,
  });

  if (!word) {
    endWordDrop();
    return;
  }

  WORD_DROP_STATE.currentWord = word;
  WORD_DROP_STATE.currentText = getWordDropText(word);
  WORD_DROP_STATE.yPosition = 0;
  WORD_DROP_STATE.lane = Math.floor(Math.random() * 3);
  WORD_DROP_STATE.speed = WORD_DROP_BASE_SPEED;
  WORD_DROP_STATE.recentIds.push(String(word.id));
  WORD_DROP_STATE.recentIds = WORD_DROP_STATE.recentIds.slice(-3);

  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = WORD_DROP_STATE.currentText;
    DOM.wordDropWord.classList.remove("word-drop-hit");
    DOM.wordDropWord.style.left = getWordDropLaneLeft();
    DOM.wordDropWord.style.setProperty("--word-drop-y", "0px");
    DOM.wordDropWord.style.transform = "translate(-50%, 0px)";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
  }
  updateWordDropHud();
  focusWordDropInput();
}

function playWordDropHitEffect() {
  if (!DOM.wordDropWord) return;
  DOM.wordDropWord.classList.remove("word-drop-hit");
  DOM.wordDropWord.style.setProperty(
    "--word-drop-y",
    `${WORD_DROP_STATE.yPosition}px`,
  );
  void DOM.wordDropWord.offsetWidth;
  DOM.wordDropWord.classList.add("word-drop-hit");
}

function playWordDropMissEffect() {
  if (!DOM.wordDropInput) return;
  DOM.wordDropInput.classList.remove("word-drop-input-miss");
  void DOM.wordDropInput.offsetWidth;
  DOM.wordDropInput.classList.add("word-drop-input-miss");
  setTimeout(() => {
    if (DOM.wordDropInput) {
      DOM.wordDropInput.classList.remove("word-drop-input-miss");
    }
  }, 140);
}

function getWordDropLaneLeft() {
  const arenaWidth = DOM.wordDropArena ? DOM.wordDropArena.clientWidth : 360;
  const safeWidth = Math.max(120, arenaWidth - 32);
  const wordWidth = DOM.wordDropWord
    ? Math.min(DOM.wordDropWord.offsetWidth || 0, safeWidth)
    : 0;
  const halfWord = Math.max(40, wordWidth / 2);
  const sidePadding = 12;
  const minCenter = halfWord + sidePadding;
  const maxCenter = arenaWidth - halfWord - sidePadding;

  if (WORD_DROP_STATE.lane === 0) {
    return `${Math.max(arenaWidth * 0.16666, minCenter)}px`;
  }
  if (WORD_DROP_STATE.lane === 2) {
    return `${Math.min(arenaWidth * 0.83333, maxCenter)}px`;
  }
  return "50%";
}

function recordWordDropMiss(word) {
  if (!word || word.id == null) return;

  const exists = WORD_DROP_STATE.mistakeWords.some(
    (item) => String(item.id) === String(word.id),
  );
  if (!exists) {
    WORD_DROP_STATE.mistakeWords.push(word);
  }
}

function formatWordDropResult() {
  const fallback = `정답 ${WORD_DROP_STATE.correctCount} · 놓침 ${WORD_DROP_STATE.missedCount}`;
  const template = trKey("word_drop.result", "");
  if (template && template !== "word_drop.result") {
    return template
      .replace("{correct}", WORD_DROP_STATE.correctCount)
      .replace("{missed}", WORD_DROP_STATE.missedCount);
  }

  const correctLabel = trKey("word_drop.correct", "정답");
  const missedLabel = trKey("word_drop.missed", "놓침");
  if (correctLabel && missedLabel) {
    return `${correctLabel} ${WORD_DROP_STATE.correctCount} · ${missedLabel} ${WORD_DROP_STATE.missedCount}`;
  }
  return fallback;
}

function getComparableWordDropInputValue() {
  if (!DOM.wordDropInput) return "";
  return DOM.wordDropInput.value.trim().normalize("NFC");
}

function getComparableWordDropCurrentText() {
  return (WORD_DROP_STATE.currentText || "").trim().normalize("NFC");
}

function checkWordDropAnswer() {
  if (!WORD_DROP_STATE.active || !DOM.wordDropInput) {
    return false;
  }

  if (WORD_DROP_STATE.clearUntil && Date.now() < WORD_DROP_STATE.clearUntil) {
    DOM.wordDropInput.value = "";
    return false;
  }

  if (WORD_DROP_STATE.resolving) return false;

  const typed = getComparableWordDropInputValue();
  const target = getComparableWordDropCurrentText();
  if (!typed || typed !== target) return false;

  // Korean/Japanese/Chinese IMEs can keep the final character in composition
  // until Enter/Space. If the visible value already matches, accept it now.
  WORD_DROP_STATE.composing = false;
  WORD_DROP_STATE.clearUntil = Date.now() + 260;
  DOM.wordDropInput.value = "";
  requestAnimationFrame(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  });
  setTimeout(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  }, 80);
  setTimeout(() => {
    if (DOM.wordDropInput && Date.now() < WORD_DROP_STATE.clearUntil) {
      DOM.wordDropInput.value = "";
    }
  }, 180);

  speakGerman(WORD_DROP_STATE.currentText);
  completeWordDropItem({ missed: false });
  return true;
}

function handleWordDropInput() {
  checkWordDropAnswer();
}

function scheduleWordDropAnswerCheck() {
  checkWordDropAnswer();
  requestAnimationFrame(checkWordDropAnswer);
  setTimeout(checkWordDropAnswer, 0);
  setTimeout(checkWordDropAnswer, 40);
}

function runWordDropFrame(timestamp) {
  if (!WORD_DROP_STATE.active) return;

  if (!WORD_DROP_STATE.lastFrameAt) {
    WORD_DROP_STATE.lastFrameAt = timestamp;
  }

  const dt = Math.min(40, timestamp - WORD_DROP_STATE.lastFrameAt);
  WORD_DROP_STATE.lastFrameAt = timestamp;

  if (WORD_DROP_STATE.resolving) {
    WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
    return;
  }

  WORD_DROP_STATE.yPosition += (WORD_DROP_STATE.speed * dt) / 1000;

  const arenaHeight = DOM.wordDropArena ? DOM.wordDropArena.clientHeight : 360;
  const wordHeight = DOM.wordDropWord ? DOM.wordDropWord.offsetHeight : 40;
  const bottomLimit = Math.max(80, arenaHeight - wordHeight - 10);

  if (WORD_DROP_STATE.yPosition >= bottomLimit) {
    recordWordDropMiss(WORD_DROP_STATE.currentWord);
    completeWordDropItem({ missed: true });
  } else if (DOM.wordDropWord) {
    DOM.wordDropWord.style.setProperty(
      "--word-drop-y",
      `${WORD_DROP_STATE.yPosition}px`,
    );
    DOM.wordDropWord.style.transform = `translate(-50%, ${WORD_DROP_STATE.yPosition}px)`;
  }

  WORD_DROP_STATE.rafId = requestAnimationFrame(runWordDropFrame);
}

function stopWordDrop() {
  WORD_DROP_STATE.active = false;
  WORD_DROP_STATE.pendingStart = false;
  if (WORD_DROP_STATE.startTimerId) {
    clearTimeout(WORD_DROP_STATE.startTimerId);
    WORD_DROP_STATE.startTimerId = null;
  }
  if (WORD_DROP_STATE.countdownTimerId) {
    clearInterval(WORD_DROP_STATE.countdownTimerId);
    WORD_DROP_STATE.countdownTimerId = null;
  }
  if (WORD_DROP_STATE.rafId) {
    cancelAnimationFrame(WORD_DROP_STATE.rafId);
    WORD_DROP_STATE.rafId = null;
  }
  hideWordDropReadyMessage();
  updateWordDropKeyboardChrome(false);
}

function endWordDrop() {
  stopWordDrop();
  document.body.classList.remove("word-drop-active");
  syncAppViewportHeight();
  const dailySummary = addTrainingSessionToDailySummary({
    mode: "word_drop",
    total: WORD_DROP_STATE.completedCount || 0,
    correct: WORD_DROP_STATE.correctCount || 0,
    wrong: WORD_DROP_STATE.missedCount || 0,
    words: WORD_DROP_STATE.mistakeWords || [],
  });

  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = "";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
    DOM.wordDropInput.blur();
    DOM.wordDropInput.style.display = "none";
  }
  if (DOM.wordDropGameOver) {
    DOM.wordDropGameOver.style.display = "flex";
  }
  if (DOM.wordDropFinalScore) {
    DOM.wordDropFinalScore.textContent = formatWordDropResult();
  }
  if (DOM.wordDropMistakes) {
    const words = WORD_DROP_STATE.mistakeWords.slice(0, 8);
    DOM.wordDropMistakes.innerHTML = words.length
      ? words
          .map(
            (word) =>
              `<div>${escapeHtml(getSessionReportWordLabel(word))}</div>`,
          )
          .join("")
      : `<div>${escapeHtml(
          trKey("word_drop.no_missed", "이번 세션에서 놓친 단어가 없습니다."),
        )}</div>`;
  }
  if (DOM.wordDropReviewBtn) {
    DOM.wordDropReviewBtn.style.display =
      WORD_DROP_STATE.mistakeWords.length > 0 ? "inline-block" : "none";
  }
  prepareShareCard(dailySummary);
}

function startWordDrop() {
  const pools = buildWordDropPools();
  if (!pools.allWords.length) {
    if (DOM.trainingSummary) {
      DOM.trainingSummary.style.color = "#e11d48";
      DOM.trainingSummary.textContent = "Word Drop에 사용할 단어가 없습니다.";
    }
    return;
  }

  stopWordDrop();
  TRAINING_MODE_ACTIVE = false;
  TRAINING_MODE_KIND = "none";

  WORD_DROP_STATE.active = false;
  WORD_DROP_STATE.pendingStart = true;
  WORD_DROP_STATE.countdownValue = 0;
  WORD_DROP_STATE.currentWord = null;
  WORD_DROP_STATE.currentText = "";
  WORD_DROP_STATE.yPosition = 0;
  WORD_DROP_STATE.score = 0;
  WORD_DROP_STATE.targetCount = getWordDropTargetCount();
  WORD_DROP_STATE.completedCount = 0;
  WORD_DROP_STATE.correctCount = 0;
  WORD_DROP_STATE.missedCount = 0;
  WORD_DROP_STATE.lane = 1;
  WORD_DROP_STATE.resolving = false;
  WORD_DROP_STATE.composing = false;
  WORD_DROP_STATE.clearUntil = 0;
  WORD_DROP_STATE.speed = WORD_DROP_BASE_SPEED;
  WORD_DROP_STATE.startedAt = 0;
  WORD_DROP_STATE.lastFrameAt = 0;
  WORD_DROP_STATE.recentIds = [];
  WORD_DROP_STATE.mistakeWords = [];
  WORD_DROP_STATE.pools = pools;

  if (DOM.wordDropGameOver) {
    DOM.wordDropGameOver.style.display = "none";
  }
  closeShareCardModal();
  if (DOM.wordDropWord) {
    DOM.wordDropWord.textContent = "";
  }
  if (DOM.wordDropInput) {
    DOM.wordDropInput.value = "";
    DOM.wordDropInput.style.display = "";
  }

  showView("wordDrop");
  updateWordDropHud();
  setWordDropReadyMessage(getWordDropTapToStartText());
  prepareWordDropInputFocus();
}

function handleTrainingStart() {
  const pack = t() || {};
  const selectedTrainingMode =
    DOM.trainingModeSelect && DOM.trainingModeSelect.value
      ? DOM.trainingModeSelect.value
      : "cram";

  if (selectedTrainingMode === "word_drop") {
    startWordDrop();
    return;
  }

  const useMistakes =
    DOM.trainingSourceMistakes &&
    DOM.trainingSourceMistakes.classList.contains("is-on");
  const useHard =
    DOM.trainingSourceHard &&
    DOM.trainingSourceHard.classList.contains("is-on");
  const useBookmark =
    DOM.trainingSourceBookmark &&
    DOM.trainingSourceBookmark.classList.contains("is-on");

  // 🔴 체크박스 전부 해제 상태
  if (!useMistakes && !useHard && !useBookmark) {
    const msg = trKey(
      "training_select_target_warning",
      "훈련할 대상을 하나 이상 선택해 주세요.",
    );

    if (DOM.trainingSummary) {
      DOM.trainingSummary.textContent = msg;
      DOM.trainingSummary.style.color = "#e11d48"; // 경고색 유지
    } else {
      alert(msg);
    }
    return;
  }

  // 기본 상태로 리셋
  if (DOM.trainingSummary) {
    DOM.trainingSummary.style.color = "#6b7280";
    DOM.trainingSummary.textContent = "";
  }

  // 🔹 1) 통계 + 단어 맵
  const allStats = getWordStatsAll(); // { id: { ... } }
  const allWords = getAllWords();

  const mapById = {};
  allWords.forEach((w) => {
    // 현재 학습 언어에 form 있는 단어만 대상으로
    if (belongsToCurrentStudyLang(w)) {
      mapById[String(w.id)] = w;
    }
  });

  // 🔹 2) 최근성 + 점수 기준으로 후보 뽑기
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const RECENT_DAYS = 30; // 최근 30일
  const RECENT_MS = RECENT_DAYS * ONE_DAY;

  // 기본 상수(상한선): 드롭다운 없을 때 fallback
  const MAX_TRAINING_WORDS = 50;

  const now = Date.now();
  const items = [];

  for (const [id, rawStats] of Object.entries(allStats)) {
    const word = mapById[id];
    if (!word) continue;

    const stats = {
      hardCount: rawStats.hardCount || 0,
      wrongAttempts: rawStats.wrongAttempts || 0,
      bookmarked: !!rawStats.bookmarked,
      lastWrongAt: rawStats.lastWrongAt || 0,
      lastHardAt: rawStats.lastHardAt || 0,
    };

    const hasWrong = stats.wrongAttempts > 0;
    const hasHard = stats.hardCount > 0;
    const isBookmarked = stats.bookmarked;

    // 🔹 1) 날짜가 있는 경우 → 진짜로 최근 30일만
    const hasRecentMistake =
      (stats.lastWrongAt && now - stats.lastWrongAt <= RECENT_MS) ||
      (stats.lastHardAt && now - stats.lastHardAt <= RECENT_MS) ||
      (!stats.lastWrongAt && !stats.lastHardAt && (hasWrong || hasHard));

    let include = false;

    // 틀린 단어: 최근 + 오답 존재
    if (useMistakes && hasWrong && hasRecentMistake) {
      include = true;
    }
    // hard 단어: 최근 + hard 존재
    if (useHard && hasHard && hasRecentMistake) {
      include = true;
    }
    // 북마크: 최근성과 상관없이 항상 포함
    if (useBookmark && isBookmarked) {
      include = true;
    }

    if (!include) continue;

    const st = getWordState(word);

    // 🔹 충분히 익힌 단어(level 높음)는 기본적으로 제외
    //    단, 북마크는 예외로 그대로 포함
    if (!isBookmarked && st.level >= 3) {
      continue;
    }

    // 점수: hard + wrong (많이 문제된 애일수록 점수↑)
    const score = stats.hardCount + stats.wrongAttempts;

    items.push({
      word,
      state: st,
      stats,
      score,
    });
  }

  // 🔴 필터 후 아무것도 없으면 안내 메시지
  if (items.length === 0) {
    const msg =
      pack.training_no_match || "No words match the selected conditions.";

    if (DOM.trainingSummary) {
      DOM.trainingSummary.textContent = msg;
      DOM.trainingSummary.style.color = "#e11d48";
    } else {
      alert(msg);
    }
    return;
  }

  // 🔹 3) 점수 기준 정렬 (score ↓, 그다음 최근에 틀린 순)
  items.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;

    const aTime = Math.max(a.stats.lastWrongAt || 0, a.stats.lastHardAt || 0);
    const bTime = Math.max(b.stats.lastWrongAt || 0, b.stats.lastHardAt || 0);
    return bTime - aTime;
  });

  // 🔹 4) 드롭다운에서 "훈련 단어 수" 읽기 (없으면 기본 50개)
  let maxTrainingWords = MAX_TRAINING_WORDS;
  if (DOM.trainingCountSelect && DOM.trainingCountSelect.value) {
    const v = parseInt(DOM.trainingCountSelect.value, 10);
    if (!Number.isNaN(v) && v > 0) {
      maxTrainingWords = v;
    }
  }

  const selectedItems = items.slice(0, maxTrainingWords);

  // 🔹 5) 훈련 모드 → STUDY 모드 + KIND 매핑 (현재는 깜지 전용)
  let trainingMode = "copy";
  let modeKind = "cram";

  if (DOM.trainingModeSelect && DOM.trainingModeSelect.value) {
    const v = DOM.trainingModeSelect.value;

    if (v === "cram") {
      trainingMode = "copy"; // 깜지는 copy UI 재사용
      modeKind = "cram";
    } else if (v === "mix") {
      // 혹시 예전 localStorage 값이 'mix'로 남아 있어도 강제로 깜지로
      trainingMode = "copy";
      modeKind = "cram";
    } else {
      // 그 외 값도 전부 깜지로 통일
      trainingMode = "copy";
      modeKind = "cram";
    }
  }

  // ✅ 여기에서 한 번 "자, 드가자" 햅틱
  if (typeof triggerHaptic === "function") {
    triggerHaptic("medium");
  }

  // 🔹 6) 훈련 플래그를 먼저 세팅 (중요: 학습요약 숨김이 이 타이밍에 먹어야 함)
  TRAINING_MODE_ACTIVE = true;
  TRAINING_MODE_KIND = modeKind;

  // 그 다음에 설정/UI/번역 적용
  SETTINGS.mode = trainingMode;
  saveSettings();
  hydrateSettingsToUI();
  applyTranslations();

  // (보험) 최종 상태에서 요약 숨김 다시 강제
  updateStudyStartSummary();

  TRAINING_MIX_WORDS = [];
  TRAINING_MIX_INDEX = 0;
  TRAINING_MIX_STEP = 0;

  TRAINING_CRAM_WORDS = [];
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_INDEX = 0;
  TRAINING_CRAM_REPEAT_TOTAL = 3; // 깜지는 각 단어당 3회 고정

  // 🔹 7) 현재는 깜지 모드만 사용
  const words = selectedItems.map((item) => item.word);
  TRAINING_CRAM_WORDS = words;
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_TOTAL = 3;
  TRAINING_CRAM_REPEAT_INDEX = 0;

  APP_STATE.totalTarget = words.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;
  APP_STATE.sessionWrongWords = [];

  if (DOM.trainingSummary) {
    DOM.trainingSummary.style.color = "#6b7280";
    DOM.trainingSummary.textContent =
      `깜지 모드: ${words.length}개 단어를 ` +
      `${TRAINING_CRAM_REPEAT_TOTAL}회씩 따라쓰기 합니다.`;
  }

  showView("study");
  showCramQuestion();
  return;
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
   ========== 8. OVERALL STATS / SUMMARY =======
   ============================================ */

function getStats() {
  const raw = safeGet(STORAGE_KEYS.STATS);
  const lang = getCurrentStudyLang();

  if (!raw) {
    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {
        totalReviewed: 0,
        newLearned: 0,
      };
    }

    const byLang = parsed[lang];
    if (byLang && typeof byLang === "object") {
      return {
        totalReviewed: byLang.totalReviewed || 0,
        newLearned: byLang.newLearned || 0,
      };
    }

    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  } catch {
    return {
      totalReviewed: 0,
      newLearned: 0,
    };
  }
}

function saveStats(statsForCurrentLang) {
  const lang = getCurrentStudyLang();
  let base = {};

  const raw = safeGet(STORAGE_KEYS.STATS);
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

  base[lang] = {
    totalReviewed: statsForCurrentLang.totalReviewed || 0,
    newLearned: statsForCurrentLang.newLearned || 0,
  };

  safeSet(STORAGE_KEYS.STATS, JSON.stringify(base));
}

function getEmptyDailySummary(day = nowDay()) {
  return {
    day,
    total: 0,
    newCount: 0,
    reviewCount: 0,
    correct: 0,
    wrong: 0,
    hard: 0,
    normal: 0,
    easy: 0,
    modeCounts: {},
    difficultWords: [],
  };
}

function getDailySummary() {
  const lang = getCurrentStudyLang();
  const today = nowDay();
  const raw = safeGet(STORAGE_KEYS.DAILY_SUMMARY);

  if (!raw) return getEmptyDailySummary(today);

  try {
    const parsed = JSON.parse(raw);
    const byLang = parsed && parsed[lang];
    if (!byLang || byLang.day !== today) {
      return getEmptyDailySummary(today);
    }

    return {
      ...getEmptyDailySummary(today),
      ...byLang,
      day: today,
    };
  } catch {
    return getEmptyDailySummary(today);
  }
}

function saveDailySummary(summary) {
  const lang = getCurrentStudyLang();
  let base = {};
  const raw = safeGet(STORAGE_KEYS.DAILY_SUMMARY);

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

  base[lang] = {
    ...getEmptyDailySummary(summary.day || nowDay()),
    ...summary,
  };
  safeSet(STORAGE_KEYS.DAILY_SUMMARY, JSON.stringify(base));
}

function getSessionModeKey(mode) {
  if (mode === "typing_de") return "typing";
  if (mode === "copy") return "copy";
  if (mode === "card") return "card";
  if (mode === "cram") return "cram";
  if (mode === "word_drop") return "word_drop";
  return "study";
}

function addDailyModeCount(summary, mode, count) {
  const key = getSessionModeKey(mode);
  const amount = Number(count) || 0;
  if (!amount) return;

  summary.modeCounts =
    summary.modeCounts && typeof summary.modeCounts === "object"
      ? summary.modeCounts
      : {};
  summary.modeCounts[key] = (summary.modeCounts[key] || 0) + amount;
}

function addDailyDifficultWords(summary, words) {
  if (!Array.isArray(words) || !words.length) return;

  const current = Array.isArray(summary.difficultWords)
    ? summary.difficultWords.slice()
    : [];
  const seen = new Set(current.map((item) => String(item.id || item.label)));

  words.forEach((word) => {
    if (!word) return;
    const id = String(word.id || getSessionReportWordLabel(word));
    if (!id || seen.has(id)) return;
    const label = getSessionReportWordLabel(word);
    if (!label) return;
    current.push({ id, label });
    seen.add(id);
  });

  summary.difficultWords = current.slice(0, 12);
}

function addCurrentSessionToDailySummary() {
  const summary = getDailySummary();
  if (APP_STATE.sessionSummarySaved) {
    return summary;
  }

  summary.total += APP_STATE.completed || 0;
  summary.newCount += APP_STATE.newCount || 0;
  summary.reviewCount += APP_STATE.reviewCount || 0;
  summary.correct += APP_STATE.sessionCorrectCount || 0;
  summary.wrong += APP_STATE.sessionWrongCount || 0;
  summary.hard += APP_STATE.sessionHardCount || 0;
  summary.normal += APP_STATE.sessionNormalCount || 0;
  summary.easy += APP_STATE.sessionEasyCount || 0;
  addDailyModeCount(summary, APP_STATE.sessionMode, APP_STATE.completed || 0);
  addDailyDifficultWords(summary, APP_STATE.sessionWrongWords || []);

  saveDailySummary(summary);
  APP_STATE.sessionSummarySaved = true;
  return summary;
}

function addTrainingSessionToDailySummary({ mode, total, correct, wrong, words }) {
  const summary = getDailySummary();
  const count = Number(total) || 0;
  summary.total += count;
  summary.reviewCount += count;
  summary.correct += Number(correct) || 0;
  summary.wrong += Number(wrong) || 0;
  addDailyModeCount(summary, mode, count);
  addDailyDifficultWords(summary, words || []);
  saveDailySummary(summary);
  return summary;
}

function getShareStudyLangLabel() {
  const pack = t() || {};
  const code = (SETTINGS.studyLang || "de").toLowerCase();
  const map = {
    de: pack.study_lang_de || "German",
    es: pack.study_lang_es || "Spanish",
    en: pack.study_lang_en || "English",
    fr: pack.study_lang_fr || "French",
    it: pack.study_lang_it || "Italian",
    pt: pack.study_lang_pt || "Portuguese",
    pl: pack.study_lang_pl || "Polish",
    nl: pack.study_lang_nl || "Dutch",
    ru: pack.study_lang_ru || "Russian",
    sv: pack.study_lang_sv || "Swedish",
    ko: pack.study_lang_ko || "Korean",
    ja: pack.study_lang_ja || "Japanese",
    zh: pack.study_lang_zh || "Chinese",
  };
  return map[code] || code.toUpperCase();
}

function getShareModeLabel(mode) {
  if (mode === "word_drop") {
    return trKey("training.mode_word_drop", "Word Drop");
  }
  if (mode === "cram") {
    return trKey("training.mode_cram", "Cram");
  }
  if (mode === "typing") {
    return trKey("typing_mode", "Typing");
  }
  if (mode === "copy") {
    return trKey("copy_mode", "Copy");
  }
  if (mode === "card") {
    return trKey("card_mode", "Cards");
  }
  return trKey("menu.study", "Study");
}

function getTopShareModes(summary) {
  const counts =
    summary && summary.modeCounts && typeof summary.modeCounts === "object"
      ? summary.modeCounts
      : {};
  return Object.entries(counts)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 2)
    .map(([mode]) => getShareModeLabel(mode));
}

function getShareCardData(summary = getDailySummary()) {
  const pack = t() || {};
  const topModes = getTopShareModes(summary);
  const difficultWords = Array.isArray(summary.difficultWords)
    ? summary.difficultWords.slice(0, 3).map((item) => item.label).filter(Boolean)
    : [];
  const total = Number(summary.total) || 0;
  const correct = Number(summary.correct) || 0;
  const accuracy = total > 0 ? `${Math.round((correct / total) * 100)}%` : "0%";
  const streakDays = getLearningStreakDays(summary);

  return {
    title: trKey("summary.share_title", "오늘의 단어 훈련"),
    lang: getShareStudyLangLabel(),
    mode: topModes.length ? topModes.join(" + ") : getShareModeLabel("study"),
    total,
    accuracy,
    streak: streakDays,
    difficultWords,
    difficultTitle: trKey("summary.share_difficult", "어려웠던 단어"),
    noDifficultText: trKey(
      "summary.share_no_difficult",
      "오늘 어려웠던 단어 없음",
    ),
    modeTitle: trKey("summary.share_mode", "주요 모드"),
    totalLabel: pack.summary_total || "학습 단어",
    accuracyLabel: trKey("summary.share_accuracy", "정답률"),
    streakLabel: trKey("summary.share_streak", "연속 학습"),
    tagline: trKey("summary.share_tagline", "Type it. Remember it."),
    date: getLocalDateKey(),
  };
}

function drawShareText(ctx, text, x, y, maxWidth, lineHeight) {
  const raw = String(text || "").trim();
  const words = /\s/.test(raw) ? raw.split(/\s+/) : Array.from(raw);
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const glue = /\s/.test(raw) ? " " : "";
    if (ctx.measureText(word).width > maxWidth) {
      Array.from(word).forEach((ch) => {
        const nextChar = line ? `${line}${ch}` : ch;
        if (ctx.measureText(nextChar).width > maxWidth && line) {
          ctx.fillText(line, x, currentY);
          line = ch;
          currentY += lineHeight;
        } else {
          line = nextChar;
        }
      });
      return;
    }
    const next = line ? `${line}${glue}${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = next;
    }
  });

  if (line) {
    ctx.fillText(line, x, currentY);
  }
  return currentY;
}

function createShareCardDataUrl(summary = getDailySummary()) {
  const data = getShareCardData(summary);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  ctx.fillStyle = "#f5f6f7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#2962FF";
  roundRectPath(ctx, 128, 112, 824, 4, 2);
  ctx.fill();

  ctx.fillStyle = "#111827";
  ctx.font =
    '700 52px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText("KarlLang", 128, 178);

  ctx.fillStyle = "#6b7280";
  ctx.font =
    '500 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(data.date, 128, 226);

  ctx.fillStyle = "#111827";
  ctx.font =
    '800 74px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, data.title, 128, 340, 824, 82);

  ctx.fillStyle = "#eff6ff";
  roundRectPath(ctx, 128, 424, 824, 92, 28);
  ctx.fill();
  ctx.fillStyle = "#2962FF";
  ctx.font =
    '700 34px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, `${data.lang} · ${data.modeTitle}: ${data.mode}`, 168, 480, 744, 40);

  const statY = 650;
  drawShareStat(ctx, 128, statY, data.total, data.totalLabel);
  drawShareStat(ctx, 418, statY, data.accuracy, data.accuracyLabel);
  drawShareStat(ctx, 708, statY, data.streak, data.streakLabel);

  ctx.strokeStyle = "rgba(17, 24, 39, 0.08)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(128, 860);
  ctx.lineTo(952, 860);
  ctx.stroke();

  ctx.fillStyle = "#6b7280";
  ctx.font =
    '700 30px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(data.difficultTitle, 128, 940);

  ctx.fillStyle = "#111827";
  ctx.font =
    '700 42px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const difficult = data.difficultWords.length
    ? data.difficultWords.join(" · ")
    : data.noDifficultText;
  drawShareText(ctx, difficult, 128, 1010, 824, 54);

  ctx.strokeStyle = "rgba(0, 200, 83, 0.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(128, 1142);
  ctx.lineTo(952, 1142);
  ctx.stroke();

  ctx.fillStyle = "#00A846";
  ctx.font =
    '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText(data.tagline, 540, 1204);
  ctx.textAlign = "left";

  return canvas.toDataURL("image/png");
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawShareStat(ctx, x, y, value, label) {
  ctx.fillStyle = "#111827";
  ctx.font =
    '800 72px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(String(value || 0), x, y);
  ctx.fillStyle = "#6b7280";
  ctx.font =
    '600 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, label, x, y + 46, 220, 34);
}

function prepareShareCard(summary = getDailySummary()) {
  const dataUrl = createShareCardDataUrl(summary);
  if (!dataUrl) return;

  SHARE_CARD_CACHE = { dataUrl, summary };
}

function openShareCardModal() {
  if (!DOM.shareCardOverlay || !DOM.shareCardPreview) return;

  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl) return;

  SHARE_CARD_CACHE = SHARE_CARD_CACHE || { dataUrl, summary: getDailySummary() };
  DOM.shareCardPreview.src = dataUrl;
  if (DOM.shareCardNativeBtn) {
    DOM.shareCardNativeBtn.style.display =
      navigator.share && window.File ? "inline-block" : "none";
  }
  DOM.shareCardOverlay.classList.add("active");
}

function closeShareCardModal() {
  if (!DOM.shareCardOverlay) return;
  DOM.shareCardOverlay.classList.remove("active");
}

function canUseNativeImageSaver() {
  return !!(
    isNativePlatform() &&
    NativeImageSaver &&
    typeof NativeImageSaver.saveImage === "function"
  );
}

async function saveShareCardImageNative(dataUrl) {
  if (!canUseNativeImageSaver()) return false;
  await NativeImageSaver.saveImage({
    dataUrl,
    filename: `karllang-${getLocalDateKey()}.png`,
  });
  return true;
}

async function downloadShareCardImage() {
  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl) return;

  if (canUseNativeImageSaver()) {
    try {
      await saveShareCardImageNative(dataUrl);
      showSystemToast(trKey("summary.share_saved", "이미지를 저장했습니다."));
      return;
    } catch (error) {
      console.warn("Native image save failed", error);
      showSystemToast(trKey("summary.share_failed", "공유하지 못했습니다."));
      return;
    }
  }

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `karllang-${getLocalDateKey()}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showSystemToast(trKey("summary.share_saved", "이미지를 저장했습니다."));
}

function dataUrlToBlob(dataUrl) {
  const parts = dataUrl.split(",");
  const mime = (parts[0].match(/:(.*?);/) || [])[1] || "image/png";
  const binary = atob(parts[1] || "");
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mime });
}

async function shareCardImage() {
  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl || !navigator.share || !window.File) {
    downloadShareCardImage();
    return;
  }

  try {
    const file = new File([dataUrlToBlob(dataUrl)], "karllang.png", {
      type: "image/png",
    });
    if (navigator.canShare && !navigator.canShare({ files: [file] })) {
      downloadShareCardImage();
      return;
    }
    await navigator.share({
      title: "KarlLang",
      text: "KarlLang",
      files: [file],
    });
  } catch (error) {
    if (error && error.name === "AbortError") return;
    showSystemToast(trKey("summary.share_failed", "공유하지 못했습니다."));
  }
}

function showEndStats() {
  setPhase("FINISHED");
  logAnalyticsEvent("complete_session", {
    ...getSessionAnalyticsParams(),
    total_count: APP_STATE.completed || 0,
    new_count: APP_STATE.newCount || 0,
    review_count: APP_STATE.reviewCount || 0,
    hard_count: APP_STATE.sessionHardCount || 0,
    normal_count: APP_STATE.sessionNormalCount || 0,
    easy_count: APP_STATE.sessionEasyCount || 0,
    mistake_count: APP_STATE.sessionWrongCount || 0,
  });
  DOM.mainCard.style.display = "none";
  DOM.endStatsArea.style.display = "block";

  const pack = t() || {};
  const dailySummary = addCurrentSessionToDailySummary();
  DOM.endTitle.innerHTML =
    '<span class="end-title-check">✓</span> ' +
    '<span class="end-title-text"></span>';
  const endTitleText = DOM.endTitle.querySelector(".end-title-text");
  if (endTitleText) {
    endTitleText.textContent =
      pack.session_done_title ||
      pack.summary_title ||
      pack.completed_title ||
      "학습 완료";
  }

  if (DOM.endSummaryTitle) {
    DOM.endSummaryTitle.textContent =
      pack.summary_block_title || "오늘 요약";
  }

  const isTypingSession = APP_STATE.sessionMode === "typing_de";
  const countUnit = CURRENT_LANG === "en" ? "" : "개";
  const renderSummaryLine = (el, label, value, valueClass = "") => {
    if (!el) return;
    el.className = "end-line";
    el.style.display = "flex";
    el.innerHTML =
      '<span class="end-line-label"></span>' +
      '<span class="end-line-value"></span>';

    const labelEl = el.querySelector(".end-line-label");
    const valueEl = el.querySelector(".end-line-value");
    if (labelEl) labelEl.textContent = label;
    if (valueEl) {
      valueEl.textContent = String(value) + countUnit;
      if (valueClass) valueEl.classList.add(valueClass);
    }
  };

  renderSummaryLine(
    DOM.endTotal,
    pack.summary_total || pack.total_completed || "학습 단어",
    dailySummary.total,
  );
  renderSummaryLine(
    DOM.endNew,
    pack.summary_new || pack.new_words || "새로 배운 단어",
    dailySummary.newCount,
  );
  renderSummaryLine(
    DOM.endReview,
    pack.summary_review || pack.reviewed_words || "복습 단어",
    dailySummary.reviewCount,
  );

  if (isTypingSession) {
    renderSummaryLine(
      DOM.endCorrect,
      pack.summary_correct || "정답",
      dailySummary.correct || 0,
    );

    renderSummaryLine(
      DOM.endWrong,
      pack.summary_wrong || "오답",
      dailySummary.wrong || 0,
    );

    if (DOM.endEasy) {
      DOM.endEasy.style.display = "none";
      DOM.endEasy.textContent = "";
    }
  } else {
    renderSummaryLine(
      DOM.endCorrect,
      pack.hard || "어려움",
      dailySummary.hard || 0,
      "end-value-hard",
    );

    renderSummaryLine(
      DOM.endWrong,
      pack.normal || "보통",
      dailySummary.normal || 0,
      "end-value-normal",
    );

    renderSummaryLine(
      DOM.endEasy,
      pack.easy || "쉬움",
      dailySummary.easy || 0,
      "end-value-easy",
    );
  }

  const wrongWords = APP_STATE.sessionWrongWords || [];
  if (DOM.endWrongWordsBlock && DOM.endWrongWordsList) {
    DOM.endWrongWordsList.innerHTML = "";
    if (wrongWords.length > 0) {
      DOM.endWrongWordsBlock.style.display = "block";
      if (DOM.endWrongWordsTitle) {
        DOM.endWrongWordsTitle.textContent =
          pack.summary_wrong_words_title ||
          "어려웠던 단어";
      }

      const visibleWrongWords = wrongWords.slice(0, 5);
      visibleWrongWords.forEach((word) => {
        const li = document.createElement("li");
        li.textContent = getSessionReportWordLabel(word);
        DOM.endWrongWordsList.appendChild(li);
      });

      if (wrongWords.length > visibleWrongWords.length) {
        const li = document.createElement("li");
        li.className = "end-word-more";
        const remainingCount = wrongWords.length - visibleWrongWords.length;
        li.textContent = trKey("common_list_more", "...외 {n}개").replace(
          "{n}",
          String(remainingCount),
        );
        DOM.endWrongWordsList.appendChild(li);
      }
    } else {
      DOM.endWrongWordsBlock.style.display = "none";
    }
  }

  if (DOM.trainWrongBtn) {
    DOM.trainWrongBtn.textContent =
      pack.train_wrong_words || "어려운 단어 연습";
    DOM.trainWrongBtn.style.display =
      wrongWords.length > 0 ? "inline-block" : "none";
  }

  prepareShareCard(dailySummary);

  DOM.restartBtn.textContent = pack.restart || "다시 시작";

  updateCefrProgress();
}

function restoreWrongPracticeMode() {
  if (WRONG_PRACTICE_PREVIOUS_MODE) {
    SETTINGS.mode = WRONG_PRACTICE_PREVIOUS_MODE;
    WRONG_PRACTICE_PREVIOUS_MODE = null;
    hydrateSettingsToUI();
    applyTranslations();
  }
  WRONG_PRACTICE_ACTIVE = false;
}

function finishWrongPractice() {
  const returnView = WRONG_PRACTICE_RETURN_VIEW || "study";
  WRONG_PRACTICE_RETURN_VIEW = "study";
  restoreWrongPracticeMode();
  clearStudyWordSetCache();

  if (returnView === "study") {
    showView("study");
    setPhase("FINISHED");
    if (DOM.mainCard) {
      DOM.mainCard.style.display = "none";
    }
    if (DOM.endStatsArea) {
      DOM.endStatsArea.style.display = "block";
    }
    return;
  }

  showReadyState();
  showView(returnView);
}

function advanceWrongPracticeStep() {
  if (!WRONG_PRACTICE_ACTIVE) return;

  if (APP_STATE.queue && APP_STATE.queue.length > 0) {
    APP_STATE.queue.shift();
  }
  APP_STATE.completed = (APP_STATE.completed || 0) + 1;

  if (!APP_STATE.queue || APP_STATE.queue.length === 0) {
    finishWrongPractice();
    return;
  }

  updateProgressBar();
  showNextQuestion();
}

function startWrongWordsTraining(returnView = "study") {
  const words = APP_STATE.sessionWrongWords || [];
  if (!words.length) return;
  const safeReturnView =
    typeof returnView === "string" &&
    ["study", "training", "wordDrop"].includes(returnView)
      ? returnView
      : "study";

  TRAINING_MODE_ACTIVE = false;
  TRAINING_MODE_KIND = "none";
  TRAINING_MIX_WORDS = [];
  TRAINING_MIX_INDEX = 0;
  TRAINING_MIX_STEP = 0;
  TRAINING_CRAM_WORDS = [];
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_INDEX = 0;

  WRONG_PRACTICE_ACTIVE = true;
  WRONG_PRACTICE_PREVIOUS_MODE = SETTINGS.mode;
  WRONG_PRACTICE_RETURN_VIEW = safeReturnView;

  SETTINGS.mode = "copy";
  hydrateSettingsToUI();
  applyTranslations();

  APP_STATE.queue = words.map((word) => {
    const state = getWordState(word);
    return {
      word,
      state,
      isNew: !!state.isNew,
    };
  });
  APP_STATE.currentCard = null;
  APP_STATE.totalTarget = APP_STATE.queue.length;
  APP_STATE.completed = 0;
  APP_STATE.newCount = 0;
  APP_STATE.reviewCount = 0;

  showView("study");
  showNextQuestion();
}

function belongsToCurrentStudyLang(word) {
  if (!word) return false;
  const study = SETTINGS.studyLang || "de";

  // 새 스키마: 독일어면 lemma 있는지 확인
  if (study === "de") {
    return !!word.lemma;
  }

  // 다른 언어: meanings에 해당 언어 있는지 확인
  return !!(word.meanings && word.meanings[study]);
}

/* ============================================
   ========== 9. CEFR PROGRESS / WORDBOOK ======
   ============================================ */

function updateCefrProgress() {
  if (!DOM.cefrBars || !DOM.cefrCounts) return;

  const allWordsRaw = getAllWords();
  const allWords = allWordsRaw.filter(belongsToCurrentStudyLang);

  const levels = ["A1", "A2", "B1", "B2"];

  const total = {};
  const done = {};
  levels.forEach((lvl) => {
    total[lvl] = 0;
    done[lvl] = 0;
  });

  allWords.forEach((w) => {
    const rawLevel = (w.cefr || "").toString().trim().toUpperCase();

    if (!levels.includes(rawLevel)) return;

    total[rawLevel] += 1;

    const st = getWordState(w);
    if (st.level > 0) {
      done[rawLevel] += 1;
    }
  });

  levels.forEach((lvl) => {
    const bar = DOM.cefrBars[lvl];
    const label = DOM.cefrCounts[lvl];
    if (!bar || !label) return;

    const tTotal = total[lvl] || 0;
    const tDone = done[lvl] || 0;
    const percent = tTotal > 0 ? Math.round((tDone / tTotal) * 100) : 0;

    bar.style.width = tTotal > 0 ? `${percent}%` : "0%";
    label.textContent = `${tDone}/${tTotal} (${percent}%)`;
  });
}

function formatHardCountLabel(hard) {
  if (!hard || hard <= 0) return "";

  const pack = t() || {};
  const lang = CURRENT_LANG || "ko";

  const key = `mistakes_hard_${lang}`;
  if (pack[key]) {
    return pack[key].replace("{n}", hard);
  }

  switch (lang) {
    case "ko":
      return `어려움 ${hard}회`;
    case "en":
      return `hard ${hard} times`;
    case "de":
      return `schwierig ${hard}-mal`;
    case "es":
      return `difícil ${hard} veces`;
    case "fr":
      return `difficile ${hard} fois`;
    case "it":
      return `difficile ${hard} volte`;
    case "pt":
      return `difícil ${hard} vezes`;
    case "ja":
      return `難しい ${hard} 回`;
    case "zh":
      return `困难 ${hard} 次`;
    case "ru":
      return `сложно ${hard} раз`;
    default: {
      const fallback = pack.mistakes_hard_en || "hard {n} times";
      return fallback.replace("{n}", hard);
    }
  }
}

function formatWrongLabel(wrong) {
  if (!wrong || wrong <= 0) return "";

  const pack = t() || {};
  const lang = CURRENT_LANG || "ko";

  const key = `mistakes_wrong_${lang}`;
  if (pack[key]) {
    return pack[key].replace("{n}", wrong);
  }

  switch (lang) {
    case "ko":
      return `오답 ${wrong}회`;
    case "en":
      return `wrong ${wrong} times`;
    case "de":
      return `Fehler ${wrong}-mal`;
    case "es":
      return `error ${wrong} veces`;
    case "fr":
      return `faux ${wrong} fois`;
    case "it":
      return `errore ${wrong} volte`;
    case "pt":
      return `erro ${wrong} vezes`;
    case "ja":
      return `間違い ${wrong} 回`;
    case "zh":
      return `错误 ${wrong} 次`;
    case "ru":
      return `ошибка ${wrong} раз`;
    default: {
      const fallback = pack.mistakes_wrong_en || "wrong {n} times";
      return fallback.replace("{n}", wrong);
    }
  }
}

function createWordListItem(word, stats, context) {
  const item = document.createElement("div");
  item.className = "wordbook-item";

  const left = document.createElement("div");
  left.className = "wordbook-main";

  const german = buildGermanForm(word);
  const meaning = getMeaning(word) || "";
  const cefrShort = (word.cefr || "?").toUpperCase(); // A1, A2 …
  const hard = stats.hardCount || 0;

  let metaHtml = "";

  if (context === "mistakes") {
    const wrong = stats.wrongAttempts || 0;

    const hardLabel = formatHardCountLabel(hard);
    const wrongLabel = formatWrongLabel(wrong);

    const labels = [];
    if (hardLabel) labels.push(hardLabel);
    if (wrongLabel) labels.push(wrongLabel);

    // 🔹 1줄: 뜻 / A1
    // 🔹 2줄: 어려움 n회 오답 n회   (언어별 라벨은 그대로 사용)
    const line1 = `${meaning}${meaning ? ", " : ""}${cefrShort}`;

    let line2 = "";
    if (labels.length > 0) {
      // 예: "어려움 3회 · 오답 2회" 또는 "hard 3 times · wrong 2 times"
      line2 = labels.join(" · ");
    }

    if (line2) {
      metaHtml =
        `<div class="wordbook-meta-line1">${line1}</div>` +
        `<div class="wordbook-meta-line2">${line2}</div>`;
    } else {
      metaHtml = `<div class="wordbook-meta-line1">${line1}</div>`;
    }
  } else {
    // 북마크 / 검색: 예전처럼 한 줄로만
    metaHtml = `${meaning}, ${cefrShort}`;
  }

  left.innerHTML =
    `<div class="wordbook-word">${german}</div>` +
    `<div class="wordbook-meta">${metaHtml}</div>`;

  const right = document.createElement("div");
  right.className = "wordbook-right";

  const speakBtn = document.createElement("button");
  speakBtn.type = "button";
  speakBtn.className = "icon-btn speaker-icon";
  speakBtn.setAttribute("aria-label", "발음 듣기");
  speakBtn.addEventListener("click", () => {
    speakGerman(german);
  });
  // 렌더 시점에도 현재 TTS 가능 여부 반영
  {
    const soundOn = SETTINGS.soundEnabled !== false;
    const canClick = soundOn && (hasNativeTtsSupport() || TTS_SUPPORTED);
    speakBtn.disabled = !canClick;
    speakBtn.classList.toggle("tts-disabled", !canClick);
  }

  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.type = "button";
  bookmarkBtn.className = "icon-btn bookmark-btn";
  bookmarkBtn.textContent = stats.bookmarked ? "★" : "☆";
  bookmarkBtn.addEventListener("click", () => {
    if (typeof triggerHaptic === "function") {
      triggerHaptic("light");
    }

    toggleBookmark(String(word.id));
    const newStats = getWordStatsById(String(word.id));
    bookmarkBtn.textContent = newStats.bookmarked ? "★" : "☆";
  });

  const infoBtn = document.createElement("button");
  infoBtn.type = "button";
  infoBtn.className = "icon-btn info-icon";
  infoBtn.textContent = "i";
  infoBtn.setAttribute("aria-label", "자세히 보기");
  infoBtn.addEventListener("click", () => {
    openWordDetail(word);
  });

  right.appendChild(speakBtn);
  right.appendChild(infoBtn);
  right.appendChild(bookmarkBtn);

  item.appendChild(left);
  item.appendChild(right);

  return item;
}

function renderMistakes() {
  const container = DOM.wordbookList;
  if (!container) return;

  const allStats = getWordStatsAll();
  const entries = Object.entries(allStats).filter(([, s]) => {
    const hard = s.hardCount || 0;
    const wrong = s.wrongAttempts || 0;
    return hard > 0 || wrong > 0;
  });

  const allWords = getAllWords();
  const mapById = {};
  allWords.forEach((w) => {
    mapById[String(w.id)] = w;
  });

  container.innerHTML = "";

  const pack = t() || {};

  if (entries.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      (pack.mistakes_empty || "틀린 단어가 아직 없습니다.") +
      "</p>";
    return;
  }

  // ✅ 많이 틀린 순으로 정렬
  entries.sort(([, a], [, b]) => {
    const scoreA = (a.hardCount || 0) + (a.wrongAttempts || 0);
    const scoreB = (b.hardCount || 0) + (b.wrongAttempts || 0);
    return scoreB - scoreA;
  });

  // ✅ 상위 50개만 보여주기 (스크롤 지옥 방지)
  const MAX_MISTAKES_VIEW = 50;
  const limitedEntries = entries.slice(0, MAX_MISTAKES_VIEW);
  const hiddenCount = Math.max(0, entries.length - MAX_MISTAKES_VIEW);

  // 리스트 렌더링
  limitedEntries.forEach(([id, stats]) => {
    const word = mapById[id];
    if (!word) return;

    const item = createWordListItem(word, stats, "mistakes");
    container.appendChild(item);
  });

  // ✅ 잘린 개수가 있으면 맨 아래 안내 문구 (번역팩 연동 버전)
  if (hiddenCount > 0) {
    const li = document.createElement("li");
    li.className = "list-limit-msg";

    // 1. 번역팩에서 문구 가져오기 (없으면 영어 기본값)
    let msg = trKey("common_list_more", "...and {n} more");

    // 2. {n}을 실제 숫자로 치환
    msg = msg.replace("{n}", hiddenCount);

    li.textContent = msg;
    container.appendChild(li);
  }

  updateTtsUiState();
}

function renderBookmarks() {
  const container = DOM.bookmarkList;
  if (!container) return;

  const allStats = getWordStatsAll();
  const entries = Object.entries(allStats).filter(([, s]) => !!s.bookmarked);

  const allWords = getAllWords();
  const mapById = {};
  allWords.forEach((w) => {
    mapById[String(w.id)] = w;
  });

  container.innerHTML = "";

  const pack = t() || {};

  if (entries.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      (pack.bookmark_empty || "북마크한 단어가 아직 없습니다.") +
      "</p>";
    return;
  }

  entries.sort(([, a], [, b]) => {
    const la = a.level || 0;
    const lb = b.level || 0;
    return lb - la;
  });

  entries.forEach(([id, stats]) => {
    const word = mapById[id];
    if (!word) return;

    const item = createWordListItem(word, stats, "bookmark");
    container.appendChild(item);
  });

  updateTtsUiState();
}

function renderWordbookIfNeeded() {
  if (APP_STATE.currentView === "mistakes") {
    renderMistakes();
  } else if (APP_STATE.currentView === "bookmark") {
    renderBookmarks();
  }
}

/* ============================================
   ========== 10. SEARCH ENGINE ===============
   ============================================ */

function handleSearch() {
  if (!DOM.searchInput || !DOM.searchResults) return;

  const rawMode = DOM.searchMode ? DOM.searchMode.value : "ui";
  const container = DOM.searchResults;
  const query = DOM.searchInput.value.trim().toLowerCase();

  container.innerHTML = "";

  if (!query) {
    container.innerHTML =
      '<p class="empty-text">' +
      trKey("search.empty", "검색어를 입력해 주세요.") +
      "</p>";
    return;
  }

  const uiLang = CURRENT_LANG || "ko";
  const studyLang = SETTINGS.studyLang || "de";

  let mode;
  if (rawMode === "ui" || rawMode === "study") {
    mode = rawMode;
  } else if (rawMode === "ko") {
    mode = "ui";
  } else if (rawMode === "de") {
    mode = "study";
  } else {
    mode = "ui";
  }

  const allWords = getAllWords();

  const results = allWords.filter((w) => {
    if (mode === "ui") {
      // ✅ UI 언어 기준: lemma + 해당 UI 언어 뜻만 검색
      const uiLang = SETTINGS.uiLang || "ko";

      let meaningText = "";
      if (w.meanings && typeof w.meanings === "object") {
        // 우선 UI 언어
        meaningText =
          w.meanings[uiLang] ||
          w.meanings.en || // 영어 fallback
          w.meanings.ko || // 한국어 fallback
          "";
      }

      const targets = ((w.lemma || "") + " " + meaningText).toLowerCase();

      return targets.includes(query);
    } else {
      // study 모드: 학습 언어 표제어(lemma) 기준 검색
      const text = (w.lemma || "").toLowerCase();
      if (!text) return false;
      return text.includes(query);
    }
  });

  if (results.length === 0) {
    container.innerHTML =
      '<p class="empty-text">' +
      trKey("search.no_result", "검색 결과가 없습니다.") +
      "</p>";
    return;
  }

  const allStats = getWordStatsAll();
  results.forEach((word) => {
    const stats = allStats[String(word.id)] || {
      hardCount: 0,
      bookmarked: false,
      level: 0,
    };
    const item = createWordListItem(word, stats, "search");
    container.appendChild(item);
  });

  updateTtsUiState();
}

function clearSearchView() {
  if (!DOM.searchInput || !DOM.searchResults) return;

  DOM.searchInput.value = "";
  DOM.searchResults.innerHTML =
    '<p class="empty-text">' +
    trKey("search.empty", "검색어를 입력해 주세요.") +
    "</p>";
}

/* ============================================
   ========== 11. NAVIGATION / VIEWS ==========
   ============================================ */

function getBottomNavView(view) {
  if (view === "wordDrop") {
    return "training";
  }
  if (view === "mistakes" || view === "bookmark" || view === "search") {
    return "words";
  }
  return view;
}

function getAppHeaderTitle(view) {
  if (
    view === "study" &&
    TRAINING_MODE_ACTIVE &&
    TRAINING_MODE_KIND === "cram"
  ) {
    return trKey("training.mode_cram", getTrainingModeFallback("cram"));
  }

  const titles = {
    study: trKey("menu.study", "학습"),
    user: trKey("user.title", "홈"),
    training: trKey("training.title", "훈련소"),
    wordDrop: trKey(
      "training.mode_word_drop",
      getTrainingModeFallback("word_drop"),
    ),
    words: trKey("word_hub.title", "단어"),
    mistakes: trKey("mistakes.title", "틀린 단어"),
    bookmark: trKey("bookmark.title", "북마크"),
    search: trKey("search.title", "단어 검색"),
    settings: trKey("settings.title", "설정"),
  };

  return titles[view] || titles.study;
}

function updateAppHeader(view = APP_STATE.currentView) {
  if (!DOM.appHeaderTitle) return;
  DOM.appHeaderTitle.textContent = getAppHeaderTitle(view);
}

function updateBottomNavActive(view) {
  if (!DOM.bottomTabs || !DOM.bottomTabs.length) return;
  const activeView = getBottomNavView(view);
  DOM.bottomTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === activeView);
  });
}

function goToStudyFromNav() {
  const prevView = APP_STATE.currentView;
  stopWordDrop();

  TRAINING_MODE_ACTIVE = false;
  TRAINING_MODE_KIND = "none";
  TRAINING_MIX_WORDS = [];
  TRAINING_MIX_INDEX = 0;
  TRAINING_MIX_STEP = 0;

  TRAINING_CRAM_WORDS = [];
  TRAINING_CRAM_INDEX = 0;
  TRAINING_CRAM_REPEAT_INDEX = 0;
  TRAINING_CRAM_REPEAT_TOTAL = 3;

  if (prevView !== "user") {
    clearStudyWordSetCache();
  }

  showView("study");
  showReadyState();
}

function showView(view) {
  const prevView = APP_STATE.currentView; // 🔹 이전 뷰 기억
  APP_STATE.currentView = view;
  document.body.classList.toggle("word-drop-active", view === "wordDrop");
  document.body.classList.toggle(
    "training-cram-active",
    view === "study" &&
      TRAINING_MODE_ACTIVE &&
      TRAINING_MODE_KIND === "cram",
  );
  updateKeyboardModeChrome();
  syncAppViewportHeight();
  updateAppHeader(view);
  updateBottomNavActive(view);

  if (prevView === "wordDrop" && view !== "wordDrop") {
    stopWordDrop();
  }

  // 🔹 검색 뷰에서 나갈 때 검색 상태 초기화
  if (prevView === "search" && view !== "search") {
    clearSearchView();
  }

  const views = {
    study: DOM.studyView,
    user: DOM.userView,
    training: DOM.trainingView,
    wordDrop: DOM.wordDropView,
    words: DOM.wordHubView,
    mistakes: DOM.vocabView,
    bookmark: DOM.bookmarkView,
    search: DOM.searchView,
    settings: DOM.settingsView,
  };

  let targetEl = null;

  // 1) 전부 숨기고, 해당 view만 보이게
  Object.keys(views).forEach((key) => {
    const el = views[key];
    if (!el) return;

    if (key === view) {
      el.style.display = "block";
      el.classList.remove("active");
      targetEl = el;
    } else {
      el.classList.remove("active");
      el.style.display = "none";
    }
  });

  // 2) 해당 뷰 표시
  if (targetEl) {
    requestAnimationFrame(() => {
      targetEl.classList.add("active");
    });
  }

  // 3) 기존 후처리 로직 그대로 유지
  if (view === "study") {
    updateProgressBar();
  } else if (view === "user") {
    renderAttendance();
    updateCefrProgress();
  } else if (view === "mistakes") {
    renderMistakes();

    // 🔧 틀린 단어 리스트 스크롤 맨 위로
    if (DOM.vocabView) {
      const list = DOM.vocabView.querySelector(".wordbook-list");
      if (list) list.scrollTop = 0;
    }
  } else if (view === "bookmark") {
    renderBookmarks();

    // 🔧 북마크 리스트 스크롤 맨 위로
    if (DOM.bookmarkView) {
      const list = DOM.bookmarkView.querySelector(".wordbook-list");
      if (list) list.scrollTop = 0;
    }
  } else if (view === "search") {
    handleSearch();
  } else if (view === "training") {
    updateTrainingSummaryPreview();
  } else if (view === "wordDrop") {
    syncAppViewportHeight();
    if (!WORD_DROP_STATE.pendingStart) {
      focusWordDropInput();
    }
  }
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

      // 🔹 판 갈아엎는 행위 → 세트 리셋
      clearStudyWordSetCache();

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

      // 🔹 마찬가지로 세트 리셋
      clearStudyWordSetCache();

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

      // 🔹 다른 레벨 공부하겠다는 뜻 → 세트 리셋
      clearStudyWordSetCache();

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

      // 🔹 다른 카테고리 → 세트 리셋
      clearStudyWordSetCache();

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
