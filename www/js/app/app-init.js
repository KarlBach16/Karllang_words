// App initialization and first-screen bootstrap.

function init() {
  // 1. 기존 앱 공통 초기화 -----------------------------
  cleanupLegacyWebCaches();
  cacheDOM();
  updateRuntimeChromeClass();
  loadSettings();
  initSupabaseClient();
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
  initAuth();
  initRemoteSyncLifecycleChecks();
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

  function showInitialAppView() {
    const targetView =
      typeof hasAuthReturnView === "function" && hasAuthReturnView()
        ? consumeAuthReturnView()
        : typeof getStoredLastView === "function"
        ? getStoredLastView()
        : "study";
    showView(targetView);
    if (targetView === "study" && typeof showReadyState === "function") {
      showReadyState();
    }
  }

  function saveStartSelections() {
    if (DOM.startUiLang) {
      SETTINGS.uiLang = DOM.startUiLang.value;
    }
    if (DOM.startStudyLang) {
      SETTINGS.studyLang = DOM.startStudyLang.value;
    }
    SETTINGS.seenOnboarding = true;
    saveSettings();
  }

  function enterAppAfterStart() {
    if (typeof applyTranslations === "function") {
      applyTranslations();
    }
    body.classList.remove("state-intro", "state-start");
    showScreen(appScreen);
    showView("study");
    if (typeof showReadyState === "function") {
      showReadyState();
    }
  }

  const shouldSkipIntroForAuthReturn =
    typeof hasAuthReturnView === "function" && hasAuthReturnView();

  // ✅ 시작 화면 디자인 작업 중에는 언어 선택 화면을 강제로 노출
  if (FORCE_START_SCREEN_FOR_DESIGN && startScreen) {
    showScreen(startScreen);
    body.classList.add("state-start");
    body.classList.remove("state-intro");
  } else if (SETTINGS.seenOnboarding) {
    // ----- 재방문 유저 -----
    if (shouldSkipIntroForAuthReturn && appScreen) {
      showScreen(appScreen);
      body.classList.remove("state-intro", "state-start");
      showInitialAppView();
    } else if (introScreen && appScreen) {
      // 1) 짧게 인트로 보여주고
      showScreen(introScreen);
      body.classList.add("state-intro");
      body.classList.remove("state-start");

      // 2) 바로 앱 + 학습 화면으로 진입
      setTimeout(() => {
        body.classList.remove("state-intro");
        showScreen(appScreen);
        showInitialAppView();
      }, 1600); // 재방문은 1.6초 정도
    } else if (appScreen) {
      // 인트로 섹션이 없다면 바로 앱으로
      showScreen(appScreen);
      body.classList.remove("state-intro", "state-start");
      showInitialAppView();
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
      showInitialAppView();
    }
  }

  // 🔘 인트로 화면에서 버튼 눌렀을 때
  if (introStartBtn) {
    introStartBtn.addEventListener("click", () => {
      if (SETTINGS.seenOnboarding && appScreen) {
        // 재방문: 인트로 스킵하고 바로 앱 + 학습
        body.classList.remove("state-intro", "state-start");
        showScreen(appScreen);
        showInitialAppView();
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
      saveStartSelections();
      enterAppAfterStart();
    });
  }

  if (DOM.startAppleLoginBtn) {
    DOM.startAppleLoginBtn.addEventListener("click", () => {
      saveStartSelections();
      saveAuthReturnView("study");
      signInWithApple();
    });
  }

  if (DOM.startGoogleLoginBtn) {
    DOM.startGoogleLoginBtn.addEventListener("click", () => {
      saveStartSelections();
      saveAuthReturnView("study");
      signInWithGoogle();
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
