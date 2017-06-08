import {
  USER_SIGN_IN,
  ADMIN_SIGN_IN,
  USER_SIGN_OUT,
  ADMIN_SIGN_OUT,
} from '../actions/index.js';

const initialState ={
  authenticated: false,
  token: '',
  admin: false,
}



//keep inputs unchanged!!!
const Auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN:
      return Object.assign({}, state, {
        authenticated: true,
      });
    case USER_SIGN_OUT:
      return Object.assign({}, state, {
        authenticated: false,
      });
    case ADMIN_SIGN_IN:
      return Object.assign({}, state, {
        authenticated: true,
        admin: true,
      })
    case ADMIN_SIGN_OUT:
      return Object.assign({}, state, {
        authenticated: false,
        admin: false,
      });
    case 'persist/REHYDRATE':
      return { ...state, persistedState: action.payload };
    default:
      return state;
  }
}

export default Auth;