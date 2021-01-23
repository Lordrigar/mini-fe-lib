class AbstractComponent {
  constructor(props) {
    this._state = {};
    this._renderElement = null;
  }

  setRenderElement(element = null) {
    if (element) {
      this._renderElement = element;
    }
  }

  getRenderElement() {
    return this._renderElement;
  }

  setState(target, value) {
    this._state = { ...this._state, [target]: value };

    if (this._renderElement) {
      this._renderElement.innerHTML = this.render();
    }
  }

  getState() {
    return this._state;
  }

  render(element = null) {
    return ``;
  }
}

export default AbstractComponent;
