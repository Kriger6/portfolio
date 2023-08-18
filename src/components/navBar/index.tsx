import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"

const NavBar = () => {
  return (
    <header className="navbar"  >
      <Logo />
      <div className="menu-links">
        <a className="link-animation" href="#app-container">Introduction</a>
        <a className="link-animation" href="#projects">Projects</a>
        <a className="link-animation" href="#about">About</a>
        <a className="link-animation" href="#contact">Contact</a>
        <div className="display-mode">
          <DisplayMode />
        </div>
      </div>
    </header>
  )
}

export default NavBar