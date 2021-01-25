class AbstractComponent {
  constructor({ store, renderElement }) {
    this.store = store;
    this.state = {};
    this.renderElement = renderElement;
    this.render = this.render || function () {};
    this.componentDidUnmount = this.componentDidUnmount || function () {};
    this.componentDidMount = this.componentDidMount || function () {};

    const observer = new MutationObserver(e => {
      const isAdded = e[0].addedNodes.length;
      const isRemoved = e[0].removedNodes.length;
      const rerender = isAdded === isRemoved;

      if (isRemoved && !rerender && !isAdded) {
        this.componentDidUnmount();
      }

      if (isAdded && !rerender && !isRemoved) {
        this.componentDidMount();
      }
    });

    observer.observe(this.renderElement, { childList: true });
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
