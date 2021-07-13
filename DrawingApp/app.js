const canvas         = document.getElementById('canvas');
const context        = canvas.getContext('2d');
const clearButton    = document.getElementById('clear');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const sizeElement    = document.getElementById('size');
const colorElement   = document.getElementById('color');
let size             = sizeElement.innerText;
let color            = colorElement.value;

canvas.addEventListener('mousedown', clickEvent => {
	updateColor();
	updateSize();
	let x                 = clickEvent.offsetX;
	let y                 = clickEvent.offsetY;
	const moveListener    = moveEvent => {
		let x2 = moveEvent.offsetX;
		let y2 = moveEvent.offsetY;
		drawCircle(x, y, size, color);
		drawLine(x, y, x2, y2, size, color);
		x = x2;
		y = y2;
		
	};
	const releaseListener = releaseEvent => {
		canvas.removeEventListener('mousemove', moveListener);
		canvas.removeEventListener('mouseup', releaseListener);
	};
	canvas.addEventListener('mousemove', moveListener);
	canvas.addEventListener('mouseup', releaseListener);
});

decreaseButton.addEventListener('click', () => decreaseBrushSize());

increaseButton.addEventListener('click', () => increaseBrushSize());

clearButton.addEventListener('click', () => clearCanvas());

function drawCircle(x, y, radius, fillColor) {
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = fillColor;
	context.fill();
}

function drawLine(x1, y1, x2, y2, radius, fillColor) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineWidth   = radius * 2;
	context.strokeStyle = fillColor;
	context.stroke();
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function updateColor() {
	color = colorElement.value;
}

function updateSize() {
	size = sizeElement.innerText;
}

function increaseBrushSize() {
	sizeElement.innerText = size++;
}

function decreaseBrushSize() {
	sizeElement.innerText = size--;
}