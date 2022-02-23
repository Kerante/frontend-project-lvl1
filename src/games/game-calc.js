/* eslint-disable import/extensions, no-console */

import { roundCount, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => 'What is the result of the expression?';

/* Получение данных игры */
const getData = () => {
  const gameData = [];
  for (let i = 0; i < roundCount(); i += 1) {
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const mathOperation = Math.floor(Math.random() * 3);
    if (mathOperation === 0) {
      gameData.push({
        question: `${num1} + ${num2}`,
        correctAnsw: num1 + num2,
      });
    } else if (mathOperation === 1) {
      gameData.push({
        question: `${num1} - ${num2}`,
        correctAnsw: num1 - num2,
      });
    } else {
      gameData.push({
        question: `${num1} * ${num2}`,
        correctAnsw: num1 * num2,
      });
    }
  }
  return gameData;
};

export const gameCalc = () => {
  gameProcess(printRules(), getData());
};

export default gameCalc;
