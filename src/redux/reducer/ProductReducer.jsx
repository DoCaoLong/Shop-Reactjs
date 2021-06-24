import { CATEGORY, PRODUCTS, LOADING, VIEW, ENTER_ADD_CART } from '../Type';

let init = {
	product: JSON.parse(localStorage.getItem('product')) || [],
	category: [],
	paginate: [],
	loading: false,
	productDetail: {},
};

export default function ProductReducer(state = init, action) {
	switch (action.type) {
		case PRODUCTS:
			localStorage.setItem('product', JSON.stringify(action.payload.data));
			return {
				...state,
				product: action.payload.data,
				paginate: action.payload.paginate,
				loading: false,
			};
		case CATEGORY:
			return {
				...state,
				category: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case VIEW:
			return {
				...state,
				productDetail: action.payload,
			};

		default:
			return state;
	}
}
