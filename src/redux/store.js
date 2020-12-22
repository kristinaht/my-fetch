import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'; //allows the browser to cache our store

import rootReducer from './root-reducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persisted version of our store. using persistor & our store is how we'll create the new provider that's wrapping the app.