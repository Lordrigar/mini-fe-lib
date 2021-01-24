const incrementCounter = (state, payload) => {
  state.counter = payload.counter;

  return state;
};

export { incrementCounter };
