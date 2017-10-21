import createGame1 from './screens/game-1';
import createGame2 from './screens/game-2';
import createGame3 from './screens/game-3';
import createStat from './screens/stats';

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const isCheckedSomeRadioInputs = (inputs) => Array.prototype.some.call(inputs, (radio) => radio.checked);

export const viewport = document.querySelector(`.central`);

export const showScreen = (screen) => {
  viewport.innerHTML = ``;
  viewport.appendChild(screen);
};

export const nextGame = (data, state) => {
  if ((state.answers.length > 0) && (!state.answers[state.currentGame].isCorrect)) {
    state.lives--;
  }
  if ((data.games.length > state.currentGame + 1) && (state.lives > 0)) {
    state.currentGame++;
    switch (data.games[state.currentGame].type) {
      case 1:
        showScreen(createGame1(data, state));
        break;
      case 2:
        showScreen(createGame2(data, state));
        break;
      case 3:
        showScreen(createGame3(data, state));
        break;
    }
  } else {
    showScreen(createStat(data, state));
  }
};
