import { home } from './app/services/classInstances';
import { eventListeners, domListeners } from './app/services/eventListeners';

// Register Event Listeners
eventListeners();
domListeners();

home.setState('list', { id: 1, name: 'Nerdy' });

// Render App
const root = document.querySelector('.root');
root.innerHTML = home.render(root);
