import { CATEGORY, PRODUCTS, LOADING } from '../Type';

let init = {
	product: [],
	category: [],
	paginate: [],
	loading: false,
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
		default:
			return state;
	}
}
