import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  productsReducer,
  productDetailsReducer,
} from "./Products/productsReducer";
import { userSigninReducer } from "./User/userReducer";
import { cartReducer } from "./Cart/cartReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems },
  userSignin: { userInfo },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
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