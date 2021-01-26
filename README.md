# Mini FE Framework

Started as an idea to create an app with component rendering and state management and evolved into small side project to understand how rendering and state management work.

Right now features class components with scoped state, Global event based state, wrapper function for creating DOM elements, router.

This is probably not secure enough for production use, but it was fun playing with it :).

## Scripts

Dev server

```
npm run start
```

Build

```
npm run build
```

TODO:

- make router a function passed to some sort of data prop or just onclick on <a> tag. So I don't have to pass navs at the beginning, but rather import Router as function and assign it to anchor tag
