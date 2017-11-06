import introScreen from './screens/intro/intro';
import GreetingScreen from './screens/greeting/greeting';
import RulesScreen from './screens/rules/rules';
import Game1 from './screens/game/game1';
import Game2 from './screens/game/game2';
import Game3 from './screens/game/game3';
import StatisticScreen from './screens/statistic/statistic';
import {QuestionType} from './data/game-data';
import {Loader, DEFAULT_NAME} from './utils/loader';


const getInitialState = () => {
  return {
    answers: [],
    lives: 3,
    currentGame: -1
  };
};

const ControllerId = {
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

  static init(data) {

    this.data = data;
    this.currentUser = DEFAULT_NAME;

    Application.routes = {
      [ControllerId.INTRO]: introScreen,
      [ControllerId.GREETING]: new GreetingScreen(data.greeting),
      [ControllerId.RULES]: new RulesScreen(data.parametrs),
      [ControllerId.GAME_1]: new Game1(data),
      [ControllerId.GAME_2]: new Game2(data),
      [ControllerId.GAME_3]: new Game3(data),
      [ControllerId.STATISTIC]: new StatisticScreen(data)
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

      const parsedState = {
        lives: Number(paramsHash[1]),
        currentGame: Number(paramsHash[2]),
        answers: decodeAnswers(paramsHash[0])
      };

      return parsedState;
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

  static changeTo(screen, state) {
    location.hash = `${screen}${state ? `?${state}` : ``}`;
  }

  static showWelcome() {
    this.changeTo(ControllerId.INTRO);
  }

  static showGreeting() {
    this.changeTo(ControllerId.GREETING);
  }

  static showRules() {
    this.changeTo(ControllerId.RULES);
  }

  static showStatistic(state) {
    this.routes[ControllerId.STATISTIC].init(state, this.currentUser);
    Loader.saveData(state, this.currentUser);
  }

  static showGame(state) {
    switch (this.data.games[state.currentGame].type) {
      case QuestionType.TWO_OF_TWO:
        this.routes[ControllerId.GAME_1].init(state);
        break;
      case QuestionType.TINDER_LIKE:
        this.routes[ControllerId.GAME_2].init(state);
        break;
      case QuestionType.ONE_OF_THREE:
        this.routes[ControllerId.GAME_3].init(state);
        break;
    }
  }

  static startGame() {
    Application.nextGame(getInitialState());
  }

  static nextGame(state) {
    if ((state.answers.length > 0) && (!state.answers[state.currentGame].isCorrect)) {
      state.lives--;
    }
    if (((this.data.parametrs.COUNT_GAMES > state.currentGame + 1) && (state.lives >= 0))) {
      state.currentGame++;
      this.showGame(state);
    } else {
      this.showStatistic(state);
    }
  }
}

export default Application;
