import IntroView from './intro-view';
import greeting from '../greeting/greeting';
import {changeView} from '../../utils';
import {dataGame} from '../../data/game-data';

const intro = new IntroView();
intro.onClick = () => changeView(greeting(dataGame));
export default intro;
