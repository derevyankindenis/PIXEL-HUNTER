import HeaderView from './header-view';
import Application from '../../application';

const BlinkTimerParametrs = {
  TIME_FROM: 0,
  TIME_TO: 5,
  TIME_DELAY: 500
};

class Header {

  constructor(model, timer) {
    this._view = new HeaderView(model);
    this.timer = timer;
  }

  get view() {
    this._view.onClickBack = () => {
      if (this.timer) {
        this.timer.stop();
      }
      Application.showGreeting();
    };

    if (this.timer) {
      this.timer.onTick = (time) => {
        this._view.timer = time;
        this.blinkTimer(time);
      };
    }

    return this._view;
  }

  blinkTimer(time) {
    if ((time > BlinkTimerParametrs.TIME_FROM) && (time <= BlinkTimerParametrs.TIME_TO)) {
      setTimeout(() => {
        this.view.timer = ``;
      }, BlinkTimerParametrs.TIME_DELAY);
    }
  }
}

export default Header;
