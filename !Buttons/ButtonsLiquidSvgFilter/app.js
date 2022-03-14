document.addEventListener('DOMContentLoaded',()=>{
	// liquid button transform animation
	const liquidBtns = document.querySelectorAll('.button__liquid');
	const turbulence = document.querySelector('feTurbulence');
	const steps      = 30;
	const interval   = 15;
	let xFreq        = 0.00001;
	let yFreq        = 0.0001;
	const finalXFreq = 0.133;
	const finalYFreq = 0.093;
	turbulence.setAttribute('baseFrequency', `${ xFreq } ${ yFreq }`);
	
	liquidBtns.forEach(button => {
		button.addEventListener('mouseover', () => {
			xFreq = 0.00001;
			yFreq = 0.0001;
			for (let i = 0; i < steps; i++) {
				setTimeout(() => {
					xFreq += finalXFreq / steps;
					yFreq += finalYFreq / steps;
					turbulence.setAttribute('baseFrequency', `${ xFreq } ${ yFreq }`);
				}, i * interval);
			}
		});
	});
})