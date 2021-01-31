/*
 * State actions
 * Keep the name of the function consisten with event name dispatched by component
 * this.store.dispatch('INCREMENT_COUNTER', { counter: 1 });
 */

export default {
  /*
   * @param {Store} store
   * @param {Object} payload
   * @param {string} action
   */
  INCREMENT_COUNTER(store, payload) {
    store.commit('incrementCounter', payload);
  },
};
