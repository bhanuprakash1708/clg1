import React from 'react'
import './About.css'
import i1 from '../../assets/about.png'
import pi from '../../assets/play-icon.png'

function About({setplaystate}) {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={i1} alt="" className='about-img'/>
            <img src={pi} alt="" className='play-icon'onClick={()=>{
              setplaystate(true)
            }}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores possimus amet asperiores optio expedita fugit magni labore sequi iusto officia!</p>
        </div>
    </div>
  )
}

export default About