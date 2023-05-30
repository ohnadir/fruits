import axios from "axios";
import {
    PAYMENT_PROCESS_REQUEST,
    PAYMENT_PROCESS_SUCCESS,
    PAYMENT_PROCESS_FAIL,
    CLEAR_ERRORS
} from "../constants/payment.js"

const baseUrl = "http://localhost:5002/api/v1"

export const  makePayment = (paymentData)=> async(dispatch)=>{
    try {
        dispatch({ type: PAYMENT_PROCESS_REQUEST })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post(`${baseUrl}/payments/process`, paymentData, config)
        console.log(data);
        dispatch({
            type: PAYMENT_PROCESS_SUCCESS,
            payload: data.client_secret
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_PROCESS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}