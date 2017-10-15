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

export default Timer;
