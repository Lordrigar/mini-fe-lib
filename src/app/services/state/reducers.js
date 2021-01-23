import Store from './Store';
const homeEvent = new Event('UPDATED_CHANGE_STORE');

const reducers = (action, payload) => {
  switch (action) {
    case 'CHANGE_STORE':
      Store.setState(payload);
      document.dispatchEvent(homeEvent);
  }
};

export default reducers;
