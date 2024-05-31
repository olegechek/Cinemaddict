import HeaderProfileView from './view/header-profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';
import FilmsPresenter from './presenter/film-presenter.js';
import {render} from './framework/render.js';
import { getUserStatus } from './utils/user.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterStatisticsElement = document.querySelector('.footer__statistics');


const filmsModel = new FilmsModel();

render(new MainNavigationView(), siteMainElement);

render(new HeaderProfileView(getUserStatus(filmsModel.films)), siteHeaderElement);


const commentsModel = new CommentsModel();

const filmsPresenter = new FilmsPresenter();

filmsPresenter.init(siteMainElement, filmsModel, commentsModel);

render(new FooterStatisticsView(), siteFooterStatisticsElement);
