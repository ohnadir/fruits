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
        case ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_FAIL:
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
export const emailOrderReducer = (state = { orders: []}, action) => {
    switch (action.type) {
        case EMAIL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EMAIL_ORDER_SUCCESS:
            return {
                loading: false,
                orders : action.payload
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