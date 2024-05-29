// Импортируем функцию createElement из файла render.js
import AbstractView from '../framework/view/abstract-view.js';

// Функция для создания HTML-разметки статистики футера
const createFooterStatisticsTemplate = () => '<p>130 291 movies inside</p>';

// Класс для управления элементом статистики футера
export default class FooterStatisticsView extends AbstractView{

  get template() {
    return createFooterStatisticsTemplate();
  }
}
