/* eslint-disable import/extensions, no-console */
import { roundCount, gameProcess } from '../index.js';

/* НОД */
const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  const gcd = num1;
  return gcd;
};

/* Печать правил игры */
const printRules = () => 'Find the greatest common divisor of given numbers.';

/* Получение данных игры */
const getData = () => {
  const gameData = [];
  for (let i = 0; i < roundCount(); i += 1) {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    gameData.push({
      question: `${num1} ${num2}`,
      correctAnsw: getGcd(num1, num2),
    });
  }
  return gameData;
};

/* Процесс игры */
export const gameGcd = () => {
  gameProcess(printRules(), getData());
};

export default gameGcd;
