import React, { useEffect, useRef } from 'react'
import './App.css';
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
import Appm from './Appm';

/**
* @author
* @function Appd
**/

const Appd = (props) => {
    let rec1 = useRef(null)
  let logo = useRef(null)
  let rec2 = useRef(null)
  let rec3 = useRef(null)
  let cc = useRef(null)

  useEffect(() => {
    gsap.from(rec2, {xPercent: -40, duration: .5, ease: 'power1'})
    gsap.from(rec3, {xPercent: -245, duration: 1, ease: 'power1'})
    gsap.from(cc, {xPercent: -30, duration: 2, ease: 'power1'})
    gsap.from(rec1, {yPercent: -120, duration: 2, ease: 'power1' })
    gsap.from(logo, {rotateX: 90, opacity: 0, duration: 1, delay: 1, ease: 'power1'})
  })
  return(
      <section className='App'>
          <div className='App-div'>
        <div className='leftside'>
          <div className='constant'>
            <img className='logo' ref={el=>logo=el} src={picture} alt='logo' />
            <img className='rec1' ref={el=>rec1=el} src={rectangle1} alt='rec1' />
          </div>
          <div className='constant-bottom'>
            <img className='rec2' ref={el=>rec2=el} src={rectangle2} alt='rec1' />
            <img className='rec3' ref={el=>rec3=el} src={rectangle3} alt='rec1' />
            <div className='constant-content' ref={el=>cc=el}>
              <img className='culture' src={culture} alt='culture' />
              <img className='and' src={and} alt='and' />
              <img className='philosophy' src={philosophy} alt='philosophy' />
            </div>
          </div>
          </div>
          <div className='rightside'>
          <div className='stickyh'>
          <NavLink to='/'><img className='homeButt' src={HB} alt='homebut'/></NavLink>
          <NavLink to='/blog'><img className='blogButt' src={BB} alt='blogbutt'/></NavLink>
          <NavLink to='/catalog'><img className='catalogButt' src={CB} alt='catbutt'/></NavLink>
          <NavLink to='/movies'><img className='moviesButt' src={MB} alt='mbutt'/></NavLink>
            </div>
            <div className='theroutes'>
            <Route path="/" exact component={NewHome} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/blog" component={FeaturedRouter} />
            <Route path="/movies" component={Movies} />
            </div>
            </div>
    </div>
      </section>
   )

 }

export default Appd