import './styles.css';
import store from './../lib/state/Store';
import home from './app/views/Home';

// Register Event Listeners
store.registerReducers();

// Render App
home.render();
