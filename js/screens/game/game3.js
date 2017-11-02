import GameScreen from './game';
import Game3View from './game3-view';

class Game3 extends GameScreen {

  constructor(model) {
    super(model, new Game3View());

    this.view.onClickAnyImage = (evt) => {
      this.endGame(this.isCorrect(evt.target.dataset.index));
    };

  }

  init(state) {
    this.view.title = this.model.games[state.currentGame].title;
    this.view.images = this.model.games[state.currentGame].images;
    super.init(state);
  }

  isCorrect(indexAnswer) {
    return this.model.games[this.state.currentGame].images[indexAnswer].is === this.model.games[this.state.currentGame].search;
  }

}

export default Game3;
