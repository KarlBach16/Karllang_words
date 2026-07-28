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
    DOM.startAppBtn.textContent = trKey("study.start_as_guest", "Continue as Guest");
  }
  if (DOM.startAppleLoginBtn) {
    DOM.startAppleLoginBtn.textContent = trKey(
      "study.start_with_apple",
      "Continue with Apple",
    );
  }
  if (DOM.startGoogleLoginBtn) {
    DOM.startGoogleLoginBtn.textContent = trKey(
      "study.start_with_google",
      "Continue with Google",
    );
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

      if (v === "typing") {
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
  if (DOM.settingsAccountTitle) {
    DOM.settingsAccountTitle.textContent = trKey("account.title", "계정");
  }
  if (DOM.settingsFeedbackTitle) {
    DOM.settingsFeedbackTitle.textContent = trKey(
      "settings.feedback_title",
      "피드백 설정",
    );
  }
  renderAuthState();
  if (typeof refreshFirstSyncPanelTranslations === "function") {
    refreshFirstSyncPanelTranslations();
  }
  if (typeof refreshAccountSyncStatusTranslation === "function") {
    refreshAccountSyncStatusTranslation();
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

  if (typeof scheduleNativeChromeUpdate === "function") {
    scheduleNativeChromeUpdate({ force: true });
  }
}
