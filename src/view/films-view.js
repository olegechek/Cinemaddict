// src/view/films-view.js
import { createElement } from '../render.js';

// Функция для создания HTML-разметки фильмов
const createFilmsTemplate = () => '<section class="films"></section>';

// Класс для управления элементом фильмов
export default class FilmsView {
  getTemplate() {
    return createFilmsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
