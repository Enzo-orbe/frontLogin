import { ERROR_LOGIN_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  user: [],
  error: [],
  message: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.data,
      };
    case ERROR_LOGIN_USER:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: [],
        message: action.payload.data,
      };

    default:
      return state;
  }
};
