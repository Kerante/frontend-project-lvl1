/* eslint-disable import/extensions, no-console */
import readlineSync from 'readline-sync';

/* Приветствие */
export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello, ', name, '!');
  return name;
};

/* Генератор случайных чисел */
export const getRandomInt = (max) => Math.floor(Math.random() * max);

/* Получение ответа пользователя */
export const getUserAnsw = () => {
  const userAnsw = readlineSync.question('Your answer: ');
  return userAnsw;
};

/* Правильный ответ */
export const rightAnsw = () => {
  console.log('Correct!');
};

/* Проигрыш */
export const losing = (userAnsw, correctAnsw, name) => {
  console.log(
    '"',
    userAnsw,
    '" is wrong answer ;(. Correct answer was "',
    correctAnsw,
    '".',
  );
  console.log("Let's try again, ", name, '!');
};

/* Выигрыш */
export const win = (name) => {
  console.log('Congratulations, ', name, '!');
};
