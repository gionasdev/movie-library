import View from './View.js';

class MoviesView extends View {
  _parentElement = document.querySelector('.movies');

  _generateMarkup() {
    return `
      <div class="movies__title">${this._data.query}</div>
      <div class="movies__list">${this._data.results
        .map(this._generateMarkupMovie)
        .join('')}</div>
    `;
  }

  _generateMarkupMovie(movie) {
    return `
      <div class="movie">
        <img class="movie__poster" src="https://image.tmdb.org/t/p/w500/${
          movie.poster
        }">
        <div class="movie__info">
          <h1 class="movie__title">${movie.title}</h1>
          <div class="movie__vote"><i class="fas fa-star movie__vote__icon"></i>${
            movie.vote
          }</div>
          <div class="movie__date">${new Date(movie.date).getFullYear()}</div>
        </div>
      </div>
    `;
  }
}

export default new MoviesView();