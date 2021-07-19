import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture2 from '../../Assets/AlienCov.jpeg'
import picture3 from '../../Assets/Primer.png'
import picture4 from '../../Assets/Tenet-Poster.jpg'
import picture5 from '../../Assets/AHX.png'
import './style.css'
import gsap from 'gsap/gsap-core'

/**
* @author
* @function Movies
**/

const Movies = (props) => {
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
      <div className='backbtnc' ref={el=>back=el}>
        <NavLink to='/h'>Back 2 Home</NavLink>
      </div>
      <div className='c-text' ref={el=>pic=el}>
        <p className='movies-title'>Anima Movie Picks</p>
      </div>
      <div className='c-subtext' ref={el=>week=el}>
        <p className='week1'>07/16 :</p>
      </div>
      <div className='movie-1' ref={el=>movie1=el} >
          <div className='primer-wrap'>
          <img src={picture3} className='primer' alt='primer-poster' />
          <ul className='movie-1-list'>
              <li>Primer</li>
              <li>2004</li>
              <li>Sci-Fi / Time Travel</li>
              <li>Dir: Shane Corruth</li>
          </ul>
          </div>
      </div>
      <div className='movie-2' ref={el=>movie2=el} >
          <div className='tenet-wrap'>
          <img src={picture4} className='tenet' alt='tenet-poster' />
          <ul className='movie-2-list'>
              <li>Tenet</li>
              <li>2020</li>
              <li>Sci-Fi / Action</li>
              <li>Dir: Christopher Nolan</li>
          </ul>
          </div>
      </div>
      <div className='movie-3' ref={el=>movie3=el} >
          <div className='aliencov-wrap'>
          <img src={picture2} className='aliencov' alt='aliencov-poster' />
          <ul className='movie-3-list'>
              <li>Alien: Covenant</li>
              <li>2017</li>
              <li>Sci-Fi / Horror</li>
              <li>Ridley Scott</li>
          </ul>
          </div>
      </div>
      <div className='movie-4' ref={el=>movie4=el} >
          <div className='ahx-wrap'>
          <img src={picture5} className='ahx' alt='ahx-poster' />
          <ul className='movie-4-list'>
              <li>American History X</li>
              <li>1998</li>
              <li>Crime/Drama</li>
              <li>Tony Kaye</li>
          </ul>
          </div>
      </div>
    </section>
     )
  
   }  

export default Movies