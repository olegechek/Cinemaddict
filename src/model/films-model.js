import { generateFilms } from '../mock/film.js';

export default class FilmsModel {
  films = generateFilms();
  getFilms = () => this.films;
}
