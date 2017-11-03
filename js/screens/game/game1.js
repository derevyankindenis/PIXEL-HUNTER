import GameScreen from './game';
import Game1View from './game1-view';

class Game1 extends GameScreen {

  constructor(model) {
    super(model, new Game1View());

    this.view.onFormChanged = () => {
      const answers = this.getAnswers();
      if (answers) {
        this.endGame(this.isCorrect(answers));
      }
    };

  }

  init(state) {
    this.view.title = this.model.games[state.currentGame].title;
    this.view.images = this.model.games[state.currentGame].images;
    super.init(state);
  }

  getAnswers() {
    const answer1 = this.view.firstAnswer;
    const answer2 = this.view.secondAnswer;
    return (answer1) && (answer2) ? [answer1.value, answer2.value] : 0;
  }

  isCorrect(answers) {
    return answers.every((answer, index) => answer === this.model.games[this.state.currentGame].images[index].is);
  }

}

export default Game1;
