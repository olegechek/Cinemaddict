// Вспомогательная функция для превращения строки с HTML в DOM-элементы
import { createElement } from '../render.js';

// Функция, которая будет возвращать строку с HTML-разметкой компонента
const createHeaderProfileTemplate = () => '<section class="header__profile profile"> <p class="profile__rating">Movie Buff</p><img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"></section>';

// Клас - он же сам компонент
export default class HeaderProfileView {
  #element = null;

  get template() {
    return createHeaderProfileTemplate();
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
