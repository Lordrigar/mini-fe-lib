class AbstractComponent {
  constructor(props) {
    this.state = {};
  }

  setState(target, value) {
    this.state = { ...this.state, [target]: value };
  }

  render() {
    return ``;
  }
}

export default AbstractComponent;
