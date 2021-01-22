const homeEvent = new Event('UPDATED_CHANGE_STORE');

const Store = {
  state: {},
  dispatch: function (action, payload) {
    switch (action) {
      case 'CHANGE_STORE':
        this.setState(payload);
        document.dispatchEvent(homeEvent);
    }
  },

  setState: function (newState) {
    this.state = { ...this.state, ...newState };
  },

  getStore: function () {
    return this.state;
  },
};

export default Store;
