// Share image card generation, preview, save, and native/web share helpers.

let SHARE_CARD_CACHE = null;

const NativeImageSaver = window.Capacitor
  ? (window.Capacitor.Plugins && window.Capacitor.Plugins.NativeImageSaver) ||
    window.Capacitor.NativeImageSaver ||
    null
  : null;

function getShareStudyLangLabel() {
  const pack = t() || {};
  const code = (SETTINGS.studyLang || "de").toLowerCase();
  const map = {
    de: pack.study_lang_de || "German",
    es: pack.study_lang_es || "Spanish",
    en: pack.study_lang_en || "English",
    fr: pack.study_lang_fr || "French",
    it: pack.study_lang_it || "Italian",
    pt: pack.study_lang_pt || "Portuguese",
    pl: pack.study_lang_pl || "Polish",
    nl: pack.study_lang_nl || "Dutch",
    ru: pack.study_lang_ru || "Russian",
    sv: pack.study_lang_sv || "Swedish",
    ko: pack.study_lang_ko || "Korean",
    ja: pack.study_lang_ja || "Japanese",
    zh: pack.study_lang_zh || "Chinese",
  };
  return map[code] || code.toUpperCase();
}

function getShareModeLabel(mode) {
  if (mode === "word_drop") {
    return trKey("training.mode_word_drop", "Word Drop");
  }
  if (mode === "cram") {
    return trKey("training.mode_cram", "Cram");
  }
  if (mode === "typing") {
    return trKey("typing_mode", "Typing");
  }
  if (mode === "copy") {
    return trKey("copy_mode", "Copy");
  }
  if (mode === "card") {
    return trKey("card_mode", "Cards");
  }
  return trKey("menu.study", "Study");
}

function getTopShareModes(summary) {
  const counts =
    summary && summary.modeCounts && typeof summary.modeCounts === "object"
      ? summary.modeCounts
      : {};
  return Object.entries(counts)
    .filter(([, count]) => Number(count) > 0)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 2)
    .map(([mode]) => getShareModeLabel(mode));
}

function getShareCardData(summary = getDailySummary()) {
  const pack = t() || {};
  const topModes = getTopShareModes(summary);
  const difficultWords = Array.isArray(summary.difficultWords)
    ? summary.difficultWords
        .slice(0, 3)
        .map((item) => item.label)
        .filter(Boolean)
    : [];
  const total = Number(summary.total) || 0;
  const correct = Number(summary.correct) || 0;
  const accuracy = total > 0 ? `${Math.round((correct / total) * 100)}%` : "0%";
  const streakDays = getLearningStreakDays(summary);

  return {
    title: trKey("summary.share_title", "오늘의 단어 훈련"),
    lang: getShareStudyLangLabel(),
    mode: topModes.length ? topModes.join(" + ") : getShareModeLabel("study"),
    total,
    accuracy,
    streak: streakDays,
    difficultWords,
    difficultTitle: trKey("summary.share_difficult", "어려웠던 단어"),
    noDifficultText: trKey(
      "summary.share_no_difficult",
      "오늘 어려웠던 단어 없음",
    ),
    modeTitle: trKey("summary.share_mode", "주요 모드"),
    totalLabel: pack.summary_total || "학습 단어",
    accuracyLabel: trKey("summary.share_accuracy", "정답률"),
    streakLabel: trKey("summary.share_streak", "연속 학습"),
    tagline: trKey("summary.share_tagline", "Type it. Remember it."),
    date: getLocalDateKey(),
  };
}

