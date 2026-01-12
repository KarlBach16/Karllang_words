// KarlLang v10 - typing/card/copy modes, CEFR progress, search, TTS/bookmark

// ============================================
// ========== 0. DATA LAYER (NEW SCHEMA) ======
// ============================================

const WORDS_DE_A1_SAFE = typeof WORDS_DE_A1 !== "undefined" ? WORDS_DE_A1 : [];
const WORDS_DE_A2_SAFE = typeof WORDS_DE_A2 !== "undefined" ? WORDS_DE_A2 : [];
const WORDS_DE_B1_SAFE = typeof WORDS_DE_B1 !== "undefined" ? WORDS_DE_B1 : [];

const ALL_WORDS_DE = [
  ...WORDS_DE_A1_SAFE,
  ...WORDS_DE_A2_SAFE,
  ...WORDS_DE_B1_SAFE
];

/* ============================================
   ========== 1. GLOBAL CONSTANTS & STATE ======
   ============================================ */

const STORAGE_KEYS = {
    SETTINGS: "karllang_settings_v3",
    SRS_PREFIX: "karllang_word_",          // 여기는 그대로 두고
    STATS: "karllang_stats_v4",            // ✅ 언어별 통계용 새 버전
    WORD_STATS: "karllang_word_stats_v4"   // ✅ 언어별 북마크/틀린단어용 새 버전
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
                html += `<span class="ghost-char ghost-hidden">${escapeHtml(ch)}</span>`;
            }
        }
    }

    return html;
}

function getCurrentStudyLang() {
    return (SETTINGS.studyLang || "de").toLowerCase();
}
// 🔢 지금 사용하는 단어 세트 버전
// 괴테 A1 50개 1차 버전 → v1
const DATA_VERSION = "goethe_a1_full_v1";

const DEFAULT_SETTINGS = {
    mode: "typing_de",
    goalTyping: 5,
    goalCard: 5,
    newWordCefr: "all",
    uiLang: "ko",
    studyLang: "de",
    soundEnabled: true,
    newWordCategory: "all",
    dataVersion: DATA_VERSION
};
// ✅ v1: 학습 언어는 독일어(de)만 노출/허용
const ENABLE_MULTI_STUDY_LANG = false;
const ALLOWED_STUDY_LANGS = ENABLE_MULTI_STUDY_LANG ? ["de", "en", "ko"] : ["de"];

function sanitizeStudyLang() {
    const lang = (SETTINGS.studyLang || "de").toLowerCase();
    if (!ALLOWED_STUDY_LANGS.includes(lang)) {
        SETTINGS.studyLang = "de";
        // 저장값까지 즉시 정리 (다음 실행 때도 유지되도록)
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
    currentView: "study"
};

let SETTINGS = { ...DEFAULT_SETTINGS };
let CURRENT_LANG = "ko";
// 🔹 훈련소 모드 활성화 여부 (정규 학습 vs 훈련소 구분용)
let TRAINING_MODE_ACTIVE = false;
let TRAINING_MODE_KIND = "none";   // "typing" | "copy" | "mix"
let TRAINING_MIX_WORDS = [];       // Mix 모드에서 쓸 단어 리스트
let TRAINING_MIX_INDEX = 0;        // 현재 몇 번째 단어인지
let TRAINING_MIX_STEP = 0;         // 0=카드, 1=카피, 2=타이핑

// 🔹 깜지(반복 따라쓰기) 모드 상태
let TRAINING_CRAM_WORDS = [];       // 깜지 대상 단어 리스트
let TRAINING_CRAM_INDEX = 0;        // 현재 몇 번째 단어인지 (단어 기준)
let TRAINING_CRAM_REPEAT_TOTAL = 3; // 이 단어를 몇 번 쓸 건지 (1/3/5)
let TRAINING_CRAM_REPEAT_INDEX = 0; // 현재 몇 회째인지 (0-based)

const DOM = {};

// ===== UI 언어 메타 정보 =====
const LANG_META = {
    ko: { name_local: "한국어",   name_en: "Korean" },
    en: { name_local: "English", name_en: "English" },
    de: { name_local: "Deutsch", name_en: "German" },
    es: { name_local: "Español", name_en: "Spanish" },
    fr: { name_local: "Français", name_en: "French" },
    it: { name_local: "Italiano", name_en: "Italian" },
    pt: { name_local: "Português", name_en: "Portuguese" },
    ja: { name_local: "日本語",   name_en: "Japanese" },
    zh: { name_local: "中文",     name_en: "Chinese" },
    ru: { name_local: "Русский", name_en: "Russian" }
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
                ja: "일본어",
                zh: "중국어",
                ru: "러시아어"
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
                ja: "Japanese",
                zh: "Chinese",
                ru: "Russian"
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
                ja: "Japanisch",
                zh: "Chinesisch",
                ru: "Russisch"
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
                ja: "japonés",
                zh: "chino",
                ru: "ruso"
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
                ja: "japonais",
                zh: "chinois",
                ru: "russe"
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
                ja: "giapponese",
                zh: "cinese",
                ru: "russo"
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
                ja: "japonês",
                zh: "chinês",
                ru: "russo"
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
                ja: "日本語",
                zh: "中国語",
                ru: "ロシア語"
            };
            return map[code] || fallback();
        }

        case "zh": { // 간체 기준
            const map = {
                ko: "韩语",
                en: "英语",
                de: "德语",
                es: "西班牙语",
                fr: "法语",
                it: "意大利语",
                pt: "葡萄牙语",
                ja: "日语",
                zh: "中文",
                ru: "俄语"
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
                ja: "японский",
                zh: "китайский",
                ru: "русский"
            };
            return map[code] || fallback();
        }

        default:
            return fallback();
    }
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

/* ============================================
   ========== 2. DOM CACHE / ELEMENTS ==========
   ============================================ */

