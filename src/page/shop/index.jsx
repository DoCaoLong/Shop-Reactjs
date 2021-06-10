import Pagination from './component/Pagination';
import Slider from './component/Slider';
import HeaderShop from './component/HeaderShop';
import Tags from './component/Tags';
import ProductsShop from './component/ProductsShop';
import Filters from './component/Filters';
import Promo from './component/Promo';

export default function Shop() {
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
							<Filters />
						</div>
						<div className="col-12 col-md-8 col-lg-9">
							{/* Slider */}
							{/* <Slider /> */}
							{/* Header */}
							{/* <HeaderShop /> */}
							{/* Tags */}
							{/* <Tags /> */}
							{/* Products */}
							<ProductsShop />
							{/* Pagination */}
							<Pagination />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
