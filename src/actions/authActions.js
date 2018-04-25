import {
  authenticateUser,
  saveAuthInfo,
  removeAuthInfo
} from './../services/authService';

export const LOGIN = 'LOGIN';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_REJECTED = 'LOGOUT_REJECTED';
export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';

export const loginUser = ({ username, password }) => {
  return dispatch => {
    return dispatch({
      type: LOGIN,
      payload: authenticateUser(username, password)
    }).then(res => {
      const userData = res.value.data.data;
      saveAuthInfo(JSON.stringify(userData));
      return dispatch({
        type: LOGIN,
        payload: Promise.resolve()
      });
    });
  };
};

export const logoutUser = () => {
  removeAuthInfo();
  return {
    type: LOGOUT
  };
};
