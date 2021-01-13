import React from 'react';  
import classes from '../../convertion/App.css';
import { GrFormClose } from 'react-icons/gr';

const product = props =>(
    <div className={classes.cart__product}>
        <img src={props.img} alt="Product" className={classes.cart__img}/>
        <div className={classes.cart__productInfo}>
            <h3 className={classes.cart__subHeader}>I'm a Product</h3>
            <p>${props.price}.00</p>
            <p>size: {props.size}</p>
        </div>
        <div className={classes.cart__productPrice}>${props.price}.00</div>
            <GrFormClose className={classes.cart__delete} onClick={props.deleteClick}/>
        </div>
)
export default product;