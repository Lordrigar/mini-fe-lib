import eventWrapper from './eventWrapper';

class Store {
  constructor({ actions, mutations }) {
    this.state = {};
    this.actions = actions;
    this.mutations = mutations;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  getState() {
    return this.state;
  }

  handle(actionCb, payload, action) {
    if (typeof actionCb !== 'function') {
      throw new Error('Action has to be a function');
    }
    actionCb(this, payload, action);
  }

  dispatch(action, payload) {
    eventWrapper(action, payload);
  }

  commit(mutationName, payload, action) {
    if (this.mutations.hasOwnProperty(mutationName)) {
      const newState = this.mutations[mutationName](this.state, payload);

      const event = new CustomEvent(`DONE_${action}`, {
        detail: { newState },
      });
      document.dispatchEvent(event);
    }
  }

  registerReducers() {
    document.addEventListener(
      'STATE_CHANGED',
      ({ detail: { action, ...payload } }) => {
        if (this.actions.hasOwnProperty(action)) {
          this.handle(this.actions[action], payload, action);
        }
      }
    );
  }
}

export default Store;
