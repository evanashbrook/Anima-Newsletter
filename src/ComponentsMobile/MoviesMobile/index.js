import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture2 from '../../Assets/AlienCov.jpeg'
import picture3 from '../../Assets/Primer.png'
import picture4 from '../../Assets/Tenet-Poster.jpg'
import picture5 from '../../Assets/AHX.png'
import './style.css'
import gsap from 'gsap/gsap-core'
import SexLines from '../../SVGs/SexLines'

/**
* @author
* @function Movies
**/

const MoviesMobile = (props) => {
    let back = useRef(null);
    let pic = useRef(null)
    let week = useRef(null)
    let movie1 = useRef(null)
    let movie2 = useRef(null)
    let movie3 = useRef(null)
    let movie4 = useRef(null)
  
    useEffect(() => {
      textIntro(back) 
      gsap.from(pic, {rotateX: "100%", opacity:0, duration:2})
      gsap.from(week, {rotateX: "100%", opacity:0, duration:2})
      textIntro(movie1)
      textIntro(movie2)
      textIntro(movie3)
      textIntro(movie4)
    })
    return(
      <section>
      <div className='backbtnc-m' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='c-text-m' ref={el=>pic=el}>
        <p className='movies-title-m'>Anima Movie Picks</p>
      </div>
      <div className='c-subtext-m' ref={el=>week=el}>
        <p className='week1-m'>07/16 :</p>
      </div>
      <div className='movie-1-m' ref={el=>movie1=el} >
          <div className='primer-wrap-m'>
          <img src={picture3} className='primer-m' alt='primer-poster-m' />
          <ul className='movie-1-list-m'>
              <li>Primer</li>
              <li>2004</li>
              <li>Sci-Fi / Time Travel</li>
              <li>Dir: Shane Corruth</li>
          </ul>
          </div>
      </div>
      <div className='movie-2-m' ref={el=>movie2=el} >
          <div className='tenet-wrap-m'>
          <img src={picture4} className='tenet-m' alt='tenet-poster-m' />
          <ul className='movie-2-list-m'>
              <li>Tenet</li>
              <li>2020</li>
              <li>Sci-Fi / Action</li>
              <li>Dir: Christopher Nolan</li>
          </ul>
          </div>
      </div>
      <div className='movie-3-m' ref={el=>movie3=el} >
          <div className='aliencov-wrap-m'>
          <img src={picture2} className='aliencov-m' alt='aliencov-poster-m' />
          <ul className='movie-3-list-m'>
              <li>Alien: Covenant</li>
              <li>2017</li>
              <li>Sci-Fi / Horror</li>
              <li>Ridley Scott</li>
          </ul>
          </div>
      </div>
      <div className='movie-4-m' ref={el=>movie4=el} >
          <div className='ahx-wrap-m'>
          <img src={picture5} className='ahx-m' alt='ahx-poster-m' />
          <ul className='movie-4-list-m'>
              <li>American History X</li>
              <li>1998</li>
              <li>Crime/Drama</li>
              <li>Tony Kaye</li>
          </ul>
          </div>
      </div>
      <div className='sexlines3-m'>
      <SexLines/>
    </div>
    </section>
     )
  
   }  

export default MoviesMobile