import React from 'react'
import { Route } from 'react-router-dom';
import Store from '../Store'
import Products from '../Products'
import './style.css'
import Product0 from '../../Listings/Product0';
import Product1 from '../../Listings/Product1';
import product2 from '../../Listings/Product2';
import Product3 from '../../Listings/Product3';

/**
* @author
* @function Catalog
**/

const Catalog = (props) => {
  return(
    <section className='Cat-sec'>
        <div className='Cat-Div-1'>
        <Route path="/catalog" exact component={Products} />
        <Route path="/catalog/product0" component={Product0} />
        <Route path="/catalog/product1" component={Product1} />
        <Route path="/catalog/product2" component={product2} />
        <Route path="/catalog/product3" component={Product3} />
        </div>
    </section>
   )

 }

export default Catalog