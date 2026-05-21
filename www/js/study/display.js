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

function getTrainingAnalyticsParams(mode, extra = {}) {
  return {
    study_lang: SETTINGS.studyLang,
    ui_lang: CURRENT_LANG,
    training_mode: mode,
    target_count: APP_STATE.totalTarget || 0,
    ...extra,
  };
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
