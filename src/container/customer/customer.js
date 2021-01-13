import React from 'react';
import Page from '../../components/subPages/subPages';
import classes from '../../convertion/App.css';

const customer = props =>(
    <div>
        <Page header="Customer Care">
            <div className={classes.customer}>
                <div className={classes.customer__content}>
                    <div className={classes.customer__section}>
                        <h2>Customer Care</h2>
                        <p>I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed customer care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
                        <p>I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>

                    <div className={classes.customer__section}>
                        <h2>Privacy & Safety</h2>
                        <p>I’m a privacy & safety policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information. Add details such as how you use third-party banking to verify payment, the way you collect data or when will you contact users after their purchase was completed successfully.</p>
                        <p>Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy. Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
                    </div>

                    <div className={classes.customer__section}>
                        <h2>Wholesale Inquiries</h2>
                        <p>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products. Use plain language and give as much information as possible in order to promote your business and take it to the next level!</p>
                        <p>I'm the second paragraph in your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>

                    <div className={classes.customer__payment}>
                        <h2 className={classes.customer__payment_header}>Payment Methods</h2>
                        <p>Credit / Debit Cards</p>
                        <p>- PAYPAL</p>    
                        <p>- Offline Payments</p>
                    </div>
                </div>
            </div>
        </Page>
    </div>
)

export default customer;