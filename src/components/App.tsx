import { useEffect } from 'react'
import '../app.css'
import About from './about'
import Contact from './contact'
import Footer from './footer/footer'
import Introduction from "./introduction"
import NavBar from "./navBar"
import Projects from './projects'


const App = () => {


  const addUnderline = () => {
    console.log("hello");
    
  }
  
  let options = {
    threshold: 1.0
  }
  
  useEffect(() => {
    let observer = new IntersectionObserver((entry) => {
      console.log(entry);
      
    }, options)
    let target = document.querySelector("#projects")
    
    observer.observe(target)
  })

  return (
    <div className='app-container' id='app-container'>
      <NavBar />
      <Introduction />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App