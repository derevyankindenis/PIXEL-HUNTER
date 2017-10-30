import HeaderView from './header-view';
import {changeView} from '../../utils';
import greeting from '../greeting/greeting';

const BLINK_TIMER_PARAM = {
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
      if ((time > BLINK_TIMER_PARAM.TIME_FROM) && (time <= BLINK_TIMER_PARAM.TIME_TO)) {
        setTimeout(() => {
          headerView.timer = '';
        }, BLINK_TIMER_PARAM.TIME_DELAY);
    }
  }

  return headerView;
};
