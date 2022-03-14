const date          = document.getElementById('date');
const time          = document.getElementById('time');
const days          = document.getElementById('days');
const hours         = document.getElementById('hours');
const minutes       = document.getElementById('minutes');
const seconds       = document.getElementById('seconds');
const initiate      = document.getElementById('initiate');
const clear         = document.getElementById('clear');
const digits        = document.querySelectorAll('.digit');
const DIGIT_CLASSES = { dayClass: 'below__one-day', hourClass: 'below__one-hour', minuteClass: 'below__one-minute' };
let clockInterval;

const timeLeft = endDate => {
	return +endDate - +new Date();
};

const getDays = endTime => Math.floor(endTime / (1000 * 60 * 60 * 24));

const setDays = daysLeft => days.innerText = daysLeft;

const getHours = endTime => Math.floor((endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const setHours = hoursLeft => hours.innerText = hoursLeft;

const getMinutes = endTime => Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));

const setMinutes = minutesLeft => minutes.innerText = minutesLeft;

const getSeconds = endTime => Math.floor((endTime % (1000 * 60)) / 1000);

const setSeconds = secondsLeft => seconds.innerText = secondsLeft;

const setDigitsBelowOneDay = () => {
	for (const digit of digits) {
		if (digit.classList.contains(DIGIT_CLASSES.hourClass)) {
			digit.classList.remove(DIGIT_CLASSES.hourClass);
		}
		if (digit.classList.contains(DIGIT_CLASSES.minuteClass)) {
			digit.classList.remove(DIGIT_CLASSES.minuteClass);
		}
		if ( ! digit.classList.contains(DIGIT_CLASSES.dayClass)) {
			digit.classList.add(DIGIT_CLASSES.dayClass);
		}
	}
};

const setDigitsBelowOneHour = () => {
	for (const digit of digits) {
		if ( ! digit.classList.contains(DIGIT_CLASSES.hourClass)) {
			digit.classList.add(DIGIT_CLASSES.hourClass);
		}
		if (digit.classList.contains(DIGIT_CLASSES.minuteClass)) {
			digit.classList.remove(DIGIT_CLASSES.minuteClass);
		}
		if (digit.classList.contains(DIGIT_CLASSES.dayClass)) {
			digit.classList.remove(DIGIT_CLASSES.dayClass);
		}
	}
};

const setDigitsBelowOneMinute = () => {
	for (const digit of digits) {
		if (digit.classList.contains(DIGIT_CLASSES.hourClass)) {
			digit.classList.remove(DIGIT_CLASSES.hourClass);
		}
		if ( ! digit.classList.contains(DIGIT_CLASSES.minuteClass)) {
			digit.classList.add(DIGIT_CLASSES.minuteClass);
		}
		if (digit.classList.contains(DIGIT_CLASSES.dayClass)) {
			digit.classList.remove(DIGIT_CLASSES.dayClass);
		}
	}
};

const setDigitsAsCounting = () => {
	for (const digit of digits) {
		if ( ! digit.classList.contains('counting__down')) {
			digit.classList.add('counting__down');
		}
	}
};

const removeDigitsAsCounting = () => {
	for (const digit of digits) {
		if (digit.classList.contains('counting__down')) {
			digit.classList.remove('counting__down');
		}
	}
};

const setDigitsAsFinished = () => {
	for (const digit of digits) {
		if ( ! digit.classList.contains('counting__down-finished')) {
			digit.classList.add('counting__down-finished');
		}
	}
};

const setTime = endDate => {
	const tL = timeLeft(endDate);
	if (tL > 0) {
		const daysLeft    = getDays(tL);
		const hoursLeft   = getHours(tL);
		const minutesLeft = getMinutes(tL);
		setSeconds(getSeconds(tL));
		setMinutes(minutesLeft);
		setHours(hoursLeft);
		setDays(daysLeft);
		if (minutesLeft <= 0 && hoursLeft <= 0 && daysLeft <= 0) {
			setDigitsBelowOneMinute();
		} else if (hoursLeft <= 0 && daysLeft <= 0) {
			setDigitsBelowOneHour();
		} else if (daysLeft <= 0) {
			setDigitsBelowOneDay();
		} else {
			setDigitsAsCounting();
		}
	}
	if (tL === 0) {
		removeDigitsAsCounting();
		setDigitsAsFinished();
	}
	if (tL < 0) {
		// ensure timers remain zero and clear the interval
		zeroTimers();
		clearInterval(clockInterval);
		removeDigitsAsCounting();
		setDigitsAsFinished();
	}
};

const startClock = endDate => {
	clearCountdown();
	clockInterval = setInterval(() => {
		setTime(endDate);
	}, 500);
};

const parseTime = (date, time) => {
	if ( ! time) {
		return new Date(date);
	}
	return new Date(`${ date } ${ time }`);
};

const startCountdown = () => {
	zeroTimers();
	if ( ! date.value) {
		// todo make better feedback
		alert('Enter a valid date!');
		return;
	}
	const endDate = parseTime(date.value, time.value);
	if (+endDate < +new Date()) {
		// todo make better feedback
		alert('You must choose a date and time in the future!');
		return;
	}
	startClock(endDate);
};

const zeroTimers = () => {
	setSeconds(0);
	setMinutes(0);
	setHours(0);
	setDays(0);
	for (const digit of digits) {
		digit.classList.remove('counting__down');
		digit.classList.remove('counting__down-finished');
		for (const digitClass of Object.values(DIGIT_CLASSES)) {
			digit.classList.remove(digitClass);
		}
	}
};

const clearCountdown = () => {
	clearInterval(clockInterval);
	zeroTimers();
};

const resetInputs = () => {
	date.value = '';
	time.value = '';
};

const init = () => {
	clearCountdown();
	resetInputs();
	let today = new Date().toLocaleDateString().split('.');
	// ISO expects a 0 in one number month
	if (today[1].length === 1) {
		today[1] = `0${ today[1] }`;
	}
	today      = today.reverse().join('-');
	date.value = today;
	time.value = new Date().toLocaleTimeString().substring(0, 5);
};

init();

initiate.addEventListener('click', startCountdown);
clear.addEventListener('click', () => {
	clearCountdown();
	resetInputs();
});