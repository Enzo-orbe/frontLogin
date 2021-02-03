import {
  ERROR_LOGIN_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../constants";
import Axios from "axios";

export function loginUser(value) {
  return async (dispatch) => {
    const result = await Axios.post("http://localhost:3001/user/login", value);

    console.log(result);
    if (result) {
      await dispatch({
        type: LOGIN_USER,
        payload: result,
      });
    } else {
      await dispatch({
        type: ERROR_LOGIN_USER,
        payload: "Algo salio mal",
      });
    }
  };
}

export const logoutUser = () => {
  return async (dispatch) => {
    const result = await Axios.get("http://localhost:3001/user/logout");
    if (result) {
      dispatch({
        type: LOGOUT_USER,
        payload: result,
      });
    } else {
      console.log("Algo salio mal");
    }
  };
};

export const register = (data) => {
  return async (dispatch) => {
    const result = await Axios.post(
      "http://localhost:3001/user/register",
      data
    );
    if (result) {
      dispatch({
        type: REGISTER_USER,
        payload: result,
      });
    } else {
      console.log("Algo salio mal");
    }
  };
};
