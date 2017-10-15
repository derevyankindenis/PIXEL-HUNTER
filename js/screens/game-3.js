import {getElementFromTemplate, showScreen} from '../utils';
import screenStats from './stats';
import {closeGameInfo} from './header';

const html = `<div class="game">
<p class="game__task">Найдите рисунок среди изображений</p>
<form class="game__content  game__content--triple">
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option  game__option--selected">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
  <div class="game__option">
    <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
  </div>
</form>
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>`;

const screenGame3 = getElementFromTemplate(html);
const questionForm = screenGame3.querySelector(`.game__content`);
const answers = screenGame3.querySelectorAll(`.game__option`);

const answerClickHandler = () => {
  closeGameInfo();
  showScreen(screenStats);
  questionForm.reset();
};

Array.prototype.forEach.call(answers, (answer) => answer.addEventListener(`click`, answerClickHandler));

export default screenGame3;
