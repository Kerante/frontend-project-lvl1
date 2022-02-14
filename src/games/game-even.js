/* eslint-disable import/extensions, no-console */
import { greetings, getRandomInt, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(50);
    gameData[0][i] = getRandomInt(50);
    if (randomNum % 2 === 0) {
      gameData[1][i] = 'yes';
    } else {
      gameData[1][i] = 'no';
    }
  }
  return gameData;
};

/* Процесс игры */
export const gameEven = () => {
  const name = greetings();
  printRules();
  gameProcess(name, getData());
};

export default gameEven;
