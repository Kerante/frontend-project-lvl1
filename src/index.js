/* eslint-disable import/extensions, no-console */
import readlineSync from 'readline-sync';

/* Приветствие */
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
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
      (userAnsw === 'yes' && userAnsw === correctAnsw) ||
      (userAnsw === 'no' && userAnsw === correctAnsw)
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
    '".'
  );
  console.log("Let's try again, ", name, '!');
};

/* Выигрыш */
export const win = (name) => {
  console.log('Congratulations, ', name, '!');
};

/* Процесс игры */
export const gameProcess = (rules, gameData) => {
  const name = greetings();
  console.log(rules);
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${gameData[0][i]}`);
    const userAnsw = getUserAnsw();
    const result = stepsResult(userAnsw, gameData[1][i]);
    if (result === false) {
      losing(userAnsw, gameData[1][i], name);
      flag = false;
      break;
    }
  }
  if (flag) {
    win(name);
  }
};
