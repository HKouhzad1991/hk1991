const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const brushWidth = document.querySelector("#brush-width");

let isDrawing = false;
let currentWidth = 5;

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});
function startDraw() {
  isDrawing = true;
  ctx.beginPath();
}
function drawing(e) {
  if (!isDrawing) {
    return;
  }
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}
function endDraw() {
  isDrawing = false;
}
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", endDraw);

brushWidth.addEventListener("change", () => {
  currentWidth = brushWidth.value;
});
