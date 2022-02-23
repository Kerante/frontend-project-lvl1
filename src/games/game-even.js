/* eslint-disable import/extensions, no-console */
import { roundCount, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

/* Получение данных игры */
const getData = () => {
  const gameData = [];
  for (let i = 0; i < roundCount(); i += 1) {
    const num = Math.floor(Math.random() * 50) + 1;
    if (num % 2 === 0) {
      gameData.push({ question: num, correctAnsw: 'yes' });
    } else {
      gameData.push({ question: num, correctAnsw: 'no' });
    }
  }
  return gameData;
};

/* Процесс игры */
export const gameEven = () => {
  gameProcess(printRules(), getData());
};

export default gameEven;
