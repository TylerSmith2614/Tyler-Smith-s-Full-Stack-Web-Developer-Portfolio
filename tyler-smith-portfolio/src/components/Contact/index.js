import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log('button worked')
    emailjs
      .sendForm(
        'service_etp6btl',
        'template_v2rc4m9',
        form.current,
        'a1YOgwrNj4kdvsJTS'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ` `, 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Get in touch with me using the form below or shoot me an email
            directly at tylersmith2614@gmail.com. I am currently looking for an
            exciting career opportunities as a Jr. Software Engineer.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="contact-inputs">
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    className="full"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Tyler Smith
          <br />
          Denver, Colorado 80210
          <br />
          <span>tylersmith2614@gmail.com</span>
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.702856, -104.971168]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[39.702856, -104.971168]}>
              <Popup>Tyler lives here, lets connect!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-pulse-rise" />
    </>
  )
}

export default Contact