function drawShareText(ctx, text, x, y, maxWidth, lineHeight) {
  const raw = String(text || "").trim();
  const words = /\s/.test(raw) ? raw.split(/\s+/) : Array.from(raw);
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const glue = /\s/.test(raw) ? " " : "";
    if (ctx.measureText(word).width > maxWidth) {
      Array.from(word).forEach((ch) => {
        const nextChar = line ? `${line}${ch}` : ch;
        if (ctx.measureText(nextChar).width > maxWidth && line) {
          ctx.fillText(line, x, currentY);
          line = ch;
          currentY += lineHeight;
        } else {
          line = nextChar;
        }
      });
      return;
    }
    const next = line ? `${line}${glue}${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = next;
    }
  });

  if (line) {
    ctx.fillText(line, x, currentY);
  }
  return currentY;
}

function createShareCardDataUrl(summary = getDailySummary()) {
  const data = getShareCardData(summary);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  ctx.fillStyle = "#f5f6f7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#2962FF";
  roundRectPath(ctx, 128, 112, 824, 4, 2);
  ctx.fill();

  ctx.fillStyle = "#111827";
  ctx.font =
    '700 52px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText("KarlLang", 128, 178);

  ctx.fillStyle = "#6b7280";
  ctx.font =
    '500 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(data.date, 128, 226);

  ctx.fillStyle = "#111827";
  ctx.font =
    '800 74px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, data.title, 128, 340, 824, 82);

  ctx.fillStyle = "#eff6ff";
  roundRectPath(ctx, 128, 424, 824, 92, 28);
  ctx.fill();
  ctx.fillStyle = "#2962FF";
  ctx.font =
    '700 34px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, `${data.lang} · ${data.modeTitle}: ${data.mode}`, 168, 480, 744, 40);

  const statY = 650;
  drawShareStat(ctx, 128, statY, data.total, data.totalLabel);
  drawShareStat(ctx, 418, statY, data.accuracy, data.accuracyLabel);
  drawShareStat(ctx, 708, statY, data.streak, data.streakLabel);

  ctx.strokeStyle = "rgba(17, 24, 39, 0.08)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(128, 860);
  ctx.lineTo(952, 860);
  ctx.stroke();

  ctx.fillStyle = "#6b7280";
  ctx.font =
    '700 30px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(data.difficultTitle, 128, 940);

  ctx.fillStyle = "#111827";
  ctx.font =
    '700 42px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const difficult = data.difficultWords.length
    ? data.difficultWords.join(" · ")
    : data.noDifficultText;
  drawShareText(ctx, difficult, 128, 1010, 824, 54);

  ctx.strokeStyle = "rgba(0, 200, 83, 0.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(128, 1142);
  ctx.lineTo(952, 1142);
  ctx.stroke();

  ctx.fillStyle = "#00A846";
  ctx.font =
    '800 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText(data.tagline, 540, 1204);
  ctx.textAlign = "left";

  return canvas.toDataURL("image/png");
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawShareStat(ctx, x, y, value, label) {
  ctx.fillStyle = "#111827";
  ctx.font =
    '800 72px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillText(String(value || 0), x, y);
  ctx.fillStyle = "#6b7280";
  ctx.font =
    '600 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  drawShareText(ctx, label, x, y + 46, 220, 34);
}

function prepareShareCard(summary = getDailySummary()) {
  const dataUrl = createShareCardDataUrl(summary);
  if (!dataUrl) return;

  SHARE_CARD_CACHE = { dataUrl, summary };
}

function openShareCardModal() {
  if (!DOM.shareCardOverlay || !DOM.shareCardPreview) return;

  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl) return;

  SHARE_CARD_CACHE = SHARE_CARD_CACHE || { dataUrl, summary: getDailySummary() };
  DOM.shareCardPreview.src = dataUrl;
  if (DOM.shareCardNativeBtn) {
    DOM.shareCardNativeBtn.style.display =
      navigator.share && window.File ? "inline-block" : "none";
  }
  DOM.shareCardOverlay.classList.add("active");
}

function closeShareCardModal() {
  if (!DOM.shareCardOverlay) return;
  DOM.shareCardOverlay.classList.remove("active");
}

function canUseNativeImageSaver() {
  return !!(
    isNativePlatform() &&
    NativeImageSaver &&
    typeof NativeImageSaver.saveImage === "function"
  );
}

async function saveShareCardImageNative(dataUrl) {
  if (!canUseNativeImageSaver()) return false;
  await NativeImageSaver.saveImage({
    dataUrl,
    filename: `karllang-${getLocalDateKey()}.png`,
  });
  return true;
}

async function downloadShareCardImage() {
  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl) return;

  if (canUseNativeImageSaver()) {
    try {
      await saveShareCardImageNative(dataUrl);
      showSystemToast(trKey("summary.share_saved", "이미지를 저장했습니다."));
      return;
    } catch (error) {
      console.warn("Native image save failed", error);
      showSystemToast(trKey("summary.share_failed", "공유하지 못했습니다."));
      return;
    }
  }

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `karllang-${getLocalDateKey()}.png`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  showSystemToast(trKey("summary.share_saved", "이미지를 저장했습니다."));
}

function dataUrlToBlob(dataUrl) {
  const parts = dataUrl.split(",");
  const mime = (parts[0].match(/:(.*?);/) || [])[1] || "image/png";
  const binary = atob(parts[1] || "");
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mime });
}

async function shareCardImage() {
  const dataUrl =
    (SHARE_CARD_CACHE && SHARE_CARD_CACHE.dataUrl) || createShareCardDataUrl();
  if (!dataUrl || !navigator.share || !window.File) {
    downloadShareCardImage();
    return;
  }

  try {
    const file = new File([dataUrlToBlob(dataUrl)], "karllang.png", {
      type: "image/png",
    });
    if (navigator.canShare && !navigator.canShare({ files: [file] })) {
      downloadShareCardImage();
      return;
    }
    await navigator.share({
      title: "KarlLang",
      text: "KarlLang",
      files: [file],
    });
  } catch (error) {
    if (error && error.name === "AbortError") return;
    showSystemToast(trKey("summary.share_failed", "공유하지 못했습니다."));
  }
}
