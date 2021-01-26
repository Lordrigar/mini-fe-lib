import AbstractComponent from './../AbstractComponent';

export default class Home extends AbstractComponent {
  constructor({ store, renderElement }) {
    super({
      store,
      renderElement: renderElement || document.querySelector('.root'),
      renderDependencies: ['counter'],
    });
  }

  componentDidMount() {
    const button = document.getElementById('changeState');
    button.addEventListener('click', this.handleClick);
  }

  handleClick = () => {
    this.store.dispatch('INCREMENT_COUNTER', { counter: 1 });
  };

  render() {
    const state = this.getState();

    this.renderElement.innerHTML = `
      <div>This is global state: ${this.store?.state?.counter || 0}</div>
      <p>Hello World ${state?.list?.id} and name is ${state?.list?.name}</p>
    `;
  }
}
