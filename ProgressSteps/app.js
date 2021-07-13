const progressBar = document.getElementById('progressBar');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const circles     = document.querySelectorAll('.circle');
let currentStep   = 1;
nextBtn.addEventListener('click', () => {
	if (currentStep >= circles.length) {
		currentStep = circles.length;
	} else {
		currentStep++;
	}
	update();
});
prevBtn.addEventListener('click', () => {
	if ( ! currentStep < 1) {
		currentStep--;
	}
	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (index < currentStep) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	const actives           = document.querySelectorAll('.active');
	progressBar.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
	prevBtn.disabled        = currentStep === 1;
	nextBtn.disabled        = currentStep === circles.length;
}