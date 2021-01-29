import { diff } from 'deep-object-diff';

class AbstractComponent {
  constructor({ store, renderElement, renderDependencies }) {
    this.store = store;
    this.state = {};
    this.renderElement = renderElement;
    this.renderDependencies = renderDependencies;

    const observer = new MutationObserver(e => {
      const isAdded = e[0].addedNodes.length;
      const isRemoved = e[0].removedNodes.length;
      const rerender = isAdded === isRemoved;

      if (isRemoved && !rerender && !isAdded) {
        document.removeEventListener('STATE_UPDATED', this.handleStateUpdate);
        this.componentDidUnmount();
      }

      if (isAdded && !rerender && !isRemoved) {
        document.addEventListener('STATE_UPDATED', this.handleStateUpdate);
        this.componentDidMount();
      }
    });

    observer.observe(this.renderElement, { childList: true });
  }

  render(params) {
    const fragment = this.generateHTML(params);

    this.renderElement.children[0]?.replaceWith(fragment) ||
      this.renderElement.appendChild(fragment);
  }

  generateHTML() {
    return document.createElement('div');
  }

  componentDidMount() {}

  componentDidUnmount() {}

  setState(target, value) {
    this.state = { ...this.state, [target]: value };

    if (this.renderElement) {
      this.renderElement.innerHTML = this.render();
    }
  }

  getState() {
    return this.state;
  }

  handleStateUpdate = e => {
    const { oldState, newState } = e.detail;

    const stateDifferences = diff(oldState, newState);
    const changedProps = Object.keys(stateDifferences);

    if (
      changedProps.length &&
      this.renderDependencies.some(rd => changedProps.includes(rd))
    ) {
      this.render();
    }
  };
}

export default AbstractComponent;
