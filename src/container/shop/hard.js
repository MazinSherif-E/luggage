import React, { useState } from 'react';

import img1 from '../../images/bestseller1.jpg';
import img2 from '../../images/hard1.jpg';
import img3 from '../../images/bestseller3.jpg';
import img4 from '../../images/bestseller4.jpg';
import img5 from '../../images/hard2.jpg';
import img6 from '../../images/hard3.jpg';
import img7 from '../../images/hard4.jpg';
import img9 from '../../images/hard5.jpg';
import ShopPage from '../../components/shopPage/shopPage';


const hard = props =>{
    const [products, setProducts] = useState({
        img1: {img: img1, caption: "Bestseller", price: "265"},
        img2: {img: img2, caption: "Bestseller", price: "220"},
        img3: {img: img3, caption: null, price: "150"},
        img4: {img: img4, caption: "Bestseller", price: "300"},
        img5: {img: img5, caption: "New Arrival", price: "300"},
        img6: {img: img6, caption: null, price: "300"},
        img7: {img: img7, caption: null, price: "300"},
        img9: {img: img9, caption: null, price: "300"},
    })

    return <ShopPage header="Hard Collection" products={products}/>
    
}
export default hard;