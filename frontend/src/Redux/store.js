import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer, productDetailsReducer } from './reducers/product'
import { authReducer,  } from './reducers/user'
import { orderReducer, emailOrderReducer  } from './reducers/order'
import { paymentReducer } from "./reducers/payment"
const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    order : orderReducer,
    payment : paymentReducer,
    emailOrder : emailOrderReducer,

})


const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;