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

const FeaturedMobile = (props) => {
  let back = useRef(null);
  let blocknot = useRef(null);
  let blockone = useRef(null);
  let blocktwo = useRef(null);

  useEffect(() => {
    textIntro(back)
    textIntro(blocknot)
    textIntro(blockone)
    textIntro(blocktwo)
  })
  return(
    <section>
    <div className='backbtnb-m' ref={el=>back=el}>
      <NavLink to='/h'>Back 2 Home</NavLink>
    </div>
    <div className='block0-m' ref={el=>blocknot=el}>
    <p className='block-title-m'>Featured Content</p>
    </div>
    <div className='blocksection-m'>
      <div className='block1-m' ref={el=>blockone=el}>
        <NavLink to='/featured/premium'>
        <p className='block-title1-m'>[American History X]</p>
          <p className='block-title1-m'>Race, Consciousness and Human Nature</p>
          </NavLink>
      </div>
      <div className='block2-m' ref={el=>blocktwo=el}>
      <NavLink to='/featured/public'>
      <p className='block-title2-m'>[Alien: Covenant]</p>
          <p className='block-title2-m'>"If You Created Me, Who Created You?"</p>
          </NavLink>
      </div>
    </div>
    <div className='sexlines-m'>
      <SexLines/>
    </div>
  </section>
   )

 }

export default FeaturedMobile