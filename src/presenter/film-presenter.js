import FilmCardView from '../view/film-card-view.js';
import { render, replace, remove } from '../framework/render.js';

export default class FilmPresenter {
  #film = null;
  #container = null;
  #clickCardHandler = null;
  #escKeyDownHandler = null;

  #filmCardComponent = null;

  constructor(container, clickCardHandler, escKeyDownHandler) {
    this.#container = container;
    this.#clickCardHandler = clickCardHandler;
    this.#escKeyDownHandler = escKeyDownHandler;
  }

  init = (film) => {
    this.#film = film;
    this.filmCardComponent = new FilmCardView(this.#film);
    this.filmCardComponent.setFilmCardClickHandler(() => {
      this.#clickCardHandler(this.#film);
      document.addEventListener('keydown', this.#escKeyDownHandler);
    });

    render(this.filmCardComponent, this.#container.element);
  };

  destroy = () => {
    remove(this.#filmCardComponent);
  };
}
