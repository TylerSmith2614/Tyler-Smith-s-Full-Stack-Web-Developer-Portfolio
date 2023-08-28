import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import resumeImage from '../../assets/images/SoftwareEngineerResume.jpg'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const nameArray = ['M', 'y', '', 'R', 'e', 's', 'u', 'm', 'e']

  const nameArrayStartIdx = 5
  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1 className="resumeTitle">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={nameArrayStartIdx}
            />
          </h1>
          <div className="resume-div">
            <a href={resumeImage} download="Tyler's Resume" target="_blank">
              <button type="button" class="resume-button">
                Download Resume
              </button>
            </a>
          </div>
          <img className="resumeImage" src={resumeImage} alt="resume" />
        </div>
      </div>
      <Loader type="ball-pulse-rise" />
    </>
  )
}

export default Resume
