const statisticTemplate = (data, state) => `<div class="stats">
<ul class="stats">
  ${state.answers.map((answer) => {
    if (!answer.isCorrect) {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
    if (answer.time <= data.parametrs.FAST_TIME) {
      return `<li class="stats__result stats__result--fast"></li>`;
    }
    if (answer.time >= data.parametrs.SLOW_TIME) {
      return `<li class="stats__result stats__result--slow"></li>`;
    }
    return `<li class="stats__result stats__result--correct"></li>`;
  }).join(``)}
  ${new Array(data.games.length - state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
  </ul>
</div>`;

export default statisticTemplate;
