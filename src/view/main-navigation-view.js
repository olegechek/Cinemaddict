import AbstractView from '../framework/view/abstract-view';

// Функция для создания HTML-разметки навигационного меню
const createMainNavigationTemplate = () => `
 <nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
 </nav>
`;

// Класс для управления эл��ментом навигации
export default class MainNavigationView extends AbstractView {

  get template() {
    return createMainNavigationTemplate();
  }
}
