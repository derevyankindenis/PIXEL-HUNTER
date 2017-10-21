export const calculateScore = (answers, healthCount, gameParametrs, countQuestions) => {
  if ((answers.length !== countQuestions) || (healthCount <= 0)) {
    return -1;
  }

  let score = answers.map((answer) => {
    let points = 0;

    if (answer.isCorrect) {
      points += 100;
    } else {
      return 0;
    }

    if (answer.time <= gameParametrs.fastTime) {
      points += 50;
      return points;
    }

    if (answer.time >= gameParametrs.slowTime) {
      points -= 50;
    }

    return points;
  });

  let resultScore = score.reduce((sumPoints, points) => (sumPoints += points), 0);
  resultScore += healthCount * 50;

  return resultScore;
};

export const getGameStatistic = (data, state) => {

  if ((state.answers.length !== data.games.length) || (state.lives <= 0)) {
    return -1;
  }

  const resultsGame = {
    fastAnswers: 0,
    slowAnswers: 0,
    correctAnswers: 0,
    pointsForFastAnswers: 0,
    pointsForSlowAnswers: 0,
    pointsForCorrectAnswers: 0,
    pointsForLives: 0,
    totalPoints: 0
  };

  state.answers.forEach((answer) => {
    if (answer.isCorrect) {
      if (answer.time <= data.parametrs.FAST_TIME) {
        resultsGame.fastAnswers++;
      }
      if (answer.time >= data.parametrs.SLOW_TIME) {
        resultsGame.slowAnswers++;
      }
    }
  });

  resultsGame.correctAnswers = resultsGame.fastAnswers + resultsGame.slowAnswers;
  resultsGame.pointsForCorrectAnswers = resultsGame.correctAnswers * data.parametrs.POINTS_FOR_CORRECT_ANSWERS;
  resultsGame.pointsForSlowAnswers = resultsGame.slowAnswers * data.parametrs.POINTS_FOR_SLOW_ANSWERS;
  resultsGame.pointsForFastAnswers = resultsGame.fastAnswers * data.parametrs.POINTS_FOR_FAST_ANSWERS;
  resultsGame.pointsForLives = state.lives * data.parametrs.POINTS_FOR_LIVES;
  resultsGame.totalPoints = resultsGame.pointsForCorrectAnswers + resultsGame.pointsForFastAnswers + resultsGame.pointsForSlowAnswers + resultsGame.pointsForLives;

  return resultsGame;
};

export const dataGame = {

  parametrs: {
    FAST_TIME: 10,
    SLOW_TIME: 5,
    MAX_TIME: 30,
    MAX_LIVES: 1,
    POINTS_FOR_FAST_ANSWERS: 50,
    POINTS_FOR_SLOW_ANSWERS: -50,
    POINTS_FOR_CORRECT_ANSWERS: 100,
    POINTS_FOR_LIVES: 50
  },

  greeting: {
    title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    content: `Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.`
  },

  games: [
    {
      type: 1,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          is: `paint`,
          src: `http://continentis.ee/wp-content/uploads/2017/07/3d_v%C3%A4ljast.jpg`
        },
        {
          is: `photo`,
          src: `https://i.ytimg.com/vi/QYc-Aj4uSgw/maxresdefault.jpg`
        }]
    },
    {
      type: 2,
      title: `Угадай, фото или рисунок?`,
      image: {
        src: `https://i.ytimg.com/vi/QYc-Aj4uSgw/maxresdefault.jpg`,
        is: `paint`
      }
    },
    {
      type: 3,
      title: `Найдите рисунок среди изображений`,
      search: `paint`,
      images: [
        {
          src: `https://i.ytimg.com/vi/QYc-Aj4uSgw/maxresdefault.jpg`,
          is: `photo`
        },
        {
          src: `https://i.ytimg.com/vi/QYc-Aj4uSgw/maxresdefault.jpg`,
          is: `paint`
        },
        {
          src: `https://i.ytimg.com/vi/QYc-Aj4uSgw/maxresdefault.jpg`,
          is: `photo`
        }
      ]
    }
  ]
};
