import React from 'react';
import classes from '../../convertion/App.css';

const contact = props =>(
    <div className={classes.contactComp}>
        <div className={classes.contactComp__inputs}>
            <input placeholder="Name" id={props.id} className={classes.contactComp__input1} required/>
            <input placeholder="Email" id={props.id} className={classes.contactComp__input2} required/>
            <input placeholder="Subject" id={props.id} className={classes.contactComp__input3} required/>
            <input placeholder="Type your message here..." id={props.id} className={classes.contactComp__input4} required/>    
            <button className={classes.contactComp__subButton}>Submit</button>
        </div>
    </div>
)

export default contact;