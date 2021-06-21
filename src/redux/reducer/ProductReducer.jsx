import { CATEGORY, PRODUCTS, LOADING, VIEW } from '../Type';

let init = {
	product: [],
	category: [],
	paginate: [],
	loading: false,
	productDetail: {},
};

export default function ProductReducer(state = init, action) {
	switch (action.type) {
		case PRODUCTS:
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
