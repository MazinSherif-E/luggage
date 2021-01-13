import React, { useEffect, useState } from 'react';
import classes from '../../convertion/App.css';
import { BiCart } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io'
import { connect } from 'react-redux';
import * as indexAction from '../../store/actions/index';
import { withRouter } from 'react-router-dom';

const sideDrawer = props =>{
    useEffect(()=>{
        props.onFetchOrderSucces(); 
    }, [])

    const showSideDrawer=()=>{
        props.onSetSideDrawer(!props.sideDrawer)
    }
    
    const onCartClick=()=>{
        props.history.push('/cart')
    }

    return(
    <div className={classes.sideDrawer} >
        <div className={props.onSetSideDrawer ? [classes.sideDrawer__content, classes.sideDrawer__visible].join(' '): [classes.sideDrawer__content, classes.sideDrawer__hidden].join(' ')}>
            <div className={classes.sideDrawer__header}>
                <IoIosArrowForward className={classes.sideDrawer__arrowIcon} onClick={showSideDrawer}/>
                <h2>Cart</h2>
            </div>
            <div className={classes.sideDrawer__middle}>
                <p className={classes.sideDrawer__number}>{props.numberOfOrders}</p>
                <BiCart className={classes.sideDrawer__cartIcon}/>
            </div>
            <div className={classes.sideDrawer__total}>
                <p>Subtotal</p>
                <p>${props.total}</p>
            </div>
            <div className={classes.sideDrawer__line}></div>
            <button className={classes.sideDrawer__button} onClick={onCartClick}>View Cart</button>
        </div>
    </div>
)}


const mapStateToProps = state =>{
    return{
        sideDrawer: state.cart.sideDrawer,
        numberOfOrders: state.cart.numberOfOrders,
        total: state.cart.totalPrice
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSetSideDrawer: (setSideDrawer)=> dispatch(indexAction.setSideDrawer(setSideDrawer)),
        onFetchOrderSucces:()=>dispatch(indexAction.fetchOrderSucces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(sideDrawer));