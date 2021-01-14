import React, { useState, useEffect } from 'react';
import SideDrawer from '../../components/sideDrawer/sideDrawer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import img1 from '../../images/bestseller1.jpg';
import img2 from '../../images/hard1.jpg';
import img3 from '../../images/bestseller3.jpg';
import img4 from '../../images/bestseller4.jpg';
import img5 from '../../images/hard2.jpg';
import img6 from '../../images/hard3.jpg';
import img7 from '../../images/hard4.jpg';
import img8 from '../../images/bestseller2.jpg';
import img9 from '../../images/hard5.jpg';
import img10 from '../../images/soft1.jpg';
import img11 from '../../images/soft2.jpg';
import img12 from '../../images/soft3.jpg';
import img13 from '../../images/soft4.jpg';
import img14 from '../../images/soft5.jpg';
import img15 from '../../images/soft6.jpg';
import img16 from '../../images/soft7.jpg';
import img17 from '../../images/leather1.jpg';
import img18 from '../../images/leather2.jpg';
import img19 from '../../images/leather3.jpg';
import img20 from '../../images/leather4.jpg';
import ShopPage from '../../components/shopPage/shopPage';
import * as indexAction from '../../store/actions/index';

const shop = props =>{
    const [products, setProducts] = useState({
        img1: {img: img1, caption: "Bestseller", price: "265"},
        img2: {img: img2, caption: "Bestseller", price: "220"},
        img3: {img: img3, caption: null, price: "150"},
        img4: {img: img4, caption: "Bestseller", price: "300"},
        img5: {img: img5, caption: "New Arrival", price: "300"},
        img6: {img: img6, caption: null, price: "300"},
        img7: {img: img7, caption: "Bestseller", price: "300"},
        img8: {img: img8, caption: null, price: "300"},
        img9: {img: img9, caption: null, price: "300"},
        img10: {img: img10, caption: null, price: "300"},
        img11: {img: img11, caption: "New Arrival", price: "300"},
        img12: {img: img12, caption: null, price: "300"},
        img13: {img: img13, caption: null, price: "300"},
        img14: {img: img14, caption: "Sale  ", price: "300"},
        img15: {img: img15, caption: null, price: "300"},
        img16: {img: img16, caption: null, price: "300"},
        img17: {img: img17, caption: null, price: "300"},
        img18: {img: img18, caption: null, price: "300"},
        img19: {img: img19, caption: null, price: "300"},
        img20: {img: img20, caption: "New Arrival", price: "300"},
    })

    useEffect(()=>{
        props.onFetchOrderSucces(); 
    }, [])

    return (
        <div>
            {props.sideDrawer ? <SideDrawer/>: null}
            <ShopPage header="All of Products" products={products}/>
        </div>
    
    )
}


const mapStateToProps = state =>{
    return{
        sideDrawer: state.cart.sideDrawer
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchOrderSucces:()=>dispatch(indexAction.fetchOrderSucces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(shop));
