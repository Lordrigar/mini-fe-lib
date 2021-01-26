import Home from './../views/Home';
import About from './../views/About';
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
const about = new About({ store });

export { home, about, store };
