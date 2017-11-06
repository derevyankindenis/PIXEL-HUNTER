import Application from './application';
import {Loader} from './utils/loader';
import {createAppData} from './data/game-data';
import IntroScreen from './screens/intro/intro';
import {getAllLinksFromData} from './utils/utils';

const DELAY_ON_SHOWGREETING = 900;

IntroScreen.init();
IntroScreen.startRotateAsterix();
IntroScreen.setLoadText(`Загрузка...`);

Loader.loadData()
    .then((data) => {
      Application.init(createAppData(data));
      return data;
    })
    .then(getAllLinksFromData)
    .then((urls) => urls.map((url) => Loader.loadImage(url)))
    .then((imageLoadPromises) => Promise.all(imageLoadPromises))
    .then(() => {
      IntroScreen.stopRotateAsterix();
      IntroScreen.setLoadText(`Загружено!`);
      IntroScreen.startAnimationInvisible();
      setTimeout(() => Application.showGreeting(), DELAY_ON_SHOWGREETING);
    })
    .catch((err) => IntroScreen.setLoadText(`Ошибка загрузки данных!  ${err}`));
