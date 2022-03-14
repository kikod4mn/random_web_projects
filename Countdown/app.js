const nums    = document.querySelectorAll('.nums span');
const counter = document.getElementById('counter');
const final   = document.getElementById('final');
const replay  = document.getElementById('replay');

function runAnimation() {
	const nextToLast = nums.length - 1;
	nums.forEach((num, idx) => {
		num.addEventListener('animationend', e => {
			if (e.animationName === 'goIn' && idx !== nextToLast) {
				num.classList.remove('in');
				num.classList.add('out');
				return;
			}
			if (e.animationName === 'goOut' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
				return;
			}
			counter.classList.add('hide');
			final.classList.add('show');
		});
	});
}

replay.addEventListener('click', () => {
	counter.classList.remove('hide');
	final.classList.remove('show');
	nums.forEach(num => {
		num.className = '';
	});
	nums[0].classList.add('in');
});

runAnimation();