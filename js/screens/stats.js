import {getElementFromTemplate} from '../utils';
import {getGameStatistic} from '../data/game-data';
import createHeader from '../screens/header';
import statisticTemplate from './currentStatistic';

const rowTemplate = (title, count, pointsForFastAnswer, points, iconName) => `
<tr>
  <td></td>
  <td class="result__extra">${title}</td>
  <td class="result__extra">${count}&nbsp;<span class="stats__result stats__result--${iconName}"></span></td>
  <td class="result__points">×&nbsp;${pointsForFastAnswer}</td>
  <td class="result__total">${points}</td>
</tr>
`;

const bonusRows = (data, state, statistic) => `
  ${rowTemplate(`Бонус за скорость:`, statistic.fastAnswers, data.parametrs.POINTS_FOR_FAST_ANSWERS, statistic.pointsForFastAnswers, `fast`)}
  ${rowTemplate(`Бонус за жизни:`, state.lives, data.parametrs.POINTS_FOR_LIVES, statistic.pointsForLives, `alive`)}
  ${rowTemplate(`Штраф за медлительность:`, statistic.slowAnswers, -data.parametrs.POINTS_FOR_SLOW_ANSWERS, -statistic.pointsForSlowAnswers, `slow`)}
  <tr>
    <td colspan="5" class="result__total  result__total--final">${statistic.totalPoints}</td>
  </tr>
`;

const statsTemplate = (data, state, statistic, isWin) => `
<div class="result">
  <h1>${ isWin ? `Победа!` : `Поражение!`}</h1>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">${statisticTemplate(data, state)}</td>
      ${isWin ? `<td class="result__points">×&nbsp;${data.parametrs.POINTS_FOR_CORRECT_ANSWERS}</td>` : ``}
      ${isWin ? `<td class="result__total"> ${statistic.pointsForCorrectAnswers}` : `<td class="result__total  result__total--final">fail`}</td>
    </tr>
    ${isWin ? bonusRows(data, state, statistic) : ``}
  </table>
</div>`;

const createStats = (data, state) => {

  const statScreen = getElementFromTemplate(statsTemplate(data, state, getGameStatistic(data, state), state.lives > 0));
  const header = createHeader(data);
  statScreen.insertAdjacentElement(`afterBegin`, header);

  return statScreen;
};

export default createStats;
