// import ReduxToolkit from '../../core/ReduxToolkit';

import { ERROR, LOGIN, LOGOUT, UPDATE, ERROR_REGISTER, REGISTER } from '../Type';

let initState = {
	login: JSON.parse(localStorage.getItem('login')),
	loginError: '',
	registerError: '',
};
// console.log(initState);
export default function auth(state = initState, action) {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('login', JSON.stringify(action.payload));
			localStorage.setItem('token', JSON.stringify(action.payload?.token));
			return {
				...state,
				login: action.payload,
			};
		case LOGOUT:
			localStorage.setItem('login', false);
			localStorage.setItem('token', false);
			return {
				...state,
				login: false,
				loginError: '',
				registerError: '',
			};
		case REGISTER:
			localStorage.setItem('data', JSON.stringify(action.payload));
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
			localStorage.setItem('login', JSON.stringify(action.payload));
			return {
				...state,
				login: action.payload,
			};
		default:
			return state;
	}
	// console.log(action);
}

// let { action, reducer, TYPE } = ReduxToolkit({
// 	initialState: initState,
// 	name: 'auth',
// 	reducers: {
// 		login: (state, action) => {
// 			localStorage.setItem('login', JSON.stringify(action.payload));
// 			localStorage.setItem('token', JSON.stringify(action.payload?.token));
// 			return {
// 				...state,
// 				login: action.payload,
// 			};
// 		},
// 		logout: (state, action) => {
// 			localStorage.setItem('login', false);
// 			localStorage.setItem('token', false);
// 			return {
// 				...state,
// 				login: false,
// 				loginError: '',
// 				registerError: '',
// 			};
// 		},
// 		error: (state, action) => {
// 			return {
// 				...state,
// 				loginError: action.payload,
// 			};
// 		},
// 		errorRegister: (state, action) => {
// 			return {
// 				...state,
// 				registerError: action.payload,
// 			};
// 		},
// 		register: (state, action) => {
// 			localStorage.setItem('data', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				data: action.payload,
// 				// login: true,
// 			};
// 		},
// 		update: (state, action) => {
// 			localStorage.setItem('login', JSON.stringify(action.payload));
// 			return {
// 				...state,
// 				login: action.payload,
// 			};
// 		},
// 	},
// });
// export default reducer;
// export const { error } = action;
// export const AUTH_TYPE = TYPE;
