import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Pagination({}) {
	let { paginate } = useSelector((store) => store.product);
	// console.log('paginate', paginate);
	// console.log(currentPage, totalPage);
	let start = paginate.currentPage - 2;
	if (start <= 0) {
		start = 1;
	}
	let end = start + 4;
	if (end > paginate.totalPage) {
		end = paginate.totalPage;
	}
	const renderPage = () => {
		let array = [];
		for (let i = start; i <= end; i++) {
			array.push(
				<li className={`page-item ${paginate?.currentPage === i && 'active'}`}>
					<Link className="page-link page-link-arrow" to={`/shop?page=${i}`}>
						{i}
					</Link>
				</li>
			);
		}
		return array;
		// console.log(array);
	};

	// console.log(renderPage);
	return (
		<nav className="d-flex justify-content-center justify-content-md-end">
			<ul className="pagination pagination-sm text-gray-400">
				{paginate?.currentPage === 1 ? (
					<li className="page-item"></li>
				) : (
					<li className="page-item">
						<Link
							className="page-link page-link-arrow"
							to={`/shop?page=${paginate.currentPage - 1}`}
						>
							<i className="fa fa-caret-left" />
						</Link>
					</li>
				)}
				{renderPage()}
				{paginate?.currentPage === paginate?.totalPage ? (
					<li className="page-item"></li>
				) : (
					<li className="page-item">
						<Link
							className="page-link page-link-arrow"
							to={`/shop?page=${paginate.currentPage + 1}`}
						>
							<i className="fa fa-caret-right" />
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
