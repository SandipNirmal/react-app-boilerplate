import { isAuthenticated } from './../services/authService';
import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED } from '../actions';

const initialState = {
  isLoggedIn: isAuthenticated(),
  fetching: false,
  error: ''
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, fetching: true, error: '' };

    case LOGIN_FULFILLED:
      return {
        ...state,
        fetching: false,
        error: '',
        isLoggedIn: isAuthenticated()
      };

    case LOGIN_REJECTED:
      return {
        ...state,
        fetching: false,
        error:
          action.payload.response && action.payload.response.data
            ? action.payload.response.data.displayMsg
            : 'Server Cannot be reached.'
      };

    default:
      return state;
  }
}

export function logoutUser(state = initialState, action) {
  switch (action.type) {
    // case LOGOUT_PENDING:
    //   return { ...state, fetching: true };

    // case LOGOUT_FULFILLED:
    //   return {
    //     ...state,
    //     fetching: false,
    //     isLoggedIn: isAuthenticated()
    //   };

    // case LOGOUT_REJECTED:
    //   return {
    //     ...state,
    //     fetching: false
    //   };

    default:
      return state;
  }
}
