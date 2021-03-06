import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { convertStrToQuery } from '../../../utils';
import { convertToQueryToStr } from '../../../utils';

export default function Pagination({}) {
	let match = useRouteMatch();
	let { paginate } = useSelector((store) => store.product);
	let query = convertToQueryToStr();

	// console.log('paginate', paginate);
	// console.log(currentPage, totalPage);
	let start = paginate.currentPage - 2;
	if (start <= 0) {
		start = 1;
	}
	let end = paginate.currentPage + 2;
	if (end > paginate.totalPage) {
		end = paginate.totalPage;
	}
	const renderPage = () => {
		let array = [];

		for (let i = start; i <= end; i++) {
			let query = convertToQueryToStr();
			query.page = i;
			array.push(
				<li className={`page-item ${paginate?.currentPage === i ? 'active' : ''}`}>
					<Link
						className="page-link page-link-arrow"
						to={`${match.url}?${convertStrToQuery(query)}`}
					>
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
							to={`${match?.url}?${convertStrToQuery({
								...query,
								page: paginate.currentPage - 1,
							})}`}
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
							to={`${match?.url}?${convertStrToQuery({
								...query,
								page: paginate.currentPage + 1,
							})}`}
						>
							<i className="fa fa-caret-right" />
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
