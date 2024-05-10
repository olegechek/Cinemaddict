import { generateFilm } from '../mock/film.js';

export default class FilmsModel {
  films = () => {
    const testArray = [];
    for (let i = 0; i < 6; i++) {
      testArray[i] = generateFilm();
      testArray[i].id = i + 1;
    } return testArray;
  };

  getFilms = () => this.films();
}
