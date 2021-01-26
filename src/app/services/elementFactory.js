/* Example use
 * const div = elementFactory(
 *   'div',
 *   { id: 'newId' },
 *   [elementFactory('p', {}, 'Hello World!'), 'Text node child'],
 *   {click: 'this.handleClick'}
 * )
 *
 */

const elementFactory = (type, attributes, children, events) => {
  const el = document.createElement(type);

  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  for (const key in events) {
    el.addEventListener(key, events[key]);
  }

  return el;
};

export default elementFactory;
