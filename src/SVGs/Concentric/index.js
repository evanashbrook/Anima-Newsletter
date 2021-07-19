import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

/**
* @author
* @function Concentric
**/

const Concentric = (props) => {
    let c1 = useRef(null)
    let c2 = useRef(null)
    let c3 = useRef(null)
    let c4 = useRef(null)
    let c5 = useRef(null)
    let c6 = useRef(null)

    useEffect(() => {
        gsap.to(c1, {rotate: 360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c2, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c3, {rotate: 360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c4, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c5, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c6, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
    })
  return(
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470.78 470.78">
            <circle ref={el=>c1=el} cx="235.39" cy="235.39" r="132.47" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="49.54 9.91"/>
            <circle ref={el=>c2=el} cx="235.39" cy="235.39" r="169.26" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="49.24 9.85"/>
            <circle ref={el=>c3=el} cx="235.39" cy="235.39" r="233.39" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="50.92 10.18"/>
            <circle ref={el=>c4=el} cx="235.39" cy="235.39" r="224.55" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4"/>
            <circle ref={el=>c5=el} cx="235.39" cy="235.39" r="153.93" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4"/>
            <circle ref={el=>c6=el} cx="235.39" cy="235.39" r="120.69" fill="none" stroke="rgba(214, 214, 214)" stroke-miterlimit="10" stroke-width="4"/>
        </svg>
    </div>
   )

 }

export default Concentric