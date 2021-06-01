import { ERROR, LOGIN, LOGOUT, UPDATE, ERROR_REGISTER, REGISTER } from "../Type";

let initState = {
  login: JSON.parse(localStorage.getItem("login")),
  loginError: "",
  registerError: "",
};
  // console.log(initState);
export default function auth(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    case LOGOUT:
      localStorage.setItem("login", false);
      return {
        ...state,
        login: false,
      };
    case REGISTER:
      localStorage.setItem("data", JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
        // login: true,
      };
    case ERROR_REGISTER:
      return {
        ...state,
        registerError: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case UPDATE:
      localStorage.setItem("login", JSON.stringify(action.payload));
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
  // console.log(action);
}
