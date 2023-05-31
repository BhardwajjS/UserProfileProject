import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import { userData } from "./reducers/userReducer";
const rootReducer = combineReducers({
  // userReducer: userReducer,
  userData: userData,
});

export default rootReducer;
