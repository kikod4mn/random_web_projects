const sounds        = ['all-i-lost', 'shine'];
const buttonWrapper = document.getElementById('buttons');
sounds.forEach(sound => {
	const btn = document.createElement('button');
	btn.classList.add('button');
	btn.innerText = sound;
	btn.addEventListener('click', () => {
		stopSounds();
		document.getElementById(sound).play();
	});
	buttonWrapper.appendChild(btn);
});

function stopSounds() {
	sounds.forEach(sound => {
		const song = document.getElementById(sound);
		song.pause();
		song.currentTime = 0;
	});
}