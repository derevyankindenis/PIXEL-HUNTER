

export const COUNT_QUESTIONS = 10;

export const typeAnswer = Object.freeze({
  WRONG_ANSWER: 0,
  RIGHT_ANSWER: 100,
  FAST_RIGHT_ANSWER: 150,
  SLOW_RIGHT_ANSWER: 50
});

export const calculateScore = (answers, healthCount) => {

  if ((answers.length !== COUNT_QUESTIONS) || (healthCount <= 0)) {
    return -1;
  }

  let resultScore = answers.reduce((score, answer) => (score += answer), 0);
  resultScore += healthCount * 50;

  return resultScore;
};
