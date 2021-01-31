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
import Home from './../src/app/views/Home';
import About from './../src/app/views/About';
import store from './state/Store';

const returnDictionary = () => {
  return new Map([
    ['Home', Home],
    ['About', About],
  ]);
};

const returnRoutes = () => {
  return {
    '/': 'Home',
    '/about': 'About',
  };
};

/*
 * @param { HTMLElement } el
 */
const route = el => {
  const routes = returnRoutes();
  const dictionary = returnDictionary();

  el.addEventListener('click', function (e) {
    e.preventDefault();

    const { origin } = window.location;
    const { value } = e.target?.attributes?.getNamedItem('href') || '/';

    const url = new URL(`${origin}${value}`);

    const { pathname, searchParams, href } = url;
    const [_, pageName] = pathname.split('/');
    const data = {};

    searchParams.forEach((value, param) => (data[param] = value));

    window.history.pushState({ pathname, data }, pageName || 'home', href);
    const componentName = routes[pathname || '/'];

    const component = new (dictionary.get(componentName))({ store });

    component?.render(data);
  });

  window.onpopstate = function (event) {
    const { pathname, data } = event.state;
    const component = routes[pathname];

    component?.render(data);
  };
};

export default route;
