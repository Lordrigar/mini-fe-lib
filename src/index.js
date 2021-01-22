import Home from './app/views/Home';

const root = document.querySelector('.root');

const home = new Home();

home.setState('list', { id: 1, name: 'Nerdy' });

root.innerHTML = home.render();

document.addEventListener('UPDATED_CHANGE_STORE', () => {
  root.innerHTML = home.render();
});
