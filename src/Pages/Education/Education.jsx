import khit from '../../assets/khit-logo.png';
import nagarjunaSchool from '../../assets/nagarjuna-school-logo.jpeg';
import sims from '../../assets/sims-logo.jpg';
import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div>
      <center>
        <h1>Education Details</h1>
      </center>
      <div className='collegesDisplay'>
        <div className='collegeDetails'>
            <div>
                <h3>Kallam Haranadhareddy Institute of Technology</h3>
                <div className='studyDetails'>
                <p>Btech in AIML</p>
                <p>2020 - 2024</p>
                <p>CGPA: 7.16 / 10</p>
                </div>
            </div>
            <div>
                <img src={khit} className='collegeImages' />
            </div>
        </div>
        <div className='collegeDetails'>
            <div>
                <h3>SIMS Junior College</h3>
                <div className='studyDetails'>
                <p>Intermediate in MPC</p>
                <p>2018 - 2020</p>
                <p>CGPA: 7.45 / 10</p>
                </div>
            </div>
            <div>
                <img src={sims} className='collegeImages' />
            </div>
        </div>
        <div className='collegeDetails'>
            <div>
                <h3>Nagarjuna High School</h3>
                <div className='studyDetails'>
                <p>10th Class</p>
                <p>2017 - 2018</p>
                <p>CGPA: 8.8 / 10</p>
                </div>
            </div>
            <div>
                <img src={nagarjunaSchool} className='collegeImages' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
