import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import { render } from '../framework/render.js';

import { FILM_COUNT_PER_STEP } from '/const.js';
import FilmsListEmptyView from '../view/films-list-empty-view.js';


export default class FilmsPresenter {
  #siteBodyElement = document.querySelector('body');
  #sortComponent = new SortView();
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #filmButtonMoreComponent = new FilmButtonMoreView();
  #filmDetailsComponent = null;

  #container = null;
  #filmsModel = null;
  #commentsModel = null;
  #filmModels = [];
  #films = null;

  #renderedFilmCount = FILM_COUNT_PER_STEP;

  init = (container, filmsModel, commentsModel) => {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
    this.#filmModels = [...this.#filmsModel.films];

    this.#renderFilmBoard();
  };


  #renderFilmBoard() {

    if (this.#filmModels.length === 0) {
      render(new FilmsListEmptyView(), this.#container);
      return;
    }
    render(this.#sortComponent, this.#container);
    render(this.#filmsComponent, this.#container);
    render(this.#filmsListComponent, this.#filmsComponent.element);
    render(this.#filmsListContainerComponent, this.#filmsListComponent.element);

    this.#films = this.#filmModels.slice(0, Math.min(this.#filmModels.length, FILM_COUNT_PER_STEP));

    for (let i = 0; i < this.#films.length; i++) {
      this.#renderFilm(this.#films[i], this.#filmsListContainerComponent);
    }

    if (this.#filmModels.length > FILM_COUNT_PER_STEP) {
      render(this.#filmButtonMoreComponent, this.#filmsListComponent.element);
      this.#filmButtonMoreComponent.setButtonClickHandler(() => this.#filmButtonMoreClickHandler());
    }
  }

  #filmButtonMoreClickHandler() {
    this.#films = this.#filmModels.slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP);
    for (let i = 0; i < this.#films.length; i++) {
      this.#renderFilm(this.#films[i], this.#filmsListContainerComponent);
    }
    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#filmModels.length) {
      this.#filmButtonMoreComponent.element.remove();
      this.#filmButtonMoreComponent.removeElement();
    }
  }


  #renderFilm(film, myContainer) {
    this.filmCardComponent = new FilmCardView(film);
    this.filmCardComponent.setFilmCardClickHandler(() => {
      this.#addFilmDetailsComponent(film);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    render(this.filmCardComponent, myContainer.element);
  }

  #renderFilmDetails(film) {

    const comments = this.#commentsModel.separate(film);
    this.#filmDetailsComponent = new FilmDetailsView(film, comments);
    this.#filmDetailsComponent.setFilmDetailsCloseButtonClickHandler(() => {
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });


    render(this.#filmDetailsComponent, this.#siteBodyElement);
  }

  #addFilmDetailsComponent = (film) => {
    this.#renderFilmDetails(film);
    document.body.classList.add('hide-overflow');
  };

  #removeFilmDetailsComponent = () => {
    this.#filmDetailsComponent.element.remove();
    this.#filmDetailsComponent = null;
    document.body.classList.remove('hide-overflow');
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}


