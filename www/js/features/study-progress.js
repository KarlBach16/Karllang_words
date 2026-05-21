function fadeSwapText(el, newText) {
  if (!el) return;

  if (el.classList.contains("changing")) {
    el.textContent = newText;
    return;
  }

  el.classList.add("changing");

  setTimeout(() => {
    el.textContent = newText;
    el.classList.remove("changing");
  }, 80);
}

function formatProgressText(done, total, level) {
  const pack = t() || {};
  const left = Math.max(total - done, 0);

  if (pack.progress_template) {
    return pack.progress_template
      .replace("{done}", String(done))
      .replace("{total}", String(total))
      .replace("{left}", String(left))
      .replace("{level}", String(level));
  }

  const leftLabel = pack.left_label || "개 남음";
  if (CURRENT_LANG === "en") {
    return `${done}/${total} (${left} ${
      pack.left_label || "left"
    }) [Lv.${level}]`;
  }
  return `${done}/${total} (${left} ${leftLabel}) [Lv.${level}]`;
}

function updateProgressBar() {
  const total = APP_STATE.totalTarget || 0;
  const done = APP_STATE.completed || 0;

  if (DOM.progressBar) {
    const percent = total > 0 ? (done / total) * 100 : 0;
    DOM.progressBar.style.width = `${percent}%`;
  }

  const level =
    APP_STATE.currentCard && APP_STATE.currentCard.state
      ? APP_STATE.currentCard.state.level || 0
      : 0;

  if (DOM.progressText) {
    DOM.progressText.textContent = formatProgressText(done, total, level);
  }

  const isTrainingMode =
    (typeof TRAINING_MODE_ACTIVE !== "undefined" && TRAINING_MODE_ACTIVE) ||
    (typeof TRAINING_MODE_KIND !== "undefined" &&
      TRAINING_MODE_KIND &&
      TRAINING_MODE_KIND !== "none");

  if (!DOM.sessionProgress) {
    return;
  }

  if (
    isTrainingMode &&
    typeof TRAINING_MODE_KIND !== "undefined" &&
    TRAINING_MODE_KIND === "cram"
  ) {
    const words =
      typeof TRAINING_CRAM_WORDS !== "undefined" && TRAINING_CRAM_WORDS
        ? TRAINING_CRAM_WORDS
        : [];
    const totalWords = words.length || total;

    if (totalWords > 0) {
      let idx =
        typeof TRAINING_CRAM_INDEX === "number" ? TRAINING_CRAM_INDEX : done;

      if (idx < 0) idx = 0;
      if (idx >= totalWords) idx = totalWords - 1;

      const current = idx + 1;
      DOM.sessionProgress.textContent = `${current}/${totalWords}`;
    } else {
      DOM.sessionProgress.textContent = "";
    }

    return;
  }

  if (total > 0) {
    const remaining = APP_STATE.queue ? APP_STATE.queue.length : 0;
    let currentIndex;

    if (remaining > 0) {
      currentIndex = total - remaining + 1;
    } else {
      currentIndex = total;
    }

    if (currentIndex < 1) currentIndex = 1;
    if (currentIndex > total) currentIndex = total;

    DOM.sessionProgress.textContent = `${currentIndex}/${total}`;
  } else {
    DOM.sessionProgress.textContent = "";
  }
}
