import { getRandomInteger, getRandomValue, formatMinutesToTime } from '../utils.js';
import { titles, posters, genres, descriptions } from './const.js';

const generateFilm = () => ({
  title: getRandomValue(titles),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: `${getRandomInteger(4, 9)}.${getRandomInteger(0, 9)}`,
  poster: getRandomValue(posters),
  ageRating: 0,
  director: 'Tom Ford',
  writers: [
    'Takeshi Kitano'
  ],
  actors: [
    'Morgan Freeman'
  ],
  release: {
    date: '2019-05-11T00:00:00.000Z',
    releaseCountry: 'Finland'
  },
  runtime: formatMinutesToTime(getRandomInteger(60, 180)),
  genre: getRandomValue(genres),
  description: getRandomValue(descriptions)
});

const generateFilms = () => {
  const films = Array.from({ length: 25 }, generateFilm);

  let totalCommentsCount = 0;

  return films.map((film, index) => {
    const hasComments = getRandomInteger(0, 1);

    const filmCommentsCount = (hasComments)
      ? getRandomInteger(1, 7)
      : 0;

    totalCommentsCount += filmCommentsCount;

    return {
      id: String(index + 1),
      comments: (hasComments)
        ? Array.from({ length: filmCommentsCount },
          (_value, commentIndex) => String(totalCommentsCount - commentIndex)
        )
        : [],
      ... film,
    };
  });
};


export { generateFilms };
