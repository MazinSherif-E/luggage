import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import img from '../../images/soft5.jpg';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import ProductInfo from './productInfo';
import { connect } from 'react-redux';
import * as indexAction from '../../store/actions/index';
import SideDrawer from '../../components/sideDrawer/sideDrawer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const shownProduct = props =>{
    const [text, setText] = useState({
        text1:{header: "Product Info",
            text: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."},
        text2:{header: "Return & Refund Policy",
            text:"I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."},
        text3:{header: "Shipping Info",
            text:"I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."}
    });

    const [option, setOption] = useState({
        size:{ options:[{value: null, displayValue:"Select"},{value: "small", displayValue:"Small"}, {value: "medium", displayValue:"Medium"}, {value: "large", displayValue:"Large"}],
                        value:"small"}
    });

    const [number, setNumber] = useState(1)

    const textArray = [];
        for (let key in text){
            textArray.push({
                id: key,
                item: text[key]
            })
        }

    const showSideDrawer=()=>{
        props.onSetSideDrawer(!props.sideDrawer);
        props.history.push("/shop");

        const orderData={
            img: props.img,
            price: number * props.price,
            size: option.value,
            number: number  
        }
        
        props.onAddToCart(orderData);
        console.log(orderData)
        
    }

    const changeSelectHandler=(event)=>{
        const options={
            ...option
        };
        options.value = event.target.value;
        setOption(options)
    }

    const add =()=>{
        setNumber(number+1)
    }

    const reduce =()=>{
        setNumber(number-1)
    }

    let product = <Redirect to="/"/>
    if(props.img){
        product = (
            <div className={classes.shown__content}>
                    <p className={classes.shown__productName}>Home / I'm a Product</p>
                    <div className={classes.shown__leftSide}>
                        <img src={props.img} alt="product" className={classes.shown__img}/>
                        <p className={classes.shown__caption}>I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
                    </div>

                    <div className={classes.shown__rightSide}>
                        <div className={classes.shown__rightName}>
                            <p className={classes.shown__subTitles}>I'm a Product</p>
                            <p className={classes.shown__paragraph}>SKU: 0009</p>
                        </div>

                        <p className={classes.shown__subTitles}>${props.price}.00</p>
                        
                        
                        <div className={classes.shown__dropDown}>
                            <p className={classes.shown__subTitles}>Size</p>
                            <select className={classes.shown__select} onChange={(event)=>changeSelectHandler(event)}>
                                {option.size.options.map(option=>{
                                    return(<option value={option.value}>{option.displayValue}</option>)
                                })}
                            </select>
                        </div>
                        
                        <div className={classes.shown__quantity}>
                         <p>Quantity</p>
                            <div className={classes.shown__quantitySelect}>
                                <IoIosArrowBack className={classes.shown__quantitySelectArrow} onClick={reduce}/>
                                <p className={classes.shown__quantitySelectNumber}>{number}</p>
                                <IoIosArrowForward className={classes.shown__quantitySelectArrow} onClick={add}/>
                            </div>
                        </div>
                        <div>
                            <button className={classes.shown__button} onClick={showSideDrawer}>Add to Cart</button>
                        </div>
                        
                        <div>
                            {textArray.map(sub=>{
                                return(
                                    <ProductInfo header={sub.item.header} text={sub.item.text}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
        )
    }
    return(
        <div className={classes.shown}>
                <Header/>
                    {product}
                <Footer/>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        img: state.product.img,
        price: state.product.price,
        sideDrawer: state.cart.sideDrawer,
        numOfOrders: state.cart.numberOfOrders
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onSetSideDrawer: (setSideDrawer)=> dispatch(indexAction.setSideDrawer(setSideDrawer)),
        onAddToCart: (orderData) => dispatch(indexAction.addToCartSuccess(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(shownProduct));