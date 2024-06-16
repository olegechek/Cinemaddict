import AbstractView from '../framework/view/abstract-view.js';
import { formatStringToYear } from '../utils/common.js';

const createFilmCardTemplate = (generatedFilm) => {
  const { title, totalRating, poster, release, runtime, genre, description, comments, userDetails } = generatedFilm;
  const watchlistClass = userDetails && userDetails.watchlist ? 'film-card__controls-item--active' : '';
  return (`
<article class="film-card">
<a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${totalRating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${formatStringToYear(release.date)}</span>
    <span class="film-card__duration">${runtime}</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <span class="film-card__comments">${comments.length} comments</span>
</a>
<div class="film-card__controls">
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlistClass}" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
</div>
</article>
`);
};

export default class FilmCardView extends AbstractView {

  #filmCard = null;

  constructor(filmCard) {
    super();
    this.#filmCard = filmCard;
  }

  get template() {
    return createFilmCardTemplate(this.#filmCard);
  }

  getFilmCard() {
    return this.#filmCard;
  }

  setFilmCardClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('a').addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  setWatchlistBtnClickHandler(callback) {
    this._callback.watchlistBtnClick = callback;
    this.element
      .querySelector('.film-card__controls-item--add-to-watchlist')
      .addEventListener('click', this.#watchlistBtnClickHandler);
  }

  #watchlistBtnClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchlistBtnClick();
  };

}


  /*setWatchListClickHandler = () => {
    const razmetka = this.element;
    console.log(razmetka);

    const testWatchlist = this.element.querySelector(
      '.film-card__controls-item--add-to-watchlist');
    console.log(testWatchlist);

    testWatchlist.addEventListener('click', () => {

      if (testWatchlist.classList.contains('film-card__controls-item--active')) {
        testWatchlist.classList.remove('film-card__controls-item--active');
      } else {
        testWatchlist.classList.add('film-card__controls-item--active');
      }
    });
  };
*/

  /*
    const testWatchlist = this.filmCardComponent.element.querySelector(
      '.film-card__controls-item--add-to-watchlist');
    console.log(testWatchlist);


    testWatchlist.addEventListener('click', () => {

      if (testWatchlist.classList.contains('film-card__controls-item--active')) {
        testWatchlist.classList.remove('film-card__controls-item--active');
      } else {
        testWatchlist.classList.add('film-card__controls-item--active');
      }
    });

  */


  /*setWatchListHandler = () => {
    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', (event) => {
      const button = event.target;
      if (button.classList.contains('film-card__controls-item--active')) {
        button.classList.remove('film-card__controls-item--active');
      } else {
        button.classList.add('film-card__controls-item--active');
      }
    });
  };*/




