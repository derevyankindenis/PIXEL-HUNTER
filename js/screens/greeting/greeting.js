import GreetingView from './greeting-view';
import rules from '../rules/rules';
import {changeView} from '../../utils';

export default (data) => {
  const greetingView = new GreetingView(data);
  greetingView.onClick = () => changeView(rules(data));
  return greetingView;
};
