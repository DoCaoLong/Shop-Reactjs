import { useSelector } from 'react-redux';
import { currency } from '../../../utils';
import { Skeleton } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
export default function ProductItem({ name, thumbnail_url, price }) {
	// let loading = false;
	let { loading } = useSelector((store) => store.product);
	return (
		<div className="col-6 col-md-4">
			{/* Card */}
			<div className="card mb-7">
				{/* Badge */}
				{loading ? (
					<></>
				) : (
					<div className="badge badge-white card-badge card-badge-left text-uppercase">New</div>
				)}
				{/* Image */}
				<div className="card-img">
					{/* Image */}
					{loading ? (
						<Skeleton variant="rect" width={254} height={254} />
					) : (
						<a className="card-img-hover" href="product.html">
							<img className="card-img-top card-img-back" src={thumbnail_url} alt="..." />
							<img className="card-img-top card-img-front" src={thumbnail_url} alt="..." />
						</a>
					)}
					{/* Actions */}
					{loading ? (
						<></>
					) : (
						<div className="card-actions">
							<span className="card-action">
								<button
									className="btn btn-xs btn-circle btn-white-primary"
									data-toggle="modal"
									data-target="#modalProduct"
								>
									<i className="fe fe-eye" />
								</button>
							</span>
							<span className="card-action">
								<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i className="fe fe-shopping-cart" />
								</button>
							</span>
							<span className="card-action">
								<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i className="fe fe-heart" />
								</button>
							</span>
						</div>
					)}
				</div>
				{/* Body */}
				<div className="card-body px-0">
					{/* Category */}
					<div className="font-size-xs">
						<a className="text-muted" href="shop.html"></a>
					</div>
					{/* Title */}
					{/* <Typography variant="h1"> */}
					{loading ? (
						<Skeleton variant="h3" />
					) : (
						<div className="font-weight-bold">
							<a className="text-body" href="product.html">
								{name}
							</a>
						</div>
					)}
					{/* </Typography> */}
					{/* Price */}
					{loading ? (
						<Skeleton />
					) : (
						<div className="font-weight-bold text-muted">{currency(price)}</div>
					)}
				</div>
			</div>
		</div>
	);
}
