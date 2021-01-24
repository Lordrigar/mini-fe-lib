import AbstractComponent from './../AbstractComponent';
import { store } from './../services/classInstances';
import eventWrapper from './../services/state/eventWrapper';

export default class Home extends AbstractComponent {
  constructor() {
    super({
      store,
      renderElement: document.querySelector('.root'),
    });

    document.addEventListener('UPDATE_HOME', e => {
      console.log('received update for Home');
      this.store = e.detail.newState;
      this.render();
    });

    const button = document.getElementById('changeState');

    button.addEventListener('click', e => {
      const st = store.getState();
      const counter = st.counter || 0;
      eventWrapper('CHANGE_STORE', { counter: counter + 1 });
    });
  }

  render() {
    console.log('render called');
    const state = this.getState();

    this.renderElement.innerHTML = `
      Hello World ${state?.list?.id} and name is ${state?.list?.name}
      <p>This is global state: ${this.store?.counter || 0}</p>
    `;
  }
}
