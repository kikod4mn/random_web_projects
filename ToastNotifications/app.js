const messages = [
	{ type: 'success', text: 'This action is good!' },
	{ type: 'warning', text: 'This is potentially dangerous!' },
	{ type: 'error', text: 'This turned out very bad!' },
	{ type: 'info', text: 'Crazy that thing happened now, right?' },
	{ type: '', text: 'Crazy this also happened right now!!' },
];
const config   = {
	types  : {
		success: {
			bgColor   : '#afff00',
			textColor : '#111111',
			timerColor: '#187204',
		},
		warning: {
			bgColor   : '#ffa200',
			textColor : '#f1f1f1',
			timerColor: '#873f08',
		},
		error  : {
			bgColor   : '#dd2233',
			textColor : '#f1f1f1',
			timerColor: '#760101',
		},
		info   : {
			bgColor   : '#03ffff',
			textColor : '#111111',
			timerColor: '#024c4c',
		},
		default: {
			bgColor   : '#ff5fff',
			textColor : '#f1f1f1',
			timerColor: '#53015c',
		},
	},
	options: { duration: 9000 },
};
const button   = document.querySelector('.btn');

button.addEventListener('click', () => {
	createToast(messages[Math.floor(Math.random() * messages.length)]);
});

for (let i = 0; i < messages.length; i++) {
	const el = document.getElementById('toasts');
	if ( ! el) {
		createToastElement();
	}
	setTimeout(() => createToast(messages[i]), i * 1000);
}

function createToastElement() {
	const toastElement = document.createElement('div');
	toastElement.id    = 'toasts';
	document.querySelector('body').appendChild(toastElement);
}

function createToast({ type, text }) {
	let toast = config.types[type];
	if ( ! toast) {
		toast = config.types.default;
	}
	let timer               = config.options.duration;
	let updateTimerInterval = setInterval(() => {
		if (timer <= 0) clearInterval(updateTimerInterval);
		timer = timer - 10;
	}, 10);
	
	const toastElement                 = document.createElement('div');
	toastElement.style.backgroundColor = toast.bgColor;
	toastElement.style.color           = toast.textColor;
	toastElement.className             = `toast toast__${ type }`;
	toastElement.innerText             = text;
	const timerElement                 = document.createElement('div');
	timerElement.classList.add('timer');
	timerElement.style.borderBottomColor = toast.timerColor;
	toastElement.appendChild(timerElement);
	document.getElementById('toasts').appendChild(toastElement);
	// Wait to add the fade in class until after the element is certainly in the DOM
	setTimeout(() => toastElement.classList.add('fade__in'), 50);
	// Add the fade out class 600ms or the duration of the fade out animation before element is removed
	setTimeout(() => toastElement.classList.add('fade__out'), config.options.duration - 600);
	// Remove the toast element from the DOM after its duration
	setTimeout(() => toastElement.remove(), config.options.duration);
	// Set the timer translateX interval that moves the timer bar to the right
	let translateInterval = setInterval(() => {
		timerElement.style.transform = `translateX(${
			scale(timer, 0, config.options.duration - 600, 100, 0)
		}%)`;
	}, 10);
	// Clear all intervals again when element is gone
	setTimeout(() => clearInterval(updateTimerInterval), config.options.duration + 600);
	setTimeout(() => clearInterval(translateInterval), config.options.duration + 600);
}

const scale = (num, inMin, inMax, outMin, outMax) => {
	return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};