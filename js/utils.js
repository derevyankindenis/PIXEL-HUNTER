// 'use strict'; // eslint error

(function () {

  window.utils = {

    onDownKeys(callback, keys) {

      keys = keys.map((key) => key.toLowerCase());
      let keysPressed = {};

      const isAllKeysPressed = () => {
        let check = true;

        keys.forEach((element) => {
          if (element in keysPressed) {
            if (keysPressed[element] === false) {
              check = false;
            }
          } else {
            check = false;
          }
        });
        return check;
      };

      const onKeyDown = (evt) => {
        keysPressed[evt.key.toLowerCase()] = true;
        if (isAllKeysPressed()) {
          callback();
        }
      };

      const onKeyUp = (evt) => {
        keysPressed[evt.key.toLowerCase()] = false;
      };

      document.addEventListener(`keydown`, onKeyDown);
      document.addEventListener(`keyup`, onKeyUp);
    }
  };

})();