function cacheDOM() {
    // 시작 화면
    DOM.startScreen = document.getElementById("startScreen");
    DOM.startUiLang = document.getElementById("startUiLang");
    DOM.startStudyLang = document.getElementById("startStudyLang");
    DOM.startAppBtn = document.getElementById("startAppBtn");
    DOM.startTagline = document.querySelector(".tagline");
    DOM.startUiLabel = document.querySelector("label[for='startUiLang']");
    DOM.startStudyLabel = document.querySelector("label[for='startStudyLang']");

    // 메인 래퍼
    DOM.app = document.getElementById("app");
    DOM.appTitle = document.getElementById("appTitle");

    // 헤더 & 메뉴
    DOM.menuToggle = document.getElementById("menuToggle");
    DOM.sideMenu = document.getElementById("sideMenu");
    DOM.sideMenuOverlay = document.getElementById("sideMenuOverlay");
    DOM.navUser = document.getElementById("navUser");
    DOM.navStudy = document.getElementById("navStudy");
    DOM.navTraining = document.getElementById("navTraining");
    DOM.navVocab = document.getElementById("navVocab");
    DOM.navSearch = document.getElementById("navSearch");
    DOM.navSettings = document.getElementById("navSettings");

    // 뷰
    DOM.studyView = document.getElementById("studyView");
    DOM.userView = document.getElementById("userView");
    DOM.trainingView = document.getElementById("trainingView");
    DOM.vocabView = document.getElementById("vocabView");
    DOM.searchView = document.getElementById("searchView");
    DOM.settingsView = document.getElementById("settingsView");

    // 학습 진행
    DOM.progressBar = document.getElementById("progressBar");
    DOM.progressText = document.getElementById("progress");
    DOM.mainCard = document.getElementById("mainCard");
    DOM.studySummaryText = document.getElementById("studySummaryText");
    DOM.questionDisplay = document.getElementById("questionDisplay");
    DOM.hintDisplay = document.getElementById("hintDisplay");
    DOM.inputArea = document.getElementById("inputArea");
    DOM.answerInput = document.getElementById("answerInput");
    DOM.copyGhost = document.getElementById("copyGhost");
    DOM.feedback = document.getElementById("feedback");
    DOM.mainBtn = document.getElementById("mainBtn");
    DOM.skipBtn = document.getElementById("skipBtn");
    DOM.ratingArea = document.getElementById("ratingArea");
    DOM.ratingButtons = document.querySelectorAll(".btn-rating");
    DOM.masteryMainBtn = document.getElementById("masteryMainBtn")

    // 통계
    DOM.endStatsArea = document.getElementById("endStatsArea");
    DOM.endTitle = document.getElementById("endTitle");
    DOM.endTotal = document.getElementById("endTotal");
    DOM.endNew = document.getElementById("endNew");
    DOM.endReview = document.getElementById("endReview");
    DOM.restartBtn = document.getElementById("restartBtn");

    // 사용자 설정
    DOM.modeSelect = document.getElementById("modeSelect");
    DOM.goalSelectTyping = document.getElementById("goalSelectTyping");
    DOM.goalSelectCard = document.getElementById("goalSelectCard");
    DOM.newWordCefrSelect = document.getElementById("newWordCefrSelect");
    DOM.newWordCategoryLabel = document.getElementById("newWordCategoryLabel");
    DOM.newWordCategorySelect = document.getElementById("newWordCategorySelect");

    // CEFR 진행도
    DOM.cefrBars = {
        A1: document.getElementById("cefrBarA1"),
        A2: document.getElementById("cefrBarA2"),
        B1: document.getElementById("cefrBarB1"),
        B2: document.getElementById("cefrBarB2"),
        C1: document.getElementById("cefrBarC1"),
        C2: document.getElementById("cefrBarC2")
    };
    DOM.cefrCounts = {
        A1: document.getElementById("cefrCountA1"),
        A2: document.getElementById("cefrCountA2"),
        B1: document.getElementById("cefrCountB1"),
        B2: document.getElementById("cefrCountB2"),
        C1: document.getElementById("cefrCountC1"),
        C2: document.getElementById("cefrCountC2")
    };

    // 단어장
    DOM.wordbookList = document.getElementById("wordbookList");
    DOM.wordbookDesc = document.querySelector("#vocabView .section-description");

    // 북마크 뷰
    DOM.bookmarkView = document.getElementById("bookmarkView");
    DOM.bookmarkList = document.getElementById("bookmarkList");
    DOM.bookmarkViewTitle = document.querySelector("#bookmarkView .view-title");
    DOM.bookmarkDesc = document.querySelector("#bookmarkView .section-description");

    // 사이드 메뉴 - 북마크
    DOM.navBookmark = document.getElementById("navBookmark");

    // 검색
    DOM.searchMode = document.getElementById("searchMode");
    DOM.searchInput = document.getElementById("searchInput");
    DOM.searchResults = document.getElementById("searchResults");
    DOM.searchLabel = document.querySelector("label[for='searchMode']");

    // 설정 뷰
    DOM.settingsUiLang = document.getElementById("settingsUiLang");
    DOM.settingsStudyLang = document.getElementById("settingsStudyLang");
    DOM.soundToggle = document.getElementById("soundToggle");
    DOM.soundToggleLabel = document.getElementById("soundToggleLabel");

    // 사용자 뷰 제목/라벨
    DOM.userViewTitle = document.querySelector("#userView .view-title");
    DOM.userSettingsTitle = document.getElementById("userSettingsTitle");
    DOM.userCefrTitle = document.getElementById("userCefrTitle");

    DOM.modeLabel = document.querySelector("label[for='modeSelect']");
    DOM.goalTypingLabel = document.querySelector("label[for='goalSelectTyping']");
    DOM.goalCardLabel = document.querySelector("label[for='goalSelectCard']");
    DOM.newWordCefrLabel = document.querySelector("label[for='newWordCefrSelect']");
    DOM.newWordCategoryLabel = document.querySelector("label[for='newWordCategorySelect']");

    DOM.vocabViewTitle = document.querySelector("#vocabView .view-title");
    DOM.trainingViewTitle = document.querySelector("#trainingView .view-title");
    DOM.trainingDesc      = document.querySelector("#trainingView .section-description");
    DOM.trainingTargetLabel = document.getElementById("trainingTargetLabel");
    DOM.trainingModeLabel   = document.querySelector("label[for='trainingModeSelect']");
    DOM.trainingCountLabel  = document.querySelector("label[for='trainingCountSelect']");
    DOM.searchViewTitle = document.querySelector("#searchView .view-title");
    DOM.searchViewDesc = document.querySelector("#searchView .section-description");
    DOM.settingsViewTitle = document.querySelector("#settingsView .view-title");
    DOM.settingsUiLangLabel = document.querySelector("label[for='settingsUiLang']");
    DOM.settingsStudyLangLabel = document.querySelector("label[for='settingsStudyLang']");
    DOM.detailOverlay = document.getElementById("wordDetailOverlay");
    DOM.detailTitle   = document.getElementById("detailTitle");
    DOM.detailPos     = document.getElementById("detailPos");
    DOM.detailMeaning = document.getElementById("detailMeaning");
    DOM.detailExtra   = document.getElementById("detailExtra");
    DOM.detailExtraRow = document.getElementById("detailExtraRow");
    DOM.trainingSourceMistakes = document.getElementById("trainingSourceMistakes");
    DOM.trainingSourceHard = document.getElementById("trainingSourceHard");
    DOM.trainingSourceBookmark = document.getElementById("trainingSourceBookmark");
    DOM.trainingModeSelect = document.getElementById("trainingModeSelect");
    DOM.trainingCountSelect = document.getElementById("trainingCountSelect");
    DOM.trainingStartBtn = document.getElementById("trainingStartBtn");
    DOM.trainingSummary = document.getElementById("trainingSummary");
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
//학습 진도 초기화용
function resetKarlLangData() {
  Object.keys(localStorage)
    .filter(key => key.toLowerCase().includes('karllang'))
    .forEach(key => localStorage.removeItem(key));
  location.reload();
}

function detectInitialUiLang() {
    if (typeof navigator === "undefined") {
        return "en"; // 브라우저 아닌 환경 대비 안전장치
    }

    const navLang = (navigator.language || navigator.userLanguage || "en")
        .toLowerCase();

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
    const raw = safeGet(STORAGE_KEYS.SETTINGS);

    // 1) 첫 방문(저장값 없음)
    if (!raw) {
        SETTINGS = { ...DEFAULT_SETTINGS };

        // 🔹 첫 방문일 때 브라우저 언어 기준으로 UI 언어 추정
        const guessed = detectInitialUiLang();
        SETTINGS.uiLang = guessed;
        CURRENT_LANG = SETTINGS.uiLang;

        // ✅ v1: 학습 언어 강제 정리(안전장치)
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

        // ✅ v1: 저장값에 en/ko가 남아있어도 de로 강제 정리
        // (반드시 아래 'study' 계산보다 먼저!)
        sanitizeStudyLang();

        // ✅ 단어 데이터 버전이 바뀌었으면, 해당 학습 언어 데이터 초기화
        const study = (SETTINGS.studyLang || "de").toLowerCase();
        if (!SETTINGS.dataVersion || SETTINGS.dataVersion !== DATA_VERSION) {
            resetSrsForLang(study);
            resetStatsForLang(study);
            resetWordStatsForLang(study);

            SETTINGS.dataVersion = DATA_VERSION;
            saveSettings();
        }
    } catch {
        SETTINGS = { ...DEFAULT_SETTINGS };
        CURRENT_LANG = SETTINGS.uiLang || "ko";

        // ✅ 파싱 실패 시에도 강제 정리
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

    /* ----- 훈련소 뷰 ----- */
    "training.title": "training_title",
    "training.desc": "training_desc",
    "training.target_label": "training_target_label",
    "training.source_mistakes": "training_source_mistakes",
    "training.source_hard": "training_source_hard",
    "training.source_bookmark": "training_source_bookmark",
    "training.mode_label": "training_mode_label",
    "training.mode_cram": "training_mode_cram",
    "training.count_label": "training_count_label",
    "training.count_unit": "training_count_unit",
    "training.start_button": "training_start_button",
    "training.summary_hint": "training_summary_hint",
"training.done_simple": "training_done_simple",
    "training.done": "training_done",

    /* ----- 사용자 뷰 ----- */
    "user.title": "user_title",
    "user.settings_title": "user_settings_title",
    "user.cefr_title": "user_cefr_title",
    "user.level_title_cjk": "user_level_title_cjk",

    /* ----- 설정 뷰 ----- */
    "settings.title": "settings_title",
    "settings.ui_lang_label": "settings_ui_lang_label",
    "settings.study_lang_label": "settings_study_lang_label",
    "settings.sound.label": "sound_label",
    "sound.on": "sound_on",
    "sound.off": "sound_off",

    /* ----- 시작 화면 / 학습 메인 ----- */
    "common.start": "start",

    "study.start_tagline": "start_tagline",
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

    /* ----- 틀린 단어 / 북마크 / 검색 타이틀 ----- */
    "mistakes.title": "mistakes_title",
    "mistakes.desc": "mistakes_desc",
    "mistakes.empty": "mistakes_empty",

    "bookmark.title": "bookmark_title",
    "bookmark.desc": "bookmark_desc",
    "bookmark.empty": "bookmark_empty",

    "search.title": "search_title",
    "search.desc": "search_desc",
    "search.mode_label": "search_mode_label",
    "search.placeholder": "search_placeholder",
    "search.empty": "search_empty",
    "search.no_result": "search_no_result",

    /* ----- 요약 ----- */
    "summary.title": "summary_title",
    "summary.total": "summary_total",
    "summary.new": "summary_new",
    "summary.review": "summary_review",
    "summary.restart": "restart",
    "summary.no_words_today": "no_words_today",
    "study.copy_check_spelling": "copy_check_spelling"
};

// 공통 번역 함수: 공식 키 → 번역 텍스트
function trKey(key, fallback) {
    const pack = t() || {};
    const realKey = I18N_KEYS[key] || key;  // 매핑 없으면 key 그대로 사용
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
 * CEFR 값("all", "A1"~"C2")을
 *   - 기본: CEFR 그대로
 *   - 학습언어가 동아시아일 때:
 *        · UI도 동아시아  → "초급 1 (A1)" 식
 *        · UI는 비동아시아 → "Beginner 1 (A1)" 식
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

    const KNOWN = ["A1", "A2", "B1", "B2", "C1", "C2"];
    if (!KNOWN.includes(v)) {
        // 이상한 값이 들어오면 그냥 원문 돌려보냄
        return v;
    }

    // 학습 언어가 동아시아가 아니면 → CEFR 그대로
    if (!isStudyEA) {
        return v;
    }

    // 숫자(1/2) 결정: A1/B1/C1 → 1, A2/B2/C2 → 2
    const num = (v === "A1" || v === "B1" || v === "C1") ? "1" : "2";

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
        } else if (v === "C1" || v === "C2") {
            if (lang === "ko") grade = "고급";
            else if (lang === "zh") grade = "高级";
            else if (lang === "ja") grade = "上級";
        }
    } else {
        // UI가 비동아시아일 때: Beginner / Intermediate / Advanced
        if (v === "A1" || v === "A2") {
            if (lang === "de") grade = "Anfänger";
            else if (lang === "es") grade = "Principiante";
            else grade = "Beginner";
        } else if (v === "B1" || v === "B2") {
            if (lang === "de") grade = "Mittelstufe";
            else if (lang === "es") grade = "Intermedio";
            else grade = "Intermediate";
        } else if (v === "C1" || v === "C2") {
            if (lang === "de") grade = "Fortgeschritten";
            else if (lang === "es") grade = "Avanzado";
            else grade = "Advanced";
        }
    }

    // 혹시 grade 못 찾으면 CEFR만 보여줌 (안전장치)
    if (!grade) return v;

    // 예:
    //  - ko UI + ko 학습: "초급 1 (A1)"
    //  - en UI + ko 학습: "Beginner 1 (A1)"
    //  - de UI + ko 학습: "Anfänger 1 (A1)"
    return `${grade} ${num} (${v})`;
}

// ✅ CEFR 값 표시용 공통 헬퍼
function getCefrDisplayLabel(value) {
    const pack = t() || {};
    return formatCefrLabelForDisplay(value, pack);
}

