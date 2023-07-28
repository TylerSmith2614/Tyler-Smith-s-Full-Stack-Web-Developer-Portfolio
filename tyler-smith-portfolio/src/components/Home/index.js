import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoT3 from '../../assets/images/LogoT3.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const nameArray = ['y', 'l', 'e', 'r', '.']
  const descArray = [
    'J',
    'r',
    '.',
    ' ',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]
  const buildArray = [
    'I',
    ' ',
    'b',
    'u',
    'i',
    'l',
    'd',
    ' ',
    'b',
    'e',
    'a',
    'u',
    't',
    'i',
    'f',
    'u',
    'l',
    ' ',
    't',
    'h',
    'i',
    'n',
    'g',
    's',
    ' ',
    'f',
    'o',
    'r',
    ' ',
    't',
    'h',
    'e',
    ' ',
    'w',
    'e',
    'b',
    '.',
  ]

  const nameArrayStartIdx = 15
  const descArrayStartIdx = nameArrayStartIdx + nameArray.length
  const buildArrayStartIdx = descArrayStartIdx + descArray.length

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoT3} alt="T logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={nameArrayStartIdx}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={descArray}
              idx={descArrayStartIdx}
            />
            <br />{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={buildArray}
              idx={buildArrayStartIdx}
            />
          </h1>
          <Link to="/contact" className="button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse-rise" />
    </>
  )
}

export default Home
