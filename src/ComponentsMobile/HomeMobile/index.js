import React, { useEffect, useRef } from 'react'
import './style.css';
import MainStone from '../../SVGs/MainStone';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import Concentric from '../../SVGs/Concentric'
import Concentric2 from '../../SVGs/Concentric2';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function HomeMobile() {
  let mytitle = useRef(null)
  let mycomp1 = useRef(null)
  let mycomp2 = useRef(null)
  let mycomp3 = useRef(null)
  let circles = useRef(null)


    useEffect(() => {
        gsap.from(mytitle, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(mycomp1, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(mycomp2, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(mycomp3, {opacity: 0, delay: 5.25, duration: 2, rotateX: "100%", ease: 'circ'} );
        gsap.from(circles, {scale: 6, opacity: 0, duration: 5.5})
    })
  return (
    <section className="home-m">
      <div className='Main-m'>
      <p className='home-title-m' ref={el=>mytitle=el}>
      <NavLink to='/'>Anima</NavLink>
        </p>
        <div className='Mainnav-m'>
        <p className='comp1-m' ref={el=>mycomp1=el}>
        <NavLink to='/featured'>Featured Articles</NavLink>
        </p>
        <p className='comp2-m' ref={el=>mycomp2=el}>
        <NavLink to='/blog'>Newsletter</NavLink>
        </p>
        <p className='comp3-m' ref={el=>mycomp3=el}>
        <NavLink to='/movies'>Weekly Movie Picks</NavLink>
        </p>
        </div>
      </div>
      <div className='concentric-m' ref={el=>circles=el}>
          <Concentric2/>
      </div>
    </section>
  );
}

export default HomeMobile;