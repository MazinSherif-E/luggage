import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-router-dom'; 
import Header from '../../components/header/header';
import Sections from './sections/sections'
import BestSeller from '../../components/product/product';
import img1 from '../../images/bestseller1.jpg';
import img2 from '../../images/bestseller2.jpg';
import img3 from '../../images/bestseller3.jpg';
import img4 from '../../images/bestseller4.jpg';
import About from './about/about';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

const home = props =>{
    const [bestseller, setBestseller] = useState({
        img1: {img: img1, caption: "Bestseller", price: "265"},
        img2: {img: img2, caption: "Bestseller", price: "220"},
        img3: {img: img3, caption: "Bestseller", price: "150"},
        img4: {img: img4, caption: "Bestseller", price: "300"},

    });

    const bestsellertArray = [];
        for (let key in bestseller){
            bestsellertArray.push({
                id: key,
                item: bestseller[key]
            })
        }

    return(
        <div className={classes.home}>
            <Header/>
            <div className={classes.home__photo}>
                <div className={classes.home__headCaption}>
                    <h1 className={classes.home__caption}>Introduction A New Way To Travel</h1>
                    <Link className={classes.home__button} to="/shop">Shop Now</Link>
                </div>
            </div>
            <Sections/>


            <div className={classes.bestseller}>
                <h1 className={classes.bestseller__header}>Our Bestseller</h1>
                <div className={classes.bestseller__items}>
                    {bestsellertArray.map(product=>{
                        return(<BestSeller img={product.item.img} caption={product.item.caption} price={product.item.price}/>)
                    })}
                </div>
            </div>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default home; 