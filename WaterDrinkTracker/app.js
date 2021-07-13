const smallCups  = document.querySelectorAll('.cup.cup__small');
const bigCup     = document.getElementById('bigCup');
const liters     = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining  = document.getElementById('remaining');
updateBigCup();
smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => highlightCup(index));
});

function highlightCup(index) {
	if (smallCups[index].classList.contains('full')
		&& ! smallCups[index].nextElementSibling.classList.contains('full')) {
		index--;
	}
	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	updateBigCup();
}

function updateBigCup() {
	const fullCups  = document.querySelectorAll('.cup.cup__small.full').length;
	const totalCups = smallCups.length;
	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height     = '0';
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height     = `${ fullCups / totalCups * 330 }px`;
		percentage.innerText        = `${ fullCups / totalCups * 100 }%`;
	}
	if (fullCups === totalCups) {
		remaining.style.visibility = 'hidden';
		remaining.style.height     = '0';
	} else {
		remaining.style.visibility = 'visible';
		remaining.style.height     = 'auto';
		liters.innerText           = `${ 2 - (250 * fullCups / 1000) }L`;
	}
}
