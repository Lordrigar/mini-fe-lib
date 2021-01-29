export default {
  incrementCounter(state, payload) {
    const { counter } = state;
    const newState = {
      ...state,
      counter: counter + payload.counter,
      newProp: 'xd',
    };

    return newState;
  },
};
