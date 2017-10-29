import {getElementFromTemplate, nextGame} from '../utils';

const rulesTemplate = (data) => `<div class="rules">
<h1 class="rules__title">Правила</h1>
<p class="rules__description">Угадай ${data.games.length} раз для каждого изображения фото <img
  src="img/photo_icon.png" width="16" height="16"> или рисунок <img
  src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>
  На каждую попытку отводится ${data.parametrs.MAX_TIME} секунд.<br>
  Ошибиться можно не более ${data.parametrs.MAX_LIVES} раз.<br>
  <br>
  Готовы?
</p>
<form class="rules__form">
  <input class="rules__input" type="text" placeholder="Ваше Имя" autofocus>
  <button class="rules__button  continue" type="submit" disabled>Go!</button>
</form>
</div>`;

const createRules = (data) => {
  const screenRules = getElementFromTemplate(rulesTemplate(data));
  const sendBtn = screenRules.querySelector(`.rules__button`);
  const nameInput = screenRules.querySelector(`.rules__input`);

  nameInput.addEventListener(`input`, () => {
    if (nameInput.value.trim() === ``) {
      sendBtn.setAttribute(`disabled`, `disabled`);
    } else {
      sendBtn.removeAttribute(`disabled`);
    }
  });

  sendBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    const state = {
      answers: [],
      lives: data.parametrs.MAX_LIVES,
      currentGame: -1
    };

    nextGame(data, state);
  });

  return screenRules;
};

export default createRules;
