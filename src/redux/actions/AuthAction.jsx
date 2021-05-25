import { LOGIN, LOGOUT, ERROR, UPDATE } from "../Type";
import AuthApi from "../../service/AuthApi";

export function LoginAciton(data, success) {
  return async (dispatch) => {
    let res = await AuthApi.login(data);
    if (res.data) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      success();
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };
}
export function UpdateAction(data) {
  return async (dispatch) => {
    let res = await AuthApi.update(data);
    if (res.data) {
      dispatch({
        type: UPDATE,
        payload: res.data,
      });
    } else if (res.error) {
        dispatch({
          type: ERROR,
          payload: res.error,
        }); 
    }
  };
}
export function LogoutAciton() {
  return {
    type: LOGOUT,
    // payload: data
  };
}
