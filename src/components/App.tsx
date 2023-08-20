import { useEffect, useRef } from 'react'
import '../app.css'
import About from './about'
import Contact from './contact'
import Footer from './footer/footer'
import Introduction from "./introduction"
import NavBar from "./navBar"
import Projects from './projects'


const App = () => {

  const introductionRef = useRef(undefined)
  const projectsRef = useRef(undefined)

  const introductionLinkRef = useRef(undefined)
  const projectsLinkRef = useRef(undefined)

  const navLi = [introductionLinkRef, projectsLinkRef]
  const sections = [introductionRef, projectsRef]

  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.current.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.current.getAttribute("id");
        console.log(current);
        
      }
    });

    navLi.forEach((li) => {
      li.current.classList.remove("active");
      if (li.current.classList.contains(current)) {
        li.current.classList.add("active");
      }
    });
  };



    return (
      <div className='app-container' id='app-container'>
        <NavBar introRef={introductionLinkRef} proRef={projectsLinkRef}/>
        <Introduction sectionRef={introductionRef} />
        <Projects sectionRef={projectsRef} />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }

  export default App