const bg          = document.querySelector('.bg');
const loadingText = document.querySelector('.loading__text');
let load          = 0;

let interval = setInterval(() => {
	load++;
	if (load > 99) {
		clearInterval(interval);
	}
	loadingText.innerText     = `${ load }%`;
	loadingText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter           = `blur(${ scale(load, 0, 100, 30, 0) }px)`;
}, 30);

const scale = (num, inMin, inMax, outMin, outMax) => {
	return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};