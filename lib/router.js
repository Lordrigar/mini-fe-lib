import { home, about } from './classInstances';

const returnRoutes = () => {
  return {
    '/': home,
    '/about': about,
  };
};

/*
 * elementFactory('a', { href: '/' }, ['Go home'], {}, [route])
 * elementFactory('a', { href: '/posts?p=1&auth=2' }, ['View Post 1'], {}, [route])
 */
const route = a => {
  const routes = returnRoutes();

  a.addEventListener('click', function (e) {
    e.preventDefault();

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
    const { url } = event.state;
    const component = routes[url];

    component?.render(data);
  };
};

export default route;
