import Application from '../../application';
import IntroView from './intro-view';
import {changeView} from '../../utils/utils';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    this.view.onClick = () => {
      Application.showGreeting();
    };

    changeView(this.view);
  }
}

export default new IntroScreen();
