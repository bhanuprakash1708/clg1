import React, { useRef } from 'react'
import './Testimonials.css'
import ni from '../../assets/next-icon.png'
import bi from '../../assets/back-icon.png'
import u1 from '../../assets/user-1.png'
import u2 from '../../assets/user-2.png'
import u3 from '../../assets/user-3.png'
import u4 from '../../assets/user-4.png'

function Testimonial() {
  let slider =useRef();
  let tx=0;
  const slideForward=()=>{
    if(tx>-50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img src={ni} alt="" className='next-btn' onClick={slideForward}/>
        <img src={bi} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
          <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className="user-info">
                <img src={u1} alt="" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity,USA</span>
                </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best
                  decisions I've made. The supportive community, state-of-the-art
                  facilities, and commitment to academic excellence have truly exceeded
                  my expectatins.
                </p>
              </div>
            </li>

            <li>
              <div className='slide'>
                <div className="user-info">
                <img src={u2} alt="" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity,USA</span>
                </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best
                  decisions I've made. The supportive community, state-of-the-art
                  facilities, and commitment to academic excellence have truly exceeded
                  my expectatins.
                </p>
              </div>
            </li>

            <li>
              <div className='slide'>
                <div className="user-info">
                <img src={u3} alt="" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity,USA</span>
                </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best
                  decisions I've made. The supportive community, state-of-the-art
                  facilities, and commitment to academic excellence have truly exceeded
                  my expectatins.
                </p>
              </div>
            </li>

            <li>
              <div className='slide'>
                <div className="user-info">
                <img src={u4} alt="" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity,USA</span>
                </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best
                  decisions I've made. The supportive community, state-of-the-art
                  facilities, and commitment to academic excellence have truly exceeded
                  my expectatins.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonial