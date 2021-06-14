import { api, endpoint } from './config';
const ShopApi = {
	shopProduct(renderProduct) {
		return fetch(`${endpoint}/product?${renderProduct}`).then((res) => res.json());
	},
	// categoryProduct() {
	// 	return fetch(`${endpoint}/categories`).then((res) => res.json());
	// },
};
export default ShopApi;
