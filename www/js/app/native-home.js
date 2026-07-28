// Native home payload. The WebView remains responsible for progress calculations.

function getNativeHomePayload() {
  const attendanceDays = Array.from(
    DOM.attendanceWeek?.querySelectorAll(".attendance-day") || [],
  ).map((item) => ({
    label: item.querySelector(".attendance-day-label")?.textContent?.trim() || "",
    attended: item.classList.contains("is-attended"),
    today: item.classList.contains("is-today"),
  }));

  const levels = ["A1", "A2", "B1", "B2"].map((level) => {
    const count = DOM.cefrCounts?.[level]?.textContent?.trim() || "0/0 (0%)";
    const width = Number.parseFloat(DOM.cefrBars?.[level]?.style.width || "0") || 0;
    return {
      label: DOM.cefrLabels?.[level]?.textContent?.trim() || level,
      count,
      percent: Math.max(0, Math.min(100, width)),
    };
  });

  return {
    attendance: {
      title: DOM.attendanceTitle?.textContent?.trim() || "Attendance",
      days: attendanceDays,
    },
    progress: {
      title: DOM.userCefrTitle?.textContent?.trim() || "Vocabulary progress",
      levels,
    },
  };
}
