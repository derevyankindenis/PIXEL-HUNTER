import AbstractView from '../abstract-view';

class GreetingView extends AbstractView {

  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
  }

  get template() {
    return `
    <div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${this.title}</h3>
      <p>${this.content}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`.trim();
  }

  onClick() {
  }

  bind() {
    const continueBtn = this._element.querySelector(`.greeting__continue`);
    continueBtn.addEventListener(`click`, this.onClick);
  }

}

export default GreetingView;
