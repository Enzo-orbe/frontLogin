import { combineReducers } from "redux";
import LoginReducers from "./LoginReducer";

export default combineReducers({
  Login: LoginReducers,
});
