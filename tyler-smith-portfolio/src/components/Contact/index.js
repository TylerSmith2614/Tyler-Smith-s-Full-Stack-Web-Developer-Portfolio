import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React, {useState, useEffect } from 'react'



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
 
    useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)


    return () => clearTimeout(timeoutId)
  }, [])



  return (
<>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a','c','t',` `, 'M', 'e']}
              idx={15}
            />
          </h1>
        <p>Get in touch with me using the form below or shoot me an email directly at tylersmith2614@gmail.com. I am currently looking for an exciting carrer opportunities as a Jr. Software Engineer.</p>
      </div>
      </div>
      <Loader type="ball-pulse-rise" />
</>
  )
}

export default Contact
