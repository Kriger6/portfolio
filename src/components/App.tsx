import { createContext, useContext, useEffect, useRef, useState } from 'react'
import '../app.css'
import About from './about'
import Contact from './contact'
import Footer from './footer/footer'
import Introduction from "./introduction"
import NavBar from "./navBar"
import Projects from './projects'


type Theme = 'light' | 'dark';
type ThemeContextType = {
  themeMode: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: "dark",
  toggleTheme: () => {}
})

export const useThemeContext = () => useContext(ThemeContext)


const App = () => {


  const introductionRef = useRef<HTMLElement | undefined>(undefined)
  const projectsRef = useRef<HTMLElement | undefined>(undefined)
  const aboutRef = useRef<HTMLElement | undefined>(undefined)
  const contactRef = useRef<HTMLElement | undefined>(undefined)


  const introductionLinkRef = useRef<HTMLAnchorElement | undefined>(undefined)
  const projectsLinkRef = useRef<HTMLAnchorElement | undefined>(undefined)
  const aboutLinkRef = useRef<HTMLAnchorElement | undefined>(undefined)
  const contactLinkRef = useRef<HTMLAnchorElement | undefined>(undefined)


  const sections = [introductionRef, projectsRef, aboutRef, contactRef]
  const navLi = [introductionLinkRef, projectsLinkRef, aboutLinkRef, contactLinkRef]

  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.current.offsetTop;
      if (section.current === sections[0].current) {
        if (scrollY >= sectionTop - 125) {
          current = section.current.getAttribute("id");
        }
      } else if (scrollY >= sectionTop - 60) {
        current = section.current.getAttribute("id");

      }
    });


    navLi.forEach((li) => {
      li.current.classList.remove("active");
      if (li.current.classList.contains(current)) {
        li.current.classList.add("active");
      }
    });
  };

  useEffect(() => {
    navLi.forEach((li) => {
      if (li.current !== navLi[0].current && !li.current.classList.contains("active")) {
        navLi[0].current.classList.add("active")
      }
    })

  }, [])
  
  const [themeMode, setTheme] = useState<Theme>(`${window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"}`)
  
  const toggleTheme = () => {
    setTheme((prevState) => prevState === "light" ? "dark" : "light")
  }
  
    useEffect(() => {      
      if (themeMode === "light") {
        document.getElementsByTagName("html")[0].setAttribute("style", "color-scheme: light")
      } else {
        document.getElementsByTagName("html")[0].setAttribute("style", "color-scheme: dark")

      }
    }, [themeMode])

  return (
    <ThemeContext.Provider value={{themeMode, toggleTheme}}>
      <div className='app-container' id='app-container'>
        <NavBar linkRefs={{ introductionLinkRef, projectsLinkRef, aboutLinkRef, contactLinkRef }} />
        <Introduction sectionRef={{ introductionRef }} />
        <Projects sectionRef={projectsRef} />
        <About sectionRef={aboutRef} />
        <Contact sectionRef={contactRef} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App