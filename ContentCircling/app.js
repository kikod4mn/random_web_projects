const open      = document.getElementById('open');
const close     = document.getElementById('close');
const container = document.getElementById('contentContainer');

open.addEventListener('click', () => {
	container.classList.add('show__nav');
});

close.addEventListener('click', () => {
	container.classList.remove('show__nav');
});