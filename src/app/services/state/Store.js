import reducers from './reducers';

let state = {};

const Store = {
  dispatch: function (action, payload) {
    reducers(action, payload);
  },

  setState: function (newState) {
    state = { ...state, ...newState };
  },

  getState: function () {
    return state;
  },
};

export default Store;
