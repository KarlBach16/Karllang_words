// DOM element cache and late-created UI controls.

const DOM = {};

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
  DOM.settingsAccountTitle = document.getElementById("settingsAccountTitle");
  DOM.accountStatusText = document.getElementById("accountStatusText");
  DOM.accountStatusDetail = document.getElementById("accountStatusDetail");
  DOM.accountLoginBtn = document.getElementById("accountLoginBtn");
  DOM.accountSyncPanel = document.getElementById("accountSyncPanel");
  DOM.accountSyncTitle = document.getElementById("accountSyncTitle");
  DOM.accountSyncDetail = document.getElementById("accountSyncDetail");
  DOM.accountSyncUploadBtn = document.getElementById("accountSyncUploadBtn");
  DOM.accountSyncDownloadBtn = document.getElementById("accountSyncDownloadBtn");
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
