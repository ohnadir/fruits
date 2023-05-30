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
// const baseUrl = "https://fruits-ivory.vercel.app/api/v1"
const baseUrl = "http://localhost:5002/api/v1"

export const newOrder = (order) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        const { data } = await axios.post(`${baseUrl}/products`, order, config);
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
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        const { data } = await axios.get(`${baseUrl}/products/${email}`, config);
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