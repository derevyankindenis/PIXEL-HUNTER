

export const COUNT_QUESTIONS = 10;

const typeAnswer = Object.freeze({
  WRONG_ANSWER: 0,
  RIGHT_ANSWER: 1,
  FAST_RIGHT_ANSWER: 2,
  SLOW_RIGHT_ANSWER: 3
});

export const calculateScore = (answers, healthCount) => {

  if ((answers.length !== COUNT_QUESTIONS) || (healthCount <= 0)) {
    return -1;
  }

  let resultScore = answers.reduce((score, answer) => {
    switch (answer) {
      case typeAnswer.RIGHT_ANSWER:
        score += 100;
        break;
      case typeAnswer.FAST_RIGHT_ANSWER:
        score += 150;
        break;
      case typeAnswer.SLOW_RIGHT_ANSWER:
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
