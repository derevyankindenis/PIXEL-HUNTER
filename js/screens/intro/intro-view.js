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
    this.intro = this._element.querySelector(`.intro`);
    this.asterix = this._element.querySelector(`.intro__asterisk`);
    this.introState = this._element.querySelector(`.intro__state`);
    this.motto = this._element.querySelector(`.intro__motto`);

  }

  startRotateAsterix() {
    this.asterix.classList.add(`intro__asterisk--rotate`);
  }

  stopRotateAsterix() {
    this.asterix.classList.remove(`intro__asterisk--rotate`);
  }

  startAnimationInvisible() {
    this.intro.classList.add(`bgChange`);
    this.asterix.classList.add(`invisible`);
    this.introState.classList.add(`invisible`);
    this.motto.classList.add(`invisible`);
  }
}

export default IntroView;
