import {getElementFromTemplate, showScreen} from '../utils';
import createGreeting from './greeting';

const headerTemplate = (data, state) => `<header class="header">
<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>
${ state ? stateGameTemplate(data.parametrs.MAX_LIVES, state.lives) : ``}
</header>`;

const stateGameTemplate = (maxLives, lives) =>`<h1 class="game__timer">NN</h1>
  <div class="game__lives">
    ${new Array(maxLives - lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>`;

const createHeader = (data, state) => {

  const header = getElementFromTemplate(headerTemplate(data, state));

  const arrowBack = header.querySelector(`.back`);
  arrowBack.addEventListener(`click`, () => {
    showScreen(createGreeting(data));
  });

  return header;
};

export default createHeader;
