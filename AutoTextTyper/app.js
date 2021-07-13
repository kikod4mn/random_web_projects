const text       = document.getElementById('text');
const textToType = 'I am a programming GOD!!1one JOIN ME!!!';
let index        = 1;
let speed        = 100;

writeText();

function writeText() {
	text.innerText = textToType.slice(0, index);
	index++;
	let typingTimeout = setTimeout(writeText, speed);
	if (index > textToType.length) {
		clearTimeout(typingTimeout);
	}
}