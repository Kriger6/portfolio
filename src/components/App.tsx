import '../app.css'
import About from './about'
import Contact from './contact'
import Footer from './footer/footer'
import Introduction from "./introduction"
import NavBar from "./navBar"
import Projects from './projects'


const App = () => {

  return (
    <div className='app-container'>
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