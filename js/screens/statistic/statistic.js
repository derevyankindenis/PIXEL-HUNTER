import StatisticView from './statistic-view';
import {getGameStatistic} from '../../data/game-data';
import header from '../header/header';

export default (data, state) => {
  const gameStatistic = getGameStatistic(state.answers, state.lives, data.parametrs, data.games.length);
  const isWin = gameStatistic !== -1 ? true : false;
  const statisticView = new StatisticView(data, state, isWin, gameStatistic);
  statisticView.header = header(data);
  return statisticView;
};
