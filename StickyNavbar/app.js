const navbar = document.getElementById('nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > navbar.offsetHeight + 75) {
		navbar.classList.add('active');
	} else {
		navbar.classList.remove('active');
	}
}
