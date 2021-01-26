import AbstractComponent from './../AbstractComponent';
import elementFactory from './../services/elementFactory';

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

    const div = elementFactory('div', {}, [
      `This is global state: ${this.store?.state?.counter || 0}`,
      elementFactory('p', {}, [
        `Hello World ${state?.list?.id} and name is ${state?.list?.name}`,
      ]),
      elementFactory(
        'button',
        { id: 'changeState', class: 'p-7' },
        ['click me :)'],
        {
          click: this.handleClick,
        }
      ),
    ]);

    return div;
  }
}
