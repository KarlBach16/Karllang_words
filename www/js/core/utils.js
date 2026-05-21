// Core utility helpers shared by study, training, and wordbook flows.

// HTML 안전하게 만들기용
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// "전체 글자 + 밑줄" 고스트 HTML.
function buildFullGhostHtml(full) {
  let html = "";
  for (let i = 0; i < full.length; i++) {
    const ch = full[i];

    if (ch === " " || ch === "\u00A0") {
      html += ch;
    } else {
      html += `<span class="ghost-char">${escapeHtml(ch)}</span>`;
    }
  }
  return html;
}

// "앞 글자만 보이는" 고스트 HTML.
function buildFirstLetterGhostHtmlForCram(full) {
  let html = "";
  let startedWord = false;

  for (let i = 0; i < full.length; i++) {
    const ch = full[i];

    if (ch === " " || ch === "\u00A0") {
      html += ch;
      startedWord = false;
    } else if (!startedWord) {
      html += `<span class="ghost-char">${escapeHtml(ch)}</span>`;
      startedWord = true;
    } else {
      html += `<span class="ghost-char ghost-hidden">${escapeHtml(ch)}</span>`;
    }
  }

  return html;
}

function buildTypingHintGhostHtml(full, revealCount) {
  const parts = (full || "").split(" ");
  let articleRevealCount = 0;
  let wordRevealCount = revealCount;

  if (parts.length >= 2 && revealCount > 0) {
    articleRevealCount = 1;
    wordRevealCount = Math.max(0, revealCount - 1);
  }

  function buildSegmentHtml(segment, segmentRevealCount) {
    let html = "";
    let revealed = 0;

    for (const ch of Array.from(segment || "")) {
      const isRevealed = revealed < segmentRevealCount;
      revealed += 1;
      html += isRevealed
        ? `<span class="ghost-char">${escapeHtml(ch)}</span>`
        : `<span class="ghost-char ghost-hidden">${escapeHtml(ch)}</span>`;
    }

    return html;
  }

  if (parts.length >= 2) {
    const article = parts[0];
    const word = parts.slice(1).join(" ");
    return [
      buildSegmentHtml(article, articleRevealCount),
      buildTypingHintGhostHtml(word, wordRevealCount),
    ].join(" ");
  }

  return buildSegmentHtml(full, wordRevealCount);
}

function normalizeAnswer(str) {
  return (str || "").trim().replace(/\s+/g, " ").toLowerCase();
}
