#!/usr/bin/env node
/* eslint-disable import/extensions, no-console */

import {
  greetings,
  getRandomInt,
  getUserAnsw,
  rightAnsw,
  losing,
  win,
} from '../src/index.js';

const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let flag = true;

/* Запуск игрового цикла */
for (let i = 0; i < 3; i += 1) {
  /* Получение данных для игры */
  const randomNum = getRandomInt(50);
  /* Печать игрового ворпоса */
  console.log('Question: ', randomNum);
  /* Получение ответа пользователя */
  const userAnsw = getUserAnsw();
  /* Проверка правильности ответа (оно же - ход игры) */
  if (randomNum % 2 === 0 && userAnsw !== 'yes') {
    losing(userAnsw, 'yes', name);
    flag = false;
    break;
  } else if (randomNum % 2 === 1 && userAnsw !== 'no') {
    losing(userAnsw, 'no', name);
    flag = false;
    break;
  }
  rightAnsw();
}
if (flag === true) {
  win(name);
}
