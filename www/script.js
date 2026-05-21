// KarlLang v10 - typing/card/copy modes, CEFR progress, search, TTS/bookmark

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

/* ============================================
   ========== 4. TRANSLATION ENGINE ============
   ============================================ */


/* ============================================
   ========== 5. WORD / SRS ENGINE ============
   ============================================ */

/* ============================================
   ========== 7. ANSWER / RATING / TTS =========
   ============================================ */


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
