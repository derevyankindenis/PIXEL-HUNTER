import {getElementFromTemplate, nextGame} from '../utils';
import statisticTemplate from './currentStatistic';
import createHeader from './header';

const screenGame2Template = (data, state) => `<div class="game">
<p class="game__task">${data.games[state.currentGame].title}</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="${data.games[state.currentGame].image.src}" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
${statisticTemplate(data, state)}
</div>`;

const createGame2 = (data, state) => {
  const screenGame2 = getElementFromTemplate(screenGame2Template(data, state));
  const header = createHeader(data, state);
  screenGame2.insertAdjacentElement(`afterBegin`, header);
  const questionForm = screenGame2.querySelector(`.game__content`);

  const getAnswer = () => {
    const answer = screenGame2.querySelector(`.game__answer input[name=question1]:checked`);
    return answer ? answer.value : 0;
  };

  const isCorrect = (answer) => data.games[state.currentGame].image.is === answer;

  questionForm.addEventListener(`change`, () => {
    const answer = getAnswer();
    if (answer) {
      state.answers.push({isCorrect: isCorrect(answer), time: 0});
      nextGame(data, state);
    }
  });

  return screenGame2;
};

export default createGame2;
