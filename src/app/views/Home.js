import AbstractComponent from './../AbstractComponent';
import Store from './../services/state/Store';
import Paragraph from './../components/Paragraph';

export default class Home extends AbstractComponent {
  constructor(props) {
    super(props);
  }

  render(element = null) {
    this.setRenderElement(element);
    const state = this.getState();
    const globalState = Store.getState();

    const p = Paragraph(`This is global state: ${globalState.counter || 0}`);

    return `
    <div class="myClass">Hello World ${state?.list?.id} and name is ${state?.list?.name}</div>
      ${p}
    `;
  }
}
