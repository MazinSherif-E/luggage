import React, { useEffect } from 'react';
import classes from '../../convertion/App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { connect } from 'react-redux';
import * as indexAction from '../../store/actions/index';
import Product from './product';
import { Link } from 'react-router-dom';

const cart = props =>{
    useEffect(()=>{
        props.onFetchOrderSucces(); 
    }, [])
    /* */
    const onDeleting=(id)=>{
        props.onProductDeleted(id)
    }
    let orders = (
        <div className={classes.cart__leftSide}>
            {props.products.map(product=>{
                return(
                    <Product img={product.img} price={product.price} key={product.id} size={product.size} deleteClick={()=>onDeleting(product.id)}/>                
                    )
                })}            
        </div>
    )
    if(props.products.length == 0){
        orders = (
            <div className={classes.cart__empty}>
                <div className={classes.cart__emptyContent}>
                    <h3 className={classes.cart__empty_header}>Cart is empty</h3>
                    <Link to="/shop" className={classes.cart__emptyLink}>Continue Shopping</Link>
                </div>
            </div>
        )
    }
    return(
    <div className={classes.cart}>
        <Header/>
        <div className={classes.cart__space}></div>
        <div className={classes.cart__content}>
            <h3 className={classes.cart__header1}>My Cart</h3>
            {orders}
            <h3 className={props.products.length == 0? [classes.cart__header2, classes.hidden].join(' '): classes.cart__header2  }>Order Summary</h3>
            
            <div className={props.products.length == 0? [classes.cart__rightSide, classes.hidden].join(' '): classes.cart__rightSide}>
                <div className={classes.cart__firstRow}>
                    <div className={classes.cart__flex}>
                        <p>Subtotal</p>
                        <p>${props.totalPrice}.00</p>
                    </div>
                    <div className={classes.cart__flex}>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <p className={classes.cart__location}>Cairo,Egypt</p>
                </div>
                <div className={classes.cart__secondRow}>
                    <div className={classes.cart__total}>
                        <p>Total</p>
                        <p>${props.totalPrice}.00</p>
                    </div>
                    <button className={classes.cart__button}>Checkout</button>
                </div>
            </div>
        </div>
        <div className={classes.cart__space2}></div>
        <Footer/>
    </div>
)}

const mapStateToProps = state =>{
    return{
        products: state.cart.orders,
        totalPrice: state.cart.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrderSucces:()=>dispatch(indexAction.fetchOrderSucces()),
        onProductDeleted:(id)=>dispatch(indexAction.deletProductSuccess(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cart);