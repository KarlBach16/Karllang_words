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
  "account.title": "account_title",
  "account.status_guest": "account_status_guest",
  "account.status_signed_in": "account_status_signed_in",
  "account.status_local_only": "account_status_local_only",
  "account.status_sync_ready": "account_status_sync_ready",
  "account.sign_in": "account_sign_in",
  "account.sign_out": "account_sign_out",
  "account.signing_in": "account_signing_in",
  "account.sign_in_coming_soon": "account_sign_in_coming_soon",
  "account.sync_title": "account_sync_title",
  "account.sync_ready": "account_sync_ready",
  "account.sync_checking": "account_sync_checking",
  "account.sync_upload_detail": "account_sync_upload_detail",
  "account.sync_download_detail": "account_sync_download_detail",
  "account.sync_conflict_detail": "account_sync_conflict_detail",
  "account.sync_changed_detail": "account_sync_changed_detail",
  "account.sync_upload": "account_sync_upload",
  "account.sync_download": "account_sync_download",
  "account.sync_working": "account_sync_working",
  "account.sync_done": "account_sync_done",
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
