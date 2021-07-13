const body        = document.body;
const slides      = document.querySelectorAll('.slide');
const leftButton  = document.getElementById('left');
const rightButton = document.getElementById('right');
let activeSlide   = 0;
setBackgroundToBody();
setActiveSlide();

function setBackgroundToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach(slide => slide.classList.remove('active'));
	slides[activeSlide].classList.add('active');
}

leftButton.addEventListener('click', () => {
	activeSlide--;
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	setBackgroundToBody();
	setActiveSlide();
});
rightButton.addEventListener('click', () => {
	activeSlide++;
	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBackgroundToBody();
	setActiveSlide();
});