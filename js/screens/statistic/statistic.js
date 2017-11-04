import StatisticView from './statistic-view';
import {getGameStatistic} from '../../data/game-data';
import Header from '../header/header';
import {changeView} from '../../utils/utils';

class StatisticScreen {

  constructor(model) {
    this.model = model;
    this.view = new StatisticView(model.parametrs);
    this.view.header = new Header();
  }

  init(state) {
    const gameStatistic = getGameStatistic(state.answers, state.lives, this.model.parametrs);
    this.view.resultTitle = gameStatistic ? `Победа!` : `Поражение :(`;
    this.view.addStatisticTable(state, gameStatistic);
    changeView(this.view);
  }

}

export default StatisticScreen;
