import AbstractGameView from '../AbstractGameView';
import statisticTemplate from '../statistic-template';

class Game2View extends AbstractGameView {

  get template() {
    return `
    <div class="game">
      <p class="game__task">${this.data.games[this.state.currentGame].title}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${this.data.games[this.state.currentGame].image.src}" alt="Option 1" class="game__image">
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
    ${statisticTemplate(this.data, this.state)}
    </div>`;
  }

  get checkedAnswer() {
    return this.element.querySelector(`.game__answer input[name=question1]:checked`);
  }

  bind() {
    super.bind();
    const questionForm = this.element.querySelector(`.game__content`);
    questionForm.addEventListener(`change`, this.onFormChanged);
  }

  onFormChanged() {
  }

}

export default Game2View;
