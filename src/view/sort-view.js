// Импортируем функцию createElement из файла render.js
import AbstractView from '../framework/view/abstract-view.js';

// Функция для создания HTML-разметки сортировки
const createSortTemplate = () => `
 <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
 </ul>
`;

// Класс для управления элементом сортировки
export default class SortView extends AbstractView {

  get template() {
    return createSortTemplate();
  }
}
