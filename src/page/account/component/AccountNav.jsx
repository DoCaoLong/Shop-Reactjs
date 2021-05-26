import {Link, NavLink, useRouteMatch } from "react-router-dom";

export default function AccountNav() {
    let {path} = useRouteMatch(); 
  return (
    <nav className="mb-10 mb-md-0">
      <div className="list-group list-group-sm list-group-strong list-group-flush-x">
        <NavLink
          className="list-group-item list-group-item-action dropright-toggle "
          exact
          to={`${path}`}
        >
          Orders
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action dropright-toggle "
          to={`${path}/wishlist`}
        >
          Widhlist
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action dropright-toggle "
          to={`${path}/personnal-info`}
        >
          Personal Info
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action dropright-toggle "
          to={`${path}/address`}
        >
          Addresses
        </NavLink>
        <NavLink
          className="list-group-item list-group-item-action dropright-toggle "
          to={`${path}/payment`}
        >
          Payment Methods
        </NavLink>
        <Link
          className="list-group-item list-group-item-action dropright-toggle"
          to="#"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
