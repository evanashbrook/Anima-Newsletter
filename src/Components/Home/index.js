import React, { useEffect, useRef } from 'react'
import './style.css';
import MainStone from '../../SVGs/MainStone';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import Concentric from '../../SVGs/Concentric'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function Home() {
  let mytitle = useRef(null)
  let mycomp = useRef(null)
  let circles = useRef(null)


    useEffect(() => {
        gsap.from(mytitle, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(mycomp, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(circles, {scale: 6, opacity: 0, duration: 5.5})
    })
  return (
    <section className="home">
      <div className='Main'>
      <p className='home-title' ref={el=>mytitle=el}>
      <NavLink to='/'>Anima</NavLink>
        </p>
        <div className='home-stone'>
          <MainStone />
        </div>
        <div className='Mainnav' ref={el=>mycomp=el}>
        <p className='comp1'>
        <NavLink to='/blog'>Newsletter</NavLink>
        </p>
        <p className='comp2'>
        <NavLink to='/featured'>Featured Articles</NavLink>
        </p>
        <p className='comp3'>
        <NavLink to='/movies'>Weekly Movie Picks</NavLink>
        </p>
        </div>
      </div>
      <div className='concentric' ref={el=>circles=el}>
          <Concentric/>
      </div>
    </section>
  );
}

export default Home;