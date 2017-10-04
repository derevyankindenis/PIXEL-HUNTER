import {screenIntro} from './screens/intro';
import {screenGreeting} from './screens/greeting';
import {showScreen} from './utils';

(function () {

  const asterix = screenIntro.querySelector(`.intro__asterisk`);
  asterix.addEventListener(`click`, () => showScreen(screenGreeting));
  showScreen(screenIntro);

})();
