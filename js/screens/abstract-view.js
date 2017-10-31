import {getElementFromTemplate} from '../utils/utils';

class AbstractView {

  constructor() {
    this._onRenderedListeners = new Set();
  }

  get template() {
    throw Error(`Method template need to overriden`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      if (this._header) {
        this.element.insertAdjacentElement(`afterBegin`, this._header.element);
      }
      this.bind();
    }

    return this._element;
  }

  set header(header) {
    this._header = header.view;
  }

  onRender() {
    for (const listener of this._onRenderedListeners) {
      listener();
    }
  }

  addRenderListener(listener) {
    this._onRenderedListeners.add(listener);
  }

}

export default AbstractView;
