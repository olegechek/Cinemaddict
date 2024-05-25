import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';
import FilmDetailsView from '../view/film-details-view.js';

import { render } from '../render.js';

//import {FILM_COUNT_PER_STEP} from '/const.js';


export default class FilmsPresenter {
  #siteBodyElement = document.querySelector('body');
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #filmButtonMoreComponent = new FilmButtonMoreView();
  #filmDetailsComponent = null;

  #container = null;
  #filmsModel = null;
  #commentsModel = null;
  #filmModels = [];
  #commentModels = [];

  init = (container, filmsModel, commentsModel) => {
    this.#container = container;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
    this.#filmModels = [...this.#filmsModel.films];
    this.#commentModels = [...this.#commentsModel.comments];
    render(this.#filmsComponent, this.#container);
    render(this.#filmsListComponent, this.#filmsComponent.element);
    render(this.#filmsListContainerComponent, this.#filmsListComponent.element);


    for (let i = 0; i < this.#filmModels.length; i++) {
      this.#renderFilm(this.#filmModels[i], this.#filmsListContainerComponent);
    }
    render(this.#filmButtonMoreComponent, this.#filmsListComponent.element);
  };

  #renderFilm(film, myContainer) {
    const filmCardComponent = new FilmCardView(film);
    const linkFilmCardElement = filmCardComponent.element.querySelector('a');

    linkFilmCardElement.addEventListener('click', () => {
      this.#addFilmDetailsComponent(film);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });
    render(filmCardComponent, myContainer.element);
  }

  #renderFilmDetails(film) {

    const comments = this.#commentsModel.separate(film);
    this.#filmDetailsComponent = new FilmDetailsView(film, comments);

    const closeButtonFilmDetailsElement = this.#filmDetailsComponent.element.querySelector('.film-details__close-btn');
    closeButtonFilmDetailsElement.addEventListener('click', () => {
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });
    render(this.#filmDetailsComponent, this.#siteBodyElement);
  }

  #addFilmDetailsComponent(film) {
    this.#renderFilmDetails(film);
    document.body.classList.add('hide-overflow');
  }

  #removeFilmDetailsComponent() {
    this.#filmDetailsComponent.element.remove();
    this.#filmDetailsComponent = null;
    document.body.classList.remove('hide-overflow');
  }

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#removeFilmDetailsComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}


