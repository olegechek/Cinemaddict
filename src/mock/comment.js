import {getRandomValue} from '../utils/common.js';
import {names, surnames, emotions, comment, commentdates} from './const.js';

const generateComment = () => ({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: getRandomValue(commentdates),
  emotion: getRandomValue(emotions),
});

const generateComments = () => {
  const comments = Array.from({ length: 50 }, generateComment);

  return comments.map((item, index) => ({
    id: String(index + 1),
    ...item
  }));
};

export { generateComments };
