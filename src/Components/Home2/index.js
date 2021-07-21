import React, { useEffect, useRef } from 'react'
import './style.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import MainStone2 from '../../SVGs/MainStone2';
import { textIntro, textIntro2 } from '../../Animations';
import Concentric from '../../SVGs/Concentric';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function Home2() {
  let mytitle = useRef(null)
  let mycomp1 = useRef(null)
  let mycomp2 = useRef(null)
  let mycomp3 = useRef(null)
  let circles = useRef(null)


    useEffect(() => {
        textIntro(mytitle)
        textIntro(mycomp1)
        textIntro(mycomp2)
        textIntro(mycomp3)
        textIntro(circles)
    })
  return (
    <section className="home2">
      <div className='Main2'>
      <p className='home-title2' ref={el=>mytitle=el}>
        <NavLink to='/'>Anima</NavLink>
        </p>
        <div className='home-stone2'>
          <MainStone2 />
        </div>
        <div className='Mainnav2'>
        <p className='comp12' ref={el=>mycomp1=el}>
          <NavLink to='/featured'>Featured Articles</NavLink>
        </p>
        <p className='comp22' ref={el=>mycomp2=el}>
        <NavLink to='/blog'>Newsletter</NavLink>
        </p>
        <p className='comp32' ref={el=>mycomp3=el}>
        <NavLink to='/movies'>Weekly Movie Picks</NavLink>
        </p>
        </div>
      </div>
      <div className='concentric2' ref={el=>circles=el}>
          <Concentric/>
      </div>
    </section>
  );
}

export default Home2;