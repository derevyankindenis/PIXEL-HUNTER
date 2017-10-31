import assert from 'assert';
import {getGameStatistic} from './game-data';

const GAME_PARAMETRS = {
  FAST_TIME: 5,
  SLOW_TIME: 10,
  MAX_TIME: 30,
  MAX_LIVES: 3,
  POINTS_FOR_FAST_ANSWERS: 50,
  POINTS_FOR_SLOW_ANSWERS: -50,
  POINTS_FOR_CORRECT_ANSWERS: 100,
  POINTS_FOR_LIVES: 50,
  COUNT_GAMES: 10
};

const NORMAL_TIME = GAME_PARAMETRS.SLOW_TIME - (GAME_PARAMETRS.SLOW_TIME - GAME_PARAMETRS.FAST_TIME) / 2;

// fast right answer
const FA = {
  isCorrect: true,
  time: GAME_PARAMETRS.FAST_TIME
};

const FA1 = {
  isCorrect: true,
  time: GAME_PARAMETRS.FAST_TIME - 1
};

const FA2 = {
  isCorrect: true,
  time: GAME_PARAMETRS.FAST_TIME - 2
};

// slow right answer
const SA = {
  isCorrect: true,
  time: GAME_PARAMETRS.SLOW_TIME
};

const SA1 = {
  isCorrect: true,
  time: GAME_PARAMETRS.SLOW_TIME + 1
};

const SA2 = {
  isCorrect: true,
  time: GAME_PARAMETRS.SLOW_TIME + 2
};

// normal answer
const NA = {
  isCorrect: true,
  time: NORMAL_TIME
};

// wrong answer
const WA = {
  isCorrect: false,
  time: NORMAL_TIME
};

const WA1 = {
  isCorrect: false,
  time: GAME_PARAMETRS.FAST_TIME - 1
};

const WA2 = {
  isCorrect: false,
  time: GAME_PARAMETRS.SLOW_TIME + 2
};

describe(`Тестирование функции подсчета статистики`, () => {

  it(`Если ответов меньше чем вопросов, то очки не начисляются`, () => {
    assert.equal(getGameStatistic([], 0, GAME_PARAMETRS), 0);
    assert.equal(getGameStatistic([WA1, WA], 1, GAME_PARAMETRS), 0);
    assert.equal(getGameStatistic([WA, NA, FA, SA2, WA1, NA], 1, GAME_PARAMETRS), 0);
    assert.notEqual(getGameStatistic([WA1, WA2, WA, WA1, WA2, WA, WA1, WA, WA1, WA], 1, GAME_PARAMETRS), 0);
    assert.notEqual(getGameStatistic([FA, NA, SA, SA1, FA2, NA, WA, SA2, FA, NA], 1, GAME_PARAMETRS), 0);
  });

  it(`Если у игрока кончились жизни, то очки не начисляются`, () => {
    const statistic = getGameStatistic([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 0, GAME_PARAMETRS);
    assert.equal(statistic, 0);
  });

  it(`Если у игрока остались все жизни и он ответил на все вопросы не быстро и не медленно, то начисляется 1150 очков`, () => {
    const statistic = getGameStatistic([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS);
    assert.equal(statistic.totalPoints, 1150);
  });

  it(`Если игрок ответил на все вопросы быстро и сохранил все жизни, то ему наисляется 1650`, () => {
    const statistic = getGameStatistic([FA, FA1, FA2, FA1, FA, FA2, FA1, FA, FA, FA], 3, GAME_PARAMETRS);
    assert.equal(statistic.totalPoints, 1650);
  });

  it(`Осуществляется корректный подсчет быстрых ответов`, () => {
    assert.equal(getGameStatistic([FA, FA1, FA2, FA1, FA, FA2, FA1, FA, FA, FA], 3, GAME_PARAMETRS).fastAnswers, 10);
    assert.equal(getGameStatistic([FA, FA1, FA2, FA1, FA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS).fastAnswers, 5);
    assert.equal(getGameStatistic([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS).fastAnswers, 0);
  });

  it(`Осуществляется корректный подсчет медленных ответов`, () => {
    assert.equal(getGameStatistic([SA2, SA2, SA, SA, SA1, SA1, SA2, SA2, SA, SA1], 3, GAME_PARAMETRS).slowAnswers, 10);
    assert.equal(getGameStatistic([SA2, SA2, SA, SA, SA1, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS).slowAnswers, 5);
    assert.equal(getGameStatistic([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS).slowAnswers, 0);
  });

  it(`Осуществляется корректный подсчет правильных ответов`, () => {
    assert.equal(getGameStatistic([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS).correctAnswers, 10);
    assert.equal(getGameStatistic([WA, WA, WA, WA, WA, SA2, FA, FA, NA, NA], 3, GAME_PARAMETRS).correctAnswers, 5);
    assert.equal(getGameStatistic([WA1, WA2, WA, WA1, WA2, WA, WA1, WA, WA1, WA], 3, GAME_PARAMETRS).correctAnswers, 0);
  });

});
