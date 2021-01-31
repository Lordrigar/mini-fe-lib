import './styles.css';
import store from './../lib/state/Store';
import Home from './app/views/Home';

// Register Event Listeners
store.registerReducers();

// Render App
const home = new Home({ store });
home.render();
