import React, { useState } from 'react';

import img8 from '../../images/bestseller2.jpg';
import img10 from '../../images/soft1.jpg';
import img11 from '../../images/soft2.jpg';
import img12 from '../../images/soft3.jpg';
import img13 from '../../images/soft4.jpg';
import img14 from '../../images/soft5.jpg';
import img15 from '../../images/soft6.jpg';
import img16 from '../../images/soft7.jpg';
import ShopPage from '../../components/shopPage/shopPage';


const soft = props =>{
    const [products, setProducts] = useState({
        img8: {img: img8, caption: "Bestseller", price: "300"},
        img10: {img: img10, caption: null, price: "300"},
        img11: {img: img11, caption: "New Arrival", price: "300"},
        img12: {img: img12, caption: null, price: "300"},
        img13: {img: img13, caption: null, price: "300"},
        img14: {img: img14, caption: "Sale  ", price: "300"},
        img15: {img: img15, caption: null, price: "300"},
        img16: {img: img16, caption: null, price: "300"},
    })

    return <ShopPage header="Soft Collection" products={products}/>
    
}
export default soft;