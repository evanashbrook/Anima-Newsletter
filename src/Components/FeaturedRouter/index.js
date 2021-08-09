import React from 'react'
import { Route } from 'react-router-dom';
import Featured from '../Featured';
import Premium from '../Premium';
import Public from '../Public';
import { useMediaQuery } from 'react-responsive';
import FeaturedMobile from '../../ComponentsMobile/FeaturedMobile';
import MyMapWithAutocomplete from '../GMap';

/**
* @author
* @function FeaturedRouter
**/

const FeaturedRouter = (props) => {
  return(
    <section>
       <div className='Froutes'>
        <Route path="/blog" exact component={Featured} />
          <Route path="/blog/premium" component={Premium} />
          <Route path="/blog/public" component={Public} />
        </div>
    </section>
   )

 }

export default FeaturedRouter