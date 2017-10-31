import GameScreen from './game';
import Game1View from './game1-view';

class Game1 extends GameScreen {

  constructor(model, settings) {
    super(model, settings, new Game1View(model.title, model.images));
  }

  init(state) {

    this.view.onFormChanged = () => {
      const answers = this.getAnswers();
      if (answers) {
        this.endGame(this.isCorrect(answers));
      }
    };

    super.init(state);
  }

  getAnswers() {
    const answer1 = this.view.firstAnswer;
    const answer2 = this.view.secondAnswer;
    return (answer1) && (answer2) ? [answer1.value, answer2.value] : 0;
  }

  isCorrect(answers) {
    return answers.every((answer, index) => answer === this.model.images[index].is);
  }

}

export default Game1;
