(function () {

  const centralScreen = document.querySelector(`.central`);
  let gameScreens = [];
  [].forEach.call(document.getElementsByTagName(`template`), (screen) => gameScreens.push(screen));

  let currentScreen = 0;

  const setScreen = (numScreen) => {
    centralScreen.innerHTML = ``;
    centralScreen.appendChild(gameScreens[numScreen].content.cloneNode(true));
  };

  setScreen(0);

  const nextScreen = () => {
    if (currentScreen + 1 < gameScreens.length) {
      setScreen(++currentScreen);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setScreen(--currentScreen);
    }
  };

  window.utils.onDownKeys(nextScreen, [`Alt`, `ArrowRight`]);
  window.utils.onDownKeys(prevScreen, [`Alt`, `ArrowLeft`]);

})();
