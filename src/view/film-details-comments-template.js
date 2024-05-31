import { formatDateToYearMonthDay } from '../utils/common.js';

const createCommentTemplate = (filteredComments) => {

  let commentsHtml = '';
  if (filteredComments.length > 0) {
    for (let i = 0; i < filteredComments.length; i++) { // Исправлено условие цикла
      const { comment, author, date } = filteredComments[i];
      const commentHtml = `
      <li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
        </span>
        <div>
          <p class="film-details__comment-text">${comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${formatDateToYearMonthDay(date)}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;

      commentsHtml += commentHtml; // Добавляем HTML-строку комментария к общей строке
    }
  }
  return commentsHtml;
};

export { createCommentTemplate };

