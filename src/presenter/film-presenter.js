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

  init = (container, filmsModel) => {
    this.container = container;
    this.filmsModel = filmsModel;
    /*console.log(typeof this.filmsModel);
    console.log(this.filmsModel);*/
    this.filmModels = [...this.filmsModel.getFilms()];
    /*console.log(typeof this.filmModels);
    console.log(this.filmModels);*/
    render(this.filmsComponent, this.container);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < this.filmModels.length; i++) {
      render(new FilmCardView(this.filmModels[i]), this.filmsListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmsListComponent.getElement());
  };
}


