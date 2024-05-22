// Импортируем функцию createElement из файла render.js
import { createElement } from '../render.js';

// Функция для создания HTML-разметки статистики футера
const createFooterStatisticsTemplate = () => '<p>130 291 movies inside</p>';

// Класс для управления элементом статистики футера
export default class FooterStatisticsView {
  #element = null;

  get template() {
    return createFooterStatisticsTemplate();
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
