import AbstractView from '../abstract-view';

class RulesView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">
        Угадай ${this.data.games.length} раз для каждого изображения фото
        <img src="img/photo_icon.png" width="16" height="16">
        или рисунок
        <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится ${this.data.parametrs.MAX_TIME} секунд.<br>
        Ошибиться можно не более ${this.data.parametrs.MAX_LIVES} раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя" autofocus>
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`.trim();
  }

  bind() {
    const sendBtn = this._element.querySelector(`.rules__button`);
    const nameInput = this._element.querySelector(`.rules__input`);

    nameInput.addEventListener(`input`, () => {
      if (nameInput.value.trim() === ``) {
        sendBtn.setAttribute(`disabled`, `disabled`);
      } else {
        sendBtn.removeAttribute(`disabled`);
      }
    });

    sendBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClickOnGO();
    });
  }

  onClickOnGO() {
  }

  onAnswered() {
  }
}

export default RulesView;
