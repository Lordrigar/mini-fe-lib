import AbstractComponent from './../AbstractComponent';
import elementFactory from './../services/elementFactory';

export default class About extends AbstractComponent {
  constructor({ store, renderElement }) {
    super({
      store,
      renderElement: renderElement || document.querySelector('.root'),
      renderDependencies: [],
    });
  }

  generateHTML() {
    const div = elementFactory('div', {}, ['About page :)']);

    return div;
  }
}
