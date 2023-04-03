import axios from "axios";
import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,
    EMAIL_ORDER_REQUEST,
    EMAIL_ORDER_SUCCESS,
    EMAIL_ORDER_FAIL,
    CLEAR_ERRORS
} from "../constants/order"

export const newOrder = (order) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://localhost:5002/api/v1/products', order, config);
        dispatch({
            type: ORDER_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const emailOrder = (email) => async (dispatch) => {
    try {
        dispatch({
            type: EMAIL_ORDER_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`http://localhost:5002/api/v1/products/${email}`, config);
        dispatch({
            type: EMAIL_ORDER_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: EMAIL_ORDER_FAIL,
            payload: error.response.data.message
        })
    }
}
//  Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}