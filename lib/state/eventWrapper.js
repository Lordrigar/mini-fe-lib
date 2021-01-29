const eventWrapper = (action, payload) => {
  const event = new CustomEvent('UPDATE_STATE', {
    detail: { ...payload, action },
  });
  document.dispatchEvent(event);
};

export default eventWrapper;
