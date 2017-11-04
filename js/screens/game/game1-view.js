import AbstractGameView from './abstract-game-view';

class Game1View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this._title}</p>
      <form class="game__content">
        ${this._images.map((image, index) => `
        <div class="game__option">
          ${this.getTemplateImage(image.src, index)}
          <label class="game__answer game__answer--photo">
            <input name="question${index + 1}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question${index + 1}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>`).join(``)}
      </form>
    </div>`;
  }

  get firstAnswer() {
    return this.element.querySelector(`.game__answer input[name=question1]:checked`);
  }

  get secondAnswer() {
    return this.element.querySelector(`.game__answer input[name=question2]:checked`);
  }

  bind() {
    super.bind();
    this._questionForm.addEventListener(`change`, this.onFormChanged);
  }

  onFormChanged() {
  }
}

export default Game1View;
