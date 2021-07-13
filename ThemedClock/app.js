const hourElement   = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement   = document.querySelector('.time');
const dateElement   = document.querySelector('.date');
const toggle        = document.querySelector('.theme__toggle');
const html          = document.querySelector('html');
const days          = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months        = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const scale = (num, inMin, inMax, outMin, outMax) => {
	return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

setTime();

toggle.addEventListener('click', event => {
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		event.target.innerText = 'Dark Mode';
	} else {
		html.classList.add('dark');
		event.target.innerText = 'Light Mode';
	}
});

function setTime() {
	const time                    = new Date();
	const month                   = time.getMonth();
	const day                     = time.getDay();
	const date                    = time.getDate();
	const hours                   = time.getHours();
	const minutes                 = time.getMinutes();
	const seconds                 = time.getSeconds();
	hourElement.style.transform   = `translate(-50%, -100%) rotate(${ scale(hours, 0, 23, 0, 360) }deg)`;
	minuteElement.style.transform = `translate(-50%, -100%) rotate(${ scale(minutes, 0, 59, 0, 360) }deg)`;
	secondElement.style.transform = `translate(-50%, -100%) rotate(${ scale(seconds, 0, 59, 0, 360) }deg)`;
	timeElement.innerText         =
		`${ hours }:${ minutes < 10 ? `0${ minutes }` : minutes }:${ seconds < 10 ? `0${ seconds }` : seconds }`;
	dateElement.innerHTML         =
		`${ days[day] }, ${ months[month] } <span class="circle">${ date }</span>`;
}

setInterval(setTime, 1000);

