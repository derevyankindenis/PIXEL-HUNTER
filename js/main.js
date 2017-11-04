import Application from './application';
import SplashScreen from './screens/splash-screen';
import {Loader} from './utils/loader';
import {createAppData} from './data/game-data';

const splash = new SplashScreen();
splash.show();
Loader.loadData()
    .then((data) => {
      splash.stop();
      Application.init(createAppData(data));
    })
    .catch(() => splash.showError());
