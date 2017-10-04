const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

const isCheckedSomeInput = (input) => Array.prototype.some.call(input, (radio) => radio.checked);

const viewport = document.querySelector(`.viewport`);

const showScreen = (screen) => {
  viewport.innerHTML = ``;
  viewport.appendChild(screen);
};

export {getElementFromTemplate, showScreen, isCheckedSomeInput};
