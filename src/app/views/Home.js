import AbstractComponent from './../../../lib/AbstractComponent';
import elementFactory from './../../../lib/elementFactory';
import route from './../../../lib/router';
import store from './../../../lib/state/Store';

class Home extends AbstractComponent {
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

  generateHTML(params) {
    const state = this.getState();

    const div = elementFactory('div', {}, [
      `This is global state: ${this.store?.state?.counter || 0}`,
      elementFactory('p', {}, [
        `Hello World ${state?.list?.id} and name is ${state?.list?.name}`,
      ]),
      elementFactory(
        'button',
        { id: 'changeState', class: 'p-2 m-2' },
        ['click me :)'],
        {
          click: this.handleClick,
        }
      ),
      elementFactory('a', { href: '/' }, ['Go Home'], {}, [route]),
      elementFactory('a', { href: '/about' }, ['Go About'], {}, [route]),
    ]);

    return div;
  }
}

const home = new Home({ store });
export default home;
