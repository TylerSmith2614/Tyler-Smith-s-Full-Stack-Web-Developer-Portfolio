import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import tylerPic from '../../assets/images/tylerSmith.jpg'
import { useEffect, useState } from 'react'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutMe = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ` `, 'M', 'e']}
              idx={15}
            />
            <img className="face" src={tylerPic} alt="T logo" />
          </h1>
          <p>
            I am a Jr. Software Engineer excited to join a team and work on
            building exciting applications. I have a unique background as a
            Business and Math teacher that has helped me develop strong
            analytical and communication skills that would make me a valuable
            team member on a software engineering team.{' '}
          </p>
          <p>
            I am based out of Denver, CO and I am described as eager to learn,
            positive, always ready for new challenges, and determined to achieve
            my goals.{' '}
          </p>
          <p>
            I have completed a Full Stack Coding Bootcamp at the University of
            Denver and have built projects using:
          </p>
          <ul className="coding-skills">
            <li>
              Computer Science applied to JavaScript
            </li>
            <li>Browser Based Technologies (HTML, CSS, JavaScript, jQuery)</li>
            <li>Databases (MySQL, MongoDB)</li>
            <li>Deployment (Heroku, Git)</li>
            <li>Quality Assurance (Writing Tests)</li>
            <li>Server Side Development (Node.js, Express, MERN Stack)</li>
          </ul>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#21e3df" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#21e3df" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#21e3df" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#21e3df" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#21e3df" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#21e3df" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse-rise" />
    </>
  )
}

export default AboutMe
