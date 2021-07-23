import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { SVGintro, textIntro, textIntro2 } from '../../Animations'
import SexLines from '../../SVGs/SexLines'
import './style.css'
import FormMobile from '../FormMobile'

/**
* @author
* @function Blog
**/

const BlogMobile = (props) => {
  let back = useRef(null);
  let card = useRef(null)

  useEffect(() => {
    textIntro(back)
    textIntro(card)
  })
  return(
    <section className='blog-sec-m'>
      <div className='backbtn-m' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='Blog-form-m' ref={el=>card=el}>
      <FormMobile/>
      </div>
      <div className='sexlines2-m'>
      <SexLines/>
    </div>
    </section>
   )

 }

export default BlogMobile