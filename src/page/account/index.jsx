import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AccountAddress from "./component/AccountAddress";
import AccountAddressEdit from "./component/AccountAddressEdit";
import AccountNav from "./component/AccountNav";
import AccountOrder from "./component/AccountOrder";
import AccountOrderDetail from "./component/AccountOrderDetail";
import AccountPayment from "./component/AccountPayment";
import AccountPesonalInfo from "./component/AccountPersonalInfo";
import AccountWishlist from "./component/AccountWishlist";

export default function Account(){
  let {path} = useRouteMatch();
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
                <Route path={`${path}/wishlist`} component={AccountWishlist}/>
                <Route path={`${path}/personnal-info`} component={AccountPesonalInfo}/>
                <Route path={`${path}/payment`} component={AccountPayment}/>
                <Route path={`${path}/order-detail`} component={AccountOrderDetail}/> 
                <Route path={`${path}/address`} component={AccountAddress}/>
                <Route path={`${path}/address-edit`} component={AccountAddressEdit}/> 
                <Route component={AccountOrder}/>
              </Switch>
            </div>
          </div>
        </section>
      </>
    );
}