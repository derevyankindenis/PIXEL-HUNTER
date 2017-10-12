export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element;
};

export const isCheckedSomeRadioInputs = (inputs) => Array.prototype.some.call(inputs, (radio) => radio.checked);

const viewport = document.querySelector(`.viewport`);

export const showScreen = (screen) => {
  viewport.innerHTML = ``;
  viewport.appendChild(screen);
};

// варианты ответов
// const WRONG_ANSWER = 0; //пока не используется
export const RIGHT_ANSWER = 1;
export const FAST_RIGHT_ANSWER = 3;
export const SLOW_RIGHT_ANSWER = 4;
export const COUNT_QUESTIONS = 10;

export const calculateScore = (answers, healthCount) => {

  if ((answers.length !== COUNT_QUESTIONS) || (healthCount <= 0)) {
    return -1;
  }

  let resultScore = answers.reduce((score, answer) => {
    switch (answer) {
      case RIGHT_ANSWER:
        score += 100;
        break;
      case FAST_RIGHT_ANSWER:
        score += 150;
        break;
      case SLOW_RIGHT_ANSWER:
        score += 50;
        break;
    }
    return score;
  }, 0);

  resultScore += healthCount * 50;

  return resultScore;
};

export const Timer = function (time) {
  if (time > 0 && time < Number.MAX_SAFE_INTEGER) {
    this.time = time;
  } else {
    this.time = 0;
  }
};

Timer.prototype.tick = function () {
  this.time -= 1;
  if (this.time <= 0) {
    this.time = 0;
    return 0;
  } else {
    return this.time;
  }
};
