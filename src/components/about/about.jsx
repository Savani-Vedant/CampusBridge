import React from 'react'
import './about.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'

const about = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="about" className="about-img"/>
        <img src={play_icon} alt="play" className="play-icon" onClick={() => setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Shaping Future Leaders for a Better Tomorrow</h2>
        <p>Begin a rewarding academic journey with our university’s advanced education programs. Our modern curriculum is created to provide students with the knowledge, abilities, and practical experiences essential for success in the ever-evolving field of education.</p>
        <p>With a strong emphasis on creativity, experiential learning, and dedicated mentorship, our programs help future educators create a positive influence in classrooms, institutions, and communities.</p>
        <p>Whether your goal is to become a teacher, academic advisor, administrator, or education leader, our wide variety of programs offers the ideal path to achieve your ambitions and maximize your potential in transforming the future of education.</p>
      </div>
    </div>
  )
}

export default about
