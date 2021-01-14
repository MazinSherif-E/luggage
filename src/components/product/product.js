import React from 'react';
import classes from '../../convertion/App.css';
import { connect } from 'react-redux';
import * as indexAction from '../../store/actions/index';
import { withRouter } from 'react-router-dom';

const bestseller = props =>{

    const productClickHandler=(img, price)=>{
        props.onProductSet(img, price)
        props.history.push('/shown-product')
    }

    return (
            <div className={classes.bestseller__group} onClick={()=> productClickHandler(props.img, props.price)}>
                {props.caption ? <p className={classes.bestseller__caption}>{props.caption}</p> : null}
                <img src={props.img} alt="bestseller" className={classes.bestseller__img}/>
                <p className={classes.bestseller__view}>Quik View</p>
                <div className={classes.bestseller__info}>
                    <p>I'm a Product</p>
                    <p>${props.price}.00</p>
                </div>
            </div>
                
            
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onProductSet: (img, price)=> dispatch(indexAction.setProductSuccess(img, price)),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(bestseller));