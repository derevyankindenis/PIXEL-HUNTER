import AbstractView from '../AbstractView';

class HeaderView extends AbstractView {

  constructor(data, state, startTime) {
    super();
    this.data = data;
    this.state = state;
    this.startTime = startTime;
  }

  stateGameTemplate() {
    return `
      <h1 class="game__timer">${this.data.parametrs.MAX_TIME}</h1>
      <div class="game__lives">
        ${new Array(this.data.parametrs.MAX_LIVES - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      </div>`;
  }

  get template() {
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        ${ this.state ? this.stateGameTemplate() : ``}
      </header>`.trim();
  }

  set timer(time) {
    this._time.textContent = time;
  }

  bind() {
    const headerBack = this.element.querySelector(`.header__back`);
    this._time = this.element.querySelector(`.game__timer`);
    headerBack.addEventListener(`click`, this.onClickBack);
    this.onLoad();
  }

  onClickBack() {
  }

  onLoad() {
  }

}

export default HeaderView;
