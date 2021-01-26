import AbstractComponent from './../AbstractComponent';

export default class Home extends AbstractComponent {
  constructor({ store, renderElement }) {
    super({
      store,
      renderElement: renderElement || document.querySelector('.root'),
      renderDependencies: ['counter'],
    });
  }

  handleClick = () => {
    this.store.dispatch('INCREMENT_COUNTER', { counter: 1 });
  };

  generateHTML() {
    const state = this.getState();

    const button = document.createElement('button');
    button.innerHTML = 'click meee';
    button.id = 'changeState';
    button.addEventListener('click', this.handleClick);

    const div = document.createElement('div');
    const textNode = document.createTextNode(
      `This is global state: ${this.store?.state?.counter || 0}`
    );
    div.appendChild(textNode);

    const p = document.createElement('p');
    p.appendChild(
      document.createTextNode(
        `Hello World ${state?.list?.id} and name is ${state?.list?.name}`
      )
    );
    div.appendChild(p);
    div.appendChild(button);

    return div;
  }
}
