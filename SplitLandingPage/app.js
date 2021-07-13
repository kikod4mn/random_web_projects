const left      = document.querySelector('.left');
const right     = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover__left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover__left'));
right.addEventListener('mouseenter', () => container.classList.add('hover__right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover__right'));