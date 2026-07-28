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
    const labelMap = {
      ko: "KO",
      en: "EN",
      de: "DE",
      es: "ES",
      fr: "FR",
      it: "IT",
      pt: "PT",
      ja: "JA",
      zh: "ZH",
      ru: "RU",
    };
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

  const uiLang = CURRENT_LANG || "ko";
  const studyLang = SETTINGS.studyLang || "de";
  const lines = [];

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
      case "ko":
        labelBase = "기본형";
        break;
      case "en":
        labelBase = "Base form";
        break;
      case "de":
        labelBase = "Grundform";
        break;
      case "es":
        labelBase = "Forma base";
        break;
      case "fr":
        labelBase = "Forme de base";
        break;
      case "it":
        labelBase = "Forma base";
        break;
      case "pt":
        labelBase = "Forma base";
        break;
      case "ja":
        labelBase = "基本形";
        break;
      case "zh":
        labelBase = "基本形式";
        break;
      case "ru":
        labelBase = "основная форма";
        break;
      default:
        labelBase = "Base form";
    }
    lines.push(`${labelBase}: ${base}`);
  }

  // 읽기/로마니제이션 (언어별 reading map)
  const reading =
    studyLang === "ja"
      ? hasKanji(base)
        ? getReadingForLang(word, studyLang)
        : ""
      : studyLang === "zh"
      ? hasCjkHan(base)
        ? getReadingForLang(word, studyLang)
        : ""
      : getReadingForLang(word, studyLang);
  if (reading) {
    let labelReading;
    switch (uiLang) {
      case "ko":
        labelReading = "읽기";
        break;
      case "en":
        labelReading = "Reading";
        break;
      case "de":
        labelReading = "Lesung";
        break;
      case "es":
        labelReading = "Lectura";
        break;
      case "fr":
        labelReading = "Lecture";
        break;
      case "it":
        labelReading = "Lettura";
        break;
      case "pt":
        labelReading = "Leitura";
        break;
      case "ja":
        labelReading = "読み";
        break;
      case "zh":
        labelReading = "读音";
        break;
      case "ru":
        labelReading = "Чтение";
        break;
      default:
        labelReading = "Reading";
    }
    lines.push(`${labelReading}: ${reading}`);
  }

  // 복수형 (명사만)
  if (word.plural) {
    let labelPlural;
    switch (uiLang) {
      case "ko":
        labelPlural = "복수형";
        break;
      case "en":
        labelPlural = "Plural";
        break;
      case "de":
        labelPlural = "Plural";
        break;
      case "es":
        labelPlural = "Plural";
        break;
      case "fr":
        labelPlural = "Pluriel";
        break;
      case "it":
        labelPlural = "Plurale";
        break;
      case "pt":
        labelPlural = "Plural";
        break;
      case "ja":
        labelPlural = "複数形";
        break;
      case "zh":
        labelPlural = "复数";
        break;
      case "ru":
        labelPlural = "Множественное";
        break;
      default:
        labelPlural = "Plural";
    }
    lines.push(`${labelPlural}: ${word.plural}`);
  }

  // 동사 변화 (conj)
  const conj = word.conj;
  if (conj && typeof conj === "object") {
    const presList = [];
    let past = null;
    let part2 = null;
    let aux = null;

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
        case "ko":
          label = "현재형";
          break;
        case "en":
          label = "Present";
          break;
        case "de":
          label = "Präsens";
          break;
        case "es":
          label = "Presente";
          break;
        case "fr":
          label = "Présent";
          break;
        case "it":
          label = "Presente";
          break;
        case "pt":
          label = "Presente";
          break;
        case "ja":
          label = "現在形";
          break;
        case "zh":
          label = "现在时";
          break;
        case "ru":
          label = "Настоящее время";
          break;
        default:
          label = "Present";
      }
      lines.push(`${label}: ${presList.join(" | ")}`);
    }

    if (past) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "과거형";
          break;
        case "en":
          label = "Simple past";
          break;
        case "de":
          label = "Präteritum";
          break;
        case "es":
          label = "Pretérito";
          break;
        case "fr":
          label = "Passé";
          break;
        case "it":
          label = "Passato";
          break;
        case "pt":
          label = "Pretérito";
          break;
        case "ja":
          label = "過去形";
          break;
        case "zh":
          label = "过去时";
          break;
        case "ru":
          label = "Прошедшее время";
          break;
        default:
          label = "Simple past";
      }
      lines.push(`${label}: ${past}`);
    }

    if (part2) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "과거분사";
          break;
        case "en":
          label = "Past participle";
          break;
        case "de":
          label = "Partizip II";
          break;
        case "es":
          label = "Participio pasado";
          break;
        case "fr":
          label = "Participe passé";
          break;
        case "it":
          label = "Participio passato";
          break;
        case "pt":
          label = "Particípio passado";
          break;
        case "ja":
          label = "過去分詞";
          break;
        case "zh":
          label = "过去分词";
          break;
        case "ru":
          label = "Причастие II";
          break;
        default:
          label = "Past participle";
      }
      lines.push(`${label}: ${part2}`);
    }

    if (aux) {
      let label;
      switch (uiLang) {
        case "ko":
          label = "조동사";
          break;
        case "en":
          label = "Auxiliary";
          break;
        case "de":
          label = "Hilfsverb";
          break;
        default:
          label = "Aux";
      }
      lines.push(`${label}: ${aux}`);
    }
  }

  // 예문
  if (Array.isArray(word.examples) && word.examples.length > 0) {
    const first = word.examples[0];

    let labelEx;
    switch (uiLang) {
      case "ko":
        labelEx = "예";
        break;
      case "en":
        labelEx = "Ex";
        break;
      case "de":
        labelEx = "Bsp";
        break;
      case "es":
        labelEx = "Ej";
        break;
      case "fr":
        labelEx = "Ex";
        break;
      case "it":
        labelEx = "Es";
        break;
      case "pt":
        labelEx = "Ex";
        break;
      case "ja":
        labelEx = "例";
        break;
      case "zh":
        labelEx = "例";
        break;
      case "ru":
        labelEx = "Прим";
        break;
      default:
        labelEx = "Ex";
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
    studyText = buildStudyForm(word);
  } else {
    const primary = getPrimaryStudyText(word);
    if (primary) {
      studyText = primary;
    } else {
      // 새 스키마: meanings에서 가져옴
      studyText =
        (word.meanings && word.meanings[studyLang]) || word.lemma || "";
    }
  }

  const posText = getPosWithMeaning(word);
  const fullMeaning = getFullMeaningForDetail(word); // ✅ 뜻 전체
  const extraText = getExtraDetailForWord(word); // ✅ CEFR/기본형/변화형/예문

  if (DOM.detailTitle) DOM.detailTitle.textContent = studyText || "";
  if (DOM.detailPos) DOM.detailPos.textContent = posText || "-";
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
  if (typeof scheduleNativeChromeUpdate === "function") {
    scheduleNativeChromeUpdate({ force: true });
  }
}

function closeWordDetail() {
  if (!DOM.detailOverlay) return;
  DOM.detailOverlay.classList.remove("active");
  if (typeof scheduleNativeChromeUpdate === "function") {
    scheduleNativeChromeUpdate({ force: true });
  }
}
