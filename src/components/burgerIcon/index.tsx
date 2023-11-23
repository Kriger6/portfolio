import { useEffect } from "react"
import "./index.css"

interface BurgerProps {
  theme: string;
  menuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerIcon = ({ theme, menuToggle, setMenuToggle }: BurgerProps) => {
  useEffect(() => {
    if (menuToggle === true) {
      document.getElementsByTagName("body")[0].classList.add("hidden");
      document.addEventListener("click", closeMenuOnOutsideClick)
    } else {
      document.getElementsByTagName("body")[0].classList.remove("hidden");
    }

    return () => document.removeEventListener("click", closeMenuOnOutsideClick)

  }, [menuToggle])
  

  const closeMenuOnOutsideClick = (e: PointerEvent) => {
    if (e.clientX < window.innerWidth - (window.innerWidth * 0.8 - 15)) {
      setMenuToggle(false)
    }    
  }

  return (
    <div className="burger-icon" onClick={() => setMenuToggle(!menuToggle)}>
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
        <path stroke={theme === "dark" ? "#ededed" : "#373737"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7" />
      </svg>
    </div>
  )
}

export default BurgerIcon