// Импортируем функцию createElement из файла render.js
import { createElement } from '../render.js';

// Функция для создания HTML-разметки сортировки
const createSortTemplate = () => `
 <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
 </ul>
`;

// Класс для управления элементом сортировки
export default class SortView {
  getTemplate() {
    return createSortTemplate();
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
