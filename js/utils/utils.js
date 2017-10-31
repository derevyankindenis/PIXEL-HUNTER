// import game1 from './screens/game_1/game1';
// import game2 from './screens/game_2/game2';
// import game3 from './screens/game_3/game3';
// import statistic from './screens/statistic/statistic';

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const isCheckedSomeRadioInputs = (inputs) => Array.prototype.some.call(inputs, (radio) => radio.checked);

export const viewport = document.querySelector(`.central`);

export const changeView = (view) => {
  viewport.innerHTML = ``;
  viewport.appendChild(view.element);
  view.onRender();
};

// export const nextScreen = (data, state) => {

//   if ((state.answers.length > 0) && (!state.answers[state.currentGame].isCorrect)) {
//     state.lives--;
//   }

//   if (((data.games.length > state.currentGame + 1) && (state.lives > 0))) {
//     state.currentGame++;
//     switch (data.games[state.currentGame].type) {
//       case 1:
//         changeView(game1(data, state));
//         break;
//       case 2:
//         changeView(game2(data, state));
//         break;
//       case 3:
//         changeView(game3(data, state));
//         break;
//     }
//   } else {
//     changeView(statistic(data, state));
//   }
// };
