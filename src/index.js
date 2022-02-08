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

/* Проверка правильности ответа */
export const stepsResult = (userAnsw, correctAnsw) => {
  if (Number(userAnsw) !== correctAnsw) {
    if (
      (userAnsw === 'yes' && userAnsw === correctAnsw)
      || (userAnsw === 'no' && userAnsw === correctAnsw)
    ) {
      console.log('Correct!');
      return true;
    }
    return false;
  }
  console.log('Correct!');
  return true;
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

/* НОД */
export const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  const gcd = num1;
  return gcd;
};
