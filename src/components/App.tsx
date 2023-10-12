import { useEffect, useRef } from 'react'
import '../app.css'
import About from './about'
import Contact from './contact'
import Footer from './footer/footer'
import Introduction from "./introduction"
import NavBar from "./navBar"
import Projects from './projects'


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
      } else if(scrollY >= sectionTop - 60) {
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



  return (
    <div className='app-container' id='app-container'>
      <NavBar linkRefs={{ introductionLinkRef, projectsLinkRef, aboutLinkRef, contactLinkRef }}/>
      <Introduction sectionRef={{introductionRef}} />
      <Projects sectionRef={projectsRef} />
      <About sectionRef={aboutRef} />
      <Contact sectionRef={contactRef} />
      <Footer />
    </div>
  )
}

export default App