import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';

import FilmDetailsView from '../view/film-details-view.js';

import { render } from '../render.js';

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

    //render(new FilmDetailsView(this.#filmModels[0], this.#commentModels), this.#siteBodyElement);
  };

  #renderFilm(film, myContainer) {
    const filmCardComponent = new FilmCardView(film);
    const linkFilmCardElement = filmCardComponent.element.querySelector('a');

    linkFilmCardElement.addEventListener('click', () => {
      this.#renderFilmDetails(film, this.#commentModels);
    });
    render(filmCardComponent, myContainer.element);
  }

  #renderFilmDetails(film, comments) {
    this.#filmDetailsComponent = new FilmDetailsView(film, comments);
    const closeButtonFilmDetailsElement = this.#filmDetailsComponent.element.querySelector('.film-details__close-btn');
    closeButtonFilmDetailsElement.addEventListener('click', () => {
      this.#filmDetailsComponent.element.remove();
      this.#filmDetailsComponent = null;
    });


    render(this.#filmDetailsComponent, this.#siteBodyElement);
  }
}


