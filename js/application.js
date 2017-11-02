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

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME_1: `game_1`,
  GAME_2: `game_2`,
  GAME_3: `game_3`,
  STATISTIC: `statistic`
};

const decodeAnswers = (cryptoStr) => {
  const decryptedAnswer = cryptoStr.split(`*`);
  if (decryptedAnswer[0] === ``) {
    return [];
  }

  return decryptedAnswer.map((str) => {
    const answer = str.split(`,`);
    return {isCorrect: Number(answer[0]) ? true : false, time: Number(answer[1])};
  });
};

class Application {

  static init() {

    Application.routes = {
      [ControllerId.INTRO]: introScreen,
      [ControllerId.GREETING]: new GreetingScreen(dataGame.greeting),
      [ControllerId.RULES]: new RulesScreen(dataGame.parametrs),
      [ControllerId.GAME_1]: new Game1(dataGame),
      [ControllerId.GAME_2]: new Game2(dataGame),
      [ControllerId.GAME_3]: new Game3(dataGame),
      [ControllerId.STATISTIC]: new StatisticScreen(dataGame)
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, state] = hashValue.split(`?`);
      this.changeHash(id, state);
    };

    window.onhashchange = hashChangeHandler;

    hashChangeHandler();
  }

  static changeHash(id, state) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(this.loadState(state));
    }
  }

  static loadState(state) {
    if (state) {
      const paramsHash = state.split(`|`);

      const unCriptoState = {
        lives: Number(paramsHash[1]),
        currentGame: Number(paramsHash[2]),
        answers: decodeAnswers(paramsHash[0])
      };

      return unCriptoState;
    }
    return ``;
  }

  static saveState(state) {
    if (state) {
      const answers = state.answers.map((answer) => `${answer.isCorrect ? 1 : 0},${answer.time}`).join(`*`);
      return [answers, state.lives, state.currentGame].join(`|`);
    }
    return ``;
  }

  static showIntro() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showStatistic(state) {
    location.hash = `${ControllerId.STATISTIC}?${this.saveState(state)}`;
  }

  static showGame1(state) {
    location.hash = `${ControllerId.GAME_1}?${this.saveState(state)}`;
  }

  static showGame2(state) {
    location.hash = `${ControllerId.GAME_2}?${this.saveState(state)}`;
  }

  static showGame3(state) {
    location.hash = `${ControllerId.GAME_3}?${this.saveState(state)}`;
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
          this.showGame1(state);
          break;
        case 2:
          this.showGame2(state);
          break;
        case 3:
          this.showGame3(state);
          break;
      }
    } else {
      this.showStatistic(state);
    }
  }

}

export default Application;

