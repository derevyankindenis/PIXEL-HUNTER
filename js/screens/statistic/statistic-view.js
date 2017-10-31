import AbstractView from '../abstract-view';
import statisticTemplate from './statistic-template';

class StatisticView extends AbstractView {

  constructor(lives, answers, statistic, settings) {
    super();
    this.settings = settings;
    this.statistic = statistic;
    this.lives = lives;
    this.answers = answers;
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

  get template() {
    return `
    <div class="result">
      <h1>${ this.statistic ? `Победа!` : `Поражение!`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">${statisticTemplate(this.answers, this.settings.COUNT_GAMES, this.settings.FAST_TIME, this.settings.SLOW_TIME)}</td>
          ${this.statistic ? `<td class="result__points">×&nbsp;${this.settings.POINTS_FOR_CORRECT_ANSWERS}</td>` : ``}
          ${this.statistic ? `<td class="result__total"> ${this.statistic.pointsForCorrectAnswers}` : `<td class="result__total  result__total--final">fail`}</td>
        </tr>
        ${this.statistic ? this.bonusRows(this.lives, this.statistic, this.settings) : ``}
      </table>
    </div>`.trim();
  }

  bind() {
  }

}

export default StatisticView;
