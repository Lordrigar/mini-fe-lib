/*
 * State actions
 * Keep the name of the function consisten with event name dispatched by component
 * this.store.dispatch('INCREMENT_COUNTER', { counter: 1 });
 */

export default {
  INCREMENT_COUNTER(store, payload, action) {
    store.commit('incrementCounter', payload, action);
  },
};
