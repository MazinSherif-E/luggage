import * as actionTypes from './actionTypes';

export const setProduct = (img, price) =>{
    return{
        type: actionTypes.SET_PRODUCT,
        img: img,
        price: price
    }
}

export const setProductSuccess = (img, price)=>{
    return dispatch=>{
        dispatch(setProduct(img, price))
    }
}