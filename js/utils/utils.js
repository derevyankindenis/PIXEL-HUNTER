export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const isCheckedSomeRadioInputs = (inputs) => Array.prototype.some.call(inputs, (radio) => radio.checked);

export const changeView = (view) => {
  const viewport = document.querySelector(`.central`);
  viewport.innerHTML = ``;
  viewport.appendChild(view.element);
  view.onRender();
};

export const getCountEnterElement = (arr, search) => arr.reduce((count, element) => element === search ? count + 1 : count, 0);
