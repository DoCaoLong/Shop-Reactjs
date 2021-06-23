import { duration } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ReCartAction } from '../../redux/actions/CartAction';
import { InCartAction } from '../../redux/actions/CartAction';
import { DeCartAction } from '../../redux/actions/CartAction';
import { currency } from '../../utils';
export default function ListCart(item) {
	// console.log('item :>> ', item);
	let dispatch = useDispatch();
	function HandleDecrease(e) {
		dispatch(DeCartAction(e));
	}
	function HandleIncrease(e) {
		dispatch(InCartAction(e));
	}
	function HandleRemoveCart(e) {
		dispatch(ReCartAction(e));
	}
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
						<input className="input-cart " value={item?.numberCart} />
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
