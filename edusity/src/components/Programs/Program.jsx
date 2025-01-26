import React from 'react'
import './Program.css'
import pg1 from '../../assets/program-1.png'
import pg2 from '../../assets/program-2.png'
import pg3 from '../../assets/program-3.png'
import pgi1 from '../../assets/program-icon-1.png'
import pgi2 from '../../assets/program-icon-2.png'
import pgi3 from '../../assets/program-icon-3.png'


function Program() {
  return (
    <div className='programs container'>
        <div className='program'>
            <img src={pg1} alt="" />
            <div className='caption'>
                <img src={pgi1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={pg2} alt="" />
            <div className='caption'>
                <img src={pgi2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={pg3} alt="" />
            <div className='caption'>
                <img src={pgi3} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Program