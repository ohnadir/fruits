import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, productDetailsReducer, searchProductReducer } from './reducers/product'
import { authReducer,  } from './reducers/user'
import { orderReducer, emailOrderReducer, OrderDetailsReducer  } from './reducers/order'
import { paymentReducer } from "./reducers/payment"
const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    searchProduct: searchProductReducer,
    auth: authReducer,
    order : orderReducer,
    orderDetails : OrderDetailsReducer,
    payment : paymentReducer,
    emailOrder : emailOrderReducer,

})


const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;