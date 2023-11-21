import Logo from "../logoContainer"
import './index.css'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { useEffect, useState } from "react"
import { useThemeContext } from "../App"
import BurgerMenu from "../burger"
import BurgerIcon from "../burgerIcon"
import NavLinks from "./navLinks"


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
      <NavLinks themeIcon={theme} handleTheme={handleTheme} menuToggle={menuToggle} setMenuToggle={setMenuToggle} linkRefs={linkRefs} />
      <BurgerIcon theme={themeMode} menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

    </header>
  )
}

export default NavBar