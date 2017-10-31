import AbstractView from '../abstract-view';
import {resizeImages} from '../../utils/resize';
import statisticTemplate from '../statistic/statistic-template';


class AbstractGameView extends AbstractView {

  constructor(title, images) {
    super();
    this.title = title;
    this.images = images;
  }

  bind() {
    this._gameImages = [].slice.call(this._element.querySelectorAll(`.game__image`));
    this._gameOption = this.element.querySelector(`.game__option`);

    this._questionForm = this.element.querySelector(`.game__content`);
    this._questionForm.insertAdjacentHTML(`afterEnd`, this.statisticLine);
  }

  onRender() {
    resizeImages({width: this._gameOption.clientWidth, height: this._gameOption.clientHeight}, this._gameImages);
    super.onRender();
  }

  setStatisticLine(answers, countGames, fastTime, slowTime) {
    this.statisticLine = statisticTemplate(answers, countGames, fastTime, slowTime);
  }
}

export default AbstractGameView;
