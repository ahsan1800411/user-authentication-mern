import { LOGIN_USER, LOGOUT_USER } from "../constants/authConstants";

let userState;
if (localStorage.getItem("auth")) {
  userState = JSON.parse(localStorage.getItem("auth"));
} else {
  userState = null;
}

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_USER:
      return action.payload;

    default:
      return state;
  }
};
