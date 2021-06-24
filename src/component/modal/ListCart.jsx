import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EnterAddCartAction } from '../../redux/actions/CartAction';
import { ReCartAction } from '../../redux/actions/CartAction';
import { InCartAction } from '../../redux/actions/CartAction';
import { DeCartAction } from '../../redux/actions/CartAction';
import { currency } from '../../utils';
export default function ListCart(item) {
	// console.log('item :>> ', item);
	let dispatch = useDispatch();
	let [numberProduct, setnumberProduct] = useState(item.numberCart);
	let { numberCart, _id } = item;
	function HandleDecrease(e) {
		dispatch(DeCartAction(e));
	}
	function HandleIncrease(e) {
		dispatch(InCartAction(e));
	}
	function HandleRemoveCart(e) {
		dispatch(ReCartAction(e));
	}
	function HandleEnter(e) {
		if (e.charCode == 13) {
			let num = parseInt(numberProduct);
			if (num <= 0) {
				dispatch(ReCartAction(item));
			} else {
				dispatch(EnterAddCartAction({ num, _id }));
			}
			// console.log('numberPro :>> ', num);
		}
	}
	useEffect(() => {
		setnumberProduct(numberCart);
	}, [numberCart]);
	return (
		<li className="list-group-item">
			<div className="row align-items-center">
				<div className="col-4">
					{/* Image */}
					<a href="./product.html">
						<img className="img-fluid" src={item?.thumbnail_url} alt="..." />
					</a>
				</div>
				<div className="col-8">
					{/* Title */}
					<p className="font-size-sm font-weight-bold mb-6">
						<a className="text-body" href="./product.html">
							{item?.name}
						</a>
						<br />
						<span className="text-muted">{currency(item?.price)}</span>
					</p>
					{/*Footer */}
					<div className="d-flex align-items-center">
						{/* Select */}
						<div
							onClick={() => HandleDecrease({ ...item })}
							type="button"
							className="btn-cart btn-dark"
						>
							-
						</div>
						<input
							className="input-cart"
							onChange={(e) => setnumberProduct(e.target.value)}
							onKeyPress={HandleEnter}
							value={numberProduct}
						/>
						<div
							onClick={() => HandleIncrease({ ...item })}
							type="button"
							className="btn-cart btn-dark"
						>
							+
						</div>

						{/* Remove */}
						<a
							onClick={() => HandleRemoveCart({ ...item })}
							className="font-size-xs text-gray-400 ml-auto"
							href="#!"
						>
							<i className="fe fe-x" /> Remove
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}
