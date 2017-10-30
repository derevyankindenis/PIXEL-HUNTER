import AbstractGameView from '../AbstractGameView';
import statisticTemplate from '../statistic-template';

class Game3View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this.data.games[this.state.currentGame].title}</p>
      <form class="game__content  game__content--triple">
        ${this.data.games[this.state.currentGame].images.map((image, index) => `
          <div class="game__option" data-index=${index}>
          <img src="${image.src}" alt="Option ${index}" class="game__image">
        </div>`).join(``)}
      </form>
      ${statisticTemplate(this.data, this.state)}
    </div>`;
  }

  bind() {
    super.bind();
    const answers = this.element.querySelectorAll(`.game__option`);
    Array.prototype.forEach.call(answers, (answer) => answer.addEventListener(`click`, this.onClickAnythingImage));
  }

  onClickAnythingImage() {
  }
}

export default Game3View;
