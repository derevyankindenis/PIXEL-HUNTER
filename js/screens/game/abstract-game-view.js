import AbstractView from '../abstract-view';
import {resizeImages} from '../../utils/resize';
import getStatisticTemplate from '../statistic/statistic-template';
import {getElementFromTemplate} from '../../utils/utils';


class AbstractGameView extends AbstractView {

  set title(paramTitle) {
    if (this._title) {
      this._taskElement.textContent = paramTitle;
    }
    this._title = paramTitle;
  }

  set images(paramImages) {
    if (this._images) {
      this.updateImages(paramImages);
    }
    this._images = paramImages;
  }

  static getTemplateImage(src, index) {
    return `<img src="${src}" alt="Option ${(index + 1) ? index : ``}" class="game__image">`;
  }

  updateImages(paramImages) {
    this._gameOptions.forEach((option, index) => {
      option.removeChild(this._gameImages[index]);
      this._gameImages[index] = getElementFromTemplate(AbstractGameView.getTemplateImage(paramImages[index].src, index)).children[0];
      option.insertAdjacentElement(`afterBegin`, this._gameImages[index]);
    });
  }

  bind() {
    this._gameElement = this.element.querySelector(`.game`);
    this._taskElement = this._gameElement.querySelector(`.game__task`);
    this._questionForm = this._gameElement.querySelector(`.game__content`);

    this._gameImages = [].slice.call(this._gameElement.querySelectorAll(`.game__image`));
    this._gameOptions = [].slice.call(this._gameElement.querySelectorAll(`.game__option`));
    this._gameElement.appendChild(this.statisticLine);
  }

  setStatisticLine(answers, countGames, fastTime, slowTime) {

    const statisticElement = getElementFromTemplate(getStatisticTemplate(answers, countGames, fastTime, slowTime));

    if (this.statisticLine) {
      this.updateStatisticLine(statisticElement);
    } else {
      this.statisticLine = statisticElement;
    }

  }

  updateStatisticLine(statisticElement) {
    this._gameElement.removeChild(this.statisticLine);
    this.statisticLine = statisticElement;
    this._gameElement.appendChild(this.statisticLine);
  }

  onRender() {
    this._questionForm.reset();
    resizeImages(this._gameOptions, this._gameImages);
    super.onRender();
  }

}

export default AbstractGameView;
