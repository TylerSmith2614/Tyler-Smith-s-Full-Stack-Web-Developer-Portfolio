import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const aboutMe = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          {/* Your animated letters component can be added here if needed */}
        </h1>
      </div>

      {/* Add the new HTML code here */}
      <div className="container">
        <div className="row">
          <div className="about-me-col-1">
            <img src="./Assets/Images/Smith Tyler_crop.jpg" alt="" />
          </div>
          <div className="about-me-col-2">
            <p className="sub-title">About Me</p>
            <p>
              Hi! My name is Tyler Smith and I am a new software engineer. I
              spent the past decade working in the business world and education.
              I am really excited to develop my programming skills!
            </p>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick="opentab('skills')">
                Skills
              </p>
              <p className="tab-links" onClick="opentab('experience')">
                Experience
              </p>
              <p className="tab-links" onClick="opentab('education')">
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>Full Stack Developer</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/IOS Devices
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>Teacher</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>Bootcamp</span>
                  <br />
                  Web Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/IOS Devices
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>Colorado State University</span>
                  <br />
                  Designing Web/App Interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/IOS Devices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutMe
