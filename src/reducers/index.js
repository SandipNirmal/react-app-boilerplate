import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import { authReducer, logoutUser } from './reducer_auth';

const rootReducer = combineReducers({
  auth: authReducer,
  logout: logoutUser,
  form: FormReducer
});

export default rootReducer;
