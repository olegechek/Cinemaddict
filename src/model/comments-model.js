import { generateComments } from '../mock/comment.js';

export default class CommentsModel {
  comments = generateComments();
  getComments = () => this.comments;
}
