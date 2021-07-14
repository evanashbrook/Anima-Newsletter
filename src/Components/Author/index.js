import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture from '../../Assets/Asset4.png'
import './style.css'

/**
* @author
* @function Author
**/

const Author = (props) => {
  let back = useRef(null);
  let pic = useRef(null)

  useEffect(() => {
    textIntro(back) 
    textIntro2(pic)
  })
  return(
    <section>
    <div className='backbtnb' ref={el=>back=el}>
      <NavLink to='/h'>Back 2 Home</NavLink>
    </div>
    <div className='b-text' ref={el=>pic=el}>
      <img className='b-image' src={picture}  alt='a-text' />
    </div>
  </section>
   )

 }

export default Author