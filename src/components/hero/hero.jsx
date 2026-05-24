import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Inspire brighter futures for a stronger world</h1>
        <p>Our innovative curriculum is crafted to equip students with the knowledge, skills, and experiences required to thrive in the evolving world of education.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="Arrow"/></button>
      </div>
    </div>
  )
}

export default hero
