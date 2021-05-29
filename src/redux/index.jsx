import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import AuthReducer from './reducer/AuthReducer';

let reducer = combineReducers({
    auth: AuthReducer,
})

const middleware = stores => next => action =>{
    // thunk
    if(typeof action === 'function'){
        return action(stores.dispatch)
    }else{
        next(action)
    }
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
  // other store enhancers if any
);

let store = createStore(reducer, enhancer);
// console.log(store);
export default store