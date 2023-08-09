import './index.scss'
import { Link, NavLink } from 'react-router-dom'
// import LogoT from '../../assets/images/LogoT'
import LogoT2 from '../../assets/images/LogoT2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faEnvelope,
  faHome,
  faUser,
  faEye,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {

  return (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoT2} alt="Tyler's Coding Logo"></img>
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faEye} color="white" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="resume-link"
        to="/resume"
      >
        <FontAwesomeIcon icon={faFile} color="white" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/tylercodes/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TylerSmith2614"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </li>
    </ul>
    <FontAwesomeIcon
      icon={faBars}
      color="#21e3df"
      size="3x"
      className="menu-bars"
    />
  </div>
  )
}

export default Sidebar
