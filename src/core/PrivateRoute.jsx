import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";
import { useSelector } from 'react-redux';

export function PrivateRoute(prop) {
	let { login } = useSelector((store) => store.auth);

	if (!login) {
		return <Redirect to="/auth" />;
	}

	return <Route {...prop} />;
}
