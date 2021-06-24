import { ADD_CART, DECREASE_CART, INCREASE_CART, REMOVE_CART, ENTER_ADD_CART } from '../Type';

export function AddCartAction(prop) {
	// console.log('prop cart action:>> ', prop);
	return {
		type: ADD_CART,
		payload: prop,
	};
}
export function DeCartAction(prop) {
	// console.log('prop cart action de :>> ', prop);
	return {
		type: DECREASE_CART,
		payload: prop,
	};
}
export function InCartAction(prop) {
	// console.log('prop cart action:>> ', prop);
	return {
		type: INCREASE_CART,
		payload: prop,
	};
}
export function ReCartAction(prop) {
	// console.log('prop cart action:>> ', prop);
	return {
		type: REMOVE_CART,
		payload: prop,
	};
}
export function EnterAddCartAction(prop) {
	console.log('prop enter add cart action:>> ', prop);
	return {
		type: ENTER_ADD_CART,
		payload: prop,
	};
}
