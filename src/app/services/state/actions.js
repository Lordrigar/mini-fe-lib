import { incrementCounter } from './mutations';

const CHANGE_STORE = (store, payload) => {
  const mutation = incrementCounter(store.getState(), payload);

  return { eventName: 'UPDATE_HOME', newState: mutation };
};

const exampleAction = () => {};

export { CHANGE_STORE, exampleAction };
