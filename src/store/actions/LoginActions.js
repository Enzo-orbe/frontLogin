import { LOGIN_USER } from "../constants";
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
      alert(error);
    }
  };
};
