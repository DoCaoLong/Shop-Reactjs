import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/index';
import store from './redux'
import Home from './page/home';
import About from './page/about';
import Account from './page/account';
import Error404 from './page/404';
import Auth from './page/auth';
import BlogPost from './page/blogPost';
import Blog from './page/blog/blog';
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
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/auth" component={Auth} />
            <Route path="/blog-post" component={BlogPost} />
            <Route path="/blog" component={Blog} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/coming-soon" component={CommingSoon} />
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={Faq} />
            <Route path="/order-completed" component={OrderCompleted} />
            <Route path="/product" component={Product} />
            <Route path="/shipping-and-return" component={ShippingAndReturn} />
            <Route path="/shop" component={Shop} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/store-location" component={StoreLocation} />
            <Route component={Error404} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
