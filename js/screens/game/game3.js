import GameScreen from './game';
import Game3View from './game3-view';

class Game3 extends GameScreen {

  constructor(model, settings) {
    super(model, settings, new Game3View(model.title, model.images));
  }

  init(state) {

    this.view.onClickAnyImage = (evt) => {
      this.endGame(this.isCorrect(evt.target.dataset.index));
    };

    super.init(state);
  }

  isCorrect(indexAnswer) {
    return this.model.images[indexAnswer].is === this.model.search;
  }

}

export default Game3;
