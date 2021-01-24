class AbstractComponent {
  constructor({ store, renderElement }) {
    this.store = store;
    this.state = {};
    this.renderElement = renderElement;
    this.render = this.render || function () {};
  }

  setState(target, value) {
    this.state = { ...this.state, [target]: value };

    if (this.renderElement) {
      this.renderElement.innerHTML = this.render();
    }
  }

  getState() {
    return this.state;
  }
}

export default AbstractComponent;
