import React from 'react';
import classes from '../../convertion/App.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const about = props =>(
    <div className={classes.shopPage}>
        <Header/>
        <h1 className={classes.shopPage__header}>{props.header}</h1>
        {props.children}
        <Footer/>
    </div>
)

export default about;