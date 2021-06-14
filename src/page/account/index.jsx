import { Link, Switch, useRouteMatch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../core/RouterConfig';
import AccountNav from './component/AccountNav';

export default function Account({ routes }) {
	return (
		<>
			{/* BREADCRUMB */}
			<nav className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Breadcrumb */}
							<ol className="breadcrumb mb-0 font-size-xs text-gray-400">
								<li className="breadcrumb-item">
									<Link className="text-gray-400" to="/">
										Home
									</Link>
								</li>
								<li className="breadcrumb-item active">My Account</li>
							</ol>
						</div>
					</div>
				</div>
			</nav>
			{/* CONTENT */}
			<section className="pt-7 pb-12">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							{/* Heading */}
							<h3 className="mb-10">My Account</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-3">
							<AccountNav />
						</div>

						<Switch>
							{routes.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route} />
							))}
						</Switch>
					</div>
				</div>
			</section>
		</>
	);
}
