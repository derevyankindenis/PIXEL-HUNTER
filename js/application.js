import introScreen from './screens/intro/intro';
import GreetingScreen from './screens/greeting/greeting';
import RulesScreen from './screens/rules/rules';
import Game1 from './screens/game/game1';
import Game2 from './screens/game/game2';
import Game3 from './screens/game/game3';
import StatisticScreen from './screens/statistic/statistic';
import {dataGame} from './data/game-data';


const getInitialState = () => {
  return {
    answers: [],
    lives: dataGame.parametrs.MAX_LIVES,
    currentGame: -1
  };
};

class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen(dataGame.greeting);
    greetingScreen.init();
  }

  static showRules() {
    const rulesScreen = new RulesScreen(dataGame.parametrs);
    rulesScreen.init();
  }

  static startGame() {
    Application.nextGame(getInitialState());
  }

  static nextGame(state) {
    if ((state.answers.length > 0) && (!state.answers[state.currentGame].isCorrect)) {
      state.lives--;
    }

    if (((dataGame.parametrs.COUNT_GAMES > state.currentGame + 1) && (state.lives > 0))) {
      state.currentGame++;
      switch (dataGame.games[state.currentGame].type) {
        case 1:
          const game1 = new Game1(dataGame.games[state.currentGame], dataGame.parametrs);
          game1.init(state);
          break;
        case 2:
          const game2 = new Game2(dataGame.games[state.currentGame], dataGame.parametrs);
          game2.init(state);
          break;
        case 3:
          const game3 = new Game3(dataGame.games[state.currentGame], dataGame.parametrs);
          game3.init(state);
          break;
      }
    } else {
      const statisticScreen = new StatisticScreen(state, dataGame.parametrs);
      statisticScreen.init();
    }
  }

}

export default Application;

