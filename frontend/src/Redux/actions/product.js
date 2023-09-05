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
export const getSearchProduct = (keyword, filterItem, category, minPrice, maxPrice, maxRating, minRating) => async (dispatch) => {
    console.log(keyword);
    try {
        dispatch({
            type:SEARCH_PRODUCT_REQUEST
        })
        let link = `${baseUrl}/products/search`;

        // search product api
        if(keyword){
            link = `${baseUrl}/products/search?keyword=${keyword}`            
        }

        // category product get api
        if(category){
            link = `${baseUrl}/products/search?category=${category}`            
        }

        
        // Z to A product list get api
        if(filterItem){
            link = `${baseUrl}/products/search?filterItem=${filterItem}`            
        }

        // price filter product get api
        if(minPrice && maxPrice){
            link = `${baseUrl}/products/search?minPrice=${minPrice}&maxPrice=${maxPrice}`            
        }

        // rating filter product get api
        if(minRating && maxRating){
            link = `${baseUrl}/products/search?minRating=${minRating}&maxRating=${maxRating}`            
        }


        const config = {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.get(link, config);
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
