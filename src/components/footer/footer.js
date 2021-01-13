import React from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';


const footer = props =>(
    <div className={classes.footer}>
        <div className={classes.footer__firstRow}>
            <div className={classes.footer__social}>
                <Link className={classes.footer__icon}><FaFacebookF/></Link>
                <Link className={classes.footer__icon}><AiOutlineInstagram/></Link>
                <Link className={classes.footer__icon}><FaPinterestP/></Link>
            </div>

            <div className={classes.footer__info}>
                <p>info@my-domain.com</p>
                <p>123-456-7890</p>
            </div>

            <div className={classes.footer__address}>
                <h3>Our Flagship Store</h3>
                <p>500 Terry Francois Street San Francisco, CA 94158</p>
            </div>

        </div>
        <div className={classes.footer__secondRow}> 
            ©2023 by CAPSULE. Proudly created with .com
        </div>
    </div>
)

export default footer;