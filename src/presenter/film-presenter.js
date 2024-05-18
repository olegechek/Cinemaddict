import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmButtonMoreView from '../view/film-button-more-view.js';

import FilmDetailsView from '../view/film-details-view.js';

import { render } from '../render.js';

export default class FilmsPresenter {
  siteBodyElement = document.querySelector('body');
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  filmDetailsViewComponent = new FilmDetailsView();

  init = (container, filmsModel, commentsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.filmModels = [...this.filmsModel.getFilms()];
    this.commentModels = [...this.commentsModel.getComments()];

    render(this.filmsComponent, this.container);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < this.filmModels.length; i++) {
      render(new FilmCardView(this.filmModels[i]), this.filmsListContainerComponent.getElement());
    }
    render(this.filmButtonMoreComponent, this.filmsListComponent.getElement());

    render(new FilmDetailsView(this.filmModels[0], this.commentModels), this.siteBodyElement);
  };
}


