import GameScreen from './game';
import Game2View from './game2-view';

class Game2 extends GameScreen {

  constructor(model, settings) {
    super(model, settings, new Game2View(model.title, model.image));
  }

  init(state) {

    this.view.onFormChanged = () => {
      const answer = this.getAnswer();
      if (answer) {
        this.endGame(this.isCorrect(answer));
      }
    };

    super.init(state);
  }

  getAnswer() {
    const answer = this.view.checkedAnswer;
    return answer ? answer.value : 0;
  }

  isCorrect(answer) {
    return this.model.image.is === answer;
  }

}

export default Game2;
