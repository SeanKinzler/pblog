import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from '../reducers/auth.jsx';
import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';



const store = createStore(
    Reducers,
    undefined,
    compose(
      // autoRehydrate(),
      applyMiddleware(logger),
    )
  );
// persistStore(store);

export default store;