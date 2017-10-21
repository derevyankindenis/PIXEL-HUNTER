import {getElementFromTemplate, nextGame} from '../utils';
import statisticTemplate from './currentStatistic';
import createHeader from './header';

const screenGame3Template = (data, state) => `<div class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
${data.games[state.currentGame].images.map((image, index) => `<div class="game__option" data-index=${index}>
<img src="${image.src}" alt="Option 1" width="304" height="455">
</div>`).join(``)}
</form>
${statisticTemplate(data, state)}
</div>`;

const createGame3 = (data, state) => {

  const screenGame3 = getElementFromTemplate(screenGame3Template(data, state));
  const header = createHeader(data, state);
  screenGame3.insertAdjacentElement(`afterBegin`, header);

  const answers = screenGame3.querySelectorAll(`.game__option`);
  const isCorrect = (indexAnswer) => data.games[state.currentGame].images[indexAnswer].is === data.games[state.currentGame].search;

  const checkAnswer = (evt) => {
    state.answers.push({isCorrect: isCorrect(evt.target.dataset.index), time: 0});
    nextGame(data, state);
  };

  Array.prototype.forEach.call(answers, (answer) => answer.addEventListener(`click`, checkAnswer));
  return screenGame3;
};

export default createGame3;
