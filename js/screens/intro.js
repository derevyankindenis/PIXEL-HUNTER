import {getElementFromTemplate, showScreen} from '../utils';
import createGreeting from './greeting';

const screenIntroTemplate = `<div id="main" class="central__content">
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
</div>`;

const createIntro = (data) => {
  const screenIntro = getElementFromTemplate(screenIntroTemplate);
  const asterix = screenIntro.querySelector(`.intro__asterisk`);
  asterix.addEventListener(`click`, () => showScreen(createGreeting(data)));
  return screenIntro;
};

export default createIntro;
