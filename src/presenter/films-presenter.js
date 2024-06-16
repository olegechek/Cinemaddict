import SortView from '../view/sort-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import { render } from '../framework/render.js';
import { updateItem } from '../utils/common.js';

import { FILM_COUNT_PER_STEP } from '../const.js';
import FilmsListEmptyView from '../view/films-list-empty-view.js';
import FilmPresenter from './film-presenter.js';


export default class FilmsPresenter {
  #siteBodyElement = document.querySelector('body');
  #sortComponent = new SortView();
  #filmListEmptyComponent = new FilmsListEmptyView();
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #filmButtonMoreComponent = new FilmButtonMoreView();
  #filmDetailsComponent = null;

  #container = null;
  #filmsModel = null;
  #commentsModel = null;

  #filmModels = [];

  #selectedFilm = null;

  #filmPresenter = new Map();
  #filmDetailsPresenter = null;

  #renderedFilmCount = FILM_COUNT_PER_STEP;


  constructor(container, filmsModel, commentsModel) {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
  }


  init = () => {
    this.#filmModels = [...this.#filmsModel.films];
    this.#renderFilmBoard();
  };


  #filmChangeHandler = (updatedFilm) => {
    this.#filmModels = updateItem(this.#filmModels, updatedFilm);
    console.log(this.#filmModels);
    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);  //!!!!!!!!!!!!!!!!!!!!!!!
    if (this.#filmDetailsPresenter && this.#selectedFilm.id === updatedFilm.id) {
      this.#selectedFilm = updatedFilm;
      this.#renderFilmDetails();
    }

  };


  #renderSort() {
    render(this.#sortComponent, this.#container);
  }


  #renderFilmListContainer() {
    render(this.#filmsComponent, this.#container);
    render(this.#filmsListComponent, this.#filmsComponent.element);
    render(this.#filmsListContainerComponent, this.#filmsListComponent.element);
  }


  #renderFilmList() {
    this.#renderFilms(0, Math.min(this.#filmModels.length, FILM_COUNT_PER_STEP), this.#filmsListContainerComponent);

    if (this.#filmModels.length > FILM_COUNT_PER_STEP) {
      this.#renderFilmButtonMore();
    }
  }


  #renderFilmButtonMore() {
    render(this.#filmButtonMoreComponent, this.#filmsListComponent.element);
    this.#filmButtonMoreComponent.setButtonClickHandler(() => this.#filmButtonMoreClickHandler());
  }


  #renderFilms(from, to, container) {
    this.#filmModels.slice(from, to).forEach((film) => this.#renderFilm(film, container));
  }


  #renderFilm(film, container) {
    const filmPresenter = new FilmPresenter(
      container,
      this.#filmChangeHandler,
      this.#addFilmDetailsComponent,
      this.#onEscKeyDown
    );
    console.log(filmPresenter);
    filmPresenter.init(film);
    this.#filmPresenter.set(film.id, filmPresenter);
  }


  #renderFilmListEmpty() {
    render(this.#filmListEmptyComponent, this.#container);
  }


  #renderFilmBoard() {
    if (this.#filmModels.length === 0) {
      this.#renderFilmListEmpty();
      return;
    }

    this.#renderSort();
    this.#renderFilmListContainer();
    this.#renderFilmList();
  }


  #filmButtonMoreClickHandler() {
    this.#renderFilms(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP, this.#filmsListContainerComponent);

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#filmModels.length) {
      this.#filmButtonMoreComponent.element.remove();
      this.#filmButtonMoreComponent.removeElement();
    }
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


