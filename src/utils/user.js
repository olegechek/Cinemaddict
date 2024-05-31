import { UserStatusTitle, UserStatusValue } from '../const.js';

const getUserStatus = (films) => {
  const watchedFilmCount = films.filter((film) =>
    film.userDetails.alreadyWatched
  ).length;
  if (
    watchedFilmCount > UserStatusValue.NOVICE &&
    watchedFilmCount <= UserStatusValue.FAN
  ) {
    return UserStatusTitle.NOVICE;
  }

  if (
    watchedFilmCount > UserStatusValue.FAN &&
    watchedFilmCount <= UserStatusValue.MOVIE_BUFF
  ) {
    return UserStatusTitle.FAN;
  }

  if (watchedFilmCount > UserStatusValue.MOVIE_BUFF) {
    return UserStatusTitle.MOVIE_BUFF;
  }

  return UserStatusTitle.NULL;

};

export { getUserStatus };
