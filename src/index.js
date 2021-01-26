import './styles.css';
import { home, store } from './app/services/classInstances';
import initializeRouter from './app/services/router';

const anchors = document.querySelectorAll('a.nav');

// Register Event Listeners
store.registerReducers();

// Init Router
initializeRouter(anchors);

// Render App
home.render();
