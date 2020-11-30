import Axios from "axios";
import {
    productListFail, productListRequest, productListSuccess,
    productDetailsRequest, productDetailsSuccess, productDetailsFail
} from "./productActionType";

export const listProducts = () => async (dispatch) => {
    dispatch(productListRequest)
    try {
        const { data } = await Axios.get('/api/products');
        dispatch(productListSuccess(data));
    } catch (error) {
        dispatch(productListFail(error));
    }
}

export const detailProduct = (productId) => async (dispatch) => {
    dispatch(productDetailsRequest(productId))
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch(productDetailsSuccess(data));
    } catch (error) {
        dispatch(productDetailsFail(error));
    }
}