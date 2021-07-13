const likables = document.querySelectorAll('.likable');

likables.forEach(likable => {
	let count    = 0;
	const loveMe = likable.querySelector('.love__me');
	const times  = likable.querySelector('#likeCount');
	loveMe.addEventListener('dblclick', e => {
		const heart      = document.createElement('i');
		heart.className  = 'fas fa-heart';
		const x          = e.clientX;
		const y          = e.clientY;
		const leftOffset = e.target.offsetLeft;
		const topOffset  = e.target.offsetTop;
		const xInside    = x - leftOffset;
		const yInside    = y - topOffset;
		heart.style.left = `${ xInside }px`;
		heart.style.top  = `${ yInside }px`;
		loveMe.appendChild(heart);
		times.innerText = ++count;
		setTimeout(() => heart.remove(), 1000);
	});
});