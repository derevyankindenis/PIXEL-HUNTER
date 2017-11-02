import AbstractView from '../abstract-view';
import statisticTemplate from './statistic-template';
import {getElementFromTemplate} from '../../utils/utils';

class StatisticView extends AbstractView {

  constructor(settings) {
    super();
    this.settings = settings;
    this.countResults = 0;
  }

  rowTemplate(title, count, pointsForFastAnswer, points, iconName) {
    return `
      <tr>
        <td></td>
        <td class="result__extra">${title}</td>
        <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${iconName}"></span></td>
        <td class="result__points">×&nbsp;${pointsForFastAnswer}</td>
        <td class="result__total">${points}</td>
      </tr>`;
  }

  bonusRows(lives, statistic, settings) {
    return `
      ${statistic.fastAnswers ? this.rowTemplate(`Бонус за скорость:`, statistic.fastAnswers, settings.POINTS_FOR_FAST_ANSWERS, statistic.pointsForFastAnswers, `fast`) : ``}
      ${this.rowTemplate(`Бонус за жизни:`, lives, settings.POINTS_FOR_LIVES, statistic.pointsForLives, `alive`)}
      ${statistic.slowAnswers ? this.rowTemplate(`Штраф за медлительность:`, statistic.slowAnswers, -settings.POINTS_FOR_SLOW_ANSWERS, -statistic.pointsForSlowAnswers, `slow`) : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${statistic.totalPoints}</td>
      </tr>`;
  }

  resultTableTemplate(lives, answers, statistic, tableNum) {
    return `<table class="result__table">
        <tr>
          <td class="result__number">${tableNum}.</td>
          <td colspan="2">${statisticTemplate(answers, this.settings.COUNT_GAMES, this.settings.FAST_TIME, this.settings.SLOW_TIME)}</td>
          ${statistic ? `<td class="result__points">×&nbsp;${this.settings.POINTS_FOR_CORRECT_ANSWERS}</td>` : ``}
          ${statistic ? `<td class="result__total"> ${statistic.pointsForCorrectAnswers}` : `<td class="result__total  result__total--final">fail`}</td>
        </tr>
        ${statistic ? this.bonusRows(lives, statistic, this.settings) : ``}
    </table>`;
  }

  get template() {
    return `
    <div class="result">
      <h1 class = "result_header"></h1>
    </div>`.trim();
  }

  bind() {
    this.resultElement = this.element.querySelector(`.result`);
    this.headerElement = this.resultElement.querySelector(`.result_header`);
  }

  addStatisticTable(state, statistics) {
    if (this.element) {
      const statisticElement = getElementFromTemplate(this.resultTableTemplate(state.lives, state.answers, statistics, ++this.countResults));
      this.resultElement.appendChild(statisticElement);
    }
  }

  set resultTitle(resultText) {
    if (this.element) {
      this.headerElement.textContent = resultText;
    }
  }

}

export default StatisticView;
