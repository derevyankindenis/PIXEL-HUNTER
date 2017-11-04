import {countEnterElement} from '../utils/utils';

export const getGameStatistic = (answers, countLives, gameParametrs) => {

  if ((answers.length !== gameParametrs.COUNT_GAMES) || (countLives <= 0)) {
    return 0;
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

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      resultsGame.correctAnswers++;
      if (answer.time <= gameParametrs.FAST_TIME) {
        resultsGame.fastAnswers++;
      }
      if (answer.time >= gameParametrs.SLOW_TIME) {
        resultsGame.slowAnswers++;
      }
    }
  });

  resultsGame.pointsForCorrectAnswers = resultsGame.correctAnswers * gameParametrs.POINTS_FOR_CORRECT_ANSWERS;
  resultsGame.pointsForSlowAnswers = resultsGame.slowAnswers * gameParametrs.POINTS_FOR_SLOW_ANSWERS;
  resultsGame.pointsForFastAnswers = resultsGame.fastAnswers * gameParametrs.POINTS_FOR_FAST_ANSWERS;
  resultsGame.pointsForLives = countLives * gameParametrs.POINTS_FOR_LIVES;
  resultsGame.totalPoints = resultsGame.pointsForCorrectAnswers + resultsGame.pointsForFastAnswers + resultsGame.pointsForSlowAnswers + resultsGame.pointsForLives;

  return resultsGame;
};

export const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

export const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

const convertToGameObject = (gameObject) => {
  const result = {
    type: gameObject.type,
    title: gameObject.question,
    images: gameObject.answers.map((image) => ({is: image.type, src: image.image.url}))
  };

  if (result.type === QuestionType.ONE_OF_THREE) {
    result.search = gameObject.answers.map((image) => image.type).find((type, index, arr) => (countEnterElement(arr, type) === 1));
  }

  return result;
};

const convertToGameData = (serverData) => serverData.map((gameObject) => convertToGameObject(gameObject));

const GREETING = {
  title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  content: `Правила игры просты.<br>
    Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
    Задача кажется тривиальной, но не думай, что все так просто.<br>
    Фотореализм обманчив и коварен.<br>
    Помни, главное — смотреть очень внимательно.`
};

const SETTINGS_DEFAULT = {
  FAST_TIME: 5,
  SLOW_TIME: 20,
  MAX_TIME: 30,
  MAX_LIVES: 3,
  POINTS_FOR_FAST_ANSWERS: 50,
  POINTS_FOR_SLOW_ANSWERS: -50,
  POINTS_FOR_CORRECT_ANSWERS: 100,
  POINTS_FOR_LIVES: 50,
  COUNT_GAMES: 10
};


export const createAppData = (serverData, greeting = GREETING, parametrs = SETTINGS_DEFAULT) => {
  const games = convertToGameData(serverData);
  parametrs.COUNT_GAMES = games.length;
  return {
    greeting,
    parametrs,
    games
  };
};

