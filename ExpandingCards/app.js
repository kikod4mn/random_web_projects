const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
	panel.addEventListener('click', () => {
		removeActiveClass();
		panel.classList.add('active');
		setTimeout(() => {
			panel.style.backgroundSize = '100% 100%';
		}, 250);
	});
});

function removeActiveClass() {
	panels.forEach(panel => {
		panel.classList.remove('active');
	});
}