import './index.scss'
import tylerSmithLogo from '../../../assets/images/tylersmithlogo.png'

const TylersLogo = () => {
  return (
    <div className="logo-container">
      <img
        className="codingLogo"
        src={tylerSmithLogo}
        alt="Tyler Smith Coding Logo"
      />
    </div>
  )
}
export default TylersLogo
