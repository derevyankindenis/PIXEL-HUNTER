import assert from 'assert';
import {calculateScore, FAST_TIME, SLOW_TIME} from './game-data';

const NORMAL_TIME = SLOW_TIME - (SLOW_TIME - FAST_TIME) / 2;

// fast right answer
const FA = {
  isCorrect: true,
  time: FAST_TIME
};

const FA1 = {
  isCorrect: true,
  time: FAST_TIME - 1
};

const FA2 = {
  isCorrect: true,
  time: FAST_TIME - 2
};

// slow right answer
const SA = {
  isCorrect: true,
  time: SLOW_TIME
};

const SA1 = {
  isCorrect: true,
  time: SLOW_TIME + 1
};

const SA2 = {
  isCorrect: true,
  time: SLOW_TIME + 2
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
  time: FAST_TIME - 1
};

const WA2 = {
  isCorrect: false,
  time: SLOW_TIME + 2
};

describe(`Тестирование функции подсчета очков`, () => {
  it(`Если игрок ответил меньше чем на 10 ответов, то очки не начисляются`, () => {
    assert.equal(calculateScore([], 0), -1);
    assert.equal(calculateScore([WA1, WA], 1), -1);
    assert.equal(calculateScore([WA, NA, FA, SA2, WA1, NA], 1), -1);
    assert.notEqual(calculateScore([WA1, WA2, WA, WA1, WA2, WA, WA1, WA, WA1, WA], 1), -1);
    assert.notEqual(calculateScore([FA, NA, SA, SA1, FA2, NA, WA, SA2, FA, NA], 1), -1);
  });

  it(`Если у игрока кончились жизни, то очки не начисляются`, () => {
    assert.equal(calculateScore([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 0), -1);
  });

  it(`Если у игрока остались все жизни и он ответил на все вопросы не быстро и не медленно, то начисляется 1150 очков`, () => {
    assert.equal(calculateScore([NA, NA, NA, NA, NA, NA, NA, NA, NA, NA], 3), 1150);
  });

  it(`Если игрок ответил на все вопросы быстро и сохранил все жизни, то ему наисляется 1650`, () => {
    assert.equal(calculateScore([FA, FA1, FA2, FA1, FA, FA2, FA1, FA, FA, FA], 3), 1650);
  });

});
