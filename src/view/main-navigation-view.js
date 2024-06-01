import AbstractView from '../framework/view/abstract-view';

// Функция для создания HTML-разметки навигационного меню
const createMainNavigationTemplate = (filterStatus) => `
 <nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filterStatus.watchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${filterStatus.history}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filterStatus.favorites}</span></a>
 </nav>
`;

// Класс для управления эл��ментом навигации
export default class MainNavigationView extends AbstractView {
  #filterStatus = null;
  constructor(filterStatus) {
    super();
    this.#filterStatus = filterStatus;
  }

  get template() {
    return createMainNavigationTemplate(this.#filterStatus);
  }
}
