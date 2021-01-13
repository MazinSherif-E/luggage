import React, { Component, Suspense } from 'react';
import './convertion/App.css';
import { Route, Switch } from 'react-router-dom';
import classes from './convertion/App.css'

const Home = React.lazy(() => import('./container/home/home'));
const Shop = React.lazy(() => import('./container/shop/shop'));
const Leather = React.lazy(() => import('./container/shop/leather'));
const Hard = React.lazy(() => import('./container/shop/hard'));
const Soft = React.lazy(() => import('./container/shop/soft'));
const About = React.lazy(() => import('./container/about/about'));
const Contact = React.lazy(() => import('./container/contact/contact'));
const Customer = React.lazy(() => import('./container/customer/customer'));
const ShownProduct = React.lazy(() => import('./container/shownProduct/shownProduct'));
const Cart = React.lazy(() => import('./container/cart/cart'));
const Side = React.lazy(() => import('./components/sideDrawer/sideDrawer'));

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/side" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Side {...props}/> </Suspense>)}/>
          <Route path="/cart" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Cart {...props}/> </Suspense>)}/>
          <Route path="/shown-product" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <ShownProduct {...props}/> </Suspense>)}/>
          <Route path="/about" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <About {...props}/> </Suspense>)}/>
          <Route path="/contact" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Contact {...props}/> </Suspense>)}/>
          <Route path="/customer-care" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Customer {...props}/> </Suspense>)}/>
          <Route path="/shop" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Shop {...props}/> </Suspense>)}/>
          <Route path="/leather" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Leather {...props}/> </Suspense>)}/>
          <Route path="/hard" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Hard {...props}/> </Suspense>)}/>
          <Route path="/soft" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Soft {...props}/> </Suspense>)}/>
          <Route path="/" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Home {...props}/> </Suspense>)}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
