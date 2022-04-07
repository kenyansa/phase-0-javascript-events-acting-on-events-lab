// Your code here
const DODGER = document.getElementById("dodger");
const GAME = document.getElementById("game");

  function moveDodgerRight() {
  window.requestAnimationFrame(function() {
    const left = positionToInteger(DODGER.style.left)
    if (left < 360) {
      DODGER.style.left = `${left + 4}px`;
    }
  });
  function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
