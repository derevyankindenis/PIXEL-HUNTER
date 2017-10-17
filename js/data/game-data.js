export const COUNT_QUESTIONS = 10;
export const FAST_TIME = 10;
export const SLOW_TIME = 20;

export const calculateScore = (answers, healthCount) => {

  if ((answers.length !== COUNT_QUESTIONS) || (healthCount <= 0)) {
    return -1;
  }

  let score = answers.map((answer) => {
    let points = 0;

    if (answer.isCorrect) {
      points += 100;
    } else {
      return 0;
    }

    if (answer.time <= FAST_TIME) {
      points += 50;
      return points;
    }

    if (answer.time >= SLOW_TIME) {
      points -= 50;
    }

    return points;
  });

  let resultScore = score.reduce((sumPoints, points) => (sumPoints += points), 0);
  resultScore += healthCount * 50;

  return resultScore;
};
