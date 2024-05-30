import HeaderProfileView from './view/header-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

import FilmsPresenter from './presenter/film-presenter.js';

import {render} from './framework/render.js';


const siteHeaderElement = document.querySelector('.header');

render(new HeaderProfileView(), siteHeaderElement);


const siteMainElement = document.querySelector('.main');

render(new MainNavigationView(), siteMainElement);

const filmsModel = new FilmsModel();

const commentsModel = new CommentsModel();

const filmsPresenter = new FilmsPresenter();

filmsPresenter.init(siteMainElement, filmsModel, commentsModel);

const siteFooterStatisticsElement = document.querySelector('.footer__statistics');

render(new FooterStatisticsView(), siteFooterStatisticsElement);
