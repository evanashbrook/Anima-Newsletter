import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture2 from '../../Assets/AlienCov.jpeg'
import picture3 from '../../Assets/Primer.png'
import picture4 from '../../Assets/Tenet-Poster.jpg'
import picture5 from '../../Assets/AHX.png'
import picture6 from '../../Assets/Whiplash.png'
import picture7 from '../../Assets/the-hunt-10.png'
import picture8 from '../../Assets/stalker.png'
import picture9 from '../../Assets/sicario.jpeg'
import picture10 from '../../Assets/fightclub.png'
import './style.css'
import gsap from 'gsap/gsap-core'
import SexLines from '../../SVGs/SexLines'
import recs from '../../Assets/SVG/Recommendations.svg'

/**
* @author
* @function Movies
**/

const Movies = (props) => {
    let pic = useRef(null)
    let movie1 = useRef(null)
    let movie2 = useRef(null)
    let movie3 = useRef(null)
    let movie4 = useRef(null)
    let movie5 = useRef(null)
    let movie6 = useRef(null)
    let movie7 = useRef(null)
    let movie8 = useRef(null)
  
    useEffect(() => { 
      gsap.from(pic, {rotateX: "100%", opacity:0, duration:2})
      textIntro(movie1)
      textIntro(movie2)
      textIntro(movie3)
      textIntro(movie4)
      textIntro(movie5)
      textIntro(movie6)
      textIntro(movie7)
      textIntro(movie8)
    })
    return(
      <section className='movies'>
      <div className='c-text' ref={el=>pic=el}>
        <img className='wl-title' src={recs} alt='recs' />
      </div>
      <div className='movie-sec'>
      <div className='movie-1' ref={el=>movie1=el} >
          <div className='primer-wrap'>
          <img src={picture3} className='primer' alt='primer-poster' />
          <ul className='movie-1-list'>
              <li>Primer</li>
              <li>2004</li>
              <li>Shane Corruth</li>
              <li>Sci-Fi / Time Travel</li>
              <li>Watch On: Amazon Prime, Apple Tv</li>
          </ul>
          </div>
      </div>
      <div className='movie-2' ref={el=>movie2=el} >
          <div className='tenet-wrap'>
          <img src={picture4} className='tenet' alt='tenet-poster' />
          <ul className='movie-2-list'>
              <li>Tenet</li>
              <li>2020</li>
              <li>Christopher Nolan</li>
              <li>Sci-Fi / Action</li>
              <li>Watch On: Amazon Prime, HBO Max, Hulu, Apple Tv</li>
          </ul>
          </div>
      </div>
      </div>
      <div className='movie-sec2'>
      <div className='movie-3' ref={el=>movie3=el} >
          <div className='aliencov-wrap'>
          <img src={picture2} className='aliencov' alt='aliencov-poster' />
          <ul className='movie-3-list'>
              <li>Alien: Covenant</li>
              <li>2017</li>
              <li>Ridley Scott</li>
              <li>Sci-Fi / Horror</li>
              <li>Watch On: Amazon Prime, Hulu, Apple Tv</li>
          </ul>
          </div>
      </div>
      <div className='movie-4' ref={el=>movie4=el} >
          <div className='ahx-wrap'>
          <img src={picture5} className='ahx' alt='ahx-poster' />
          <ul className='movie-4-list'>
              <li>American History X</li>
              <li>1998</li>
              <li>Tony Kaye</li>
              <li>Crime/Drama</li>
              <li>Watch On: Amazon Prime, HBO Max, Apple Tv</li>
          </ul>
          </div>
      </div>
      </div>
      <div className='movie-sec3'>
      <div className='movie-5' ref={el=>movie5=el} >
          <div className='whiplash-wrap'>
          <img src={picture6} className='whiplash' alt='whiplash-poster' />
          <ul className='movie-5-list'>
              <li>Whiplash</li>
              <li>2014</li>
              <li>Damien Chazelle</li>
              <li>Psychological Drama</li>
              <li>Watch On: Amazon Prime, Hulu, Apple Tv</li>
          </ul>
          </div>
      </div>
      <div className='movie-6' ref={el=>movie6=el} >
          <div className='thehunt-wrap'>
          <img src={picture7} className='thehunt' alt='thehunt-poster' />
          <ul className='movie-6-list'>
              <li>The Hunt</li>
              <li>2012</li>
              <li>Thomas Vinterberg</li>
              <li>Drama</li>
              <li>Watch On: Amazon Prime, Apple Tv</li>
          </ul>
          </div>
      </div>
      </div>
      <div className='movie-sec4'>
      <div className='movie-7' ref={el=>movie7=el} >
          <div className='stalker-wrap'>
          <img src={picture8} className='stalker' alt='stalker-poster' />
          <ul className='movie-7-list'>
              <li>Stalker</li>
              <li>1979</li>
              <li>Andrei Tarkovsky</li>
              <li>Sci-Fi / Art-Drama</li>
              <li>Watch On: Amazon Prime, Apple Tv</li>
          </ul>
          </div>
      </div>
      <div className='movie-8' ref={el=>movie8=el} >
          <div className='sicario-wrap'>
          <img src={picture9} className='sicario' alt='sicario-poster' />
          <ul className='movie-8-list'>
              <li>Sicario</li>
              <li>2015</li>
              <li>Denis Villeneuve</li>
              <li>Crime / Thriller</li>
              <li>Watch On: Amazon Prime</li>
          </ul>
          </div>
      </div>
      </div>
    </section>
     )
  
   }  

export default Movies