import { CATEGORY } from '../Type';
import { PRODUCTS } from '../Type';

let init = {
	product: [],
	category: [],
	paginate: [],
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
		default:
			return state;
	}
}
