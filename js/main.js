(function () {

  const ARROW_RIGHT_KEY = 39;
  const ARROW_LEFT_KEY = 37;

  const centralScreen = document.querySelector(`.central`);
  const gameScreens = [];
  [].forEach.call(document.getElementsByTagName(`template`), (screen) => gameScreens.push(screen));

  let currentScreen = 0;

  const setScreen = (numScreen) => {
    centralScreen.innerHTML = ``;
    centralScreen.appendChild(gameScreens[numScreen].content.cloneNode(true));
  };

  const goNextScreen = () => {
    if (currentScreen + 1 < gameScreens.length) {
      currentScreen++;
      setScreen(currentScreen);
    }
  };

  const goPreviousScreen = () => {
    if (currentScreen > 0) {
      currentScreen--;
      setScreen(currentScreen);
    }
  };

  setScreen(0);

  document.addEventListener(`keydown`, (evt) => {
    if (evt.altKey) {
      if (evt.keyCode === ARROW_RIGHT_KEY) {
        evt.preventDefault();
        goNextScreen();
      }
      if (evt.keyCode === ARROW_LEFT_KEY) {
        evt.preventDefault();
        goPreviousScreen();
      }
    }
  });

  const getElementFromTemplate = (template) => {
    const wrapper = document.createElement(`div`);
    wrapper.innerHTML = template;
    return wrapper.firstChild;
  };


})();
