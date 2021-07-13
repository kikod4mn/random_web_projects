const carouselSlide  = document.getElementById('carouselSlide');
const carouselImages = carouselSlide.querySelectorAll('img');
const prevBtn        = document.getElementById('previous');
const nextBtn        = document.getElementById('next');
let currentImage     = 1;
const size           = carouselSlide.clientWidth;

transformSlide();

prevBtn.addEventListener('click', () => {
	currentImage--;
	if (currentImage < 0) {
		currentImage = carouselImages.length;
	}
	enableAnimation();
	transformSlide();
});
nextBtn.addEventListener('click', () => {
	currentImage++;
	if (currentImage > carouselImages.length - 1) {
		currentImage = 0;
	}
	enableAnimation();
	transformSlide();
});
carouselSlide.addEventListener('transitionend', () => {
	if (carouselImages[currentImage].id === 'lastClone') {
		carouselSlide.style.transition = 'none';
		currentImage                   = carouselImages.length - 2;
		transformSlide();
	}
	if (carouselImages[currentImage].id === 'firstClone') {
		carouselSlide.style.transition = 'none';
		currentImage                   = 1;
		transformSlide();
	}
});

function enableAnimation() {
	carouselSlide.style.transition = 'transform 0.5s ease-in-out';
}

function transformSlide() {
	carouselSlide.style.transform = `translateX(${ -size * currentImage }px)`;
}