export default {
  INCREMENT_COUNTER(store, payload, action) {
    store.commit('incrementCounter', payload, action);
  },
};
