/* eslint-disable import/extensions, no-console */
import readlineSync from 'readline-sync';

/* Рандом */
export const randomInt = (max) => Math.floor(Math.random() * max);

/* Количество раундов игры */
export const roundCount = () => 3;

/* Проверка правильности ответа */
/* Оставила ее отдельной функцией, т.к. она довольно громоздкая и ее легче воспринимать отдельно */
const stepsResult = (userAnsw, correctAnsw) => {
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

/* Процесс игры */
export const gameProcess = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  /* Приветствие */
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let flag = true;
  /* eslint-disable-next-line */
  for (const round of gameData) {
    console.log(`Question: ${round.question}`);
    /* Получение ответа игрока */
    const userAnsw = readlineSync.question('Your answer: ');
    /* Результат раунда игры */
    const result = stepsResult(userAnsw, round.correctAnsw);
    /* Проигрыш */
    if (result === false) {
      console.log(
        `"${userAnsw}" is wrong answer ;(. Correct answer was "${round.correctAnsw}".`,
      );
      console.log(`Let's try again, ${name}!`);
      flag = false;
      break;
    }
  }
  /* Выигрыш */
  if (flag) {
    console.log(`Congratulations, ${name}!`);
  }
};

/* Вообще я писала программу еще не зная о существовании объектов,
поэтому пользовалась доступными мне средствами,
а именно двухмерными массивами... Тема "объекты" идет после первого проекта */
