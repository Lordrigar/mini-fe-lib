const eventWrapper = (action, payload) => {
  const event = new CustomEvent('STATE_CHANGED', {
    detail: { ...payload, action },
  });
  document.dispatchEvent(event);
};

export default eventWrapper;
