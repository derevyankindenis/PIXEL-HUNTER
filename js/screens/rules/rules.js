import RulesView from './rules-view';
import Header from '../header/header';
import Application from '../../application';
import {changeView} from '../../utils/utils';


class RulesScreen {

  constructor(model) {
    this.view = new RulesView(model.COUNT_GAMES, model.MAX_TIME, model.MAX_LIVES);
  }

  init() {
    this.view.header = new Header();

    this.view.onClickOnGO = () => {
      Application.currentUser = this.view.nameUser;
      Application.startGame();
    };

    changeView(this.view);
  }

}

export default RulesScreen;
