import React, { useEffect, useRef } from 'react'
import { DrawSVGPlugin}  from 'gsap/DrawSVGPlugin'
import gsap from 'gsap'

gsap.registerPlugin(DrawSVGPlugin);

/**
* @author
* @function MainStone
**/

const MainStone = (props) => {
    let mystone1 = useRef(null)
    let mystone2 = useRef(null)
    let mystone3 = useRef(null)
    let mystone4 = useRef(null)
    let mystone = useRef(null)

    useEffect(() => {
        gsap.fromTo(mystone1, {drawSVG: 0}, {delay: 2.5, duration: 2.5, drawSVG: '100%', ease: 'power2'} )
        gsap.fromTo(mystone2, {drawSVG: 0}, {duration: 2, direction:'reverse', drawSVG: '100%', ease: 'power1'} )
        gsap.fromTo(mystone3, {drawSVG: 0}, {delay: .25, duration: 2, drawSVG: '100%', ease: 'power1'} )
        gsap.fromTo(mystone4, {drawSVG: 0}, {delay: 2.5, duration: 2.5, drawSVG: '100%', ease: 'power2'} )
        gsap.from(mystone, {scale: 6, rotate:360, duration: 5.5})
    })
  return(
    <div className='svg-container2'>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	    viewBox="0 0 1920 1080" width='30%' height='30%' ref={el=>mystone=el}>
            <defs>
            <linearGradient id="linear2" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%"   stop-color="rgba(253, 29, 29, 1)"/>
                <stop offset="25%"   stop-color="rgba(252, 176, 69, 1)"/>
                <stop offset="50%"   stop-color="rgba(243, 252, 69, 1)"/>
                <stop offset="75%"   stop-color="rgba(69, 252, 138, 1)"/>
                <stop offset="100%"   stop-color="rgba(69, 252, 248, 1)"/>
                </linearGradient>
            </defs>
            <polygon ref={el=>mystone2=el} fill="none" stroke="rgb(80, 80, 80)" stroke-width="50" stroke-miterlimit="10" points="1002.5,85 653.8,689 1351.2,689 "/>
            <rect ref={el=>mystone3=el} x="851.5" y="387" stroke="rgb(80, 80, 80)" fill="none" stroke-width="50" stroke-miterlimit="10" width="302" height="302"/>
            <circle ref={el=>mystone4=el} fill="none" stroke='url(#linear2)' stroke-width="50" stroke-miterlimit="10" cx="1002.5" cy="537.5" r="120"/>
            <circle ref={el=>mystone1=el} fill="none"  stroke="rgb(80, 80, 80)" stroke-width="50" stroke-miterlimit="10" cx="1002.5" cy="493.5" r="435.5"/>
        </svg>
    </div>
   )

 }

export default MainStone