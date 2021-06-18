import { Link, useRouteMatch } from 'react-router-dom';
import { convertStrToQuery } from '../../../utils';
import { convertToQueryToStr } from '../../../utils';

export default function Category({ category }) {
	// console.log('category ttiler:>> ', category.title);
	let url = convertToQueryToStr();
	let patch = useRouteMatch();
	// console.log('patch :>> ', patch);
	// let StrtoQue = convertStrToQuery(url);
	delete url.page;
	return (
		<li className="nav-item">
			{/* Toggle */}
			<a
				className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
				data-toggle="collapse"
				to="#categoryCollapse"
			>
				Category
			</a>
			{/* Collapse */}
			<div className="collapse show" id="categoryCollapse">
				<div className="form-group">
					<ul className="list-styled mb-0" id="productsNav">
						{category?.map((item) => (
							<li key={item.id} className="list-styled-item">
								<Link
									className="list-styled-link"
									to={`${patch.url}?${convertStrToQuery({ ...url, categories: item.id })}`}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
}
