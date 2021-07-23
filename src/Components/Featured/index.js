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

const Featured = (props) => {
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
    <div className='backbtnb' ref={el=>back=el}>
      <NavLink to='/h'>Back 2 Home</NavLink>
    </div>
    <div className='block0' ref={el=>blocknot=el}>
    <p className='block-title'>Featured Content</p>
    </div>
    <div className='blocksection'>
      <div className='block1' ref={el=>blockone=el}>
        <NavLink to='/featured/premium'>
        <p className='block-title1'>[American History X]</p>
          <p className='block-title1'>Race, Consciousness and Human Nature</p>
          </NavLink>
      </div>
      <div className='block2' ref={el=>blocktwo=el}>
      <NavLink to='/featured/public'>
      <p className='block-title2'>[Alien: Covenant]</p>
          <p className='block-title2'>"If You Created Me, Who Created You?"</p>
          </NavLink>
      </div>
    </div>
    <div className='sexlines'>
      <SexLines/>
    </div>
  </section>
   )

 }

export default Featured