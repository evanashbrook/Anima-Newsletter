import React, { useEffect, useRef } from 'react'
import './Appm.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import HB from './Assets/SVG/HomeButton.svg'
import CB from './Assets/SVG/CatalogButton.svg'
import MB from './Assets/SVG/MoviesButton.svg'
import BB from './Assets/SVG/BlogButton.svg'
import Movies from './Components/Movies';
import FeaturedRouter from './Components/FeaturedRouter';
import { useMediaQuery } from 'react-responsive';
import MoviesMobile from './ComponentsMobile/MoviesMobile';
import Catalog from './Components/Catalog';
import NewHome from './Components/NewHome';
import NewHomeMobile from './ComponentsMobile/NewHomeMobile';
import picture from './Assets/IntrinsiclogoF2.svg'
import rectangle1 from './Assets/SVG/rec1.svg'
import rectangle2 from './Assets/SVG/rec2.svg'
import rectangle3 from './Assets/SVG/rec3.svg'
import culture from './Assets/SVG/CultureArt.svg'
import and from './Assets/SVG/AndArt.svg'
import philosophy from './Assets/SVG/PhilosophyArt.svg'
import gsap from 'gsap';

/**
* @author
* @function Appm
**/

const Appm = (props) => {
    let rec1m = useRef(null)
  let logom = useRef(null)

  useEffect(() => {
    gsap.from(rec1m, {yPercent: -120, duration: 2, ease: 'power1' })
    gsap.from(logom, {rotateX: 90, opacity: 0, duration: 1, delay: 1, ease: 'power1'})
  })
  return(
    <section className='appm'>
        <div className='app_m'>
        <div className='constant-m'>
            <img className='logo-m' ref={el=>logom=el} src={picture} alt='logo' />
            <img className='rec1-m' ref={el=>rec1m=el} src={rectangle1} alt='rec1' />
          </div>
          <div className='stickyh-m'>
          <NavLink to='/'><img className='homeButt-m' src={HB} alt='homebut'/></NavLink>
          <NavLink to='/blog'><img className='blogButt-m' src={BB} alt='blogbutt'/></NavLink>
          <NavLink to='/catalog'><img className='catalogButt-m' src={CB} alt='catbutt'/></NavLink>
          <NavLink to='/movies'><img className='moviesButt-m' src={MB} alt='mbutt'/></NavLink>
            </div>
            <Route path="/" exact component={NewHome} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/blog" component={FeaturedRouter} />
            <Route path="/movies" component={Movies} />
          </div>
    </section>
   )

 }

export default Appm