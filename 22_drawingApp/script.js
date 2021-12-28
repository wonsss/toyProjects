const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const size = 20;
let isPressed = false;
const color = 'black';
let x;
let y;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener('mousedown', e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', e => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', e => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    console.log(x2, y2);
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});
