const jokeElement = document.getElementById('joke');
const jokeButton  = document.getElementById('jokeButton');

generateJoke();

async function generateJoke() {
	const response        = await fetch('https://icanhazdadjoke.com', { headers: { 'Accept': 'application/json' } });
	const data            = await response.json();
	jokeElement.innerText = data.joke;
}

jokeButton.addEventListener('click', () => {
	generateJoke();
});