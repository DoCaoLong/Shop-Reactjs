import { CATEGORY } from '../Type';
import { PRODUCTS } from '../Type';
import { LOADING } from '../Type';

let init = {
	product: [],
	category: [],
	paginate: [],
	loading: true,
};

export default function ProductReducer(state = init, action) {
	switch (action.type) {
		case PRODUCTS:
			return {
				...state,
				product: action.payload.data,
				paginate: action.payload.paginate,
			};
		case CATEGORY:
			return {
				...state,
				category: action.payload.data,
			};
		case LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
