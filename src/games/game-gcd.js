/* eslint-disable import/extensions, no-console */
import { greetings, getRandomInt, gameProcess } from '../index.js';

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
const printRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(50);
    const num2 = getRandomInt(50);
    gameData[0][i] = `${num1} ${num2}`;
    gameData[1][i] = getGcd(num1, num2);
  }
  return gameData;
};

/* Процесс игры */
export const gameGcd = () => {
  const name = greetings();
  printRules();
  gameProcess(name, getData());
};

export default gameGcd;
