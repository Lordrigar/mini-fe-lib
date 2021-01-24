import * as actions from './actions';
const storeActions = Object.keys(actions);

class Store {
  constructor() {
    this.state = {};
    this.actions = storeActions;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  getState() {
    return this.state;
  }

  registerReducers() {
    document.addEventListener(
      'STATE_CHANGED',
      ({ detail: { action, ...payload } }) => {
        if (this.actions.includes(action)) {
          const { eventName, newState } = actions[action](this, payload);

          const event = new CustomEvent(eventName, {
            detail: { newState },
          });
          document.dispatchEvent(event);
        }
      }
    );
  }
}

export default Store;
