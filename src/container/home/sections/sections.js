import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../../convertion/App.css'

const sections = props => {
    return(
        <div className={classes.sections}>
            <div className={classes.sections__soft}></div>
            
            <div className={classes.sections__softCaption}>
                <h2 className={classes.sections__softTitle}>The Soft Side Collection</h2>
                <p className={classes.sections__softPar}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <Link className={classes.sections__button} to="/hard">Shop Now</Link>
            </div>

            <div className={classes.sections__leather}>
                <h2 className={classes.sections__title}>The Leather Side Collection</h2>
                <p className={classes.sections__par}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <Link className={classes.sections__button} to="/leather">Shop Now</Link>
            </div>
            
            <div className={classes.sections__hard}>
                <h2 className={classes.sections__title}>The Hard Side Collection</h2>
                <p className={classes.sections__par}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <Link className={classes.sections__button} to="/hard">Shop Now</Link>
            </div>
        </div>
    )
}

export default sections