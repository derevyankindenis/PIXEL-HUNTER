import RulesView from './rules-view';
import {nextScreen} from '../../utils';
import header from '../header/header';

export default (data) => {
  const rulesView = new RulesView(data);
  rulesView.header = header(data);

  const state = {
    answers: [],
    lives: data.parametrs.MAX_LIVES,
    currentGame: -1
  };

  rulesView.onClickOnGO = () => nextScreen(data, state);
  return rulesView;
};
