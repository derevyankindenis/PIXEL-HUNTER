import {getElementFromTemplate, showScreen} from '../utils';
import createRules from './rules';


const greetingTemplate = (data) => `<div class="greeting central--blur">
<div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
<h1 class="greeting__asterisk">*</h1>
<div class="greeting__challenge">
  <h3>${data.greeting.title}</h3>
  <p>${data.greeting.content}</p>
</div>
<div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
</div>`;

const createGreeting = (data) => {

  const screenGreeting = getElementFromTemplate(greetingTemplate(data));
  const continueBtn = screenGreeting.querySelector(`.greeting__continue`);

  continueBtn.addEventListener(`click`, () => {
    showScreen(createRules(data));
  });

  return screenGreeting;
};

export default createGreeting;
