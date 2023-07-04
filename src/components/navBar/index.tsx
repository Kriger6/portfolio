import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"

const NavBar = () => {
  return (
    <header className="navbar" style={{ background: '#171717' }}  >
      <Logo />
      <div className="menu-links">
        <a href="/#introduction">Introduction</a>
        <a href="/#projects">Projects</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <div className="display-mode">
          <DisplayMode />
        </div>
      </div>
    </header>
  )
}

export default NavBar