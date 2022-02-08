/* eslint-disable import/extensions, no-console */
import {
  greetings,
  getRandomInt,
  getUserAnsw,
  stepsResult,
  losing,
  win,
  getPrime,
} from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

/* Получение данных игры */
const getData = () => {
  const randomNum = getRandomInt(50);
  console.log('Question: ', randomNum);
  const correctAnsw = getPrime(randomNum) ? 'yes' : 'no';
  return correctAnsw;
};

/* Процесс игры */
export const gamePrime = () => {
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

export default gamePrime;
