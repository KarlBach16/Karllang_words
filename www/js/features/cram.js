// Cram training mode state and flow.

// 🔹 깜지(반복 따라쓰기) 모드 상태
let TRAINING_CRAM_WORDS = []; // 깜지 대상 단어 리스트
let TRAINING_CRAM_INDEX = 0; // 현재 몇 번째 단어인지 (단어 기준)
let TRAINING_CRAM_REPEAT_TOTAL = 3; // 이 단어를 몇 번 쓸 건지 (1/3/5)
let TRAINING_CRAM_REPEAT_INDEX = 0; // 현재 몇 회째인지 (0-based)
// 현재 단어에서 "정말 모르겠다" 두 번째 확인 허용용 플래그
let TRAINING_CRAM_GIVEUP_ARMED = false;

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
    completeCramTrainingSession();
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

function completeCramTrainingSession() {
  const cramTotal = TRAINING_CRAM_WORDS.length || TRAINING_CRAM_INDEX || 0;
  const cramWrong = (APP_STATE.sessionWrongWords || []).length;
  const cramCorrect = Math.max(0, cramTotal - cramWrong);

  addTrainingSessionToDailySummary({
    mode: "cram",
    total: cramTotal,
    correct: cramCorrect,
    wrong: cramWrong,
    words: APP_STATE.sessionWrongWords || [],
  });

  logAnalyticsEvent("complete_training_session", {
    ...getTrainingAnalyticsParams("cram"),
    total_count: cramTotal,
    correct_count: cramCorrect,
    wrong_count: cramWrong,
    repeat_count: TRAINING_CRAM_REPEAT_TOTAL || 3,
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
      "training.done_simple",
      "훈련 세션이 종료되었습니다.",
    );
  }
}
