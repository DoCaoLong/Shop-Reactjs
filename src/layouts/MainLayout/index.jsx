import { Switch } from 'react-router';
import { HorizontalModal } from '../../component/modal/HorizontalModal';
import { PasswordResetModal } from '../../component/modal/PasswordResetModal';
import { ProductModal } from '../../component/modal/ProductModal';
import { SearchModal } from '../../component/modal/SearchModal';
import { ShoppingCartModal } from '../../component/modal/ShoppingCartModal';
import { SidebarModal } from '../../component/modal/SidebarModal';
import { SizeChartModal } from '../../component/modal/SizeChartModal';
import { VerticalModal } from '../../component/modal/VerticalModal';
import { WaitListModal } from '../../component/modal/WaitListModal';
import { RouteWithSubRoutes } from '../../core/RouterConfig';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children, routes }) {
	return (
		<>
			<Header />
			<ShoppingCartModal />
			<HorizontalModal />
			<VerticalModal />
			<PasswordResetModal />
			<ProductModal />
			<SearchModal />
			<ShoppingCartModal />
			<SidebarModal />
			<SizeChartModal />
			<WaitListModal />
			{/* {children} */}
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
			<Footer />
		</>
	);
}
