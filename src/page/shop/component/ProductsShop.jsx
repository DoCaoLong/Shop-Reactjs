import ProductItem from './ProductItem';

export default function ProductsShop({ product }) {
	// console.log('product', product);
	return (
		<div className="row">
			{product?.map((e) => (
				<ProductItem {...e} key={e._id} />
			))}
		</div>
	);
}
