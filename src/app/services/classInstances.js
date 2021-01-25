import Home from './../views/Home';
import Store from './state/Store';
import actions from './state/actions';
import mutations from './state/mutations';

const store = new Store({
  actions,
  mutations,
});

const home = new Home();

export { home, store };
