const text = document.getElementById('text');
const textToType = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laudantium modi molestiae saepe! A ab excepturi fuga illo.`;
let index = 1;
let speed = 100;

writeText();

function writeText() {
    text.innerText = textToType.slice(0, index);
    index++;
    let typingTimeout = setTimeout(writeText, speed);
    if (index > textToType.length) {
        clearTimeout(typingTimeout);
    }
}
