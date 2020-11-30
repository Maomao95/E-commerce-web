import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"


export const productListRequest = () => {
    return {
        type: PRODUCT_LIST_REQUEST
    }
}

export const productListSuccess = (data) => {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    }
}

export const productListFail = (error) => {
    return {
        type: PRODUCT_LIST_FAIL,
        payload: error.message
    }
}

export const productDetailsRequest = (productId) => {
    return {
        type: PRODUCT_DETAILS_REQUEST
    }
}

export const productDetailsSuccess = (data) => {
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
    }
}

export const productDetailsFail = (error) => {
    return {
        type: PRODUCT_DETAILS_FAIL,
        payload: error.reponse && error.message.data.message ? error.reponse.data.message : error.message,
    }
}