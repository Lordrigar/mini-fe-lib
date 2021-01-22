import AbstractComponent from './../AbstractComponent';
import Store from './../services/state/Store';

export default class Home extends AbstractComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return `<div>Hello World ${this.state?.list?.id} and name is ${
      this.state?.list?.name
    }</div>
      <p>This is global state: ${Store.state.counter || 0}</p>
    `;
  }
}

const button = document.getElementById('changeState');

button.addEventListener('click', e => {
  const store = Store.getStore();
  const counter = store.counter || 0;
  Store.dispatch('CHANGE_STORE', { counter: counter + 1 });
});

// document.addEventListener('UPDATED_CHANGE_STORE', () => {
//   const root = document.querySelector('.root');
//   root.innerHTML = new Home().render();
// });
