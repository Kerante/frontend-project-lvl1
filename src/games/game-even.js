/* eslint-disable import/extensions, no-console */
import { getRandomInt, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

/* Получение данных игры */
const getData = () => {
  const gameData = [[], []];
  for (let i = 0; i < 3; i += 1) {
    gameData[0][i] = getRandomInt(50) + 1;
    if (gameData[0][i] % 2 === 0) {
      gameData[1][i] = 'yes';
    } else {
      gameData[1][i] = 'no';
    }
  }
  return gameData;
};

/* Процесс игры */
export const gameEven = () => {
  gameProcess(printRules(), getData());
};

export default gameEven;
