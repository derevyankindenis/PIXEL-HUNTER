import AbstractGameView from './abstract-game-view';

class Game3View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this.title}</p>
      <form class="game__content  game__content--triple">
        ${this.images.map((image, index) => `
          <div class="game__option" data-index=${index}>
          <img src="${image.src}" alt="Option ${index}" class="game__image">
        </div>`).join(``)}
      </form>
    </div>`;
  }

  // ${statisticTemplate(this.data, this.state)}

  bind() {
    super.bind();
    const answers = this.element.querySelectorAll(`.game__option`);
    Array.prototype.forEach.call(answers, (answer) => answer.addEventListener(`click`, this.onClickAnyImage));
  }

  onClickAnyImage() {
  }
}

export default Game3View;
