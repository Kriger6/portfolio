import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"

const NavBar = ({introRef, proRef}: any) => {

  
  return (
    <header className="navbar"  >
      <Logo />
      <div className="menu-links">
        <a className="link-animation introduction" href="#app-container" ref={introRef}>Introduction</a>
        <a className="link-animation projects" href="#projects" ref={proRef}>Projects</a>
        <a className="link-animation about" href="#about">About</a>
        <a className="link-animation contact" href="#contact">Contact</a>
        <div className="display-mode">
          <DisplayMode />
        </div>
      </div>
    </header>
  )
}

export default NavBar