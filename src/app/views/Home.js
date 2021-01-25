import AbstractComponent from './../AbstractComponent';
import { store } from './../services/classInstances';
import eventWrapper from './../services/state/eventWrapper';

export default class Home extends AbstractComponent {
  constructor() {
    super({
      store,
      renderElement: document.querySelector('.root'),
    });

    const newButton = document.getElementById('newButton');
    newButton.addEventListener('click', () => {
      this.renderElement.innerHTML = '';
    });
  }

  componentDidUnmount() {
    console.log('unmounted');
  }

  componentDidMount() {
    document.addEventListener('DONE_CHANGE_STORE', e => {
      this.store = e.detail.newState;
      this.render();
    });
    console.log('mounted');
  }

  handleClick() {
    const st = store.getState();
    const counter = st.counter || 0;
    eventWrapper('CHANGE_STORE', { counter: counter + 1 });
    const button = document.getElementById('changeState');

    button.removeEventListener('click', this.handleClick);
  }

  render() {
    const state = this.getState();

    const button = document.getElementById('changeState');
    button.addEventListener('click', this.handleClick);

    this.renderElement.innerHTML = `
      <div>This is global state: ${this.store?.counter || 0}</div>
      <p>Hello World ${state?.list?.id} and name is ${state?.list?.name}</p>
    `;
  }
}
