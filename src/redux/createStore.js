import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {
  productsReducer,
  productDetailsReducer,
  productDeleteReducer,
  productSaveReducer,
} from "./Products/productsReducer";
import {
  userSigninReducer,
  userSignupReducer,
  userUpdateReducer,
} from "./User/userReducer";
import { cartReducer } from "./Cart/cartReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems },
  userSignin: { userInfo },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  userUpdate: userUpdateReducer,
  productList: productsReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productSave: productSaveReducer,
  cart: cartReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);

export default store;
