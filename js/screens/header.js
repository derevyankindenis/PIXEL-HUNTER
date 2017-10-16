import {viewport, getElementFromTemplate, showScreen} from '../utils';
import screenGreeting from './greeting';

const header = document.querySelector(`.header`);
const arrowBack = header.querySelector(`.back`);

arrowBack.addEventListener(`click`, () => {
  showScreen(screenGreeting);
  closeHeader();
});

export const showHeader = () => {
  header.style.display = `block`;
};

export const closeHeader = () => {
  header.style.display = `none`;
};

closeHeader();

const headerState = header.querySelector(`.state`);

const initialState = {
  time: 20,
  lives: 3
};

const stateTemplate = (gameState) => `<h1 class="game__timer">${gameState.time}</h1>
<div class="game__lives">
  ${new Array(3 - gameState.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  ${new Array(gameState.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
</div>`;

export const showState = () => {
  headerState.insertAdjacentHTML(`afterBegin`, stateTemplate(initialState));
};

export const closeState = () => {
  headerState.innerHTML = ``;
};

export const updateState = (state) => {
  headerState.innerHTML = ``;
  headerState.insertAdjacentHTML(`afterBegin`, stateTemplate(state));
};

// const header = document.querySelector(`.header`);
// const backBtn = header.querySelector(`.back`);
// const headerTimer = header.querySelector(`.game__timer`);
// const headerLives = header.querySelector(`.game__lives`);

// const closeGameInfo = () => {
//   headerTimer.style.display = `none`;
//   headerLives.style.display = `none`;
// };

// const showGameInfo = () => {
//   headerTimer.style.display = `block`;
//   headerLives.style.display = `block`;
// };

// const closeHeader = () => {
//   header.style.display = `none`;
// };

// const showHeader = () => {
//   header.style.display = `block`;
// };

// backBtn.addEventListener(`click`, () => {
//   closeHeader();
//   showScreen(screenGreeting);
// });

// closeGameInfo();
// closeHeader();
