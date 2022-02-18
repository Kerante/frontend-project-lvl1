/* eslint-disable import/extensions, no-console */

import { getRandomInt, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => 'What is the result of the expression?';

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(11);
    const num2 = getRandomInt(11);
    const mathOperation = getRandomInt(3);
    if (mathOperation === 0) {
      gameData[0][i] = `${num1} + ${num2}`;
      gameData[1][i] = num1 + num2;
    } else if (mathOperation === 1) {
      gameData[0][i] = `${num1} - ${num2}`;
      gameData[1][i] = num1 - num2;
    } else {
      gameData[0][i] = `${num1} * ${num2}`;
      gameData[1][i] = num1 * num2;
    }
  }
  return gameData;
};

export const gameCalc = () => {
  gameProcess(printRules(), getData());
};

export default gameCalc;
