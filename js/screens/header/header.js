import HeaderView from './header-view';
import {changeView} from '../../utils';
import greeting from '../greeting/greeting';

const BlinkTimerParametrs = {
  TIME_FROM: 0,
  TIME_TO: 5,
  TIME_DELAY: 500
}

export default (data, state, timer, blinkTimerParam) => {

  const headerView = new HeaderView(data, state);
  headerView.onClickBack = () => {
    if (timer) {
      timer.stop();
    }
    changeView(greeting(data));
  };

  if (timer) {
    timer.onTick = (time) => {
      headerView.timer = time;
      blinkTimer(time);
    };
  }

  const blinkTimer = (time) => {
      if ((time > BlinkTimerParametrs.TIME_FROM) && (time <= BlinkTimerParametrs.TIME_TO)) {
        setTimeout(() => {
          headerView.timer = '';
        }, BlinkTimerParametrs.TIME_DELAY);
    }
  }

  return headerView;
};
