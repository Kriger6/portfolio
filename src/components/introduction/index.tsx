import { useEffect, useState } from 'react'
import DummyWidgets from '../dummyWidgets'
import DarkWidgets from '../dummyWidgets'
import './index.css'

const Introduction = ({sectionRef}: any) => {

  const [resetWidget, setResetWidget] = useState<number | undefined>(0)

  useEffect(() => {
    const myFunc = () => {
      if (!document.hidden) {
        setResetWidget(Math.random)
      }
    }
    document.addEventListener('visibilitychange', myFunc);

    return () => document.removeEventListener('visibilitychange', myFunc)
  })

  return (
    <section className='introduction-section main-section section' id='introduction' ref={sectionRef}> 
      <div className='introduction-landing'>
        <h1>I design and develop applications.</h1>
        <p>I'm a self-taught frontend developer with passion for building responsive websites.</p>
        <div style={{marginTop: '60px'}}>
          <a>Explore my projects</a>
        </div>
      </div>
      <div className='widgets-container'>
      <DummyWidgets key={resetWidget} />
      </div>
    </section>
  )
}

export default Introduction