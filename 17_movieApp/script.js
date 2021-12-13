// https://www.themoviedb.org/documentation/api/discover
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=338180ef1dc53f478b264a5a3f718b8a&page=1';

// https://developers.themoviedb.org/3/getting-started/images
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=338180ef1dc53f478b264a5a3f718b8a&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
// Get initial Movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
