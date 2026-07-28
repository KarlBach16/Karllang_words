// App view switching, header titles, and bottom-tab state.

function getBottomNavView(view) {
  if (view === "wordDrop") {
    return "training";
  }
  if (view === "mistakes" || view === "bookmark" || view === "search") {
    return "words";
  }
  return view;
}

function normalizeRestorableView(view) {
  const normalized = getBottomNavView(view || "study");
  const allowed = ["study", "user", "training", "words", "settings"];
  return allowed.includes(normalized) ? normalized : "study";
}

function getStoredLastView() {
  return normalizeRestorableView(safeGet(STORAGE_KEYS.LAST_VIEW));
}

function saveLastView(view) {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.removeItem(STORAGE_KEYS.LAST_VIEW);
  }
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

  showView("study");
  showReadyState();
}

function showView(view) {
  const prevView = APP_STATE.currentView; // 🔹 이전 뷰 기억
  const targetView = view;
  APP_STATE.currentView = targetView;
  saveLastView(targetView);
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

  if (typeof scheduleNativeChromeUpdate === "function") {
    scheduleNativeChromeUpdate();
  }
}
