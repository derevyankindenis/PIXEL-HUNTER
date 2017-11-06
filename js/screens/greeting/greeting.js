import GreetingView from './greeting-view';
import {changeView} from '../../utils/utils';
import Application from '../../application';

class GreetingScreen {

  constructor(model) {
    this.view = new GreetingView(model.title, model.content);
    this.view.onClick = () => {
      Application.showRules();
    };
  }

  init() {
    changeView(this.view);
  }
}

export default GreetingScreen;
