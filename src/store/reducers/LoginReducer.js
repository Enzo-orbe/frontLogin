import {
  ERROR_LOGIN_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../constants";

const initialState = {
  user: [],
  error: [],
  message: [],
  register: [],
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
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };

    default:
      return state;
  }
};
