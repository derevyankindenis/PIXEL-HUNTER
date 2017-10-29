import Game3View from './game3-view';
import {nextScreen} from '../../utils';
import header from '../header/header';
import Timer from '../../timer';

export default (data, state) => {

  const game3View = new Game3View(data, state);
  const timer = new Timer(data.parametrs.MAX_TIME);
  game3View.header = header(data, state, timer);

  const isCorrect = (indexAnswer) => data.games[state.currentGame].images[indexAnswer].is === data.games[state.currentGame].search;

  const checkAnswer = (evt) => {
    state.answers.push({isCorrect: isCorrect(evt.target.dataset.index), time: data.parametrs.MAX_TIME - timer.time});
    timer.stop();
    nextScreen(data, state);
  };

  game3View.onClickAnythingImage = checkAnswer;


  timer.onTimeOut = () => {
    state.answers.push({isCorrect: false, time: timer.time});
    nextScreen(data, state);
  };

  game3View.addRenderListener(() => {
    timer.start();
  });

  return game3View;
};
