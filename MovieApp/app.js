const apiURL    = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${ apiKey }`;
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${ apiKey }&query=`;
const imagePath = 'https://image.tmdb.org/t/p/w1280';
const form      = document.getElementById('form');
const search    = document.getElementById('search');
const main      = document.getElementById('main');
let page        = 1;

getMovies(apiURL);

async function getMovies(url) {
	const response = await fetch(`${ url }&page=${ page }`);
	const data     = await response.json();
	displayMovies(data.results);
}

form.addEventListener('submit', event => {
	event.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== '') {
		getMovies(`${ searchURL + searchTerm }`);
		search.value = '';
	} else {
		window.location.reload();
	}
});

function displayMovies(movies) {
	main.innerHTML = '';
	movies.forEach(({ title, poster_path, vote_average, overview }) => {
		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
			<img src="${ imagePath }${ poster_path }" alt="${ title } Cover Image">
			<div class="movie__info">
				<h3 class="movie__title">${ title }</h3>
				<span class="movie__rating ${ getClassByRating(vote_average) }">${ vote_average }</span>
			</div>
			<div class="overview">
				<h3>Overview</h3>
				<p>${ overview }</p>
			</div>`;
		main.appendChild(movieElement);
	});
}

function getClassByRating(rating) {
	if (rating >= 8) {
		return 'green';
	} else {
		return rating >= 5 ? 'orange' : 'red';
	}
	
}