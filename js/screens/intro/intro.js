import Application from '../../application';
import IntroView from './intro-view';
import {changeView} from '../../utils/utils';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    changeView(this.view);
  }

  startRotateAsterix() {
    this.view.startRotateAsterix();
  }

  stopRotateAsterix() {
    this.view.stopRotateAsterix();
  }

  setLoadText(text = ``) {
    this.view.loadText = text;
  }

}

export default new IntroScreen();
