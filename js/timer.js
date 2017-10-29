class Timer {

  constructor(time) {
    if (time > 0 && time < Number.MAX_SAFE_INTEGER) {
      this.time = time;
    } else {
      this.time = 0;
    }
  }

  tick() {
    this.time -= 1;
    if (this.time <= 0) {
      this.time = 0;
    }
    return this.time;
  }

  start() {
    if (this._idInterval) {
      return;
    }

    this._idInterval = setInterval(()=>{
      this.onTick(this.tick());
    }, 1000);

    this._idTimeOut = setTimeout(() => {
      this.onTimeOut();
      clearInterval(this._idInterval);
    }, this.time * 1000);
  }

  stop() {
    clearInterval(this._idInterval);
    clearTimeout(this._idTimeOut);
  }

  onTick() {
  }

  onTimeOut() {
  }
}

export default Timer;
