import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture from '../../Assets/Asset4.png'
import Network1 from '../../SVGs/Network1'
import SexLines from '../../SVGs/SexLines'
import './style.css'

/**
* @author
* @function Author
**/

const Author = (props) => {
  let back = useRef(null);

  useEffect(() => {
    textIntro(back)
  })
  return(
    <section>
    <div className='backbtnb' ref={el=>back=el}>
      <NavLink to='/h'>Back 2 Home</NavLink>
    </div>
    <div className='sexlines'>
      <SexLines/>
    </div>
  </section>
   )

 }

export default Author