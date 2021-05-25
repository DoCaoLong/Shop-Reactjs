import { ERROR, LOGIN, LOGOUT, UPDATE } from "../Type";

let initState = {
  login: JSON.parse(localStorage.getItem("login")),
  loginError: "",
};
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
    case ERROR:
       return {
         ...state,
         loginError: action.payload,
       };
    case UPDATE:
      localStorage.setItem("login", JSON.stringify(action.payload));
       return{
         ...state,
         login: action.payload
       }
    default:
      return state;
  }
  // console.log(action);
  return state;
}
