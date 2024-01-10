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
  toggleTheme: () => { }
})

export const useThemeContext = () => useContext(ThemeContext)


const App = () => {

  const introductionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)


  const introductionLinkRef = useRef<HTMLAnchorElement>(null)
  const projectsLinkRef = useRef<HTMLAnchorElement>(null)
  const aboutLinkRef = useRef<HTMLAnchorElement>(null)
  const contactLinkRef = useRef<HTMLAnchorElement>(null)


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
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <div className='app-container' id='intro'>
        <NavBar linkRefs={{ introductionLinkRef, projectsLinkRef, aboutLinkRef, contactLinkRef }} />
        <Introduction ref={introductionRef} />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App