import AbstractView from '../AbstractView';

class GreetingView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
    <div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${this.data.greeting.title}</h3>
      <p>${this.data.greeting.content}</p>
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
