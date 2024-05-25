import { generateComments } from '../mock/comment.js';

export default class CommentsModel {
  #comments = generateComments();

  get comments() {
    return this.#comments;
  }

  separate = (film) => {

    this.film = film;

    return this.#comments.filter((comment) => this.film.comments.includes(comment.id));
  };
}
