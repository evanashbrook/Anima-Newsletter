import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SVGintro, textIntro, textIntro2 } from '../../Animations'
import Form from '../Form'
import picture from '../../Assets/Asset4.png'
import SexLines from '../../SVGs/SexLines'
import './style.css'

/**
* @author
* @function Blog
**/

const Blog = (props) => {
  let back = useRef(null);
  let card = useRef(null)
  let sex = useRef(null)

  useEffect(() => {
    textIntro(back)
    textIntro(card)
    SVGintro(sex)
  })
  return(
    <section className='blog-sec'>
      <div className='backbtn' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='Blog-form' ref={el=>card=el}>
      <Form/>
      </div>
      <div className='sexlines2' ref={el=>sex=el}>
      <SexLines/>
    </div>
    </section>
   )

 }

export default Blog