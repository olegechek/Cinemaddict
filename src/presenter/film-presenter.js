import FilmCardView from '../view/film-card-view.js';
import { render, replace, remove } from '../framework/render.js';

export default class FilmPresenter {
  #film = null;
  #container = null;
  #changeData = null;
  #clickCardHandler = null;
  #escKeyDownHandler = null;

  #filmCardComponent = null;

  constructor(container, changeData, clickCardHandler, escKeyDownHandler) {
    this.#container = container;
    this.#changeData = changeData;
    this.#clickCardHandler = clickCardHandler;
    this.#escKeyDownHandler = escKeyDownHandler;
  }

  init = (film) => {
    this.#film = film;
    const prevFilmCardComponent = this.#filmCardComponent;
    console.log(this.#film);
    this.#filmCardComponent = new FilmCardView(this.#film);

    console.log(this.#filmCardComponent);

    this.#filmCardComponent.setFilmCardClickHandler(() => {
      this.#clickCardHandler(this.#film);
      document.addEventListener('keydown', this.#escKeyDownHandler);
    });

    this.#filmCardComponent.setWatchlistBtnClickHandler(this.#watchlistBtnClickHandler);

    if (prevFilmCardComponent === null) {
      render(this.#filmCardComponent, this.#container.element);
      return;
    }

    replace(this.#filmCardComponent, prevFilmCardComponent);

    remove(prevFilmCardComponent);

  };

  destroy = () => {
    remove(this.#filmCardComponent);
  };

  #watchlistBtnClickHandler = () => {
    console.log('ЗАЛУПА !!!');
    console.log({...this.#film, userDetails: {...this.#film.userDetails, watchlist: !this.#film.userDetails.watchlist},});
    this.#changeData({...this.#film, userDetails: {...this.#film.userDetails, watchlist: !this.#film.userDetails.watchlist},});
  };


}



//console.log(this.#filmCardComponent);

/*this.#filmCardComponent.setWatchlistBtnClickHandler(this.#watchlistBtnClickHandler);*/
/*
    if (prevFilmCardComponent === null) {
      render(this.#filmCardComponent, this.#container.element);
      return;
    }
*/
//  replace(this.#filmCardComponent, prevFilmCardComponent);

//  remove(prevFilmCardComponent);


/*  #watchlistBtnClickHandler = () => {
    this.#changeData({
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        watchlist: !this.#film.userDetails.watchlist
      },
    });
  };
*/


/*

      this.filmCardComponent.setWatchListClickHandler();
      const razmetka = this.filmCardComponent.element;
      console.log(razmetka);

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


  console.log(this.filmCardComponent.getFilmCard());

  this.#filmCardComponent.setWatchListHandler(() => {

  });

  render(this.filmCardComponent, this.#container.element);
};

  destroy = () => {
    remove(this.#filmCardComponent);
  };

  #watchlistBtnClickHandler = () => {
    this.#changeData({
      ...this.#film,
      userDetails: {
        ...this.#film.userDetails,
        watchlist: !this.#film.userDetails.watchlist
      },
    });
  };

*/
