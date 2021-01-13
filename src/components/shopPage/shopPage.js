import React from 'react';
import classes from '../../convertion/App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Product from '../product/product';

const shopPage = props =>{
    const productstArray = [];
        for (let key in props.products){
            productstArray.push({
                id: key,
                item: props.products[key]
            })
        }

    return(
    <div className={classes.shopPage}>
        <Header/>
        <h1 className={classes.shopPage__header}>{props.header}</h1>
        {productstArray.map(product=>{
            return(<Product img={product.item.img} caption={product.item.caption} price={product.item.price}/>)
        })}
        <Footer/>
    </div>
    )
}

export default shopPage;