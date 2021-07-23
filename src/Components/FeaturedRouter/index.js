import React from 'react'
import { Route } from 'react-router-dom';
import Featured from '../Featured';
import Premium from '../Premium';
import Public from '../Public';

/**
* @author
* @function FeaturedRouter
**/

const FeaturedRouter = (props) => {
  return(
    <section>
        <div className='Froutes'>
        <Route path="/featured" exact component={Featured} />
          <Route path="/featured/premium" component={Premium} />
          <Route path="/featured/public" component={Public} />
        </div>
    </section>
   )

 }

export default FeaturedRouter