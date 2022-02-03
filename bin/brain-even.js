#!/usr/bin/env node
/* eslint-disable import/extensions, no-console */

import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log('Welcome to the Brain Games!');
const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let flag = true;

for (let i = 0; i < 3; i += 1) {
  const randomNum = getRandomInt(10000);
  console.log('Question: ', randomNum);
  const userAnsw = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0 && userAnsw !== 'yes') {
    if (userAnsw !== 'no') {
      console.log(
        '"',
        userAnsw,
        '" is wrong answer ;(. Correct answer was "yes".',
      );
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    }
    console.log("Let's try again, ", name, '!');
    flag = false;
    break;
  } else if (randomNum % 2 === 1 && userAnsw !== 'no') {
    if (userAnsw !== 'yes') {
      console.log(
        "'",
        userAnsw,
        "' is wrong answer ;(. Correct answer was 'no'.",
      );
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    }
    console.log("Let's try again, ", name, '!');
    flag = false;
    break;
  }
  console.log('Correct!');
}
if (flag === true) {
  console.log('Congratulations, ', name, '!');
}
