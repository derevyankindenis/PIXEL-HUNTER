import AbstractGameView from './abstract-game-view';

class Game2View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this._title}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          ${this.getTemplateImage(this._images[0].src, 1)}
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
    </div>`;
  }

  get checkedAnswer() {
    return this.element.querySelector(`.game__answer input[name=question1]:checked`);
  }

  bind() {
    super.bind();
    this._questionForm.addEventListener(`change`, this.onFormChanged);
  }

  onFormChanged() {
  }

}

export default Game2View;
