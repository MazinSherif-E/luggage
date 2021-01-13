import React from 'react';
import Page from '../../components/subPages/subPages';
import classes from '../../convertion/App.css';
import img from '../../images/customer2.jpg';

const contact = props =>(
    <div>
        <Page header="Contact">
            <div className={classes.contact}>
                <img src={img} className={classes.about__img} alt="about-img"/>
                <div className={classes.contact__caption}>

                    <div className={classes.contact__store1}>
                        <h3 className={classes.contact__header}>Our Stores</h3>
                        <h3 className={classes.contact__subHeader}>Store 01</h3>
                        <p>Address: 500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email:  info@my-domain.com</p>
                    </div>

                    <div>
                        <h3 className={classes.contact__subHeader}>Store 02</h3>
                        <p>Address: 500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email:  info@my-domain.com</p>
                    </div>

                    <div>
                        <h3 className={classes.contact__subHeader}>Store 03</h3>
                        <p>Address: 500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email:  info@my-domain.com</p>
                    </div>

                    <div>
                        <h3 className={classes.contact__subHeader}>Store 04</h3>
                        <p>Address: 500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Email:  info@my-domain.com</p>
                    </div>
                </div>
            </div>
        </Page>
    </div>
)

export default contact;