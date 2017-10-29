import AbstractGameView from '../AbstractGameView';
import statisticTemplate from '../statistic-template';

class Game1View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this.data.games[this.state.currentGame].title}</p>
      <form class="game__content">
        ${this.data.games[this.state.currentGame].images.map((image, index) => `
        <div class="game__option">
          <img src="${image.src}" alt="Option 1" class="game__image">
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
    ${statisticTemplate(this.data, this.state)}
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
    const questionForm = this.element.querySelector(`.game__content`);
    questionForm.addEventListener(`change`, this.onFormChanged);
  }

  onFormChanged() {
  }
}

export default Game1View;
