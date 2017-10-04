import {getElementFromTemplate, showScreen, isCheckedSomeInput} from '../utils';
import {screenGame2} from './game-2';

const html = `<div class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>`;

const screenGame1 = getElementFromTemplate(html);
const answer1 = screenGame1.querySelectorAll(`.game__answer input[name=question1]`);
const answer2 = screenGame1.querySelectorAll(`.game__answer input[name=question2]`);
const questionForm = screenGame1.querySelector(`.game__content`);

const isUserAnswered = () => isCheckedSomeInput(answer1) && isCheckedSomeInput(answer2);

questionForm.addEventListener(`change`, () => {
  if (isUserAnswered()) {
    showScreen(screenGame2);
  }
});

export {screenGame1};
