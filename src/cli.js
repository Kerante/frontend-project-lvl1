/* eslint-disable import/extensions, no-console */
import readlineSync from 'readline-sync';

export const greetings = () => {
  const name = readlineSync.question('May I have your name?: ');
  console.log('Hello ', name, '!');
};
export default greetings;
