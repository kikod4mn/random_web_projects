const sliderContainer = document.getElementById('sliderContainer');
const leftSlide       = document.getElementById('leftSlide');
const rightSlide      = document.getElementById('rightSlide');
const upButton        = document.getElementById('upButton');
const downButton      = document.getElementById('downButton');
const slides          = [
	{
		bgImage: 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80',
		heading: 'Nature Flower',
		text   : 'All in pink!',
		bgColor: '#fd3555',
	},
	{
		bgImage: 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
		heading: 'Blue Sky',
		text   : 'with it\'s mountains',
		bgColor: '#2a86ba',
	},
	{
		bgImage: 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
		heading: 'Lonely Castle',
		text   : 'in the wilderness',
		bgColor: '#252e33',
	},
	{
		bgImage: 'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
		heading: 'Flying Eagle',
		text   : 'in the sunset',
		bgColor: '#ffb866',
	},
];
let activeSlideIndex  = 0;

upButton.addEventListener('click', () => slide('up'));
downButton.addEventListener('click', () => slide('down'));

createSlides();

leftSlide.style.top = `-${ (slides.length - 1) * 100 }vh`;

function createSlides() {
	leftSlide.innerHTML  = '';
	rightSlide.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		leftSlide.appendChild(createLeftSlideEl(slides[i]));
	}
	for (let i = slides.length - 1; i >= 0; i--) {
		rightSlide.appendChild(createRightSlideEl(slides[i]));
	}
}

function slide(direction) {
	let sliderHeight = sliderContainer.clientHeight;
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex > slides.length - 1) activeSlideIndex = 0;
	} else {
		activeSlideIndex--;
		if (activeSlideIndex < 0) activeSlideIndex = slides.length - 1;
	}
	rightSlide.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`;
	leftSlide.style.transform  = `translateY(${ activeSlideIndex * sliderHeight }px)`;
}

function createLeftSlideEl(slide) {
	const leftSlideEl                 = document.createElement('div');
	leftSlideEl.style.backgroundColor = slide.bgColor;
	const headingEl                   = document.createElement('h1');
	headingEl.innerText               = slide.heading;
	const textEl                      = document.createElement('p');
	textEl.innerText                  = slide.text;
	leftSlideEl.appendChild(headingEl);
	leftSlideEl.appendChild(textEl);
	return leftSlideEl;
}

function createRightSlideEl(slide) {
	const rightSlideEl                 = document.createElement('div');
	rightSlideEl.style.backgroundImage = `url(${ slide.bgImage })`;
	return rightSlideEl;
}

/*
 ORIGINAL SOLUTION
 */
// const sliderContainer = document.getElementById('sliderContainer');
// const leftSlide       = document.getElementById('leftSlide');
// const rightSlide      = document.getElementById('rightSlide');
// const upButton        = document.getElementById('upButton');
// const downButton      = document.getElementById('downButton');
// const slidesLength    = rightSlide.querySelectorAll('div').length;
// let activeSlideIndex  = 0;
// upButton.addEventListener('click', slideUp);
// downButton.addEventListener('click', slideDown);
//
// leftSlide.style.top = `-${ (slidesLength - 1) * 100 }vh`;
//
// function slideUp() {
// 	const sliderHeight = sliderContainer.clientHeight;
// 	activeSlideIndex++;
// 	if (activeSlideIndex > slidesLength - 1) {
// 		activeSlideIndex = 0;
// 	}
// 	rightSlide.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`;
// 	leftSlide.style.transform  = `translateY(${ activeSlideIndex * sliderHeight }px)`;
// }
//
// function slideDown() {
// 	const sliderHeight = sliderContainer.clientHeight;
// 	activeSlideIndex--;
// 	if (activeSlideIndex < 0) {
// 		activeSlideIndex = slidesLength - 1;
// 	}
// 	rightSlide.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`;
// 	leftSlide.style.transform  = `translateY(${ activeSlideIndex * sliderHeight }px)`;
// }

/*
 ORIGINAL SOLUTION
 */