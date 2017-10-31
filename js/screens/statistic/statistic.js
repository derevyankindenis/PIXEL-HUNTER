import StatisticView from './statistic-view';
import {getGameStatistic} from '../../data/game-data';
import Header from '../header/header';
import {changeView} from '../../utils/utils';

class StatisticScreen {

  constructor(model, settings) {
    const gameStatistic = getGameStatistic(model.answers, model.lives, settings);
    this.view = new StatisticView(model.lives, model.answers, gameStatistic, settings);
    this.view.header = new Header();
  }

  init() {
    changeView(this.view);
  }

}

export default StatisticScreen;
