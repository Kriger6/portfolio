import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"

const NavBar = ({linkRefs}: any) => {

  
  return (
    <header className="navbar"  >
      <Logo />
      <section style={{width: '1px', height: '1px'}}></section>
      <div className="menu-links">
        <a className="link-animation introduction" href="#app-container" ref={linkRefs.introRef}>Introduction</a>
        <a className="link-animation projects" href="#projects" ref={linkRefs.proRef}>Projects</a>
        <a className="link-animation about" href="#about" ref={linkRefs.aboutRef}>About</a>
        <a className="link-animation contact" href="#contact" ref={linkRefs.contactRef}>Contact</a>
        <div className="display-mode">
          <DisplayMode />
        </div>
      </div>
    </header>
  )
}

export default NavBar