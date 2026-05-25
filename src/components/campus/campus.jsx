import React from 'react'
import './campus.css'
import gallery1 from '../../assets/gallery-1.jpeg'
import gallery2 from '../../assets/gallery-2.jpeg'
import gallery3 from '../../assets/gallery-3.jpeg'
import gallery4 from '../../assets/gallery-4.jpeg'
import white_arrow from '../../assets/white-arrow.png'

const campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="gallery1"/>
        <img src={gallery2} alt="gallery2"/>
        <img src={gallery3} alt="gallery3"/>
        <img src={gallery4} alt="gallery4"/>
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow} alt="arrow"/></button>
    </div>
  )
}

export default campus
