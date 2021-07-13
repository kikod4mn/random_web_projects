const content = document.getElementById('content');

setTimeout(getData, 2500);

const data = [
	{
		title       : 'Lorem ipsum dolor sit amet.',
		headerImage : 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		authorName  : 'John Doe',
		date        : 'June, 30, 2021',
	},
	{
		title       : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		headerImage : 'https://images.unsplash.com/photo-1585241936939-be4099591252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		authorName  : 'Jonas Doe',
		date        : 'April, 30, 2021',
	},
	{
		title       : 'Ipsum dolor sit amet, con?',
		headerImage : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		authorName  : 'Jane Doe',
		date        : 'January, 30, 2021',
	},
	{
		title       : 'Ipsum dolor sit amet, con?',
		headerImage : 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		authorName  : 'John Doe',
		date        : 'January, 30, 2021',
	},
	{
		title       : 'Ipsum dolor sit amet, con?',
		headerImage : 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		authorName  : 'Jonas Doe',
		date        : 'January, 30, 2021',
	},
	{
		title       : 'Ipsum dolor sit amet, con?',
		headerImage : 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
		excerpt     : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eligendi?',
		profileImage: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80',
		authorName  : 'Jane Doe',
		date        : 'January, 30, 2021',
	},
];

function getData() {
	// reset content html each call
	content.innerHTML = '';
	data.forEach(post => {
		displayPost(post);
	});
}

function displayPost(post) {
	content.appendChild(createCard(post));
}

function createCard(post) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.appendChild(createHeader(post));
	card.appendChild(createContent(post));
	return card;
}

function createHeader(post) {
	const header = document.createElement('div');
	header.classList.add('card__header');
	header.classList.add('animated__bg');
	header.innerHTML = `<img src="${ post.headerImage }" alt="${ post.title } cover image" />`;
	return header;
}

function createContent(post) {
	const content = document.createElement('div');
	content.classList.add('card__content');
	content.appendChild(createTitle(post));
	content.appendChild(createExcerpt(post));
	content.appendChild(createAuthor(post));
	return content;
}

function createTitle(post) {
	const title = document.createElement('h3');
	title.classList.add('card__title');
	title.innerText = post.title;
	return title;
}

function createExcerpt(post) {
	const excerpt = document.createElement('p');
	excerpt.classList.add('card__excerpt');
	excerpt.innerText = post.excerpt;
	return excerpt;
}

function createAuthor(post) {
	const authorInfo = document.createElement('div');
	authorInfo.classList.add('author');
	const profile = document.createElement('div');
	profile.classList.add('profile__img');
	profile.classList.add('animated__bg');
	profile.innerHTML = `<img src="${ post.profileImage }" alt="${ post.authorName }'s avatar image" />`;
	authorInfo.appendChild(profile);
	const nameAndDate = document.createElement('div');
	nameAndDate.classList.add('author__info');
	const name = document.createElement('strong');
	name.innerText = post.authorName;
	const date     = document.createElement('small');
	date.innerText = post.date;
	nameAndDate.appendChild(name);
	nameAndDate.appendChild(date);
	authorInfo.appendChild(nameAndDate);
	return authorInfo;
}