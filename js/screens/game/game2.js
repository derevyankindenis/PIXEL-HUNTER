import GameScreen from './game';
import Game2View from './game2-view';

class Game2 extends GameScreen {

  constructor(model) {
    super(model, new Game2View());

    this.view.onFormChanged = () => {
      const answer = this.getAnswer();
      if (answer) {
        this.endGame(this.isCorrect(answer));
      }
    };

  }

  init(state) {
    this.view.title = this.model.games[state.currentGame].title;
    this.view.images = [this.model.games[state.currentGame].image];
    super.init(state);
  }

  getAnswer() {
    const answer = this.view.checkedAnswer;
    return answer ? answer.value : 0;
  }

  isCorrect(answer) {
    return this.model.games[this.state.currentGame].image.is === answer;
  }

}

export default Game2;