// ✅ 학습 시작 요약 문구 (모드 + 목표 + CEFR)
//    - 화면에는 "READY" 상태에서만 보이게 제한
function updateStudyStartSummary() {
    const pack = t() || {};

    // ✅ 훈련소(깜지) 모드에서는 요약 문구를 절대 노출하지 않음
    //    중요: TRAINING_MODE_ACTIVE가 아직 선언 전일 수도 있으니 typeof로 안전 체크
    const trainingOn =
        (typeof TRAINING_MODE_ACTIVE !== "undefined" && TRAINING_MODE_ACTIVE) ||
        (typeof TRAINING_MODE_KIND !== "undefined" && TRAINING_MODE_KIND === "cram");

    if (trainingOn) {
        if (DOM.studySummaryText) {
            DOM.studySummaryText.textContent = "";
            DOM.studySummaryText.style.display = "none";
        }
        return;
    }

    const mode = SETTINGS.mode;
    const cefr = SETTINGS.newWordCefr || "all";
    const target = SETTINGS.goalTyping || 5;
    const ui = CURRENT_LANG || "ko";

    // 모드 라벨(번역팩에서 가져옴)
    let modeLabel;
    if (mode === "typing_de") {
        modeLabel = pack.typing_mode || "타이핑";
    } else if (mode === "copy") {
        modeLabel = pack.copy_mode || "따라쓰기";
    } else {
        modeLabel = pack.card_mode || "카드";
    }

    // CEFR/레벨 텍스트
    const cefrText = getCefrDisplayLabel(cefr);
    const isCjkStudy = isEastAsiaStudy();

    let text = "";

    if (isCjkStudy) {
        // 🔹 학습 언어가 ko/ja/zh 쪽일 때: "레벨" 계열 텍스트
        switch (ui) {
            case "ko":
                text = `모드: ${modeLabel} · 오늘 목표: ${target}개 · 단어 레벨: ${cefrText}`;
                break;
            case "ja":
                text = `モード: ${modeLabel} · 目標: ${target} · レベル: ${cefrText}`;
                break;
            case "zh":
                text = `模式: ${modeLabel} · 目标: ${target} · 等级: ${cefrText}`;
                break;
            case "en":
                text = `Mode: ${modeLabel} · Goal: ${target} · Level: ${cefrText}`;
                break;
            case "de":
                text = `Modus: ${modeLabel} · Ziel: ${target} · Niveau: ${cefrText}`;
                break;
            case "es":
                text = `Modo: ${modeLabel} · Meta: ${target} · Nivel: ${cefrText}`;
                break;
            case "fr":
                text = `Mode : ${modeLabel} · Objectif : ${target} · Niveau : ${cefrText}`;
                break;
            case "it":
                text = `Modalità: ${modeLabel} · Obiettivo: ${target} · Livello: ${cefrText}`;
                break;
            case "pt":
                text = `Modo: ${modeLabel} · Meta: ${target} · Nível: ${cefrText}`;
                break;
            case "ru":
                text = `Режим: ${modeLabel} · Цель: ${target} · Уровень: ${cefrText}`;
                break;
            default:
                text = `Mode: ${modeLabel} · Goal: ${target} · Level: ${cefrText}`;
        }
    } else {
        // 🔹 학습 언어가 독일어/영어 등일 때: CEFR 그대로
        switch (ui) {
            case "ko":
                text = `모드: ${modeLabel} · 오늘 목표: ${target}개 · CEFR: ${cefrText}`;
                break;
            case "en":
                text = `Mode: ${modeLabel} · Goal: ${target} · CEFR: ${cefrText}`;
                break;
            case "de":
                text = `Modus: ${modeLabel} · Ziel: ${target} · CEFR: ${cefrText}`;
                break;
            case "es":
                text = `Modo: ${modeLabel} · Meta: ${target} · CEFR: ${cefrText}`;
                break;
            case "fr":
                text = `Mode : ${modeLabel} · Objectif : ${target} · CECR : ${cefrText}`;
                break;
            case "it":
                text = `Modalità: ${modeLabel} · Obiettivo: ${target} · CEFR: ${cefrText}`;
                break;
            case "pt":
                text = `Modo: ${modeLabel} · Meta: ${target} · CEFR: ${cefrText}`;
                break;
            case "ja":
                text = `モード: ${modeLabel} · 目標: ${target} · CEFR: ${cefrText}`;
                break;
            case "zh":
                text = `模式: ${modeLabel} · 目标: ${target} · CEFR: ${cefrText}`;
                break;
            case "ru":
                text = `Режим: ${modeLabel} · Цель: ${target} · CEFR: ${cefrText}`;
                break;
            default:
                text = `Mode: ${modeLabel} · Goal: ${target} · CEFR: ${cefrText}`;
        }
    }

    if (!DOM.studySummaryText) return;

    DOM.studySummaryText.textContent = text;

    if (APP_STATE.phase === "READY") {
        DOM.studySummaryText.style.display = "block";
    } else {
        DOM.studySummaryText.style.display = "none";
    }
}

function populateUiLangSelect(selectEl) {
    selectEl.innerHTML = "";

    for (const code in LANG_META) {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = LANG_META[code].name_local;
        selectEl.appendChild(opt);
    }
}

// 카테고리용 i18n 키 매핑
const CATEGORY_I18N_KEYS = {
    basic:     "study.category.basic",
    daily:     "study.category.daily",
    travel:    "study.category.travel",
    work:      "study.category.work",
    smalltalk: "study.category.smalltalk"
};

