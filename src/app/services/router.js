import { home, about } from './classInstances';

const returnRoutes = () => {
  return {
    '/': home,
    '/about': about,
  };
};

const initializeRouter = nav => {
  const routes = returnRoutes();

  nav.forEach(a =>
    a.addEventListener('click', function (e) {
      e.preventDefault();

      const url = e.target?.attributes?.getNamedItem('href')?.value || '/';
      const [_, title] = url.split('/');

      window.history.pushState({ url }, title || 'home', url);

      const component = routes[url];

      component.render();
    })
  );

  window.onpopstate = function (event) {
    const { url } = event.state;
    const component = routes[url];

    component.render();
  };
};

export default initializeRouter;
