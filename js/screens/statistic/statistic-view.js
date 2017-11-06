import AbstractView from '../abstract-view';
import getStatisticTemplate from './statistic-template';
import {getElementFromTemplate} from '../../utils/utils';

class StatisticView extends AbstractView {

  constructor(settings) {
    super();
    this.settings = settings;
    this.countResults = 0;
  }

  get template() {
    return `
    <div class="result">
      <h1 class = "result_header"></h1>
      <div class = "results"></div>
    </div>`.trim();
  }

  set resultTitle(resultText) {
    if (this.element) {
      this.headerElement.textContent = resultText;
    }
  }

  static getRowTemplate(title, count, pointsForFastAnswer, points, iconName) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">${title}</td>
        <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${iconName}"></span></td>
        <td class="result__points">×&nbsp;${pointsForFastAnswer}</td>
        <td class="result__total">${points}</td>
      </tr>`;
  }

  getBonusRows(lives, statistic, settings) {
    return `
      ${statistic.fastAnswers ? StatisticView.getRowTemplate(`Бонус за скорость:`, statistic.fastAnswers, settings.POINTS_FOR_FAST_ANSWERS, statistic.pointsForFastAnswers, `fast`) : ``}
      ${lives ? StatisticView.getRowTemplate(`Бонус за жизни:`, lives, settings.POINTS_FOR_LIVES, statistic.pointsForLives, `alive`) : ``}
      ${statistic.slowAnswers ? StatisticView.getRowTemplate(`Штраф за медлительность:`, statistic.slowAnswers, -settings.POINTS_FOR_SLOW_ANSWERS, -statistic.pointsForSlowAnswers, `slow`) : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statistic.totalPoints}</td>
      </tr>`;
  }

  getResultTableTemplate(lives, answers, statistic, tableNum) {
    return `<table class="result__table">
        <tr>
          <td class="result__number">${tableNum}.</td>
          <td colspan="2">${getStatisticTemplate(answers, this.settings.COUNT_GAMES, this.settings.FAST_TIME, this.settings.SLOW_TIME)}</td>
          ${statistic ? `<td class="result__points">×&nbsp;${this.settings.POINTS_FOR_CORRECT_ANSWERS}</td>` : ``}
          ${statistic ? `<td class="result__total"> ${statistic.pointsForCorrectAnswers}` : `<td class="result__total  result__total--final">fail`}</td>
        </tr>
        ${statistic ? this.getBonusRows(lives, statistic, this.settings) : ``}
    </table>`;
  }

  bind() {
    this.resultElement = this.element.querySelector(`.results`);
    this.headerElement = this.element.querySelector(`.result_header`);
  }

  addStatisticTable(state, statistics) {
    if (this.element) {
      const statisticElement = getElementFromTemplate(this.getResultTableTemplate(state.lives, state.answers, statistics, `${++this.countResults}`));
      this.resultElement.appendChild(statisticElement);
    }
  }

  clearStatistic() {
    if (this.element) {
      this.countResults = 0;
      this.resultElement.innerHTML = ``;
    }
  }
}

export default StatisticView;
