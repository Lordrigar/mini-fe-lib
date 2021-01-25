import AbstractComponent from './../AbstractComponent';
import { store } from './../services/classInstances';

export default class Home extends AbstractComponent {
  constructor() {
    super({
      store,
      renderElement: document.querySelector('.root'),
    });
  }

  componentDidUnmount() {
    document.removeEventListener('DONE_CHANGE_STORE', this.handleStateUpdate);
  }

  componentDidMount() {
    document.addEventListener('DONE_CHANGE_STORE', this.handleStateUpdate);

    const button = document.getElementById('changeState');
    button.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    const state = this.store.getState();
    const counter = state.counter || 0;
    this.store.dispatch('CHANGE_STORE', { counter: counter + 1 });
  };

  render() {
    const state = this.getState();

    this.renderElement.innerHTML = `
      <div>This is global state: ${this.store?.state?.counter || 0}</div>
      <p>Hello World ${state?.list?.id} and name is ${state?.list?.name}</p>
    `;
  }
}
