import assert from 'assert';
import {calculateScore} from './game-data';

const GAME_PARAMETRS = {
  slowTime: 20,
  fastTime: 10
};

const NORMAL_TIME = GAME_PARAMETRS.slowTime - (GAME_PARAMETRS.slowTime - GAME_PARAMETRS.fastTime) / 2;

// fast right answer
const FA = {
  isCorrect: true,
  time: GAME_PARAMETRS.fastTime
};

// slow right answer
const SA = {
  isCorrect: true,
  time: GAME_PARAMETRS.slowTime
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

describe(`Тестирование функции подсчета очков`, () => {
  it(`Если игрок ответил меньше чем на 10 ответов, то очки не начисляются`, () => {
    assert.equal(calculateScore([], 0, GAME_PARAMETRS, 10), -1);
    assert.equal(calculateScore([WA, WA], 1, GAME_PARAMETRS, 10), -1);
    assert.equal(calculateScore([WA, NA, FA, SA, WA, NA], 1, GAME_PARAMETRS, 10), -1);
    assert.notEqual(calculateScore([WA, WA, WA, WA, WA, WA, WA, WA, WA, WA], 1, GAME_PARAMETRS, 10), -1);
    assert.notEqual(calculateScore([FA, NA, WA, SA, FA, NA, WA, SA, FA, NA], 1, GAME_PARAMETRS, 10), -1);
  });

  it(`Если у игрока кончились жизни, то очки не начисляются`, () => {
    assert.equal(calculateScore([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 0, GAME_PARAMETRS, 10), -1);
  });

  it(`Если у игрока остались все жизни и он ответил на все вопросы не быстро и не медленно, то начисляется 1150 очков`, () => {
    assert.equal(calculateScore([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3, GAME_PARAMETRS, 10), 1150);
  });

  it(`Если игрок ответил на все вопросы быстро и сохранил все жизни, то ему наисляется 1650`, () => {
    assert.equal(calculateScore([FA, FA, FA, FA, FA, FA, FA, FA, FA, FA], 3, GAME_PARAMETRS, 10), 1650);
  });
});
