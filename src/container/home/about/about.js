import React from 'react';
import classes from '../../../convertion/App.css'

const about = props =>(
    <div className={classes.homeAbout}>
        <h1 className={classes.homeAbout__header}>Capsule Luggage</h1>
        <h2 className={classes.homeAbout__year}>Top quality since 1973</h2>
        <p className={classes.homeAbout__paragraph}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <button className={classes.homeAbout__button}>Read More</button>
    </div>
)

export default about;