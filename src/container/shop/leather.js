import React, { useState } from 'react';

import img17 from '../../images/leather1.jpg';
import img18 from '../../images/leather2.jpg';
import img19 from '../../images/leather3.jpg';
import img20 from '../../images/leather4.jpg';
import ShopPage from '../../components/shopPage/shopPage';


const leather = props =>{
    const [products, setProducts] = useState({
        img17: {img: img17, caption: null, price: "300"},
        img18: {img: img18, caption: null, price: "300"},
        img19: {img: img19, caption: null, price: "300"},
        img20: {img: img20, caption: "New Arrival", price: "300"},
    })

    return <ShopPage header="Leather Collection" products={products}/>
    
}
export default leather;