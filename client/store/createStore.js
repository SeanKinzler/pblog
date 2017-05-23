import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../reducers/reducers.js';
import {persistStore, autoRehydrate} from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
  collapsed: true,
})

// autoRehydrate(),
const store = createStore(
    Reducers,
    undefined,
    compose(applyMiddleware(thunk), applyMiddleware(logger))
  );
// persistStore(store);

export default store;