function getCategoryLabel(catId) {
    const uiLang = CURRENT_LANG || "ko";
    const studyLang = (typeof getCurrentStudyLang === "function"
        ? getCurrentStudyLang()
        : (SETTINGS.studyLang || "de")
    ).toLowerCase();

    // 1) exam → 학습 언어별 대표 시험 이름 우선
    if (catId === "exam") {
        if (
            typeof CATEGORY_EXAM_NAMES !== "undefined" &&
            CATEGORY_EXAM_NAMES[studyLang]
        ) {
            return CATEGORY_EXAM_NAMES[studyLang];
        }
        // 학습 언어 대표 시험 이름이 없으면 i18n(category_exam) 사용
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
            const metaLabel =
                labels[uiLang] ||
                labels.en ||
                labels.ko ||
                null;

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
    refreshUiLangSelectLabels()
    // 메인 타이틀
    if (DOM.appTitle) {
        DOM.appTitle.textContent = trKey("app.title", "KarlLang");
    }

    // 시작 화면
    if (DOM.startTagline) {
        DOM.startTagline.textContent =
            trKey("study.start_tagline", DOM.startTagline.textContent);
    }
    if (DOM.startUiLabel) {
        DOM.startUiLabel.textContent =
            trKey("study.start_ui_label", DOM.startUiLabel.textContent);
    }
    if (DOM.startStudyLabel) {
        DOM.startStudyLabel.textContent =
            trKey("study.start_study_label", DOM.startStudyLabel.textContent);
    }
    if (DOM.startAppBtn) {
        DOM.startAppBtn.textContent =
            trKey("common.start", "Start");
    }

    // 메인 버튼들
    if (DOM.mainBtn) {
        if (APP_STATE.phase === "READY") {
            DOM.mainBtn.textContent =
                trKey("study.button.start", "Start");
        } else if (SETTINGS.mode === "card") {
            DOM.mainBtn.textContent =
                trKey("study.button.show_answer", "Answer");
        } else {
            DOM.mainBtn.textContent =
                trKey("study.button.confirm", "Confirm");
        }
    }

    // 학습 화면: READY 상태에서의 안내 문구도 언어에 맞게 즉시 갱신
    if (DOM.questionDisplay && APP_STATE.phase === "READY") {
        DOM.questionDisplay.textContent =
            trKey("study.start_prompt", "시작 버튼을 누르세요.");
    }
    if (DOM.hintDisplay && APP_STATE.phase === "READY") {
        DOM.hintDisplay.textContent = "";
    }
    if (DOM.skipBtn) {
        DOM.skipBtn.textContent =
            trKey("study.button.answer", "Answer");
    }

    // 난이도 문구
    if (DOM.ratingArea) {
        const title = DOM.ratingArea.querySelector(".rating-title");
        if (title) {
            title.textContent =
                trKey("difficulty.prompt", "난이도를 평가해 주세요:");
        }
    }
    if (DOM.ratingButtons && DOM.ratingButtons.length === 3) {
        DOM.ratingButtons[0].textContent =
            trKey("difficulty.hard", "어려움");
        DOM.ratingButtons[1].textContent =
            trKey("difficulty.normal", "보통");
        DOM.ratingButtons[2].textContent =
            trKey("difficulty.easy", "쉬움");
    }

    // 메뉴
    if (DOM.navUser)
        DOM.navUser.querySelector("span").textContent =
            trKey("menu.user", "사용자");
    if (DOM.navStudy)
        DOM.navStudy.querySelector("span").textContent =
            trKey("menu.study", "학습");
    if (DOM.navTraining)
        DOM.navTraining.querySelector("span").textContent =
            trKey("menu.training", "훈련소");
    if (DOM.navVocab)
        DOM.navVocab.querySelector("span").textContent =
            trKey("menu.mistakes", "틀린 단어");
    if (DOM.navBookmark)
        DOM.navBookmark.querySelector("span").textContent =
            trKey("menu.bookmark", "북마크");
    if (DOM.navSearch)
        DOM.navSearch.querySelector("span").textContent =
            trKey("menu.search", "단어 검색");
    if (DOM.navSettings)
        DOM.navSettings.querySelector("span").textContent =
            trKey("menu.settings", "설정");

    // 사용자 뷰 제목들
    if (DOM.userViewTitle)
        DOM.userViewTitle.textContent =
            trKey("user.title", "사용자");

    if (DOM.userCefrTitle) {
        const study = SETTINGS.studyLang || "de";
        const isCjkStudy = EAST_ASIA_LANGS.includes(study);

        if (isCjkStudy) {
            DOM.userCefrTitle.textContent =
                trKey("user.level_title_cjk", "단어 진척도");
        } else {
            DOM.userCefrTitle.textContent =
                trKey("user.cefr_title", "CEFR 단어 진척도");
        }
    }

    if (DOM.userSettingsTitle)
        DOM.userSettingsTitle.textContent =
            trKey("user.settings_title", "학습 설정");

    // 사용자 설정 라벨
    if (DOM.modeLabel) {
        DOM.modeLabel.textContent =
            trKey("study.mode_label", "모드");
    }
    if (DOM.goalTypingLabel) {
        DOM.goalTypingLabel.textContent =
            trKey("study.goal_typing_label", "학습 단어 수");
    }
    if (DOM.goalCardLabel) {
        DOM.goalCardLabel.textContent =
            trKey("study.goal_card_label", "카드 목표");
    }
    if (DOM.newWordCefrLabel) {
        DOM.newWordCefrLabel.textContent =
            trKey("study.new_word_cefr_label", "레벨");
    }

    // 카테고리 드롭다운 라벨
    if (DOM.newWordCategoryLabel) {
        DOM.newWordCategoryLabel.textContent =
            trKey("study.category_label", "카테고리");
    }

    // 카테고리 옵션 라벨
    if (DOM.newWordCategorySelect) {
        Array.from(DOM.newWordCategorySelect.options).forEach((opt) => {
            const v = opt.value;
            if (!v) return;
            opt.textContent = getCategoryLabel(v);
        });
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

    // 틀린 단어 뷰
    if (DOM.vocabViewTitle) {
        DOM.vocabViewTitle.textContent =
            trKey("mistakes.title", "틀린 단어");
    }
    if (DOM.wordbookDesc) {
        DOM.wordbookDesc.textContent =
            trKey("mistakes.desc", DOM.wordbookDesc.textContent);
    }

    // 북마크 뷰
    if (DOM.bookmarkViewTitle) {
        DOM.bookmarkViewTitle.textContent =
            trKey("bookmark.title", "북마크");
    }
    if (DOM.bookmarkDesc) {
        DOM.bookmarkDesc.textContent =
            trKey("bookmark.desc", DOM.bookmarkDesc.textContent);
    }

// 훈련소 뷰
    if (DOM.trainingViewTitle) {
        DOM.trainingViewTitle.textContent =
            trKey("training.title", "훈련소");
    }
    if (DOM.trainingDesc) {
        DOM.trainingDesc.textContent =
            trKey(
                "training.desc",
                "틀린 단어·북마크 단어를 카드/타이핑/게임으로 집중 훈련하는 모드입니다."
            );
     }

// 🔹 훈련 대상 라벨
    if (DOM.trainingTargetLabel) {
        DOM.trainingTargetLabel.textContent =
            trKey("training.target_label", "훈련 대상");
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
        DOM.trainingModeLabel.textContent =
            trKey("training.mode_label", "훈련 모드");
    }
    if (DOM.trainingModeSelect) {
        Array.from(DOM.trainingModeSelect.options).forEach((opt) => {
            if (opt.value === "cram") {
                opt.textContent = trKey(
                    "training.mode_cram",
                    "깜지 (반복 따라쓰기)"
                );
            }
        });
    }

    // 🔹 훈련 단어 수 라벨 + 옵션 텍스트
    if (DOM.trainingCountLabel) {
        DOM.trainingCountLabel.textContent =
            trKey("training.count_label", "훈련 단어 수");
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
        DOM.trainingStartBtn.textContent =
            trKey("training.start_button", "훈련 세션 시작");
    }

    // 🔹 밑에 설명: "최근 30일 기준 단어 중에서 ..."
    if (DOM.trainingSummary) {
        DOM.trainingSummary.textContent = trKey(
            "training.summary_hint",
            "최근 30일 기준으로 선택한 단어들을 집중 훈련합니다."
        );
    }
    // 검색 뷰
    if (DOM.searchViewTitle) {
        DOM.searchViewTitle.textContent =
            trKey("search.title", "단어 검색");
    }
    if (DOM.searchViewDesc) {
        DOM.searchViewDesc.textContent =
            trKey("search.desc", DOM.searchViewDesc.textContent);
    }
    if (DOM.searchLabel) {
        DOM.searchLabel.textContent =
            trKey("search.mode_label", "검색 기준");
    }

    // 검색 모드 옵션: UI/학습 언어 이름
    if (DOM.searchMode) {
        const uiLang = CURRENT_LANG || "ko";
        const studyLang = SETTINGS.studyLang || "de";

        function getLangNameForUI(code) {
            const meta = LANG_META[code];
            const localName = meta ? meta.name_local : null;

            if (code === "de") {
                return (t().study_lang_de || localName || "Deutsch");
            }
            if (code === "en") {
                return (t().study_lang_en || localName || "English");
            }
            if (code === "ko") {
                return (t().study_lang_ko || localName || "한국어");
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

        if (optUi)    optUi.textContent    = uiName;
        if (optStudy) optStudy.textContent = studyName;
    }

    if (DOM.searchInput) {
        DOM.searchInput.placeholder =
            trKey("search.placeholder", "단어를 입력하세요");
    }

    // 설정 뷰
    if (DOM.settingsViewTitle)
        DOM.settingsViewTitle.textContent =
            trKey("settings.title", "설정");

    if (DOM.settingsUiLangLabel)
        DOM.settingsUiLangLabel.textContent =
            trKey("settings.ui_lang_label", "UI 언어");

    if (DOM.settingsStudyLangLabel)
        DOM.settingsStudyLangLabel.textContent =
            trKey("settings.study_lang_label", "학습 언어");

    // 사운드 토글 라벨
    if (DOM.soundToggleLabel) {
        DOM.soundToggleLabel.textContent =
            trKey("settings.sound.label", "사운드");
    }
    if (DOM.soundToggle) {
        const onSpan = DOM.soundToggle.querySelector(".toggle-on");
        const offSpan = DOM.soundToggle.querySelector(".toggle-off");
        if (onSpan) onSpan.textContent = trKey("sound.on", "ON");
        if (offSpan) offSpan.textContent = trKey("sound.off", "OFF");
    }

    // 학습 언어 드롭다운 표시용 텍스트
    const studyLangLabelMap = {
        de: pack.study_lang_de || "Deutsch",
        en: pack.study_lang_en || "English",
        ko: pack.study_lang_ko || "한국어"
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

function updateTrainingSummaryPreview() {
    // 🚨 수정: 변수명을 DOM.trainingSummary로 통일 (형 코드 기준)
    const summaryEl = DOM.trainingSummary; 
    
    // 요소 없으면 종료
    if (!summaryEl) return;

    // 2. 스위치들이 켜져 있는지 확인
    const useMistakes = DOM.trainingSourceMistakes && DOM.trainingSourceMistakes.classList.contains("is-on");
    const useHard = DOM.trainingSourceHard && DOM.trainingSourceHard.classList.contains("is-on");
    const useBookmark = DOM.trainingSourceBookmark && DOM.trainingSourceBookmark.classList.contains("is-on");
    
    // 선택된 게 하나라도 있는지 체크
    const hasAnySource = useMistakes || useHard || useBookmark;

    // ----------------------------------------------------
    // [경우 1] 아무것도 선택 안 함 → 경고 (빨간색) & 시작 버튼 잠금
    // ----------------------------------------------------
    if (!hasAnySource) {
        summaryEl.style.color = "#D32F2F"; // 빨간색
        
        summaryEl.textContent = trKey(
            "training_select_target_warning",
            "훈련할 대상을 하나 이상 선택해 주세요."
        );

        if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = true;
        
        return;
    }

    // ----------------------------------------------------
    // [경우 2] 하나 이상 선택됨 → 안내 (회색) & 시작 버튼 풀기
    // ----------------------------------------------------
    summaryEl.style.color = "#666"; // 회색

    summaryEl.textContent = trKey(
        "training_summary_hint",
        "선택한 단어들을 집중 훈련합니다."
    );

    if (DOM.startTrainingBtn) DOM.startTrainingBtn.disabled = false;
}

/* ============================================
   ========== 5. WORD / SRS ENGINE ============
   ============================================ */

function getAllWords() {
    return ALL_WORDS_DE || [];
}

// ✅ 학습 언어별 form 꺼내는 공통 헬퍼
function getFormForLang(word, lang) {
    if (!word) return {};

    // 새 스키마: lemma, gender, plural, pos가 최상위에 있음
    if (lang === "de") {
        return {
            word: word.lemma || "",
            base: word.lemma || "",
            gender: word.gender || "",
            plural: word.plural || "",
            pos: word.pos || ""
        };
    }

    // 다른 언어는 meanings에서 가져옴
    const meaning = word.meanings ? word.meanings[lang] : "";
    return {
        word: meaning || word.lemma || "",
        base: meaning || word.lemma || ""
    };
}


function buildGermanForm(word) {
    if (!word) return "";

    const targetLang = SETTINGS.studyLang || "de";

    if (targetLang === "de") {
        const gender = word.gender || "";
        const lemma = (word.lemma || "").trim();

        // 명사: 관사 + 단어
        if (gender && lemma) {
            return `${gender} ${lemma}`;
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
            isNew: true
        };
    }
    try {
        const parsed = JSON.parse(raw);
        return {
            id: word.id,
            level: parsed.level || 0,
            lastReviewed: parsed.lastReviewed || 0,
            nextDue: parsed.nextDue || 0,
            isNew: parsed.isNew !== false
        };
    } catch {
        return {
            id: word.id,
            level: 0,
            lastReviewed: 0,
            nextDue: 0,
            isNew: true
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
            isNew: state.isNew
        })
    );
}

function nowDay() {
    return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
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

    const ALLOWED = ["ALL", "A1", "A2", "B1", "B2", "C1", "C2"];
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

    // 3) 필터링
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
    if (!DOM.progressBar || !DOM.progressText) return;

    const total = APP_STATE.totalTarget || 0;
    const done = APP_STATE.completed || 0;

    const percent = total > 0 ? (done / total) * 100 : 0;
    DOM.progressBar.style.width = `${percent}%`;

    const level = APP_STATE.currentCard
        ? APP_STATE.currentCard.state.level || 0
        : 0;

    DOM.progressText.textContent = formatProgressText(done, total, level);
}

function setPhase(phase) {
    APP_STATE.phase = phase;
}

function showReadyState() {
    setPhase("READY");
    APP_STATE.currentCard = null;
    APP_STATE.queue = [];
    APP_STATE.completed = 0;
    APP_STATE.totalTarget = 0;
    APP_STATE.newCount = 0;
    APP_STATE.reviewCount = 0;

    if (DOM.mainCard) {
        DOM.mainCard.style.display = "block";
        DOM.mainCard.classList.remove("card-correct", "card-wrong");
    }
    if (DOM.endStatsArea) {
        DOM.endStatsArea.style.display = "none";
    }
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
            pack.start_prompt || "시작 버튼을 누르세요."
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

    if (["nomen", "noun"].includes(s)) return "noun";
    if (["verb", "verben"].includes(s)) return "verb";
    if (["adjektiv", "adjective"].includes(s)) return "adj";
    if (["adverb"].includes(s)) return "adv";
    if (["pronomen", "pronoun"].includes(s)) return "pron";
    if (["artikel", "article"].includes(s)) return "art";
    if (["präposition", "praeposition", "preposition"].includes(s)) return "prep";
    if (["konjunktion", "conjunction"].includes(s)) return "conj";
    if (["interjektion", "interjection"].includes(s)) return "interj";

    return "";
}

function getPosLabelForLang(posKey, lang) {
    const table = {
        noun: {
            de: "Nomen",
            en: "noun",
            ko: "명사",
            es: "sustantivo"
        },
        verb: {
            de: "Verb",
            en: "verb",
            ko: "동사",
            es: "verbo"
        },
        adj: {
            de: "Adjektiv",
            en: "adjective",
            ko: "형용사",
            es: "adjetivo"
        },
        adv: {
            de: "Adverb",
            en: "adverb",
            ko: "부사",
            es: "adverbio"
        },
        pron: {
            de: "Pronomen",
            en: "pronoun",
            ko: "대명사",
            es: "pronombre"
        },
        art: {
            de: "Artikel",
            en: "article",
            ko: "관사",
            es: "artículo"
        },
        prep: {
            de: "Präposition",
            en: "preposition",
            ko: "전치사",
            es: "preposición"
        },
        conj: {
            de: "Konjunktion",
            en: "conjunction",
            ko: "접속사",
            es: "conjunción"
        },
        interj: {
            de: "Interjektion",
            en: "interjection",
            ko: "감탄사",
            es: "interjección"
        }
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
        ? getPosLabelForLang(posKey, uiLang)
        : "";

    if (studyLabel && uiLabel && studyLabel !== uiLabel) {
        return `${studyLabel} · ${uiLabel}`;
    }

    return studyLabel || uiLabel || rawPos;
}

const CONJ_LABELS = {
    base: {
        de: "Grundform",
        en: "Base form",
        ko: "기본형 (Grundform)",
        es: "Forma base"
    },
    pres_ich: {
        de: "Präsens (ich)",
        en: "Present (ich)",
        ko: "현재형 ich",
        es: "Presente (ich)"
    },
    pres_du: {
        de: "Präsens (du)",
        en: "Present (du)",
        ko: "현재형 du",
        es: "Presente (du)"
    },
    pres_er: {
        de: "Präsens (er/sie/es)",
        en: "Present (er/sie/es)",
        ko: "현재형 er/sie/es",
        es: "Presente (él/ella)"
    },
    praet: {
        de: "Präteritum",
        en: "Simple past",
        ko: "과거형 (Präteritum)",
        es: "Pretérito"
    },
    part2: {
        de: "Partizip II",
        en: "Past participle",
        ko: "과거분사 (Partizip II)",
        es: "Participio pasado"
    }
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
        TRAINING_CRAM_REPEAT_TOTAL
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
            answerLang: targetLang
        };
    } else {
        return {
            question: targetText,
            answer: meaning,
            answerLang: targetLang
        };
    }
}

function normalizeAnswer(str) {
    return (str || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
}

function getCramTargetText(word) {
    if (!word) return "";
    // 필요하면 form_de 같은 거 쓰고, 없으면 de
    const base =
        word.form_de ||
        word.de ||
        "";

    return normalizeAnswer(base);
}

// 🔹 깜지 모드용: 현재 단어 + 반복 상태에 맞게 copy 모드 카드 렌더
function showCramQuestion() {
    if (!TRAINING_MODE_ACTIVE || TRAINING_MODE_KIND !== "cram") {
        return;
    }

    const words = TRAINING_CRAM_WORDS || [];
    const word = words[TRAINING_CRAM_INDEX];

    // 🔚 더 이상 훈련할 단어가 없으면 세션 종료
    if (!word) {
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
                "training_done_simple",            // ✅ 키 수정 (training.done_simple → training_done_simple)
                "훈련 세션이 종료되었습니다."
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

    const targetText = buildGermanForm(word); // 정답(관사 포함 독일어)
    const meaning = getMeaning(word);         // UI 언어 뜻

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
        DOM.answerInput.focus();
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

    if (!DOM.answerInput) return;

    const pack = t() || {};
    const raw = DOM.answerInput.value || "";
    const user = raw.trim();

    if (!user) {
        if (DOM.feedback) {
            DOM.feedback.textContent =
                pack.type_answer || "정답을 입력해 주세요.";
        }
        DOM.answerInput.focus();
        return;
    }

    const targetText = buildGermanForm(word).trim(); // 관사 포함 정답 전체

    if (user !== targetText) {
        if (DOM.feedback) {
            DOM.feedback.textContent = trKey(
                "study.copy_check_spelling",
                "철자를 다시 확인하세요."
            );
        }
        DOM.answerInput.focus();
        DOM.answerInput.setSelectionRange(0, raw.length);
        return;
    }

    // ✅ 정답
    if (DOM.feedback) {
        DOM.feedback.textContent =
            pack.copy_ok || pack.correct || "정확합니다";
    }
    applyAnswerEffect(true);
// ✅ 깜지 발음: "현재 단어(방금 맞춘 단어)"를 읽는다 (3회 반복 구조 자연스럽게 충족)
speakGerman(targetText);

    // 🔹 현재 단어에 대한 반복 횟수 + 자동 졸업 처리
    TRAINING_CRAM_REPEAT_INDEX += 1;

    // 이 단어에 대한 반복을 모두 마치면 → 자동 졸업
    if (TRAINING_CRAM_REPEAT_INDEX >= TRAINING_CRAM_REPEAT_TOTAL) {
        // 다음 단어로 넘어가기 전에 졸업 처리
        const id = String(word.id);
        const stats = getWordStatsById(id);

        // ✅ 북마크는 사용자가 일부러 찍은 거니까 유지
        const keepBookmark = stats.bookmarked === true;

        markWordMastered(id, { keepBookmark });

        TRAINING_CRAM_REPEAT_INDEX = 0;
        TRAINING_CRAM_INDEX += 1;
        APP_STATE.completed = TRAINING_CRAM_INDEX;
    }

    // 다음 문제(다음 회차 or 다음 단어)로 바로 진행
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
            DOM.masteryMainBtn.textContent =
                lang === "en" ? "Mastered" : "졸업";
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
        incrementTotalViews(item.word.id);
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
        // [Gemini Fix] 배지 UI 업데이트 (오타 수정 + 풀로직)
        // ============================================================
        const badgeEl = DOM.cardLevelBadge || document.getElementById("cardLevelBadge");
        
        if (badgeEl) {
            // 1. 시작 화면에서 숨겼던 배지 다시 켜기 (필수!)
            badgeEl.style.display = "block"; 

            // 2. 데이터 가져오기
            const stats = getWordStatsById(item.word.id);
            const viewCount = stats.totalViews; 

            // 3. 텍스트 & 스타일 결정
            if (viewCount <= 1) {
                // 처음 보거나(1) 아예 안 본 경우(0)
                badgeEl.textContent = "New";
                badgeEl.style.color = "#00C853"; 
                badgeEl.style.backgroundColor = "#E8F5E9";
                badgeEl.style.border = "1px solid #C8E6C9";
            } else {
                // "3번째 봄" (번역팩 연동)
                let msg = (typeof trKey === 'function') 
                          ? trKey("card_view_count", "{n}번째 봄") 
                          : "{n}번째 봄";
                
                msg = msg.replace("{n}", viewCount);
                
                badgeEl.textContent = msg;
                badgeEl.style.color = "#555"; 
                badgeEl.style.backgroundColor = "#fff";
                badgeEl.style.border = "1px solid #e0e0e0";
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
                    DOM.answerInput.placeholder =
                        pack.type_answer || "정답 입력";
                }
                // 모바일에서 키보드 올라오면 화면 튀니까, 
                // 여기서는 focus()를 뺄 수도 있음 (취향 차이)
                DOM.answerInput.focus(); 
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
                DOM.mainBtn.textContent =
                    pack.show_answer || pack.answer || "정답";
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
        totalViews: totalViews // 여기에 추가됨
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
        totalViews: 0 
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
        bookmarked: keepBookmark ? s.bookmarked : false
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
        lastWrongAt: Date.now()   // 🔹 최근 오답 시각
    }));
}

function toggleBookmark(wordId) {
    const stats = setWordStatsById(wordId, (s) => ({
        ...s,
        bookmarked: !s.bookmarked
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

function speakGerman(text) {
    if (!SETTINGS.soundEnabled) return; 
    if (!("speechSynthesis" in window)) return;

    const utter = new SpeechSynthesisUtterance(text);
    const targetLang = SETTINGS.studyLang || "de";

    if (targetLang === "en") {
        utter.lang = "en-US";
    } else if (targetLang === "ko") {
        utter.lang = "ko-KR";
    } else if (targetLang === "es") {
        utter.lang = "es-ES";
    } else {
        utter.lang = "de-DE";
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
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

    DOM.questionDisplay.innerHTML =
        '<span class="answer-text answer-main">' +
            mainText +
        '</span>' +
        '<div class="answer-meaning-row">' +
            '<span class="answer-meaning-text">' +
                smallMeaning +
            '</span>' +
        '</div>' +
        '<div class="answer-line answer-actions">' +
            '<button class="icon-btn speaker-icon" id="speakerBtn" type="button" aria-label="발음 듣기"></button>' +
            '<button class="icon-btn info-icon" id="detailBtn" type="button" aria-label="자세히 보기">i</button>' +
            '<button class="icon-btn bookmark-btn" id="bookmarkToggle" type="button" aria-label="단어장에 추가">' +
                (stats.bookmarked ? "★" : "☆") +
            '</button>' +
        '</div>';

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
        btnBookmark.addEventListener("click", () =>
            toggleBookmark(String(word.id))
        );
    }

    // 디테일 버튼
    const btnDetail = document.getElementById("detailBtn");
    if (btnDetail) {
        btnDetail.addEventListener("click", () => openWordDetail(word));
    }
}

// ✅ 정답/오답 시 카드 배경 이펙트
function applyAnswerEffect(isCorrect) {
    if (!DOM.mainCard) return;

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

    // 피드백 텍스트
    if (DOM.feedback) {
        if (SETTINGS.mode === "card") {
            DOM.feedback.textContent = "";
        } else {
            DOM.feedback.textContent = isCorrect
                ? (pack.correct || "정답입니다!")
                : (pack.incorrect || "아쉽네요.");
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
                DOM.masteryMainBtn.textContent =
                    lang === "en" ? "Mastered" : "졸업";
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
        const labelMap = { ko:"KO", en:"EN", de:"DE", es:"ES", fr:"FR", it:"IT", pt:"PT", ja:"JA", zh:"ZH", ru:"RU" };
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

    const uiLang    = CURRENT_LANG || "ko";
    const studyLang = SETTINGS.studyLang || "de";
    const lines     = [];

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
            case "ko": labelBase = "기본형"; break;
            case "en": labelBase = "Base form"; break;
            case "de": labelBase = "Grundform"; break;
            case "es": labelBase = "Forma base"; break;
            case "fr": labelBase = "Forme de base"; break;
            case "it": labelBase = "Forma base"; break;
            case "pt": labelBase = "Forma base"; break;
            case "ja": labelBase = "基本形"; break;
            case "zh": labelBase = "基本形式"; break;
            case "ru": labelBase = "основная форма"; break;
            default:   labelBase = "Base form";
        }
        lines.push(`${labelBase}: ${base}`);
    }

    // 복수형 (명사만)
    if (word.plural) {
        let labelPlural;
        switch (uiLang) {
            case "ko": labelPlural = "복수형"; break;
            case "en": labelPlural = "Plural"; break;
            case "de": labelPlural = "Plural"; break;
            case "es": labelPlural = "Plural"; break;
            case "fr": labelPlural = "Pluriel"; break;
            case "it": labelPlural = "Plurale"; break;
            case "pt": labelPlural = "Plural"; break;
            case "ja": labelPlural = "複数形"; break;
            case "zh": labelPlural = "复数"; break;
            case "ru": labelPlural = "Множественное"; break;
            default:   labelPlural = "Plural";
        }
        lines.push(`${labelPlural}: ${word.plural}`);
    }

    // 동사 변화 (conj)
    const conj = word.conj;
    if (conj && typeof conj === "object") {
        const presList = [];
        let past  = null;
        let part2 = null;
        let aux   = null;

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
                case "ko": label = "현재형"; break;
                case "en": label = "Present"; break;
                case "de": label = "Präsens"; break;
                case "es": label = "Presente"; break;
                case "fr": label = "Présent"; break;
                case "it": label = "Presente"; break;
                case "pt": label = "Presente"; break;
                case "ja": label = "現在形"; break;
                case "zh": label = "现在时"; break;
                case "ru": label = "Настоящее время"; break;
                default:   label = "Present";
            }
            lines.push(`${label}: ${presList.join(" | ")}`);
        }

        if (past) {
            let label;
            switch (uiLang) {
                case "ko": label = "과거형"; break;
                case "en": label = "Simple past"; break;
                case "de": label = "Präteritum"; break;
                case "es": label = "Pretérito"; break;
                case "fr": label = "Passé"; break;
                case "it": label = "Passato"; break;
                case "pt": label = "Pretérito"; break;
                case "ja": label = "過去形"; break;
                case "zh": label = "过去时"; break;
                case "ru": label = "Прошедшее время"; break;
                default:   label = "Simple past";
            }
            lines.push(`${label}: ${past}`);
        }

        if (part2) {
            let label;
            switch (uiLang) {
                case "ko": label = "과거분사"; break;
                case "en": label = "Past participle"; break;
                case "de": label = "Partizip II"; break;
                case "es": label = "Participio pasado"; break;
                case "fr": label = "Participe passé"; break;
                case "it": label = "Participio passato"; break;
                case "pt": label = "Particípio passado"; break;
                case "ja": label = "過去分詞"; break;
                case "zh": label = "过去分词"; break;
                case "ru": label = "Причастие II"; break;
                default:   label = "Past participle";
            }
            lines.push(`${label}: ${part2}`);
        }

        if (aux) {
            let label;
            switch (uiLang) {
                case "ko": label = "조동사"; break;
                case "en": label = "Auxiliary"; break;
                case "de": label = "Hilfsverb"; break;
                default:   label = "Aux";
            }
            lines.push(`${label}: ${aux}`);
        }
    }

    // 예문
    if (Array.isArray(word.examples) && word.examples.length > 0) {
        const first = word.examples[0];

        let labelEx;
        switch (uiLang) {
            case "ko": labelEx = "예"; break;
            case "en": labelEx = "Ex"; break;
            case "de": labelEx = "Bsp"; break;
            case "es": labelEx = "Ej"; break;
            case "fr": labelEx = "Ex"; break;
            case "it": labelEx = "Es"; break;
            case "pt": labelEx = "Ex"; break;
            case "ja": labelEx = "例"; break;
            case "zh": labelEx = "例"; break;
            case "ru": labelEx = "Прим"; break;
            default:   labelEx = "Ex";
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
            studyText = (word.meanings && word.meanings[studyLang]) || word.lemma || "";
        }
    }

    const posText     = getPosWithMeaning(word);
    const fullMeaning = getFullMeaningForDetail(word);   // ✅ 뜻 전체
    const extraText   = getExtraDetailForWord(word);     // ✅ CEFR/기본형/변화형/예문

    if (DOM.detailTitle)   DOM.detailTitle.textContent   = studyText || "";
    if (DOM.detailPos)     DOM.detailPos.textContent     = posText || "-";
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
            DOM.feedback.textContent =
                pack.type_answer || "정답을 입력해 주세요.";
        }
        if (DOM.answerInput) {
            DOM.answerInput.focus();
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
    const gender = form.gender || "";
    const inputNorm = trimmed;

    // ---- 작은 헬퍼: 선택 영역 ----
    function selectAll() {
        if (!DOM.answerInput) return;
        DOM.answerInput.focus();
        DOM.answerInput.setSelectionRange(0, inputNorm.length);
    }

    function selectArticleOnly() {
        if (!DOM.answerInput) return;
        const firstSpaceIdx = inputNorm.indexOf(" ");
        const end = firstSpaceIdx === -1 ? inputNorm.length : firstSpaceIdx;
        DOM.answerInput.focus();
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
        DOM.answerInput.focus();
        DOM.answerInput.setSelectionRange(start, inputNorm.length);
    }

    // ==============================
    //   2-1) 관사 없는 단어 (동사, 형용사 등)
    // ==============================
    if (!gender) {
    const rawPos = word.pos || "";
        const isNounLike = /^(noun|n|subst)/i.test(rawPos);

        const firstChar = baseRaw[0] || "";
        const startsUpper = /^[A-ZÄÖÜ]/.test(firstChar);

        const sameIgnoreCase =
            inputNorm.toLowerCase() === baseRaw.toLowerCase();
        const exact = inputNorm === baseRaw;

        // 🔹 명사 + 대문자 시작(고유명사 격) → 첫 글자 대문자 필수
        if (isNounLike && startsUpper) {
            if (!sameIgnoreCase) {
                if (!item._properNounWrongOnce) {
                    item._properNounWrongOnce = true;
                    if (DOM.feedback) {
                        DOM.feedback.textContent =
                            pack.noun_spelling ||
                            "단어 철자를 다시 확인해 주세요.";
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
                        pack.noun_spelling ||
                        "단어 철자를 다시 확인해 주세요.";
                }
                selectAll();
                return "retry";
            }
            return "wrong";
        }

        if (sameIgnoreCase && !exact) {
            if (DOM.feedback) {
                DOM.feedback.textContent =
                    pack.verb_lowercase ||
                    "동사·형용사·부사 등은 소문자로 써 주세요.";
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
    const expected = `${gender} ${baseRaw}`;

    const parts = inputNorm.split(" ");
    const inputArticle = parts[0] || "";
    const inputRest = parts.slice(1).join(" ");

    const articleExact =
        inputArticle === gender; // ✅ 대소문자까지 완전 일치해야 정답
    const articleIgnoreCase =
        inputArticle.toLowerCase() === gender.toLowerCase();

    const restSameIgnoreCase =
        inputRest.toLowerCase() === baseRaw.toLowerCase();
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
                    pack.article_hint ||
                    "관사를 다시 확인해 주세요.";
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
                    pack.noun_spelling ||
                    "단어 철자를 다시 확인해 주세요.";
            }
            selectNounOnly();
            return "retry";
        }
        return "wrong";
    }

    if (restSameIgnoreCase && !restExact) {
        if (DOM.feedback) {
            DOM.feedback.textContent =
                pack.noun_capitalization ||
                "명사는 첫 글자를 대문자로 써 주세요.";
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
                DOM.trainingSummary.textContent =
                    trKey("training.done_simple", "훈련 세션이 종료되었습니다.");
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
                DOM.trainingSummary.textContent =
                    trKey("training.done_simple", "훈련 세션이 종료되었습니다.");
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
                    pack.training_no_words ||
                    "훈련할 단어가 없습니다.";
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
        APP_STATE.queue = [{
            word: currentWord,
            state: st,
            isNew: st.isNew
        }];

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
            DOM.trainingSummary.textContent =
                trKey("training.done_simple", "훈련 세션이 종료되었습니다.");
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
            DOM.trainingSummary.textContent =
                trKey("training.done_simple", "훈련 세션이 종료되었습니다.");
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
                pack.no_words_today ||
                "오늘은 학습할 단어가 없습니다.";
            return;
        }
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
            DOM.feedback.textContent =
                pack.type_answer || "정답을 입력해 주세요.";
            DOM.answerInput.focus();
            return;
        }

        let target = "";
        if (DOM.copyGhost && DOM.copyGhost.textContent) {
            target = DOM.copyGhost.textContent.trim();
        } else {
            target = speakText.trim();
        }

        if (userInput !== target) {
            DOM.feedback.textContent = trKey(
                "study.copy_check_spelling",
                "철자를 다시 확인하세요."
            );

            DOM.answerInput.focus();
            return;
        }

        const stats = getWordStatsById(String(word.id));

        DOM.feedback.innerHTML =
            '<div class="copy-answer-line">' +
                '<button class="icon-btn speaker-icon" id="copySpeakerBtn" type="button" aria-label="발음 듣기"></button>' +
                '<button class="icon-btn info-icon" id="copyDetailBtn" type="button" aria-label="자세히 보기">i</button>' +
                '<button class="icon-btn bookmark-btn" id="copyBookmarkBtn" type="button" aria-label="단어장에 추가">' +
                    (stats.bookmarked ? "★" : "☆") +
                '</button>' +
            '</div>' +
            '<div class="copy-feedback-msg">' +
                (pack.copy_ok || pack.correct || "정확합니다") +
            '</div>';

        const btnSpeak = document.getElementById("copySpeakerBtn");
        if (btnSpeak) {
            btnSpeak.addEventListener("click", () =>
                speakGerman(speakText)
            );
        }

        const btnBookmark = document.getElementById("copyBookmarkBtn");
        if (btnBookmark) {
            btnBookmark.addEventListener("click", () =>
                toggleBookmark(String(word.id))
            );
        }

        const btnDetail = document.getElementById("copyDetailBtn");
        if (btnDetail) {
            btnDetail.addEventListener("click", () => openWordDetail(word));
        }

        speakGerman(speakText);

        applyAnswerEffect(true);

        setPhase("ANSWER");
        DOM.ratingArea.style.display = TRAINING_MODE_ACTIVE ? "none" : "block";
        DOM.mainBtn.style.display = TRAINING_MODE_ACTIVE ? "inline-block" : "none";
        DOM.skipBtn.style.display = "none";
        return;
    }

    // 타이핑 모드
    const userInput = DOM.answerInput.value;
    const result = evaluateTypingAnswer(userInput, item);

    if (result === "retry") {
        return;
    }
    if (result === "wrong") {
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

/**
 * 난이도 평가 버튼 클릭
 */
function handleRating(rating) {
    if (APP_STATE.phase !== "ANSWER") return;

    const item = APP_STATE.currentCard;
    if (!item) return;

    const today = nowDay();
    const prevState = item.state || {
        id: item.word.id,
        level: 0,
        lastReviewed: 0,
        nextDue: 0,
        isNew: item.isNew
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
        isNew: false
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

    const wordId = String(item.word.id);
setWordStatsById(wordId, (s) => ({
    ...s,
    hardCount:
        rating === "hard"
            ? (s.hardCount || 0) + 1
            : (s.hardCount || 0),
    // 🔹 hard 선택했을 때만 최근 시각 갱신
    lastHardAt:
        rating === "hard"
            ? Date.now()
            : (s.lastHardAt || 0),
    level
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

function handleTrainingStart() {
    const pack = t() || {};

    const useMistakes =
        DOM.trainingSourceMistakes && DOM.trainingSourceMistakes.classList.contains("is-on");
    const useHard =
        DOM.trainingSourceHard && DOM.trainingSourceHard.classList.contains("is-on");
    const useBookmark =
        DOM.trainingSourceBookmark && DOM.trainingSourceBookmark.classList.contains("is-on");

    // 🔴 체크박스 전부 해제 상태
if (!useMistakes && !useHard && !useBookmark) {
    const msg = trKey(
        "training_select_target_warning",
        "훈련할 대상을 하나 이상 선택해 주세요."
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
    const allStats = getWordStatsAll();   // { id: { ... } }
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
    const RECENT_DAYS = 30;              // 최근 30일
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
            lastHardAt: rawStats.lastHardAt || 0
        };

        const hasWrong = stats.wrongAttempts > 0;
        const hasHard = stats.hardCount > 0;
        const isBookmarked = stats.bookmarked;

        // 🔹 1) 날짜가 있는 경우 → 진짜로 최근 30일만
        const hasRecentMistake =
            (
                (stats.lastWrongAt &&
                    now - stats.lastWrongAt <= RECENT_MS) ||
                (stats.lastHardAt &&
                    now - stats.lastHardAt <= RECENT_MS)
            ) ||
            (
                !stats.lastWrongAt &&
                !stats.lastHardAt &&
                (hasWrong || hasHard)
            );

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
            score
        });
    }

    // 🔴 필터 후 아무것도 없으면 안내 메시지
    if (items.length === 0) {
        const msg =
            pack.training_no_match ||
            "No words match the selected conditions.";

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

        const aTime = Math.max(
            a.stats.lastWrongAt || 0,
            a.stats.lastHardAt || 0
        );
        const bTime = Math.max(
            b.stats.lastWrongAt || 0,
            b.stats.lastHardAt || 0
        );
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
            trainingMode = "copy";   // 깜지는 copy UI 재사용
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
    TRAINING_CRAM_REPEAT_TOTAL = 3;   // 깜지는 각 단어당 3회 고정

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
        } catch (e) {
        }
    });
}

function resetStatsForLang(lang) {
    const raw = safeGet(STORAGE_KEYS.STATS);
    if (!raw) return;

    try {
        const parsed = JSON.parse(raw) || {};
        delete parsed[lang];
        safeSet(STORAGE_KEYS.STATS, JSON.stringify(parsed));
    } catch (e) {
    }
}

function resetWordStatsForLang(lang) {
    const raw = safeGet(STORAGE_KEYS.WORD_STATS);
    if (!raw) return;

    try {
        const parsed = JSON.parse(raw) || {};
        delete parsed[lang];
        safeSet(STORAGE_KEYS.WORD_STATS, JSON.stringify(parsed));
    } catch (e) {
    }
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
            newLearned: 0
        };
    }

    try {
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") {
            return {
                totalReviewed: 0,
                newLearned: 0
            };
        }

        const byLang = parsed[lang];
        if (byLang && typeof byLang === "object") {
            return {
                totalReviewed: byLang.totalReviewed || 0,
                newLearned: byLang.newLearned || 0
            };
        }

        return {
            totalReviewed: 0,
            newLearned: 0
        };
    } catch {
        return {
            totalReviewed: 0,
            newLearned: 0
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
        newLearned: statsForCurrentLang.newLearned || 0
    };

    safeSet(STORAGE_KEYS.STATS, JSON.stringify(base));
}

function showEndStats() {
    setPhase("FINISHED");
    DOM.mainCard.style.display = "none";
    DOM.endStatsArea.style.display = "block";

    const pack = t() || {};
    DOM.endTitle.textContent =
        pack.summary_title ||
        pack.completed_title ||
        "오늘 학습 요약";

    DOM.endTotal.textContent =
        (pack.summary_total ||
            pack.total_completed ||
            "총 학습 카드") +
        ": " +
        APP_STATE.completed +
        (CURRENT_LANG === "en" ? "" : "개");

    DOM.endNew.textContent =
        (pack.summary_new ||
            pack.new_words ||
            "새로 배운 단어") +
        ": " +
        APP_STATE.newCount +
        (CURRENT_LANG === "en" ? "" : "개");

    DOM.endReview.textContent =
        (pack.summary_review ||
            pack.reviewed_words ||
            "복습 단어") +
        ": " +
        APP_STATE.reviewCount +
        (CURRENT_LANG === "en" ? "" : "개");

    DOM.restartBtn.textContent = pack.restart || "다시 시작";

    updateCefrProgress();
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

    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    const total = {};
    const done = {};
    levels.forEach((lvl) => {
        total[lvl] = 0;
        done[lvl] = 0;
    });

    allWords.forEach((w) => {
        const rawLevel = (w.cefr || "")
            .toString()
            .trim()
            .toUpperCase();

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
        const percent =
            tTotal > 0 ? Math.round((tDone / tTotal) * 100) : 0;

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
    const cefrShort = (word.cefr || "?").toUpperCase();  // A1, A2 …
    const hard = stats.hardCount || 0;

    let metaHtml = "";

    if (context === "mistakes") {
        const wrong = stats.wrongAttempts || 0;

        const hardLabel  = formatHardCountLabel(hard);
        const wrongLabel = formatWrongLabel(wrong);

        const labels = [];
        if (hardLabel)  labels.push(hardLabel);
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
            metaHtml =
                `<div class="wordbook-meta-line1">${line1}</div>`;
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

    const bookmarkBtn = document.createElement("button");
    bookmarkBtn.type = "button";
    bookmarkBtn.className = "icon-btn bookmark-btn";
    bookmarkBtn.textContent = stats.bookmarked ? "★" : "☆";
    bookmarkBtn.addEventListener("click", () => {
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
        const hard  = s.hardCount || 0;
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
}

function renderBookmarks() {
    const container = DOM.bookmarkList;
    if (!container) return;

    const allStats = getWordStatsAll();
    const entries = Object.entries(allStats).filter(
        ([, s]) => !!s.bookmarked
    );

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
            // UI 언어 기준: lemma + 모든 언어 뜻에서 검색
            const meaningValues = w.meanings ? Object.values(w.meanings) : [];
            const targets = [w.lemma || "", ...meaningValues].join(" ").toLowerCase();
            return targets.includes(query);
        } else {
            // study 모드: 표제어(lemma) 기준 검색
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
        const stats =
            allStats[String(word.id)] || {
                hardCount: 0,
                bookmarked: false,
                level: 0
            };
        const item = createWordListItem(word, stats, "search");
        container.appendChild(item);
    });
}

/* ============================================
   ========== 11. NAVIGATION / VIEWS ==========
   ============================================ */

function openMenu() {
    if (!DOM.sideMenu) return;
    DOM.sideMenu.classList.add("open");
    if (DOM.sideMenuOverlay) {
        DOM.sideMenuOverlay.style.display = "block";
    }
}

function closeMenu() {
    if (!DOM.sideMenu) return;
    DOM.sideMenu.classList.remove("open");
    if (DOM.sideMenuOverlay) {
        DOM.sideMenuOverlay.style.display = "none";
    }
}

function showView(view) {
    APP_STATE.currentView = view;

    // 1) 메뉴 열려 있었는지 체크
    const wasMenuOpen = DOM.sideMenu && DOM.sideMenu.classList.contains("open");
    
    // 2) 메뉴/오버레이 먼저 닫기
    closeMenu();

    const views = {
        study:    DOM.studyView,
        user:     DOM.userView,
        training: DOM.trainingView,
        mistakes: DOM.vocabView,
        bookmark: DOM.bookmarkView,
        search:   DOM.searchView,
        settings: DOM.settingsView
    };

    let targetEl = null;

    // 3) 전부 숨기고, 해당 view만 보이게
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

    // 4) 메뉴에서 온 경우엔 transition 없이 즉시 표시
    if (targetEl) {
        if (wasMenuOpen) {
            targetEl.style.transition = "none";
            targetEl.classList.add("active");
            requestAnimationFrame(() => {
                targetEl.style.transition = "";
            });
        } else {
            requestAnimationFrame(() => {
                targetEl.classList.add("active");
            });
        }
    }

    // 5) 기존 후처리 로직 그대로 유지
    if (view === "study") {
        updateProgressBar();
    } else if (view === "user") {
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
    }
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
            const tempLang = DOM.startUiLang.value;

            // SETTINGS는 아직 확정(저장) 안 하고,
            // CURRENT_LANG만 바꿔서 "미리보기"만 적용
            CURRENT_LANG = tempLang;

            // 번역 다시 적용 → 시작화면/학습화면 라벨, 버튼, 문구 전부 갱신
            applyTranslations();
            updateStudyStartSummary();
        });
    }

    // 헤더 / 메뉴
    if (DOM.menuToggle) {
        DOM.menuToggle.addEventListener("click", () => {
            if (DOM.sideMenu.classList.contains("open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    if (DOM.sideMenuOverlay) {
        DOM.sideMenuOverlay.addEventListener("click", () => {
            closeMenu();
        });
    }

    if (DOM.navStudy) {
    DOM.navStudy.addEventListener("click", () => {
        // 🔹 훈련소 강제 종료
        TRAINING_MODE_ACTIVE = false;
        TRAINING_MODE_KIND = "none";
        TRAINING_MIX_WORDS = [];
        TRAINING_MIX_INDEX = 0;
        TRAINING_MIX_STEP = 0;

        // 🔹 깜지 상태도 같이 리셋
            TRAINING_CRAM_WORDS = [];
            TRAINING_CRAM_INDEX = 0;
            TRAINING_CRAM_REPEAT_INDEX = 0;
            TRAINING_CRAM_REPEAT_TOTAL = 3;
        // 🔹 뷰를 학습으로 전환 + 상태를 READY로 초기화
        showView("study");
        showReadyState();
    });
}
    if (DOM.navUser)
        DOM.navUser.addEventListener("click", () => showView("user"));
    if (DOM.navTraining)
    DOM.navTraining.addEventListener("click", () => {
        showView("training");
        // TODO: 나중에 훈련소 초기 렌더 함수 들어감 (예: renderTrainingHome())
    });

        if (DOM.masteryMainBtn) {
        DOM.masteryMainBtn.addEventListener("click", () => {
            // 훈련소 정답 화면에서만 작동
            if (!TRAINING_MODE_ACTIVE) return;
            if (APP_STATE.phase !== "ANSWER") return;

            const item = APP_STATE.currentCard;
            if (!item) return;

            markWordMastered(item.word.id, { keepBookmark: false });  // 수동 졸업: 북마크도 함께 정리  // 틀린단어/북마크/훈련소 대상에서 제거

            const lang = CURRENT_LANG || "ko";
            DOM.masteryMainBtn.textContent =
                lang === "en" ? "Mastered" : "완료";
            DOM.masteryMainBtn.disabled = true;
            DOM.masteryMainBtn.classList.add("mastery-done");
        });
    }
    if (DOM.navVocab)
        DOM.navVocab.addEventListener("click", () => showView("mistakes"));
    if (DOM.navBookmark)
        DOM.navBookmark.addEventListener("click", () =>
            showView("bookmark")
        );
    if (DOM.navSearch)
        DOM.navSearch.addEventListener("click", () => showView("search"));
    if (DOM.navSettings)
        DOM.navSettings.addEventListener("click", () =>
            showView("settings")
        );

    if (DOM.mainBtn) DOM.mainBtn.addEventListener("click", handleConfirm);
    if (DOM.skipBtn) DOM.skipBtn.addEventListener("click", handleSkip);
    if (DOM.trainingStartBtn) {
        DOM.trainingStartBtn.addEventListener("click", handleTrainingStart);
    }

    if (DOM.answerInput) {
        DOM.answerInput.addEventListener("keydown", (e) => {
            if (
                e.key === "Enter" &&
                APP_STATE.phase === "QUESTION" &&
                (SETTINGS.mode === "typing_de" ||
                    SETTINGS.mode === "copy")
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

    if (DOM.modeSelect) {
        DOM.modeSelect.addEventListener("change", () => {
            SETTINGS.mode = DOM.modeSelect.value;
            saveSettings();

            showReadyState();
            applyTranslations();
            updateStudyStartSummary();
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
            SETTINGS.newWordCategory =
                DOM.newWordCategorySelect.value || "all";
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

            if (SETTINGS.soundEnabled) {
                DOM.soundToggle.classList.add("is-on");
            } else {
                DOM.soundToggle.classList.remove("is-on");
            }
        });
    }

    if (DOM.settingsUiLang) {
        DOM.settingsUiLang.addEventListener("change", () => {
            SETTINGS.uiLang = DOM.settingsUiLang.value;
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
            SETTINGS.studyLang = DOM.settingsStudyLang.value;
            saveSettings();

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
        DOM.newWordCefrSelect.value = SETTINGS.newWordCefr;
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
        btn.textContent = (CURRENT_LANG === "en" ? "Mastered" : "졸업");

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
    loadSettings();

    if (DOM.startUiLang) {
        populateUiLangSelect(DOM.startUiLang);
    }
    if (DOM.settingsUiLang) {
        populateUiLangSelect(DOM.settingsUiLang);
    }

    hydrateSettingsToUI();
    ensureMasteryMainBtn();
    // ✅ 현재 UI 언어 기준으로 드롭다운 라벨 맞추기
    refreshUiLangSelectLabels();

    attachEvents();
    applyTranslations();
    updateCefrProgress();
    updateStudyStartSummary();
}

// ===== 인트로 / 시작 화면 + 초기화 제어 =====
document.addEventListener("DOMContentLoaded", () => {
    // 1) 공통 초기화 (DOM 캐시, 이벤트 바인딩, 번역 적용 등)
    init();

    const body = document.body;

    // 인트로 / 시작 / 앱 화면 DOM
    const introScreen   = document.getElementById("introScreen");
    const startScreen   = document.getElementById("startScreen");
    const appScreen     = document.getElementById("app");
    const introStartBtn = document.getElementById("introStartBtn");

    // 공통 화면 전환 헬퍼
    function showScreen(target) {
        if (introScreen) introScreen.style.display = "none";
        if (startScreen) startScreen.style.display = "none";
        if (appScreen)   appScreen.style.display   = "none";

        if (target) {
            // app은 flex, 나머지는 block이든 flex든 취향인데
            // 어차피 CSS에서 덮어쓰니 그냥 flex로 통일해도 됨
            target.style.display = "flex";
        }

        window.scrollTo(0, 0);
    }

    // 2) 첫 진입은 무조건 인트로 화면
    if (introScreen) {
        showScreen(introScreen);
        body.classList.add("state-intro");
        body.classList.remove("state-start");
    } else if (startScreen) {
        // 인트로 섹션이 없으면 바로 시작 화면
        showScreen(startScreen);
        body.classList.add("state-start");
        body.classList.remove("state-intro");
    } else if (appScreen) {
        // 이것도 없으면 바로 앱 화면
        showScreen(appScreen);
        body.classList.remove("state-intro", "state-start");
    }

    // 3) 인트로를 1.2초 보여주고 자동으로 시작 화면으로 전환
    if (introScreen && startScreen) {
        setTimeout(() => {
            body.classList.remove("state-intro");
            body.classList.add("state-start");
            showScreen(startScreen);
        }, 1200); // 필요하면 1000~1500 사이로 조정
    }

    // 4) 인트로에 "시작" 버튼이 있으면, 그걸 눌러도 바로 시작 화면으로
    if (introStartBtn && startScreen) {
        introStartBtn.addEventListener("click", () => {
            body.classList.remove("state-intro");
            body.classList.add("state-start");
            showScreen(startScreen);
        });
    }

    // 5) 훈련소 관련 DOM 이벤트 바인딩
    if (DOM.trainingCountSelect) {
        DOM.trainingCountSelect.addEventListener("change", updateTrainingSummaryPreview);
    }
    if (DOM.trainingModeSelect) {
        DOM.trainingModeSelect.addEventListener("change", updateTrainingSummaryPreview);
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
});

