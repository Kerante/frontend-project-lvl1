/* eslint-disable import/extensions, no-console */
import { greetings, getRandomInt, gameProcess } from '../index.js';

/* Проверка числа на простоту */
const getPrime = (num) => {
  if (num === 2) {
    return true;
  }
  const sqrtOfNum = Math.round(Math.sqrt(num), 1);
  for (let i = 2; i <= sqrtOfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/* Печать правил игры */
const printRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    gameData[0][i] = getRandomInt(49) + 2;
    gameData[1][i] = getPrime(gameData[0][i]) ? 'yes' : 'no';
  }
  return gameData;
};

/* Процесс игры */
export const gamePrime = () => {
  const name = greetings();
  printRules();
  gameProcess(name, getData());
};

export default gamePrime;
