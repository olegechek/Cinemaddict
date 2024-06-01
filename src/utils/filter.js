const getFilterStatus = (films) => ({

  watchlist: films.filter((film) => film.userDetails.watchlist).length,

  history: films.filter((film) => film.userDetails.alreadyWatched).length,

  favorites: films.filter((film) => film.userDetails.favorite).length

});

export { getFilterStatus };
