(function () {

  const centralScreen = document.querySelector(`.central`);
  const gameScreens = [];
  [].forEach.call(document.getElementsByTagName(`template`), (screen) => gameScreens.push(screen));

  let currentScreen = 0;

  const setScreen = (numScreen) => {
    centralScreen.innerHTML = ``;
    centralScreen.appendChild(gameScreens[numScreen].content.cloneNode(true));
  };

  const setNextScreen = () => {
    if (currentScreen + 1 < gameScreens.length) {
      currentScreen++;
      setScreen(currentScreen);
    }
  };

  const setPreviousScreen = () => {
    if (currentScreen > 0) {
      currentScreen--;
      setScreen(currentScreen);
    }
  };

  setScreen(0);

  document.addEventListener(`keydown`, (evt) => {
    if (evt.altKey) {
      if (evt.keyCode === 39) {
        evt.preventDefault();
        setNextScreen();
      }
      if (evt.keyCode === 37) {
        evt.preventDefault();
        setPreviousScreen();
      }
    }
  });

})();
