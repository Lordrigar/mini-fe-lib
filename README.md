# Mini FE Framework

Yeah, don't use that for production, or anything actually.

Started as an app for SpaceX API, but evolved into small library that handles routing and state management.

Was actually fun to work on it, trying to understand state and how it all can work.

## Installation

Always import instantiated classes, otherwise it gets slow (yeah, it's that good with performance :D).

1. Import `registerReducers` from instantiated Store and call it in index.js
2. Import main component and call its `render()` method
3. in `lib/classInstances.js` instantiate Store and other class components
4. in `lib/router.js` provide routes and components to `returnRoutes()`, as mentioned beofre import those components from `classInstances`

The skeleton for it is provided with two sample components `Home` and `About`. Ideally follow that path to create new ones.
Basically after adding new class component don't forget to register it in `classInstances` from which it will be exported and used further in the app + add it to `returnRoutes()`

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

- Improve routing (maybe go for window.location or something)
