// src/view/films-view.js
import { createElement } from '../render.js';

// Функция для создания HTML-разметки фильмов
const createFilmsTemplate = () => '<section class="films"></section>';

// Класс для управления элементом фильмов
export default class FilmsView {

  #element = null;

  get template() {
    return createFilmsTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
