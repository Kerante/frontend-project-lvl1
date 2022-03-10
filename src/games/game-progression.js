/* eslint-disable import/extensions, no-console */
import { randomInt, roundCount, gameProcess } from '../index.js';

/* Печать правил игры */
const printRules = () => 'What number is missing in the progression?';

/* Получение данных игры */
const getData = () => {
  const gameData = [];
  for (let i = 0; i < roundCount(); i += 1) {
    const progressionLenght = randomInt(5) + 5;
    const progressionStep = randomInt(9) + 1;
    const numPosition = randomInt(progressionLenght);
    let progressionElem = randomInt(50) + 1;
    const progression = [];
    let correctAnsw = 0;
    for (let j = 0; j < progressionLenght; j += 1) {
      if (j === numPosition) {
        correctAnsw = progressionElem;
        progression[j] = '..';
      } else {
        progression[j] = progressionElem;
      }
      progressionElem += progressionStep;
    }
    gameData.push({
      question: progression.join(' '),
      correctAnsw,
    });
  }
  return gameData;
};

/* Процесс игры */
export const gameProgression = () => {
  gameProcess(printRules(), getData());
};

export default gameProgression;
