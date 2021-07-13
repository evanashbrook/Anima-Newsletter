import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import Form from '../Form'
import picture from '../../Assets/Asset4.png'
import './style.css'

/**
* @author
* @function Blog
**/

const Blog = (props) => {
  let back = useRef(null);
  let card = useRef(null)
  let pic = useRef(null)

  useEffect(() => {
    textIntro(back)
    textIntro(card)
    textIntro2(pic)
  })
  return(
    <section>
      <div className='backbtn' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='a-text' ref={el=>pic=el}>
        <img className='a-image' src={picture}  alt='a-text' />
      </div>
      <div className='Blog-form' ref={el=>card=el}>
      <Form/>
      </div>
    </section>
   )

 }

export default Blog