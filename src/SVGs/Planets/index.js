import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin);

/**
* @author
* @function Planets
**/

const Planets = (props) => {
  let p1 = useRef(null)
  let p2 = useRef(null)
  let p3 = useRef(null)
  let p4 = useRef(null)
  let p5 = useRef(null)
  let p6 = useRef(null)
  let planets = useRef(null)

  useEffect(() => {
    var tl = gsap.timeline({repeat: -1, repeatDelay: 0})
    tl.fromTo(p4, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'})
    tl.fromTo(p5, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'}, "<"  )
    tl.fromTo(p6, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'}, "<"  )
    tl.fromTo(p1, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'})
    tl.fromTo(p2, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'}, "<"  )
    tl.fromTo(p3, {drawSVG: 0}, {duration: .5, drawSVG: '100%', ease: 'none'}, "<"  )
    tl.fromTo(p4, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'}, "<")
    tl.fromTo(p5, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'}, "<" )
    tl.fromTo(p6, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'}, "<" )
    tl.fromTo(p1, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'})
    tl.fromTo(p2, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'}, "<" )
    tl.fromTo(p3, {drawSVG: '0% 100%'}, {duration: .5, drawSVG: '100% 100%', ease: 'none'}, "<" )
    
    gsap.from(planets, {xPercent: 20, yPercent: 20, duration: 1, ease: 'circ'})
  })

  return(
    <div ref={el=>planets=el}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 692.54 417.63">
<path ref={el=>p1=el} d="M197.06,132.26c105.5-20.41,309,11.26,542.42,87" transform="translate(-80.88 -120.65)" fill="none" stroke="#6e69b7" stroke-miterlimit="10" stroke-width="9.13"/>
<path ref={el=>p2=el} d="M241.45,155.89c77.28-14.95,226.35,8.25,397.29,63.75" transform="translate(-80.88 -120.65)" fill="none" stroke="#6e69b7" stroke-miterlimit="10" stroke-width="6.69"/>
<path ref={el=>p3=el} d="M218.13,143.93c88.8-17.19,260.1,9.47,456.54,73.25" transform="translate(-80.88 -120.65)" fill="none" stroke="#b769aa" stroke-miterlimit="10" stroke-width="7.69"/>
<path d="M533.62,484.24A174.75,174.75,0,1,1,758.86,382.55,174.74,174.74,0,0,1,533.62,484.24Z" transform="translate(-80.88 -120.65)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="6.44"/>
<path d="M634.72,407.86a390.54,390.54,0,0,1-65.22-18.57,393.2,393.2,0,0,1-61.2-29.19c-55-32.64-87.13-72.67-76.37-101.11s61.34-37.23,124.15-25.32A405.21,405.21,0,0,1,682.5,281.45c55,32.62,87.12,72.64,76.36,101.1S697.54,419.76,634.72,407.86Z" transform="translate(-80.88 -120.65)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="6.44"/>
<path d="M508.3,360.1a404.89,404.89,0,0,1,47.78-126.43c32.61-55,72.65-87.13,101.1-76.37s37.21,61.33,25.32,124.15a405,405,0,0,1-47.78,126.41c-32.62,55-72.65,87.13-101.1,76.38S496.4,422.9,508.3,360.1Z" transform="translate(-80.88 -120.65)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="6.44"/>
<path d="M167.55,126.84a62.43,62.43,0,0,1,36.32,80.46c3.84-10.15-7.64-24.46-27.29-36.1C180.84,148.75,177.7,130.68,167.55,126.84Z" transform="translate(-80.88 -120.65)" fill="#7fd2f1"/>
<path d="M167.55,126.84c10.15,3.84,13.29,21.91,9,44.36a138.6,138.6,0,0,0-21.86-10.44,139.4,139.4,0,0,0-23.29-6.63C143.08,134.47,157.38,123,167.55,126.84Z" transform="translate(-80.88 -120.65)" fill="#7fd2f1"/>
<path d="M176.58,171.2c19.65,11.64,31.13,26,27.29,36.1s-21.91,13.29-44.35,9a144.28,144.28,0,0,0,17.06-45.14Z" transform="translate(-80.88 -120.65)" fill="#b769aa"/>
<path d="M159.52,216.34c22.44,4.25,40.51,1.13,44.35-9a62.42,62.42,0,0,1-80.47,36.33C133.57,247.47,147.87,236,159.52,216.34Z" transform="translate(-80.88 -120.65)" fill="#f591a2"/>
<path d="M167.55,126.84c-10.17-3.84-24.47,7.63-36.12,27.29-22.44-4.27-40.51-1.13-44.35,9A62.43,62.43,0,0,1,167.55,126.84Z" transform="translate(-80.88 -120.65)" fill="#7fd2f1"/>
<path d="M154.72,160.76a138.6,138.6,0,0,1,21.86,10.44,144.28,144.28,0,0,1-17.06,45.14,141.63,141.63,0,0,1-23.3-6.62,139.78,139.78,0,0,1-21.85-10.43A140.65,140.65,0,0,1,121,176a139.06,139.06,0,0,1,10.44-21.86A139.4,139.4,0,0,1,154.72,160.76Z" transform="translate(-80.88 -120.65)" fill="#b769aa"/>
<path d="M131.43,154.13A139.06,139.06,0,0,0,121,176a140.65,140.65,0,0,0-6.62,23.3c-19.65-11.66-31.14-26-27.29-36.12S109,149.86,131.43,154.13Z" transform="translate(-80.88 -120.65)" fill="#b769aa"/>
<path d="M136.22,209.72a141.63,141.63,0,0,0,23.3,6.62c-11.65,19.64-26,31.13-36.12,27.29s-13.29-21.9-9-44.34A139.78,139.78,0,0,0,136.22,209.72Z" transform="translate(-80.88 -120.65)" fill="#f591a2"/>
<path d="M87.08,163.17c-3.85,10.15,7.64,24.46,27.29,36.12-4.26,22.44-1.13,40.51,9,44.34A62.4,62.4,0,0,1,87.08,163.17Z" transform="translate(-80.88 -120.65)" fill="#f591a2"/>
<ellipse cx="145.47" cy="185.24" rx="62.43" ry="62.42" transform="translate(-144.21 -44.38) rotate(-24.3)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="4.29"/>
<path d="M159.52,216.34a141.63,141.63,0,0,1-23.3-6.62,139.78,139.78,0,0,1-21.85-10.43c-19.65-11.66-31.14-26-27.29-36.12s21.91-13.31,44.35-9a139.4,139.4,0,0,1,23.29,6.63,138.6,138.6,0,0,1,21.86,10.44c19.65,11.64,31.13,26,27.29,36.1S182,220.59,159.52,216.34Z" transform="translate(-80.88 -120.65)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="4.29"/>
<path d="M114.37,199.29A140.65,140.65,0,0,1,121,176a139.06,139.06,0,0,1,10.44-21.86c11.65-19.66,25.95-31.13,36.12-27.29s13.29,21.91,9,44.36a144.28,144.28,0,0,1-17.06,45.14c-11.65,19.64-26,31.13-36.12,27.29S110.11,221.73,114.37,199.29Z" transform="translate(-80.88 -120.65)" fill="none" stroke="#595a5c" stroke-miterlimit="10" stroke-width="4.29"/>
<path ref={el=>p4=el} d="M545.31,482.18C375.64,403.23,248.47,317.25,203.22,251.54" transform="translate(-80.88 -120.65)" fill="none" stroke="#b769aa" stroke-miterlimit="10" stroke-width="7.69"/>
<path ref={el=>p5=el} d="M526.17,450.24c-147.65-68.7-258.32-143.53-297.7-200.7" transform="translate(-80.88 -120.65)" fill="none" stroke="#6e69b7" stroke-miterlimit="10" stroke-width="6.69"/>
<path ref={el=>p6=el} d="M585.78,534.14c-201.59-93.8-352.68-196-406.44-274" transform="translate(-80.88 -120.65)" fill="none" stroke="#6e69b7" stroke-miterlimit="10" stroke-width="9.13"/>
</svg>
    </div>
   )

 }

export default Planets