import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';

import { render } from '../render.js';

export default class FilmsPresenter {

  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  init = (container) => {
    this.container = container;
    render(this.filmsComponent, this.container);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView, this.filmsListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmsListComponent.getElement());
  };
}


