import AbstractGameView from './abstract-game-view';

class Game3View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this._title}</p>
      <form class="game__content  game__content--triple">
        ${this._images.map((image, index) => `
          <div class="game__option" data-index=${index}>
            ${this.getTemplateImage(image.src, index)}
          </div>`).join(``)}
      </form>
    </div>`;
  }

  bind() {
    super.bind();
    const answers = this.element.querySelectorAll(`.game__option`);
    Array.prototype.forEach.call(answers, (answer) => answer.addEventListener(`click`, this.onClickAnyImage));
  }

  onClickAnyImage() {
  }
}

export default Game3View;
