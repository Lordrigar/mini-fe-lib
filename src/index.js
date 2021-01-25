import { instantiateClasses, home, store } from './app/services/classInstances';

// Register Event Listeners
store.registerReducers();

// Render App
home.render();
