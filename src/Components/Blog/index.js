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
  let card = useRef(null)

  useEffect(() => {
    textIntro(card)
  })
  return(
    <section className='blog-sec'>
      <div className='Blog-form' ref={el=>card=el}>
      <Form/>
      </div>
    </section>
   )

 }

export default Blog