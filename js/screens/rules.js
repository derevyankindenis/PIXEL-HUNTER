import {getElementFromTemplate, showScreen} from '../utils';
import screenGame1 from './game-1';
import {showHeader, showState} from './header';

const html = `<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай 10 раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя" autofocus>
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>`;

const screenRules = getElementFromTemplate(html);
const sendBtn = screenRules.querySelector(`.rules__button`);
const nameInput = screenRules.querySelector(`.rules__input`);

nameInput.addEventListener(`input`, () => {
  if (nameInput.value === ``) {
    sendBtn.setAttribute(`disabled`, `disabled`);
  } else {
    sendBtn.removeAttribute(`disabled`);
  }
});

sendBtn.addEventListener(`click`, () => {
  showScreen(screenGame1);
  showHeader();
  showState();
});

export default screenRules;
