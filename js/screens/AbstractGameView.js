import AbstractView from './AbstractView';
import {resizeImages} from '../resize';

class AbstractGameView extends AbstractView {

  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
  }

  bind() {
    this._gameImages = [].slice.call(this._element.querySelectorAll(`.game__image`));
    this._gameOption = this.element.querySelector(`.game__option`);
  }

  onRender() {
    resizeImages({width: this._gameOption.clientWidth, height: this._gameOption.clientHeight}, this._gameImages);
    super.onRender();
  }

}

export default AbstractGameView;
