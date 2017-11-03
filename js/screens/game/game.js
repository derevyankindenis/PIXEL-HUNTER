import Timer from '../../utils/timer';
import Header from '../header/header';
import Application from '../../application';
import {changeView} from '../../utils/utils';

class GameScreen {

  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.settings = model.parametrs;
  }

  init(state) {
    this.state = state;
    this.timer = new Timer(this.settings.MAX_TIME);

    if (!this.view) {
      throw Error(`Should be initialized view`);
    }

    this.view.header = new Header({initialTime: this.settings.MAX_TIME, deaths: this.settings.MAX_LIVES - state.lives, lives: state.lives}, this.timer);

    this.view.addRenderListener(() => {
      this.timer.start();
    });

    this.timer.onTimeOut = () => {
      state.answers.push({isCorrect: false, time: this.timer.time});
      Application.nextGame(this.state);
    };

    this.view.setStatisticLine(state.answers, this.settings.COUNT_GAMES, this.settings.FAST_TIME, this.settings.SLOW_TIME);

    changeView(this.view);
  }

  endGame(isCorrect) {
    this.state.answers.push({isCorrect, time: this.settings.MAX_TIME - this.timer.time});
    this.timer.stop();
    Application.nextGame(this.state);
  }

}

export default GameScreen;
