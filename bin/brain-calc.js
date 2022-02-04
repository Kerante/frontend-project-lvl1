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
console.log('What is the result of the expression?');

const mathOperations = ['+', '-', '*'];
let flag = true;
let correctAnsw = 0;

/* Запуск игрового цикла */
for (let i = 0; i < 3; i += 1) {
  /* Получение данных для игры */
  const num1 = getRandomInt(11);
  const num2 = getRandomInt(11);
  const mathOperation = getRandomInt(3);

  /* Рассчет правильного ответа */
  if (mathOperation === 0) {
    correctAnsw = num1 + num2;
  } else if (mathOperation === 1) {
    correctAnsw = num1 - num2;
  } else {
    correctAnsw = num1 * num2;
  }
  /* Печать игрового ворпоса */
  console.log(
    'Question: ',
    num1,
    ' ',
    mathOperations[mathOperation],
    ' ',
    num2,
  );

  /* Получение ответа пользователя */
  const userAnsw = getUserAnsw();

  /* Проверка правильности ответа (оно же - ход игры) */
  if (Number(userAnsw) !== correctAnsw) {
    losing(userAnsw, correctAnsw, name);
    flag = false;
    break;
  }
  rightAnsw();
}
if (flag === true) {
  win(name);
}
