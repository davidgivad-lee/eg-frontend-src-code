import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  productsReducer,
  productDetailsReducer,
} from "./Products/productsReducer";
import { cartReducer } from "./Cart/cartReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
//const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: { cartItems },
};

const reducer = combineReducers({
  productList: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
