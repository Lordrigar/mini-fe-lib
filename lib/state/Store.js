import eventWrapper from './eventWrapper';

/*
 * Keeps track of global store
 * Flow: dispatch -> eventWrapper -> registerReducers Event catcher -> handle -> action -> commit -> mutation -> send event with updated and old state
 *
 * @param actions Object
 * @param mutations Object
 * @param initialState Object
 */
class Store {
  constructor({ actions, mutations, initialState }) {
    this.state = initialState;
    this.actions = actions;
    this.mutations = mutations;
  }

  /*
   * Simple, sets new state on Store
   * @param Object
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  /*
   * @return Object
   */
  getState() {
    return this.state;
  }

  /*
   * Validates if callback passed is a function and calls action
   *
   * @param actionCb Function
   * @param payload Object
   * @param action String
   *
   */
  handle(actionCb, payload, action) {
    if (typeof actionCb !== 'function') {
      throw new Error('Action has to be a function');
    }
    actionCb(this, payload, action);
  }

  /*
   * Called directly by class component, dispatches event to be wrapped in general one
   *
   * @param action String
   * @param payload Object
   */
  dispatch(action, payload) {
    eventWrapper(action, payload);
  }

  /*
   * Called by action, calls mutation and updates new state. Sends event to all listening components to update (passes old and new state)
   *
   * @param mutationName String
   * @param payload Object
   * @param action String
   */
  commit(mutationName, payload, action) {
    if (this.mutations.hasOwnProperty(mutationName)) {
      const newState = this.mutations[mutationName](this.state, payload);
      const oldState = this.getState();

      this.setState(newState);

      const event = new CustomEvent(`STATE_UPDATED`, {
        detail: { newState, oldState },
      });
      document.dispatchEvent(event);
    }
  }

  /*
   * Must be called on init app.
   * Initialises event listener UPDATE_STATE that calls actions wrapper (handle).
   * This listener is core for Store to work
   */
  registerReducers() {
    document.addEventListener(
      'UPDATE_STATE',
      ({ detail: { action, ...payload } }) => {
        if (this.actions.hasOwnProperty(action)) {
          this.handle(this.actions[action], payload, action);
        }
      }
    );
  }
}

export default Store;
