// src/view/films-view.js
import AbstractView from '../framework/view/abstract-view.js';

// Функция для создания HTML-разметки фильмов
const createFilmsTemplate = () => '<section class="films"></section>';

// Класс для управления элементом фильмов
export default class FilmsView extends AbstractView {

  get template() {
    return createFilmsTemplate();
  }
}
