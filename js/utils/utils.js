export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const isCheckedSomeRadioInputs = (inputs) => Array.prototype.some.call(inputs, (radio) => radio.checked);

export const viewport = () => document.querySelector(`.central`);

export const changeView = (view) => {
  viewport().innerHTML = ``;
  viewport().appendChild(view.element);
  view.onRender();
};

export const countEnterElement = (arr, search) => arr.reduce((count, element) => element === search ? count + 1 : count, 0);
