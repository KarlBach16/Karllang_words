// CEFR label and progress rendering.

// ✅ CEFR 값 표시용 공통 헬퍼
function getCefrDisplayLabel(value) {
  const pack = t() || {};
  return formatCefrLabelForDisplay(value, pack);
}

function refreshCefrRowLabels() {
  if (!DOM.cefrLabels) return;
  ["A1", "A2", "B1", "B2"].forEach((lvl) => {
    const el = DOM.cefrLabels[lvl];
    if (!el) return;
    el.textContent = getCefrDisplayLabel(lvl);
  });
}

function updateCefrProgress() {
  if (!DOM.cefrBars || !DOM.cefrCounts) return;

  const allWordsRaw = getAllWords();
  const allWords = allWordsRaw.filter(belongsToCurrentStudyLang);

  const levels = ["A1", "A2", "B1", "B2"];

  const total = {};
  const done = {};
  levels.forEach((lvl) => {
    total[lvl] = 0;
    done[lvl] = 0;
  });

  allWords.forEach((w) => {
    const rawLevel = (w.cefr || "").toString().trim().toUpperCase();

    if (!levels.includes(rawLevel)) return;

    total[rawLevel] += 1;

    const st = getWordState(w);
    if (st.level > 0) {
      done[rawLevel] += 1;
    }
  });

  levels.forEach((lvl) => {
    const bar = DOM.cefrBars[lvl];
    const label = DOM.cefrCounts[lvl];
    if (!bar || !label) return;

    const tTotal = total[lvl] || 0;
    const tDone = done[lvl] || 0;
    const percent = tTotal > 0 ? Math.round((tDone / tTotal) * 100) : 0;

    bar.style.width = tTotal > 0 ? `${percent}%` : "0%";
    label.textContent = `${tDone}/${tTotal} (${percent}%)`;
  });
}
