import Pagination from './component/Pagination';
import Slider from './component/Slider';
import HeaderShop from './component/HeaderShop';
import Tags from './component/Tags';
import ProductsShop from './component/ProductsShop';
import Filters from './component/Filters';
import Promo from './component/Promo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductAction } from '../../redux/actions/ProductAction';
import { convertToQueryToStr } from '../../utils';
import { convertStrToQuery } from '../../utils';
import { LOADING } from '../../redux/Type';
import { CategoryAction } from '../../redux/actions/ProductAction';

export default function Shop() {
	let dispatch = useDispatch();
	let { product, paginate, category } = useSelector((store) => store.product);
	// console.log('category view:>> ', category);
	let url = convertToQueryToStr();
	let renderProduct = convertStrToQuery(url);

	// renderproduct change
	useEffect(() => {
		dispatch(ProductAction(renderProduct));
		dispatch(CategoryAction());
		dispatch({
			type: LOADING,
		});
	}, [renderProduct]);

	return (
		<>
			{/* PROMO */}
			<Promo />
			{/* CONTENT */}
			<section className="py-11">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-3">
							{/* Filters */}
							<Filters category={category} />
						</div>
						<div className="col-12 col-md-8 col-lg-9">
							{/* Slider */}
							{/* <Slider /> */}
							{/* Header */}
							{/* <HeaderShop /> */}
							{/* Tags */}
							{/* <Tags /> */}
							{/* Products */}
							<ProductsShop product={product} />
							{/* Pagination */}
							<Pagination paginate={paginate} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
