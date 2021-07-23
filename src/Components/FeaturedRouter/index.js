import React from 'react'
import { Route } from 'react-router-dom';
import Featured from '../Featured';
import Premium from '../Premium';
import Public from '../Public';
import { useMediaQuery } from 'react-responsive';
import FeaturedMobile from '../../ComponentsMobile/FeaturedMobile';

/**
* @author
* @function FeaturedRouter
**/

const FeaturedRouter = (props) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return(
    <section>
       {isLandscape && <div className='Froutes'>
        <Route path="/featured" exact component={Featured} />
          <Route path="/featured/premium" component={Premium} />
          <Route path="/featured/public" component={Public} />
        </div>}
        {isPortrait && <div className='Froutes-m'>
        <Route path="/featured" exact component={FeaturedMobile} />
          <Route path="/featured/premium" component={Premium} />
          <Route path="/featured/public" component={Public} />
        </div>}
    </section>
   )

 }

export default FeaturedRouter