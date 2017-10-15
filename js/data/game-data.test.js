import assert from 'assert';
import {calculateScore, Timer} from './game-data';

describe(`Тестирование функции подсчета очков`, () => {
  it(`Если игрок ответил меньше чем на 10 ответов, то очки не начисляются`, () => {
    assert.equal(calculateScore([], 0), -1);
    assert.equal(calculateScore([0, 0], 1), -1);
    assert.equal(calculateScore([0, 1, 2, 3, 0, 1], 1), -1);
    assert.notEqual(calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), -1);
    assert.notEqual(calculateScore([2, 1, 0, 3, 2, 1, 0, 3, 2, 1], 1), -1);
  });

  it(`Если у игрока кончились жизни, то очки не начисляются`, () => {
    assert.equal(calculateScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), -1);
  });

  it(`Если у игрока остались все жизни и он ответил на все вопросы не быстро и не медленно, то начисляется 1150 очков`, () => {
    assert.equal(calculateScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 1150);
  });

  it(`Если игрок ответил на все вопросы быстро и сохранил все жизни, то ему наисляется 1650`, () => {
    assert.equal(calculateScore([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 1650);
  });

});

describe(`Тестирование функции создания таймера`, () => {

  it(`Если задано отрицательное значение таймера, он инициализируется нулём`, () => {
    const timer = new Timer(-10);
    assert.equal(timer.tick(), 0);
  });

  it(`Если время вышло, tick() возвращает 0`, () => {
    const timer = new Timer(1);
    assert.equal(timer.tick(), 0);
  });

  it(`Каждый запуск tick() уменьшает таймер на 1`, () => {
    const timer = new Timer(10);
    assert.equal(timer.tick(), 9);
    assert.equal(timer.tick(), 8);
    assert.equal(timer.tick(), 7);
  });

  it(`Если таймеру задано число больше, чем максимально допустимое, то он инициализируется нулем`, () => {
    const timer = new Timer(Number.MAX_SAFE_INTEGER + 1);
    assert.equal(timer.time, 0);
  });

});
