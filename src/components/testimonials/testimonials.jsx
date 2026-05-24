import React, {useRef} from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const testimonials = () => {

    const slider = useRef();
    let tx = 0;
  const mobileView = () => window.innerWidth <= 800;

    const slideForward = () => {
    const maxShift = mobileView() ? -75 : -50;
    if(tx > maxShift){
            tx -= 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`; 
    }
    
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`; 
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="back icon" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
              <div className='slide'>
                <div className='user-info'>
                    <img src={user1} alt="user1" />
                    <div>
                        <h3>Sophia Miller</h3>
                        <span>CampusBridge, Canada</span>
                    </div>
              </div>
                <p>Choosing CampusBridge was the perfect step toward my future career. The practical learning approach, supportive mentors, and inspiring campus atmosphere made my journey truly rewarding.</p>
              </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user2} alt="user1" />
                        <div>
                            <h3>Daniel Roberts</h3>
                            <span>CampusBridge, Australia</span>
                        </div>
                    </div>
                    <p>My time at CampusBridge has been exceptional. The university’s commitment to quality education, innovative programs, and student success has given me the confidence to achieve my goals.</p>
                </div>
            </li>
            <li>        
              <div className='slide'>
                <div className='user-info'>
                  <img src={user3} alt="user2" />
                  <div>
                    <h3>Emma Wilson</h3>
                    <span>CampusBridge, USA</span>
                  </div>
                </div>
                <p>Enrolling at CampusBridge was one of the best choices I made. The engaging curriculum, advanced facilities, and encouraging academic community have made my educational journey unforgettable.</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='user-info'>
                  <img src={user4} alt="user4" />
                  <div>
                    <h3>James Anderson</h3>
                    <span>CampusBridge, UK</span>
                  </div>
                </div>
                <p>Studying at CampusBridge has been an incredible experience for me. The welcoming environment, experienced faculty, and modern learning resources have helped me grow both academically and personally.</p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default testimonials
