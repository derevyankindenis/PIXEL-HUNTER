import Game2View from './game2-view';
import {nextScreen} from '../../utils';
import header from '../header/header';
import Timer from '../../timer';

export default (data, state) => {

  const game2View = new Game2View(data, state);
  const timer = new Timer(data.parametrs.MAX_TIME);
  game2View.header = header(data, state, timer);

  const getAnswer = () => {
    const answer = game2View.checkedAnswer;
    return answer ? answer.value : 0;
  };

  const isCorrect = (answer) => data.games[state.currentGame].image.is === answer;

  game2View.onFormChanged = () => {
    const answer = getAnswer();
    if (answer) {
      state.answers.push({isCorrect: isCorrect(answer), time: data.parametrs.MAX_TIME - timer.time});
      timer.stop();
      nextScreen(data, state);
    }
  };

  timer.onTimeOut = () => {
    state.answers.push({isCorrect: false, time: timer.time});
    nextScreen(data, state);
  };

  game2View.addRenderListener(() => {
    timer.start();
  });

  return game2View;
};
