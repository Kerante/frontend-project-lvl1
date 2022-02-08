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
  console.log('What is the result of the expression?');
};

/* Получение данных игры */
const getData = () => {
  const mathOperations = ['+', '-', '*'];
  let correctAnsw = 0;
  const num1 = getRandomInt(11);
  const num2 = getRandomInt(11);
  const mathOperation = getRandomInt(3);

  console.log(
    'Question: ',
    num1,
    ' ',
    mathOperations[mathOperation],
    ' ',
    num2,
  );

  if (mathOperation === 0) {
    correctAnsw = num1 + num2;
  } else if (mathOperation === 1) {
    correctAnsw = num1 - num2;
  } else {
    correctAnsw = num1 * num2;
  }
  return correctAnsw;
};

export const gameCalc = () => {
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

export default gameCalc;
