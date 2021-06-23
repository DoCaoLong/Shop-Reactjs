import ShopApi from '../../service/ShopApi';
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

		if (res) {
			dispatch({
				type: CATEGORY,
				payload: res,
			});
		}
	};
}
export function ViewAction(prop) {
	// console.log('prop action:>> ', prop);
	return { type: VIEW, payload: prop };
}
