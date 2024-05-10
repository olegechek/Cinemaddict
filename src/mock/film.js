import {getRandomInteger, getRandomValue, formatMinutesToTime, formatStringToYear } from '../utils.js';
import { titles, posters, genres, descriptions } from './const.js';

const generateFilm = () => ({
  title: getRandomValue(titles),
  alternativeTitle: 'Laziness Who Sold Themselves',
  totalRating: `${getRandomInteger(4,9)}.${getRandomInteger(0,9)}`,
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
    date: formatStringToYear('2019-05-11T00:00:00.000Z'),
    releaseCountry: 'Finland'
  },
  runtime: formatMinutesToTime(getRandomInteger(60,180)),
  genre: getRandomValue(genres),
  description: getRandomValue(descriptions)
});

export { generateFilm };
