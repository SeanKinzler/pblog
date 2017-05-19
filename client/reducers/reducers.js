import AuthReducer from './auth.jsx';
import PostReducer from './posts.js';
import { combineReducers }from 'redux';

const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
});

export default rootReducer;