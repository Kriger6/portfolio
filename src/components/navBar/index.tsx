import Logo from "../logoContainer"
import sun from "../../assets/sun.svg"
import './index.css'

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
          <img src="../../assets/sun.svg" alt="dark mode/light mode" />
        </div>
      </div>
    </header>
  )
}

export default NavBar