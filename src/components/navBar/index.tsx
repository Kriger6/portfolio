import Logo from "../logoContainer"
import './index.css'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { useEffect, useState } from "react"
import { useThemeContext } from "../App"
import BurgerIcon from "../burgerIcon"
import NavLinks from "./navLinks"

export interface Refs {
  linkRefs: {
    introductionLinkRef: React.MutableRefObject<HTMLAnchorElement>
    projectsLinkRef: React.MutableRefObject<HTMLAnchorElement>
    aboutLinkRef: React.MutableRefObject<HTMLAnchorElement>
    contactLinkRef: React.MutableRefObject<HTMLAnchorElement>
  }
}

const NavBar = ({linkRefs}: Refs) => {
  const { themeMode } = useThemeContext()


  const [theme, setTheme] = useState<string>(null)
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
      <NavLinks themeIcon={theme} handleTheme={handleTheme} menuToggle={menuToggle} setMenuToggle={setMenuToggle} linkRefs={linkRefs} />
      <BurgerIcon theme={themeMode} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

    </header>
  )
}

export default NavBar