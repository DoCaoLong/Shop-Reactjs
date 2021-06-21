import ShopApi from '../../service/ShopAip';
import { PRODUCTS, CATEGORY, VIEW } from '../Type';

export function ProductAction(renderProduct) {
	return async (dispatch) => {
		let res = await ShopApi.shopProduct(renderProduct);
		// console.log('res', res);

		if (res) {
			dispatch({
				type: PRODUCTS,
				payload: res,
			});
		}
	};
}

export function CategoryAction() {
	return async (dispatch) => {
		let res = await ShopApi.categoryProduct();
		console.log('res category', res);

		if (res) {
			dispatch({
				type: CATEGORY,
				payload: res,
			});
		}
	};
}
export function ViewAction(prop) {
	// console.log('prop :>> ', prop);
	return { type: VIEW, payload: prop };
}
