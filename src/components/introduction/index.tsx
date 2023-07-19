import DarkWidgets from '../darkWidgets'
import './index.css'

const Introduction = () => {
  return (
    <section className='introduction-section main-section'>
      <div>
        <h1>I design and develop applications.</h1>
        <p>I'm a self-taught frontend developer with passion for building responsive websites.</p>
        <div style={{marginTop: '60px'}}>
          <a>Explore my projects</a>
        </div>
      </div>
      <div className='widgets-container'>
      <DarkWidgets />
      </div>
    </section>
  )
}

export default Introduction