import React, { useEffect, useRef } from 'react'
import './style.css';
import MainStone from '../../SVGs/MainStone';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function Home() {
  let mytitle = useRef(null)
  let mycomp1 = useRef(null)
  let mycomp2 = useRef(null)


    useEffect(() => {
        gsap.from(mytitle, {opacity: 0, delay: 5, duration: 5} );
        gsap.from(mytitle, { duration: 6.5, scrambleText: {chars: "01010101", speed: 1, delimiter: ""}} );
        gsap.from(mycomp1, {opacity: 0, delay: 7, duration: 1, ease: 'circ'} );
        gsap.from(mycomp2, {opacity: 0, delay: 7.5, duration: 1, ease: 'circ'} );
    })
  return (
    <section className="home">
      <div className='Main'>
      <p className='home-title' ref={el=>mytitle=el}>
        Anima
        </p>
        <div className='home-stone'>
          <MainStone />
        </div>
        <p className='comp1' ref={el=>mycomp1=el}>
          <NavLink to='/blog'>Newsletter</NavLink>
        </p>
        <p className='comp2' ref={el=>mycomp2=el}>
        <NavLink to='/author'>Featured Articles</NavLink>
        </p>
      </div>
    </section>
  );
}

export default Home;