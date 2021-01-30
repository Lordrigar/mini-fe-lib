import AbstractComponent from './../../../lib/AbstractComponent';
import elementFactory from './../../../lib/elementFactory';
import route from './../../../lib/router';

export default class About extends AbstractComponent {
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
      elementFactory('a', { href: '/' }, ['Go home'], {}, [route]),
      elementFactory('a', { href: '/about' }, ['Go abput'], {}, [route]),
    ]);

    return div;
  }
}
