# Vanilla JS App for SpaceX API

Goal is to create SPA with Real Time data fetching without use of frameworks.

TODO:

- Create more components (to have more data to play with)
- Switch to createElement and figure out how to re-render with it
- Figure out what to do with event listeners to scale it at large (too much dependency on adding/removing event listeners) - maybe add re-render to the whole app right now and subscribe to one generic event (state_changed) which will re-render all components. then think how to optimize that. In handleRedner compare the new state and old state (somehow) or something like that and see if this particular component needs rerender or not (maybe dom elements?) pass array of values that will react to state change (something like useEffect - it will compare it and then rerender) - change Store to not mutate directly in mutation, but by Store function setState. This way I can fire old state + new state and let component check what changed
