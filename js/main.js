import {showScreen} from './utils';
import createIntro from './screens/intro';
import {dataGame} from './data/game-data';

showScreen(createIntro(dataGame));
