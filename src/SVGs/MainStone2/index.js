import React, { useEffect, useRef } from 'react'
import { DrawSVGPlugin}  from 'gsap/DrawSVGPlugin'
import gsap from 'gsap'
import { textIntro } from '../../Animations';

gsap.registerPlugin(DrawSVGPlugin);

/**
* @author
* @function MainStone2
**/

const MainStone2 = (props) => {
    let mystone = useRef(null)

    useEffect(() => {
        textIntro(mystone)
    })
  return(
    <div className='svg-container2'>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	    viewBox="0 0 1920 1080" width='30%' height='30%' ref={el=>mystone=el}>
            <defs>
                <linearGradient id="linear" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%"   stop-color="rgb(186, 125, 236)"/>
                <stop offset="100%"   stop-color="rgb(223, 223, 223)"/>
                </linearGradient>
            </defs>
            <polygon fill="none" stroke="rgb(223, 223, 223)" stroke-width="50" stroke-miterlimit="10" points="1002.5,85 653.8,689 1351.2,689 "/>
            <rect x="851.5" y="387" stroke="rgb(223, 223, 223)" fill="none" stroke-width="50" stroke-miterlimit="10" width="302" height="302"/>
            <circle fill="none" stroke="rgb(223, 223, 223)" stroke-width="50" stroke-miterlimit="10" cx="1002.5" cy="537.5" r="120"/>
            <circle fill="none"  stroke='url(#linear)' stroke-width="50" stroke-miterlimit="10" cx="1002.5" cy="493.5" r="435.5"/>
        </svg>
    </div>
   )

 }

export default MainStone2