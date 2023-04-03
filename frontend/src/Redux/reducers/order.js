import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,
    EMAIL_ORDER_REQUEST,
    EMAIL_ORDER_SUCCESS,
    EMAIL_ORDER_FAIL,
    CLEAR_ERRORS
} from "../constants/order"

export const orderReducer = (state = {  }, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EMAIL_ORDER_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case EMAIL_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
                message: null
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                message: null,
                error: null
            }
        default:
            return state;
    }
    
} 
export const emailOrderReducer = (state = { orders: []}, action) => {
    switch (action.type) {
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EMAIL_ORDER_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case EMAIL_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
    
} 