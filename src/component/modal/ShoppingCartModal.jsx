import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currency } from '../../utils';
import ListCart from './ListCart';
export function ShoppingCartModal() {
	let { listCart, totalPrice } = useSelector((store) => store.cart);
	// console.log('listCart :>> ', listCart);
	return ReactDom.createPortal(
		<div
			className="modal fixed-right fade"
			id="modalShoppingCart"
			tabIndex={-1}
			role="dialog"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-vertical" role="document">
				{/* Full cart (add `.d-none` to disable it) */}
				<div className="modal-content">
					{/* Close */}
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<i className="fe fe-x" aria-hidden="true" />
					</button>
					{/* Header*/}
					<div className="modal-header line-height-fixed font-size-lg">
						<strong className="mx-auto">Your Cart (2)</strong>
					</div>
					{/* List group */}
					<ul className="list-group list-group-lg list-group-flush">
						{listCart?.map((e) => (
							<ListCart {...e} key={e._id} />
						))}
					</ul>
					{/* Footer */}
					<div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
						<strong>Subtotal</strong>{' '}
						<strong className="ml-auto">{currency(`${totalPrice}`)}</strong>
					</div>
					{/* Buttons */}
					<div className="modal-body">
						<Link
							className="btn btn-block btn-dark"
							to="/checkout"
							// data-dismiss="modal"
						>
							Continue to Checkout
						</Link>
						<a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">
							View Cart
						</a>
					</div>
				</div>
				{/* Empty cart (remove `.d-none` to enable it) */}
				<div className="modal-content d-none">
					{/* Close */}
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<i className="fe fe-x" aria-hidden="true" />
					</button>
					{/* Header*/}
					<div className="modal-header line-height-fixed font-size-lg">
						<strong className="mx-auto">Your Cart (0)</strong>
					</div>
					{/* Body */}
					<div className="modal-body flex-grow-0 my-auto">
						{/* Heading */}
						<h6 className="mb-7 text-center">Your cart is empty 😞</h6>
						{/* Button */}
						<a className="btn btn-block btn-outline-dark" href="#!">
							Continue Shopping
						</a>
					</div>
				</div>
			</div>
		</div>,
		document.getElementById('root2')
	);
}
