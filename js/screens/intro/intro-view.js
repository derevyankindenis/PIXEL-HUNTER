import AbstractView from '../abstract-view';

class IntroView extends AbstractView {

  get template() {
    return `
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <div class="intro__state"></div>
        <p class="intro__motto">
          <sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
        </p>
      </div>
    </div>`.trim();
  }

  set loadText(text) {
    this.introState.textContent = text;
  }

  bind() {
    this.asterix = this._element.querySelector(`.intro__asterisk`);
    this.introState = this._element.querySelector(`.intro__state`);
  }

  startRotateAsterix() {
    this.asterix.classList.add(`intro__asterisk--rotate`);
  }

  stopRotateAsterix() {
    this.asterix.classList.remove(`intro__asterisk--rotate`);
  }
}

export default IntroView;
