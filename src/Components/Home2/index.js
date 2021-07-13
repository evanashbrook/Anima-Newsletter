import React, { useEffect, useRef } from 'react'
import './style.css';
import MainStone from '../../SVGs/MainStone';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import MainStone2 from '../../SVGs/MainStone2';
import { textIntro } from '../../Animations';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function Home2() {
  let mytitle = useRef(null)
  let mycomp1 = useRef(null)
  let mycomp2 = useRef(null)


    useEffect(() => {
        textIntro(mytitle)
        textIntro(mycomp1)
        textIntro(mycomp2)
    })
  return (
    <section className="home">
      <div className='Main'>
      <p className='home-title' ref={el=>mytitle=el}>
        Anima
        </p>
        <div className='home-stone'>
          <MainStone2 />
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

export default Home2;