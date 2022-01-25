
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartreducer } from './Reducer/cartreducer';
import { orderDetailsReducer, orderMineListReducer, orderPayReducer, orderreducer } from './Reducer/orderreducer';
import { productCreateReducer, productDeleteReducer, productdetail, productreducer, productUpdateReducer } from './Reducer/productreducer';
import { userDetailsReducer, userreducer, userRegisterReducer, userUpdateProfileReducer } from './Reducer/userreducer';

const initialState = {
 
  usersignin: {
    userinfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
  cartitems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
    shipingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      paymentmethod:'paypal'

},};
const reducer = combineReducers({
  productList: productreducer,
  productdetail,
  cart:cartreducer,
  usersignin:userreducer,
  userRegister: userRegisterReducer,
  orderCreate:orderreducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,






});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;