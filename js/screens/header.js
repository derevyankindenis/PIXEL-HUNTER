import {showScreen} from '../utils';
import screenGreeting from './greeting';

const header = document.querySelector(`.header`);
const backBtn = header.querySelector(`.back`);
const headerTimer = header.querySelector(`.game__timer`);
const headerLives = header.querySelector(`.game__lives`);

const closeGameInfo = () => {
  headerTimer.style.display = `none`;
  headerLives.style.display = `none`;
};

const showGameInfo = () => {
  headerTimer.style.display = `block`;
  headerLives.style.display = `block`;
};

const closeHeader = () => {
  header.style.display = `none`;
};

const showHeader = () => {
  header.style.display = `block`;
};

backBtn.addEventListener(`click`, () => {
  closeHeader();
  showScreen(screenGreeting);
});

closeGameInfo();
closeHeader();

export {header, showHeader, closeHeader, closeGameInfo, showGameInfo};
