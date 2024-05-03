import HeaderProfileView from './view/header-profile-view.js';

import MainNavigationView from './view/main-navigation-view.js';

import SortView from './view/sort-view.js';

import FooterStatisticsView from './view/footer-statistics-view.js';

import {render} from './render.js';


const siteHeaderElement = document.querySelector('.header');

const siteMainElement = document.querySelector('.main');

const siteFooterStatisticsElement = document.querySelector('.footer__statistics');


render(new HeaderProfileView(), siteHeaderElement);

render(new MainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);

render(new FooterStatisticsView(), siteFooterStatisticsElement);
