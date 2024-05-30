import AbstractView from '../framework/view/abstract-view.js';
import { formatStringToDate } from '../utils.js';
import { createCommentTemplate } from './film-details-comments-template.js';

const createFilmDetailsTemplate = (filmDetailes, commentDetailes) => {
  const { title, totalRating, director, writers, actors, poster, release, runtime, description, comments } = filmDetailes;

  const commentsTemplate = createCommentTemplate(commentDetailes);

  return (`
 <section class="film-details">
 <form class="film-details__inner" action="" method="get">
   <div class="film-details__top-container">
     <div class="film-details__close">
       <button class="film-details__close-btn" type="button">close</button>
     </div>
     <div class="film-details__info-wrap">
       <div class="film-details__poster">
         <img class="film-details__poster-img" src="${poster}" alt="">

         <p class="film-details__age">18+</p>
       </div>

       <div class="film-details__info">
         <div class="film-details__info-head">
           <div class="film-details__title-wrap">
             <h3 class="film-details__title">${title}</h3>
             <p class="film-details__title-original">Original: The Great Flamarion</p>
           </div>

           <div class="film-details__rating">
             <p class="film-details__total-rating">${totalRating}</p>
           </div>
         </div>

         <table class="film-details__table">
           <tr class="film-details__row">
             <td class="film-details__term">Director</td>
             <td class="film-details__cell">${director}</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Writers</td>
             <td class="film-details__cell">${writers}</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Actors</td>
             <td class="film-details__cell">${actors}</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Release Date</td>
             <td class="film-details__cell">${formatStringToDate(release.date)}</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Runtime</td>
             <td class="film-details__cell">${runtime}</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Country</td>
             <td class="film-details__cell">USA</td>
           </tr>
           <tr class="film-details__row">
             <td class="film-details__term">Genres</td>
             <td class="film-details__cell">
               <span class="film-details__genre">Drama</span>
               <span class="film-details__genre">Film-Noir</span>
               <span class="film-details__genre">Mystery</span></td>
           </tr>
         </table>

         <p class="film-details__film-description">
           ${description}
         </p>
       </div>
     </div>

     <section class="film-details__controls">
       <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
       <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
       <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
     </section>
   </div>

   <div class="film-details__bottom-container">
     <section class="film-details__comments-wrap">
       <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

       <ul class="film-details__comments-list">${commentsTemplate}</ul>

       <div class="film-details__new-comment">
         <div class="film-details__add-emoji-label"></div>

         <label class="film-details__comment-label">
           <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
         </label>

         <div class="film-details__emoji-list">
           <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
           <label class="film-details__emoji-label" for="emoji-smile">
             <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
           </label>

           <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
           <label class="film-details__emoji-label" for="emoji-sleeping">
             <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
           </label>

           <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
           <label class="film-details__emoji-label" for="emoji-puke">
             <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
           </label>

           <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
           <label class="film-details__emoji-label" for="emoji-angry">
             <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
           </label>
         </div>
       </div>
     </section>
   </div>
 </form>
</section>
`);
};
export default class FilmDetailsView extends AbstractView {

  #filmDetailes = null;
  #commentDetailes = null;

  constructor(filmDetailes, commentDetailes) {
    super();
    this.#filmDetailes = filmDetailes;
    this.#commentDetailes = commentDetailes;
  }

  get template() {
    return createFilmDetailsTemplate(this.#filmDetailes, this.#commentDetailes);
  }

  setFilmDetailsCloseButtonClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.film-details__close-btn').addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}
