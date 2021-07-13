const imageContainer = document.getElementById('images');
const leftButton     = document.getElementById('previous');
const rightButton    = document.getElementById('next');
const images         = document.querySelectorAll('.carousel__img');
let index            = 0;
let interval         = setInterval(run, 2000);

leftButton.addEventListener('click', () => {
	index--;
	changeImage();
	resetInterval();
});

rightButton.addEventListener('click', () => {
	index++;
	changeImage();
	resetInterval();
});

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(run, 2000);
}

function changeImage() {
	if (index > images.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = images.length - 1;
	}
	imageContainer.style.transform = `translateX(-${ index * 500 }px)`;
}

function run() {
	index++;
	changeImage();
}

