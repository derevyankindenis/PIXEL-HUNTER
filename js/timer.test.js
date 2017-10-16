import assert from 'assert';
import Timer from './timer';

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
