import { api, endpoint } from './config';
const ShopApi = {
	shopProduct() {
		return fetch(`${endpoint}/product`).then((res) => res.json());
	},
};
export default ShopApi;
