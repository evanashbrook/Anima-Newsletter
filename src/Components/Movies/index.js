import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture from '../../Assets/Asset4.png'
import './style.css'

/**
* @author
* @function Movies
**/

const Movies = (props) => {
    let back = useRef(null);
    let pic = useRef(null)
  
    useEffect(() => {
      textIntro(back) 
      textIntro2(pic)
    })
    return(
      <section>
      <div className='backbtnc' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='c-text' ref={el=>pic=el}>
        <img className='c-image' src={picture}  alt='a-text' />
      </div>
    </section>
     )
  
   }  

export default Movies