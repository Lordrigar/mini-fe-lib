import './styles.css';
import { home, store } from './../lib/classInstances';

// Register Event Listeners
store.registerReducers();

// Render App
home.render();
