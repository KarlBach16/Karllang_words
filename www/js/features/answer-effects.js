// Visual and haptic feedback for answer results.

// ✅ 정답/오답 시 카드 배경 이펙트
function applyAnswerEffect(isCorrect) {
  if (!DOM.mainCard) return;

  // ✅ 정답/오답 햅틱
  // triggerHaptic는 아까 전역에 만든 그 함수
  if (typeof triggerHaptic === "function") {
    triggerHaptic(isCorrect ? "success" : "error");
  }
  // 이전 상태 제거
  DOM.mainCard.classList.remove("card-correct", "card-wrong");

  // true → 정답, false → 오답
  if (isCorrect === true) {
    DOM.mainCard.classList.add("card-correct");
  } else if (isCorrect === false) {
    DOM.mainCard.classList.add("card-wrong");
  }
}
