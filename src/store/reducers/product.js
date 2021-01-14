import * as actionTypes from '../actions/actionTypes';

const initialState={
    img: null,
    price: null
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.SET_PRODUCT:
            return{
                ...state,
                img: action.img,
                price: action.price
            }
        default:
            return state;
    }
}

export default reducer; 