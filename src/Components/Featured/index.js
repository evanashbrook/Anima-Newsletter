import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { textIntro, textIntro2 } from '../../Animations'
import picture from '../../Assets/Asset4.png'
import picture2 from '../../Assets/SVG/AandQ.svg'
import Network1 from '../../SVGs/Network1'
import SexLines from '../../SVGs/SexLines'
import Form from '../Form'
import './style.css'

/**
* @author
* @function Author
**/

const Featured = (props) => {
  let blocknot = useRef(null);
  let blockone = useRef(null);
  let blocktwo = useRef(null);

  useEffect(() => {
    textIntro(blocknot)
    textIntro(blockone)
    textIntro(blocktwo)
  })
  return(
    <section className='featured-sec'>
    <div className='block0' ref={el=>blocknot=el}>
      <img src={picture2} alt='block-title' />
    </div>
    <div className='blocksection0' ref={el=>blockone=el}>
      <p className='qotd'>QOTW:</p>
      <p className='qotd-content'>“No tree, it is said, can grow to heaven unless its roots reach down to hell.”</p>
      <p className='qotd-author'>-Carl Jung</p>
    </div>
    <div className='blocksection' ref={el=>blocktwo=el}>
      <div className='block1'>
        <NavLink to='/blog/premium'>
        <p className='block-title1'>[Movie Article]</p>
        <p className='block-title1'>Alien: Covenant</p>
          <p className='block-title1'>"If You Created Me, Who Created You?"</p>
          </NavLink>
      </div>
      <div className='block2'>
      <NavLink to='/blog/public'>
      <p className='block-title2'>[Philosophy Article]</p>
      <p className='block-title2'>The Definition of Racism We've Been Looking For</p>
          </NavLink>
      </div>
    </div>
    <div className='blocksection2'>
      <Form />
    </div>
  </section>
   )

 }

export default Featured