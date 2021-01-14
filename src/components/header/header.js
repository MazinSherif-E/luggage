import React, { useEffect, useState } from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';
import { connect } from 'react-redux';
import * as indexAction from '../../store/actions/index';

const header = props =>{
    const [nav, setNav] = useState(false);
    useEffect(()=>{
        props.onFetchOrderSucces(); 
    }, [])

    const setNavHandler = () =>{
        setNav(!nav)
    }

    let navToggle = null;
    if(nav){
        navToggle =(
            <div className={classes.navToggle}>
                <div className={classes.navToggle__login}>
                    <Link className={classes.navToggle__loginItem}><BsPersonSquare/></Link>
                    <Link className={classes.navToggle__loginItem}>LogIn</Link>
                </div>
                <div className={classes.navToggle__links}>
                    <Link className={classes.navToggle__linksItem} to="/">Home</Link>
                    <Link className={classes.navToggle__linksItem} to="/shop">Shop</Link>
                    <Link className={classes.navToggle__linksItem} to="/contact">Contact</Link>
                    <Link className={classes.navToggle__linksItem} to="/about">About</Link>
                    <Link className={classes.navToggle__linksItem} to="/customer-care">CustomerCare</Link>
                </div>
            </div>
        )
    }

    return(
        <div className={classes.header}>
            {navToggle}
            <div className={classes.header__logo}>
                <Link to="/"><img src={logo} alt="Logo" className={classes.header__img}/> </Link>
                <Link to="/" className={classes.header__title}><div >CAPSULE</div></Link>
                      
            </div>

            <div className={classes.header__links}>
                <Link className={classes.header__linksItem} to="/">Home</Link>
                <Link className={classes.header__linksItem} to="/shop">Shop</Link>
                <Link className={classes.header__linksItem} to="/contact">Contact</Link>
                <Link className={classes.header__linksItem} to="/about">About</Link>
                <Link className={classes.header__linksItem} to="/customer-care">CustomerCare</Link>
            </div>

            <div className={classes.header__socialLogin}>
                <div className={classes.header__social}>
                    <Link className={classes.header__socialItem}><FaFacebookF/></Link>
                    <Link className={classes.header__socialItem}><AiOutlineInstagram/></Link>
                    <Link className={classes.header__socialItem}><FaPinterestP/></Link>
                    
                </div>

                <div className={classes.header__login}>
                    <Link className={classes.header__loginItem}><BsPersonSquare/></Link>
                    <Link className={classes.header__loginItem}>LogIn</Link>
                </div>
                
                <div className={classes.header__cart}>
                    <Link className={classes.header__cartNumber}>{props.numberOfOrders}</Link>
                    <Link className={classes.header__cartCar} to="/cart"><BiCart /></Link>
                </div>
            </div>
            <div className={classes.header__nav} >
                <input type="checkbox" id="navi-toggle" className={classes.header__checkbox}/>
                    <label className={classes.header__icon} for="navi-toggle" onClick={setNavHandler}></label>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numberOfOrders: state.cart.numberOfOrders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrderSucces:()=>dispatch(indexAction.fetchOrderSucces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header);