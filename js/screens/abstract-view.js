import {getElementFromTemplate} from '../utils/utils';

class AbstractView {

  constructor() {
    this._onRenderedListeners = new Set();
  }

  get template() {
    throw Error(`Method template need to overriden`);
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
    if (this._header) {
      this.updateHeader(header);
    } else {
      this._header = header.view;
    }
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
  }

  updateHeader(header) {
    this.element.removeChild(this._header.element);
    this._header = header.view;
    this.element.insertAdjacentElement(`afterBegin`, this._header.element);
  }

  addRenderListener(listener) {
    this._onRenderedListeners.add(listener);
  }

  onRender() {
    for (const listener of this._onRenderedListeners) {
      listener();
    }
  }

}

export default AbstractView;
