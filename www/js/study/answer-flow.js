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
