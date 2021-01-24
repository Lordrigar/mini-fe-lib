import Home from './../views/Home';
import Store from './state/Store';
import actions from './state/actions';
import mutations from './state/mutations';

const home = new Home();
const store = new Store({
  actions,
  mutations,
});

export { home, store };
