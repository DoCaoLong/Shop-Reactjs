import MainLayout from './layouts/MainLayout/index';
import Home from './page/home';
import About from './page/about';
import Account from './page/account';
import Error404 from './page/404';
import Auth from './page/auth';
import BlogPost from './page/blogPost';
import Blog from './page/blog';
import Checkout from './page/checkout';
import CommingSoon from './page/commingSoon';
import Contact from './page/contactUs';
import Faq from './page/faq';
import OrderCompleted from './page/orderCompleted';
import Product from './page/product';
import ShippingAndReturn from './page/shippingAndReturn';
import ShoppingCart from './page/shoppingCart';
import Shop from './page/shop';
import StoreLocation from './page/storeLocation';
import AccountWishlist from './page/account/component/AccountWishlist';
import AccountPesonalInfo from './page/account/component/AccountPersonalInfo';
import AccountPayment from './page/account/component/AccountPayment';
import AccountOrderDetail from './page/account/component/AccountOrderDetail';
import AccountAddress from './page/account/component/AccountAddress';
import AccountAddressEdit from './page/account/component/AccountAddressEdit';
import AccountPaymentEdit from './page/account/component/AccountPaymentEdit';
import AccountOrder from './page/account/component/AccountOrder';
let routes = [
	{
		path: '/coming-soon',
		component: CommingSoon,
	},

	{
		component: MainLayout,
		routes: [
			{
				path: '/account',
				component: Account,
				auth: true,
				routes: [
					{
						path: '/account/wishlist',
						component: AccountWishlist,
					},
					{
						path: '/account/personnal-info',
						component: AccountPesonalInfo,
					},

					{
						path: '/account/order-detail',
						component: AccountOrderDetail,
					},
					{
						path: '/account/address',
						component: AccountAddress,
					},
					{
						path: '/account/address-edit',
						component: AccountAddressEdit,
					},
					{
						path: '/account/payment',
						component: AccountPayment,
					},
					{
						path: '/account/payment-edit',
						component: AccountPaymentEdit,
					},
					{
						path: '/account',
						component: AccountOrder,
					},
				],
			},
			{
				path: '/about',
				component: About,
			},
			{
				path: '/auth',
				component: Auth,
			},
			{
				path: '/blog-post',
				component: BlogPost,
			},
			{
				path: '/blog',
				component: Blog,
			},
			{
				path: '/checkout',
				component: Checkout,
			},
			{
				path: '/contact',
				component: Contact,
			},
			{
				path: '/faq',
				component: Faq,
			},
			{
				path: '/order-completed',
				component: OrderCompleted,
			},
			{
				path: '/product',
				component: Product,
			},
			{
				path: '/shipping-and-return',
				component: ShippingAndReturn,
			},
			{
				path: '/shop',
				component: Shop,
			},
			{
				path: '/shopping-cart',
				component: ShoppingCart,
			},
			{
				path: '/store-location',
				component: StoreLocation,
			},
			{
				path: '/',
				component: Home,
				exact: true,
			},
			{
				path: '/',
				component: Error404,
			},
		],
	},
];
export default routes;
