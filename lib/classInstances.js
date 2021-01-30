/*
 * Use this file as a singleton factory
 * Import all class components and instantiate them, improves performance(due to super shity removal of events etc :D) and keeps a track of dependencies
 */

import Store from './state/Store';
import actions from './state/actions';
import mutations from './state/mutations';
import initialState from './state/initialState';

/*
 * EXAMPLE
 */
import Home from '../src/app/views/Home';
import About from '../src/app/views/About';

const store = new Store({
  actions,
  mutations,
  initialState,
});

const home = new Home({ store });
const about = new About({ store });

export { home, about, store };
