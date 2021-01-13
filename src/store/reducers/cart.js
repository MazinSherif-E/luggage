import * as actionTypes from '../actions/actionTypes';

const initialState={
    orders:[],
    totalPrice: 0,
    numberOfOrders: 0,
    sideDrawer: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.SET_SIDEDRAWER:
            return{
                ...state,
                sideDrawer: action.sideDrawer
            }
        case actionTypes.ADD_TO_CART:
            return{
                ...state,
                orders: action.orderData,
            }
        case actionTypes.FETCH_ORDERS:
            return{
                ...state,
                orders: action.orders,
                totalPrice: action.totalPrice,
                numberOfOrders: action.numberOfOrders
            }
        case actionTypes.DELETE_PRODUCT:
            return{
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;