export default {
  CHANGE_STORE(store, payload, action) {
    store.commit('incrementCounter', payload, action);
  },
};
