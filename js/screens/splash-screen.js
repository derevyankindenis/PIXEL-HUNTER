import AbstractView from './abstract-view';
import {changeView, getElementFromTemplate} from '../utils/utils';

export default class SplashScreen extends AbstractView {

  constructor(loaderText = `Загрузка...`) {
    super();
    this.loaderText = loaderText;
    this.central = document.querySelector(`.central`);
  }

  get template() {
    return `
      <div class="cssload-wrap">
        <div><div></div><div></div><div></div><div></div></div>
        <div>${this.loaderText}</div>
      </div>
  `;
  }

  getErrorLoad(errorMessage) {
    return `<div class = "ErrorMessage">${errorMessage}</div>`;
  }

  show() {
    changeView(this);
  }

  stop() {
    this.central.removeChild(this.element);
  }

  showError(message = `Ошибка загрузки...`) {
    this._element = getElementFromTemplate(this.getErrorLoad(message));
    changeView(this);
  }
}
