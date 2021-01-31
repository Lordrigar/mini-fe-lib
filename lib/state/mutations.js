/*
 * State mutations
 * Called by the key from action
 * store.commit('incrementCounter', payload, action);
 *
 * Do not mutate global state here, just return new desired state
 */
export default {
  /*
   * @param {Object} state
   * @param {Object} payload
   */
  incrementCounter(state, payload) {
    const { counter } = state;
    const newState = {
      ...state,
      counter: counter + payload.counter,
    };

    return newState;
  },
};
