import { LOGIN, LOGOUT, ERROR, UPDATE, REGISTER, ERROR_REGISTER } from '../Type';
import AuthApi from '../../service/AuthApi';

export function LoginAciton(form) {
	return async (dispatch) => {
		let res = await AuthApi.login(form);
		// console.log("res :>> ", res);
		if (res.data) {
			dispatch({
				type: LOGIN,
				payload: res.data,
			});
			// success();
		} else if (res.error) {
			dispatch({
				type: ERROR,
				payload: res.error,
			});
		}
	};
}

export function RegisActiton(form) {
	return async (dispatch) => {
		let res = await AuthApi.register(form);
		// console.log("res :>> ", res);
		if (res.data) {
			dispatch({
				type: REGISTER,
				payload: res.data,
			});
			// success();
		} else if (res.error) {
			dispatch({
				type: ERROR_REGISTER,
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
