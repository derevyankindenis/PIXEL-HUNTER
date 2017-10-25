import {getElementFromTemplate, nextGame} from '../utils';
import statisticTemplate from './currentStatistic';
import createHeader from './header';
import {resizeImages} from '../resize';

const screenGame1Template = (data, state) => `
<div class="game">
<p class="game__task">${data.games[state.currentGame].title}</p>
<form class="game__content">
${data.games[state.currentGame].images.map((image, index) => `<div class="game__option">
<img src="${image.src}" alt="Option 1" class="game__image">
<label class="game__answer game__answer--photo">
  <input name="question${index + 1}" type="radio" value="photo">
  <span>Фото</span>
</label>
<label class="game__answer game__answer--paint">
  <input name="question${index + 1}" type="radio" value="paint">
  <span>Рисунок</span>
</label>
</div>`).join(``)}
</form>
${statisticTemplate(data, state)}
</div>`;

const createGame1 = (data, state) => {

  const screenGame1 = getElementFromTemplate(screenGame1Template(data, state));
  const header = createHeader(data, state);
  screenGame1.insertAdjacentElement(`afterBegin`, header);
  const questionForm = screenGame1.querySelector(`.game__content`);
  const gameImages = [].slice.call(questionForm.querySelectorAll(`.game__image`));
  resizeImages({width: 468, height: 458}, gameImages);

  const getAnswers = () => {
    const answer1 = screenGame1.querySelector(`.game__answer input[name=question1]:checked`);
    const answer2 = screenGame1.querySelector(`.game__answer input[name=question2]:checked`);
    return (answer1) && (answer2) ? [answer1.value, answer2.value] : 0;
  };

  const isCorrect = (answers) => answers.every((answer, index) => answer === data.games[state.currentGame].images[index].is);

  questionForm.addEventListener(`change`, () => {
    const answers = getAnswers();
    if (answers) {
      state.answers.push({isCorrect: isCorrect(answers), time: 0});
      nextGame(data, state);
    }
  });

  return screenGame1;
};

export default createGame1;
