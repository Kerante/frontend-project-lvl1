/* eslint-disable import/extensions, no-console */
import {
  greetings,
  getRandomInt,
  getUserAnsw,
  stepsResult,
  losing,
  win,
  getGcd,
} from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

/* Получение данных игры */
const getData = () => {
  const num1 = getRandomInt(50);
  const num2 = getRandomInt(50);
  const correctAnsw = getGcd(num1, num2);
  console.log('Question: ', num1, num2);
  return correctAnsw;
};

/* Процесс игры */
export const gameGcd = () => {
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

export default gameGcd;
