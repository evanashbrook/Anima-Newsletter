import React, { useEffect, useRef } from 'react'
import './style.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { NavLink } from 'react-router-dom'
import ScrambleText from 'gsap/ScrambleTextPlugin'
import MainStone2 from '../../SVGs/MainStone2';
import { textIntro, textIntro2 } from '../../Animations';
import Concentric from '../../SVGs/Concentric';
import Concentric22 from '../../SVGs/Concentric22';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleText);

function HomeMobile2() {
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
    <section className="home2-m">
      <div className='Main2-m'>
      <p className='home-title2-m' ref={el=>mytitle=el}>
        <NavLink to='/'>Anima</NavLink>
        </p>
        <div className='Mainnav2-m'>
        <p className='comp12-m' ref={el=>mycomp1=el}>
          <NavLink to='/featured'>Featured Articles</NavLink>
        </p>
        <p className='comp22-m' ref={el=>mycomp2=el}>
        <NavLink to='/blog'>Newsletter</NavLink>
        </p>
        <p className='comp32-m' ref={el=>mycomp3=el}>
        <NavLink to='/movies'>Weekly Movie Picks</NavLink>
        </p>
        </div>
      </div>
      <div className='concentric2-m' ref={el=>circles=el}>
          <Concentric22/>
      </div>
    </section>
  );
}

export default HomeMobile2;