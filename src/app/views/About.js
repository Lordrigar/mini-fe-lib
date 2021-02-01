import AbstractComponent from './../../../lib/AbstractComponent';
import elementFactory from './../../../lib/elementFactory';
import route from './../../../lib/router';
import store from './../../../lib/state/Store';

class About extends AbstractComponent {
  constructor({ store, renderElement }) {
    super({
      store,
      renderElement: renderElement || document.querySelector('.root'),
      renderDependencies: [],
    });
  }

  generateHTML(params) {
    const div = elementFactory('div', {}, [
      'About page :)',
      elementFactory('a', { href: '/' }, ['Go Home'], {}, [route]),
      elementFactory('a', { href: '/about' }, ['Go About'], {}, [route]),
    ]);

    return div;
  }
}

const about = new About({ store });
export default about;
