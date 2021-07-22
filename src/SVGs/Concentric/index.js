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
    let c7 = useRef(null)

    useEffect(() => {
        gsap.to(c1, {rotate: 360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c2, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c3, {rotate: 360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c4, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c5, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.to(c6, {rotate: -360, duration: 10, repeat: -1, transformOrigin: 'center', ease: "none"})
        gsap.from(c7, {scale: .5, duration: 2, repeat: -1, transformOrigin: 'center', yoyo: true, ease: 'sine.inOut'})
    })
  return(
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470.78 470.78">
        <defs>
        <radialGradient id="radial-gradient" cx="235.39" cy="235.39" r="224.55" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#efad65"/>
            <stop offset="0.07" stop-color="#f1b778" stop-opacity="0.88"/>
            <stop offset="0.21" stop-color="#f5ca9b" stop-opacity="0.65"/>
            <stop offset="0.34" stop-color="#f8daba" stop-opacity="0.45"/>
            <stop offset="0.48" stop-color="#fae7d3" stop-opacity="0.29"/>
            <stop offset="0.62" stop-color="#fcf2e6" stop-opacity="0.16"/>
            <stop offset="0.75" stop-color="#fef9f4" stop-opacity="0.07"/>
            <stop offset="0.88" stop-color="#fffefc" stop-opacity="0.02"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <radialGradient id="radial-gradient2" cx="235.39" cy="235.39" r="224.55" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#c0daa9"/><stop offset="0.02" stop-color="#c2dbac" stop-opacity="0.96"/>
            <stop offset="0.17" stop-color="#d2e5c2" stop-opacity="0.71"/>
            <stop offset="0.31" stop-color="#e0edd5" stop-opacity="0.49"/>
            <stop offset="0.46" stop-color="#ebf3e4" stop-opacity="0.32"/>
            <stop offset="0.6" stop-color="#f4f8f0" stop-opacity="0.18"/>
            <stop offset="0.74" stop-color="#fafcf8" stop-opacity="0.08"/>
            <stop offset="0.87" stop-color="#fefefd" stop-opacity="0.02"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        </defs>
            <circle ref={el=>c1=el} cx="235.39" cy="235.39" r="132.47" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="49.54 9.91"/>
            <circle ref={el=>c2=el} cx="235.39" cy="235.39" r="169.26" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="49.24 9.85"/>
            <circle ref={el=>c3=el} cx="235.39" cy="235.39" r="233.39" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4" stroke-dasharray="50.92 10.18"/>
            <circle ref={el=>c4=el} cx="235.39" cy="235.39" r="224.55" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4"/>
            <circle ref={el=>c5=el} cx="235.39" cy="235.39" r="153.93" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4"/>
            <circle ref={el=>c6=el} cx="235.39" cy="235.39" r="120.69" fill="none" stroke="rgba(110, 110, 110, .75)" stroke-miterlimit="10" stroke-width="4"/>
            <circle ref={el=>c7=el} cx="235.39" cy="235.39" r="224.55" fill="url(#radial-gradient)"/>
            <path d="M221.44,297.64c0-110.18,89.32-199.5,199.5-199.5" transform="translate(-185 -62.5)" fill="none" stroke="#75b1e0" stroke-miterlimit="10" stroke-width="4"/>
<path d="M420.94,497.14c-110.18,0-199.5-89.32-199.5-199.5" transform="translate(-185 -62.5)" fill="none" stroke="#75b1e0" stroke-miterlimit="10" stroke-width="4"/>
<path d="M620.44,297.64c0,110.18-89.31,199.5-199.5,199.5" transform="translate(-185 -62.5)" fill="none" stroke="#75b1e0" stroke-miterlimit="10" stroke-width="4"/>
<path d="M162,297.64" transform="translate(-185 -62.5)" fill="none" stroke="#75b1e0" stroke-miterlimit="10" stroke-width="4"/>
<path d="M145.92,297.64" transform="translate(-185 -62.5)" fill="none" stroke="#75b1e0" stroke-miterlimit="10" stroke-width="4"/>
<path d="M564.67,297.64A143.73,143.73,0,0,0,420.94,153.91" transform="translate(-185 -62.5)" fill="none" stroke="#82c781" stroke-miterlimit="10" stroke-width="4"/>
<path d="M420.94,441.37A143.73,143.73,0,0,0,564.67,297.64" transform="translate(-185 -62.5)" fill="none" stroke="#82c781" stroke-miterlimit="10" stroke-width="4"/>
        </svg>
    </div>
   )

 }

export default Concentric