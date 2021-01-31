/*
 * Wrapper for document events
 * Catches all events that components dispatch to Store and wraps in one generic event (which still returns to Store)
 *
 * @param {string} action
 * @param {Object} payload
 */
const eventWrapper = (action, payload) => {
  const event = new CustomEvent('UPDATE_STATE', {
    detail: { ...payload, action },
  });
  document.dispatchEvent(event);
};

export default eventWrapper;
