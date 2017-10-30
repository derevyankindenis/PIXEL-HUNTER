import Game1View from './game1-view';
import {nextScreen} from '../../utils';
import header from '../header/header';
import Timer from '../../timer';

export default (data, state) => {

  const game1View = new Game1View(data, state);
  const timer = new Timer(data.parametrs.MAX_TIME);
  game1View.header = header(data, state, timer);

  const getAnswers = () => {
    const answer1 = game1View.firstAnswer;
    const answer2 = game1View.secondAnswer;
    return (answer1) && (answer2) ? [answer1.value, answer2.value] : 0;
  };

  const isCorrect = (answers) => answers.every((answer, index) => answer === data.games[state.currentGame].images[index].is);

  game1View.onFormChanged = ()=> {
    const answers = getAnswers();
    if (answers) {
      state.answers.push({isCorrect: isCorrect(answers), time: data.parametrs.MAX_TIME - timer.time});
      timer.stop();
      nextScreen(data, state);
    }
  };

  timer.onTimeOut = () => {
    state.answers.push({isCorrect: false, time: timer.time});
    nextScreen(data, state);
  };

  game1View.addRenderListener(() => {
    timer.start();
  });

  return game1View;
};
