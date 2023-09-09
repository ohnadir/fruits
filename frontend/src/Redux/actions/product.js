import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    SEARCH_PRODUCT_REQUEST,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/product';

const baseUrl = "https://fruits-ivory.vercel.app/api/v1";
// const baseUrl = "http://localhost:5002/api/v1";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/products`, config);
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type:PRODUCT_DETAILS_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/products/${id}`, config);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getSearchProduct = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type:SEARCH_PRODUCT_REQUEST
        })
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/products/search?keyword=${keyword}`, config);
        dispatch({
            type: SEARCH_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: SEARCH_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}
export const getFilterProduct = (filter) => async (dispatch) => {
    try {
        
        dispatch({
            type:SEARCH_PRODUCT_REQUEST
        })
        
        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(`${baseUrl}/products/filter?filter=${filter}`, config);
        dispatch({
            type: SEARCH_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch (error) {
        dispatch({
            type: SEARCH_PRODUCT_FAIL,
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
