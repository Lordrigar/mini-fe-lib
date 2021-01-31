import { diff } from 'deep-object-diff';

/*
 * Extend this for every class component.
 * Provides usefull methods for lifecycle, registering listener for document STATE_UPDATED event
 * It also calls lifecycle methods based on mounting/unmounting components
 *
 *
 * @param { Store } store - Store instance of global store
 * @param { HTMLElement } renderElement - document.createElement document element that component will render to
 * @param { string[] } renderDependencies - Array array of string names for store.state params that component will react to (update)
 */
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

  /*
   * Accepts params from url and calls method for generating html.
   * Next either replaces the render element or appends content
   *
   * @param { Object } params
   */
  render(params) {
    const fragment = this.generateHTML(params);

    this.renderElement.children[0]?.replaceWith(fragment) ||
      this.renderElement.appendChild(fragment);
  }

  /*
   * Main function to be used in main component
   *
   * @param { Object } params
   * @returns { HTMLElement }
   */
  generateHTML(params) {
    return document.createElement('div');
  }

  componentDidMount() {}

  componentDidUnmount() {}

  /*
   * Set local component state
   *
   * @param { string } target
   * @param { string } value
   */
  setState(target, value) {
    this.state = { ...this.state, [target]: value };

    if (this.renderElement) {
      this.renderElement.innerHTML = this.render();
    }
  }

  /*
   * Returns local component state
   *
   * @returns { Object }
   */
  getState() {
    return this.state;
  }

  /*
   * Method react to event sent by Store, it compares the renderDependencies array with old store values to determine if the component should be updated
   * If renderDependencies array is empty, component will update only on mount
   *
   * @param { Event } e
   */
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
