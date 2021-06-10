import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import store from './redux';
import TranslateProvider from './core/Translate';
import vi from './translate/vi.json';
import japan from './translate/japan.json';
import { RouteWithSubRoutes } from './core/RouterConfig';
import routes from './Router';
let translate = {
	en: {},
	vn: vi,
	japan: japan,
};

function App() {
	return (
		<TranslateProvider translate={translate}>
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</BrowserRouter>
			</Provider>
		</TranslateProvider>
	);
}

export default App;
