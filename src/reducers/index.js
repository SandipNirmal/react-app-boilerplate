import { combineReducers } from "redux";

import { authReducer, logoutUser } from "./reducer_auth";

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
