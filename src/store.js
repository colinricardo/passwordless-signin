/* global window */
import { createStore, compose } from 'redux';
import rootReducer from './reducers';

// eslint-disable-next-line
let store;

// Show the Redux Devtools only in development mode.
if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(rootReducer, composeEnhancers());
} else {
  store = createStore(rootReducer);
}

export default store;
