import { ADD_CART, DECREASE_CART, INCREASE_CART, REMOVE_CART } from '../Type';

let init = {
	listCart: [],
	totalPrice: 0,
	numberCart: 0,
};

export default function ProductReducer(state = init, action) {
	switch (action.type) {
		case ADD_CART:
			//destructuring để lấy cái listCard từ state listCart là 1 mảng rỗng
			let { listCart, totalPrice } = state;
			console.log('them thanh cong', listCart);
			//gọi 1 biên cartItem, để nhận từng cái obj mình truyền vào, mỗi lần mình click là nó sẽ thực hiện hành động add cart
			let cartItem = action.payload;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			//cartItem.numberCart tu tao bien numberCart vao trong trong cartItem
			let numberCart = cartItem.numberCart || 1;
			// console.log('index :>> ', index);

			// chua co san pham thi push len
			//index === -1 k bị trùng thì add vào
			if (index === -1) {
				//listCart.push(cartItem) để truyền cái cục Item đó vào mảng, bấm bao nhiêu lần thì bấy nhiu cục cartItem trong mảng.
				listCart.push(cartItem);
				cartItem.numberCart = numberCart;
				totalPrice += cartItem.price;
				// co san pham roi thi cong them so luong
			} else {
				//index === -1 bị trùng thì cộng dồn vào
				//vi tri cua cartItem trong listCart
				listCart[index].numberCart += numberCart;
				totalPrice += listCart[index].price;
			}
			// console.log('index :>> ', index);
			return {
				...state,
				listCart,
				totalPrice,
			};
		case DECREASE_CART: {
			let { listCart, totalPrice } = state;
			console.log('tru', listCart);
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			if (listCart[index].numberCart > 1) {
				listCart[index].numberCart -= 1;
				totalPrice -= listCart[index].price;
			}
			return {
				...state,
				listCart,
				totalPrice,
			};
		}

		case INCREASE_CART: {
			let { listCart, totalPrice } = state;
			console.log('cong', listCart);
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			listCart[index].numberCart += 1;
			totalPrice += listCart[index].price;
			return {
				...state,
				listCart,
				totalPrice,
			};
		}

		case REMOVE_CART: {
			let { listCart, totalPrice } = state;
			let index = listCart.findIndex((item) => item._id === action.payload._id);
			//filter tìm sp cần xóa
			let newListcart = listCart.filter((item) => item._id !== action.payload._id);
			// lấy sl sp vua xoa // listCart[index].price * newNumbercart số tiền sản phẩm vừa xóa
			let newNumbercart = listCart[index].numberCart;
			// to gia tien vua xoa
			// slbd - sp vua xoa * tong so luong
			let newPrice = totalPrice - listCart[index].price * newNumbercart;
			return {
				...state,
				listCart: newListcart,
				totalPrice: newPrice,
			};
		}
		default:
			return state;
	}
}
