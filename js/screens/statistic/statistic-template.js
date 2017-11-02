const statisticTemplate = (answers, countGames, fastTime, slowTime) => `<div class="stats">
<ul class="stats">
  ${answers.map((answer) => {
    if (!answer.isCorrect) {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
    if (answer.time <= fastTime) {
      return `<li class="stats__result stats__result--fast"></li>`;
    }
    if (answer.time >= slowTime) {
      return `<li class="stats__result stats__result--slow"></li>`;
    }
    return `<li class="stats__result stats__result--correct"></li>`;
  }).join(``)}
  ${new Array(countGames - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
  </ul>
</div>`;

export default statisticTemplate;
