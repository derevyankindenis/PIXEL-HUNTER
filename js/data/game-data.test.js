import assert from 'assert';
// Откуда берётся assert? (ну т.е. она с mocha устанавливается? Не вижу её в lib)
// Где посмотреть набор методов в assert. Equal, deepEqual и тд
// Как подключить сюда файл, в котором находится тестируемая функия

// варианты ответов
// const WRONG_ANSWER = 0; //пока не используется
const RIGHT_ANSWER = 1;
const FAST_RIGHT_ANSWER = 3;
const SLOW_RIGHT_ANSWER = 4;
const COUNT_QUESTIONS = 10;

const calculateScore = (answers, healthCount) => {

  if ((answers.length !== COUNT_QUESTIONS) || (healthCount <= 0)) {
    return -1;
  }

  let resultScore = answers.reduce((score, answer) => {
    switch (answer) {
      case RIGHT_ANSWER:
        score += 100;
        break;
      case FAST_RIGHT_ANSWER:
        score += 150;
        break;
      case SLOW_RIGHT_ANSWER:
        score += 50;
        break;
    }
    return score;
  }, 0);

  resultScore += healthCount * 50;

  return resultScore;
};

describe(`Тестирование функции подсчета очков`, () => {
  it(`Если игрок ответил меньше чем на 10 ответов, то очки не начисляются`, () => {
    assert.equal(calculateScore([], 0), -1);
    assert.equal(calculateScore([0, 0], 1), -1);
    assert.notEqual(calculateScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), -1);
  });

  it(`Если у игрока кончились жизни, то очки не начисляются`, () => {
    assert.equal(calculateScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), -1);
  });

  it(`Если у игрока остались все жизни и он ответил на все вопросы не быстро и не медленно, то начисляется 1150 очков`, () => {
    assert.equal(calculateScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3), 1150);
  });

  it(`Если игрок ответил на все вопросы быстро и сохранил все жизни, то ему наисляется 1650`, () => {
    assert.equal(calculateScore([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 3), 1650);
  });

  // ...

});


const Timer = function (time) {
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


describe(`Тестирование функции создания таймера`, () => {

  it(`Если задано отрицательное значение таймера, он инициализируется нулём`, () => {
    assert.equal((new Timer(-10)).tick(), 0);
  });

  it(`Если время вышло, tick() возвращает 0`, () => {
    assert.equal((new Timer(1)).tick(), 0);
  });

  it(`Каждый запуск tick() уменьшает таймер на 1`, () => {
    const timer = new Timer(10);
    assert.equal(timer.tick(), 9);
    assert.equal(timer.tick(), 8);
    assert.equal(timer.tick(), 7);
  });

  // ...

});
