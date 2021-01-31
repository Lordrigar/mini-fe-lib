# Mini FE Framework

I don't advice to use that for production, as this was created more as a fun, side project.

Started as an app for SpaceX API, but evolved into small library that handles routing, state management and keeps UI component-like.

Was actually fun to work on it, trying to understand state and how it all can work.

## Installation

Always import instantiated classes, otherwise it gets slow (yeah, it's that good with performance :D).

1. Import `registerReducers` from instantiated Store and call it in index.js
2. Import main component and call its `render()` method
3. in `lib/classInstances.js` instantiate Store and other class components
4. in `lib/router.js` provide routes and components to `returnRoutes()`, as mentioned beofre import those components from `classInstances`

The skeleton for it is provided with two sample components `Home` and `About`. Ideally follow that path to create new ones.
Basically after adding new class component don't forget to register it in `classInstances` from which it will be exported and used further in the app + add it to `returnRoutes()`

## Folder structure and files explained

- `lib/state` - holds whole logic for state management
- `lib/state/actions.js` - user defined actions for updating state
- `lib/state/mutations.js` - user defined mutations (don't mutate state directly, just return new state)
- `lib/state/initialState.js` - keep initial global state here
- `lib/state/eventWrapper.js` - generic wrapper for dispatched events, used by Store.js
- `lib/state/Store.js` - main logic for global state

- `lib/AbstractComponent.js` - keeps the core functionality of class components, setting store, mount/unmount events and local state. Should be extender for all new class components
- `lib/classInstances.js` - here instantiate all new class based components
- `lib/elementFactory.js` - wrapper for document.createElement for quick UI construction
- `lib/router.js` - define all routes there and use `route()` function as a callback to anchors (via elementFactory). Check example in file

### Lib files to change/update

User is generally interested in modifying below files:

- `lib/router.js`
- `lib/classInstances.js`
- `lib/state/actions.js`
- `lib/state/mutations.js`
- `lib/state/initialState.js`

## Scripts

Dev server

```
npm run start
```

Build

```
npm run build
```
