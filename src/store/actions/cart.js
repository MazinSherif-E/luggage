import * as actionTypes from './actionTypes';
import axios from 'axios';


export const sidedrawer = (sideDrawer) =>{
    return{
        type: actionTypes.SET_SIDEDRAWER,
        sideDrawer: sideDrawer
    }
}

export const setSideDrawer=(setSideDrawer)=>{
    return dispatch=>{
        dispatch(sidedrawer(setSideDrawer))
    }
}

export const addToCart = (orderData) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        orderData: orderData,
    }
}

export const addToCartFail = (error)=>{
    return{
        type: actionTypes.ADD_TO_CART_FAIL,
        error: error
    }
}

export const addToCartSuccess = (orderData)=>{
    return dispatch=>{
        axios.post('https://luggage-store-8eed3-default-rtdb.firebaseio.com/cart.json' , orderData)
              .then(res => {
                    dispatch(addToCart(orderData))
                    console.log(res)
              })
              .catch(error=> {
                    dispatch(addToCartFail(error))
              });
    }
}

export const fetchOrders = (orders, totalPrice, numberOfOrders) =>{
    return{
        type: actionTypes.FETCH_ORDERS,
        orders: orders,
        totalPrice: totalPrice,
        numberOfOrders: numberOfOrders
    }
}

export const fetchOrdersFail = (error) =>{
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrderSucces = ()=>{
    return dispatch=>{
        axios.get('https://luggage-store-8eed3-default-rtdb.firebaseio.com/cart.json' )
            .then(res=>{
                const fetchOorders = [];
                let totalPrice = 0;
                let numberOfOrders = 0;
                for(let key in res.data){
                    totalPrice += res.data[key].price;
                    numberOfOrders += res.data[key].number;
                    fetchOorders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrders(fetchOorders, totalPrice, numberOfOrders))
            })
            .catch(err=>{
                dispatch(fetchOrdersFail(err))
            })
    }
}

export const deleteProduct=()=>{
    return{
        type: actionTypes.DELETE_PRODUCT,
    }
}

export const deletProductSuccess=(id)=>{
    return dispatch=>{
        axios.delete('https://luggage-store-8eed3-default-rtdb.firebaseio.com/cart/' + id + '.json')
            .then(res=>{
                dispatch(deleteProduct())  
                window.location.reload(); 
            })        
    
    }
}