# Vanilla JS App for SpaceX API

Goal is to create SPA with Real Time data fetching without use of frameworks.

App features:

- Local and global state (event based)
- Re-rendering of only those components that require it

TODO:

- add checks for methods to check the right arguments are passed
- create function components for elements like button etc and import them to Home
- rewrite dispatcher and reduce one layer
- go back to createElement :(

// dispatcher

- click event -> dispatch Event
- wrapper() przejmuje Eventa -> new Event -> dispatch() -> document.dispatchEvent

// reducer

- register reducer, mapa listenerow jako manager (klasa/obiekt state controller)
- manager.regReducer(action, cb()) to nasluchuje (wewnatrz komponentu/serwisu)
- regReducer (ma mape listenerow) [action: [cb, cb]] -> document.addEventListener
- manager nasluchuje na regReducer i przekazuje przez wszystkie callbacki i zwraca nowy state
