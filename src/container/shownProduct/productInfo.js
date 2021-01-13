import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';

const productInfo = props =>{
    const [sign, setSign] = useState(false)

    const setSignHandler =()=>{
        setSign(!sign)
    }

    let signHandler = <BiPlus className={classes.productInfo__sign} onClick={setSignHandler}/>
    if(sign){
        signHandler = <BiMinus className={classes.productInfo__sign} onClick={setSignHandler}/>
    }
    return(
    <div>
        <div className={classes.productInfo}>
            <div className={classes.productInfo__header}>
                <h3>{props.header}</h3>
                {signHandler}
            </div>
            {sign? <p className={classes.productInfo__text}>{props.text}</p> : null}
        </div>
    </div>
)}

export default productInfo;