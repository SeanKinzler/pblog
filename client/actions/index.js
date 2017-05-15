import { checkAuth } from '../utils/auth.jsx';

export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'

export const userSignIn = (token) => {
  return {
    type: USER_SIGN_IN,
    token: token,
  }
}

export const userSignOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  return {
    type: USER_SIGN_OUT
  }
}