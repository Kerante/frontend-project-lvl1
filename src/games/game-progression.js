/* eslint-disable import/extensions, no-console */
import {
  greetings,
  getRandomInt,
  getUserAnsw,
  stepsResult,
  losing,
  win,
} from '../index.js';

/* Печать правил игры */
const printRules = () => {
  console.log('What number is missing in the progression?');
};

/* Получение данных игры */
const getData = () => {
  const progressionLenght = getRandomInt(5) + 5;
  const progressionStep = getRandomInt(9) + 1;
  const numPosition = getRandomInt(progressionLenght);
  let progressionElem = getRandomInt(50);
  let progression = '';
  let correctAnsw = 0;

  for (let i = 0; i < progressionLenght; i += 1) {
    if (i === numPosition) {
      correctAnsw = progressionElem;
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${progressionElem}`;
    }
    progressionElem += progressionStep;
  }
  console.log(progression);
  return correctAnsw;
};

/* Процесс игры */
export const gameProgression = () => {
  const name = greetings();
  printRules();
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const correctAnsw = getData();
    const userAnsw = getUserAnsw();
    const result = stepsResult(userAnsw, correctAnsw);
    if (result === false) {
      losing(userAnsw, correctAnsw, name);
      flag = false;
      break;
    }
  }
  if (flag) {
    win(name);
  }
};

export default gameProgression;
