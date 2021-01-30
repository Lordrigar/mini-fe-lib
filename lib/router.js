/*
 * Simple router, add event listener to any anchor and update history
 * Update returnRotues with components and urls to render
 *
 * Example to pass it inside of component
 * elementFactory('a', { href: '/' }, ['Go home'], {}, [route])
 * elementFactory('a', { href: '/posts?p=1&auth=2' }, ['View Post 1'], {}, [route])
 */

/*
 * EXAMPLE
 */
import { home, about } from './classInstances';

const returnRoutes = () => {
  return {
    '/': home,
    '/about': about,
  };
};

/*
 * @param a DOMElement(a)
 */
const route = a => {
  const routes = returnRoutes();

  a.addEventListener('click', function (e) {
    e.preventDefault();

    // TODO: Change that, this just looks horrible
    const pageUrl = e.target?.attributes?.getNamedItem('href')?.value || '/';
    const [url, queryParams] = pageUrl.split('?');
    const [_, page] = url.split('/');
    const params = queryParams?.split('&');
    const data = {};

    params?.forEach(param => {
      const p = param.split('=');
      data[p[0]] = p[1];
    });

    window.history.pushState({ url, data }, page || 'home', pageUrl);

    const component = routes[url || '/'];

    component?.render(data);
  });

  window.onpopstate = function (event) {
    const { url, data } = event.state;
    const component = routes[url];

    component?.render(data);
  };
};

export default route;
