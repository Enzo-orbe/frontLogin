import { ERROR_LOGIN_USER, LOGIN_USER, LOGOUT_USER } from "../constants";
import Axios from "axios";

export const loginUser = (value) => {
  return async (dispatch) => {
    const result = await Axios.post("http://localhost:3001/user/login", value);
    try {
      if (result) {
        dispatch({
          type: LOGIN_USER,
          payload: result,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN_USER,
        payload: error,
      });
    }
  };
};

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
