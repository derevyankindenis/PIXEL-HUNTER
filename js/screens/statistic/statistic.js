import StatisticView from './statistic-view';
import {getGameStatistic} from '../../data/game-data';
import Header from '../header/header';
import {changeView} from '../../utils/utils';
import {Loader} from '../../utils/loader';
import SplashScreen from '../splash-screen';

class StatisticScreen {

  constructor(model) {
    this.model = model;
    this.view = new StatisticView(model.parametrs);
    this.view.header = new Header();
  }

  init(state, userName) {
    this.view.clearStatistic();
    this.view.resultTitle = ((state.answers.length !== this.model.parametrs.COUNT_GAMES) || (state.lives <= 0)) ? `Поражение :(` : `Победа!`;
    this.currentStatistic = getGameStatistic(state.answers, state.lives, this.model.parametrs);

    const splash = new SplashScreen();
    splash.show();

    Loader.loadResults(userName).
        then((data) => (this.showAllResults(state, data))).
        catch(() => {
          this.showCurrentStatistic(state);
        });
  }

  showCurrentStatistic(state) {
    this.view.addStatisticTable(state, this.currentStatistic);
    changeView(this.view);
  }

  showAllResults(state, results) {
    results.map((result) => ({state: result, statistic: getGameStatistic(result.answers, result.lives, this.model.parametrs)}))
        .concat({state, statistic: this.currentStatistic})
        // сортировка по количеству очков
        .sort((result1, result2) => (result2.statistic.totalPoints ? result2.statistic.totalPoints : 0) - (result1.statistic.totalPoints ? result1.statistic.totalPoints : 0))
        .forEach((result) => this.view.addStatisticTable(result.state, result.statistic));
    changeView(this.view);
  }

}

export default StatisticScreen;
