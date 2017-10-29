import HeaderView from './header-view';
import {changeView} from '../../utils';
import greeting from '../greeting/greeting';


export default (data, state, timer) => {

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
    };
  }

  return headerView;
};
