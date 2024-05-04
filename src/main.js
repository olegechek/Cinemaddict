import HeaderProfileView from './view/header-profile-view.js';

import MainNavigationView from './view/main-navigation-view.js';

import SortView from './view/sort-view.js';

import FilmsView from './view/films-view.js';

import FilmsListView from './view/films-list-view.js';

import FilmsListContainerView from './view/films-list-container-view.js';

import FilmCardView from './view/film-card-view.js';

import FilmButtonMoreView from './view/film-button-more-view.js';

import FooterStatisticsView from './view/footer-statistics-view.js';

import FilmDetailsView from './view/film-details-view.js';


import {render} from './render.js';


const siteBodyElement = document.querySelector('body');

render(new FilmDetailsView(), siteBodyElement);


const siteHeaderElement = document.querySelector('.header');

render(new HeaderProfileView(), siteHeaderElement);


const siteMainElement = document.querySelector('.main');

render(new MainNavigationView(), siteMainElement);

render(new SortView(), siteMainElement);

render(new FilmsView(), siteMainElement);


const siteFilmsElement = document.querySelector('.films');

render(new FilmsListView(), siteFilmsElement);


const siteFilmsListElement = document.querySelector('.films-list');

render(new FilmsListContainerView(), siteFilmsListElement);

render(new FilmButtonMoreView(), siteFilmsListElement);


const siteFilmsListContainerElement = document.querySelector('.films-list__container');

render(new FilmCardView(), siteFilmsListContainerElement);

render(new FilmCardView(), siteFilmsListContainerElement);

render(new FilmCardView(), siteFilmsListContainerElement);

render(new FilmCardView(), siteFilmsListContainerElement);

render(new FilmCardView(), siteFilmsListContainerElement);


const siteFooterStatisticsElement = document.querySelector('.footer__statistics');

render(new FooterStatisticsView(), siteFooterStatisticsElement);
