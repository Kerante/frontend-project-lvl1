/* eslint-disable import/extensions, no-console */
import {
  greetings,
  getRandomInt,
  getUserAnsw,
  stepsResult,
  losing,
  win,
} from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

/* Получение данных игры */
const getData = () => {
  const randomNum = getRandomInt(50);
  console.log('Question: ', randomNum);
  let correctAnsw = '';

  if (randomNum % 2 === 0) {
    correctAnsw = 'yes';
  } else {
    correctAnsw = 'no';
  }
  return correctAnsw;
};

/* Процесс игры */
export const gameEven = () => {
  const name = greetings();
  printRules();
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const correctAnsw = getData();
    const userAnsw = getUserAnsw();
    const result = stepsResult(userAnsw, correctAnsw);
    if (result === false) {
      losing(userAnsw, correctAnsw, name);
      flag = false;
      break;
    }
  }
  if (flag) {
    win(name);
  }
};

export default gameEven;
