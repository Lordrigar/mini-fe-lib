import { home } from './classInstances';
import Store from './../services/state/Store';

const button = document.getElementById('changeState');
const button2 = document.getElementById('newButton');

const eventListeners = () => {
  document.addEventListener('UPDATED_CHANGE_STORE', () => {
    home.getRenderElement().innerHTML = home.render();
  });
};

const domListeners = () => {
  button.addEventListener('click', e => {
    const store = Store.getState();
    const counter = store.counter || 0;
    Store.dispatch('CHANGE_STORE', { counter: counter + 1 });
  });

  button2.addEventListener('click', e => {
    home.setState('list', { id: 3, name: 'newName' });
  });
};

export { eventListeners, domListeners };
