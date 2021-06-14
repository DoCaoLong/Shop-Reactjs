import ShopApi from '../../service/ShopAip';
import { PRODUCTS, CATEGORY } from '../Type';

export default function ProductAction(renderProduct) {
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
