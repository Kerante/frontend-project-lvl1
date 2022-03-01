/* eslint-disable import/extensions, no-console */
import { roundCount, gameProcess } from '../index.js';

/* Рандом */
const randomInt = (max) => Math.floor(Math.random() * max);

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
const printRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

/* Получение данных игры */
const getData = () => {
  const gameData = [];
  for (let i = 0; i < roundCount(); i += 1) {
    const num = randomInt(49) + 2;
    const correctAnsw = getPrime(num) ? 'yes' : 'no';
    gameData.push({ question: num, correctAnsw });
  }
  return gameData;
};

/* Процесс игры */
export const gamePrime = () => {
  gameProcess(printRules(), getData());
};

export default gamePrime;
