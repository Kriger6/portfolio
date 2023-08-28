import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"

const NavBar = ({linkRefs}: any) => {

  
  return (
    <header className="navbar"  >
      <Logo />
      <div className="menu-links">
        <a className="link-animation introduction" href="#app-container" ref={linkRefs.introductionLinkRef}>Introduction</a>
        <a className="link-animation projects" href="#projects" ref={linkRefs.projectsLinkRef}>Projects</a>
        <a className="link-animation about" href="#about" ref={linkRefs.aboutLinkRef}>About</a>
        <a className="link-animation contact" href="#contact" ref={linkRefs.contactLinkRef}>Contact</a>
        <div className="display-mode">
          <DisplayMode />
        </div>
      </div>
    </header>
  )
}

export default NavBar