import Application from './application';
import {Loader} from './utils/loader';
import {createAppData} from './data/game-data';
import IntroScreen from './screens/intro/intro';

IntroScreen.init();
IntroScreen.startRotateAsterix();
IntroScreen.setLoadText(`Загрузка...`);

Loader.loadData()
    .then((data) => {
      Loader.loadImagesFromUrls(Loader.getAllLinksFromData(data))
          .then(() => {
            IntroScreen.stopRotateAsterix();
            IntroScreen.setLoadText(`Загружено!`);
            Application.init(createAppData(data));
            Application.showGreeting();
          });
    })
    .catch(() => IntroScreen.setLoadText(`Ошибка загрузки данных!`));
