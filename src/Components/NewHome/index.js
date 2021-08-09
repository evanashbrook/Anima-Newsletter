import React, { useEffect, useRef } from 'react'
import './style.css'
import Welcome from '../../Assets/SVG/HomeGreeting.svg'
import planets from '../../Assets/LogoSphere.svg'
import { NavLink } from 'react-router-dom'
import Planets from '../../SVGs/Planets'
import gsap from 'gsap'
import MyMapWithAutocomplete from '../GMap'

/**
* @author
* @function NewHome
**/

const NewHome = (props) => {
  let welcome = useRef(null)

  useEffect(() => {
    gsap.from(welcome, {rotateX: 90, duration: 1, delay: 1})
  })
  return(
   <section className='newHome-sec'>
     <div className='welcome'>
         <img ref={el=>welcome=el} src={Welcome} alt='welcome' />
     </div>
     <div className='orbit'>
         <Planets />
     </div>
   </section>
   )

 }

export default NewHome