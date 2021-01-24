export default {
  incrementCounter(state, payload) {
    state.counter = payload.counter;

    return state;
  },
};
