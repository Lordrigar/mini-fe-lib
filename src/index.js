import { instantiateClasses, home, store } from './app/services/classInstances';
import './styles.css';

// Register Event Listeners
store.registerReducers();

// Render App
home.render();
