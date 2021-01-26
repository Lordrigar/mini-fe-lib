import Home from './../views/Home';
import Store from './state/Store';
import actions from './state/actions';
import mutations from './state/mutations';
import initialState from './state/initialState';

const store = new Store({
  actions,
  mutations,
  initialState,
});

const home = new Home({ store });

export { home, store };
