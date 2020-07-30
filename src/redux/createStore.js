import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { productsReducer } from "./Products/ProductsReducer";
import thunk from "redux-thunk";
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import createSagaMiddle from 'redux-saga';

// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddle();
// export const middlewares = [thunk, sagaMiddleware, logger];

const initialState = {};

const reducer = combineReducers({
  productList: productsReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initialState,
  composeEnchancer(applyMiddleware(thunk))
);
// sagaMiddleware.run(rootSaga);

export default store;
