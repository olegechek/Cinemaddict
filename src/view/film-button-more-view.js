import AbstractView from '../framework/view/abstract-view.js';

const createFilmButtonMoreTemplate = () => `
 <button class="films-list__show-more">Show more</button>
`;

export default class FilmButtonMoreView extends AbstractView {

  get template() {
    return createFilmButtonMoreTemplate();
  }

  setButtonClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
