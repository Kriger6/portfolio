import Logo from "../logoContainer"
import './index.css'
import DisplayMode from "../displayMode"
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { useEffect, useState } from "react"
import { useThemeContext } from "../App"
import BurgerMenu from "../burger"
import BurgerIcon from "../burgerIcon"


const NavBar = ({ linkRefs }: any) => {
  const { themeMode } = useThemeContext()


  const [theme, setTheme] = useState()
  const [menuToggle, setMenuToggle] = useState<boolean>(false)



  useEffect(() => {
    setTheme(themeMode === "dark" ? sun : moon)
  }, [])

  const handleTheme = () => {
    setTheme(theme === sun ? moon : sun)
  }




  return (
    <header className="navbar" >
      <Logo />
      <div className="menu-links">
        <a className="link-animation introduction" href="#app-container" ref={linkRefs.introductionLinkRef}>Introduction</a>
        <a className="link-animation projects" href="#projects" ref={linkRefs.projectsLinkRef}>Projects</a>
        <a className="link-animation about" href="#about" ref={linkRefs.aboutLinkRef}>About</a>
        <a className="link-animation contact" href="#contact" ref={linkRefs.contactLinkRef}>Contact</a>
        <div className="display-mode">
          <DisplayMode themeIcon={theme} handleTheme={handleTheme} />
        </div>
      </div>
      <BurgerIcon theme={themeMode} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <BurgerMenu theme={theme} handleTheme={handleTheme} linkRefs={linkRefs} menuToggle={menuToggle} />

    </header>
  )
}

export default NavBar