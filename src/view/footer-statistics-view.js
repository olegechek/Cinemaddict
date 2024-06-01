// Импортируем функцию createElement из файла render.js
import AbstractView from '../framework/view/abstract-view.js';

// Функция для создания HTML-разметки статистики футера
const createFooterStatisticsTemplate = (filmsNumber) => `<p>${filmsNumber} movies inside</p>`;

// Класс для управления элементом статистики футера
export default class FooterStatisticsView extends AbstractView {
  #filmsNumber = null;
  constructor(filmsNumber) {
    super();
    this.#filmsNumber = filmsNumber;
  }

  get template() {
    return createFooterStatisticsTemplate(this.#filmsNumber);
  }
}
