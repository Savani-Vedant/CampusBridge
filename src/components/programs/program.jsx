import React from 'react'
import './program.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program1_icon from '../../assets/program-icon-1.png'
import program2_icon from '../../assets/program-icon-2.png'
import program3_icon from '../../assets/program-icon-3.png'

const program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={program1} alt="program1"/>
        <div className='caption'>
          <img src={program1_icon} alt="program1-icon"/>
          <p>Graduate Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program2} alt="program2"/>
        <div className='caption'>
          <img src={program2_icon} alt="program2-icon"/>
          <p>Master Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={program3} alt="program3"/>
        <div className='caption'>
          <img src={program3_icon} alt="program3-icon"/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default program
