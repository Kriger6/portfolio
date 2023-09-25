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
        <h1 className='fadeIn'><span>I </span><span>design </span><span>and </span>develop applications.</h1>
        <p>I'm a self-taught frontend developer with passion for building responsive websites.</p>
        <div style={{marginTop: '60px', display: "inline-block"}}>
          <a href='#projects' style={{display: 'flex', alignItems: "end", textDecoration: "none"}}>Explore my projects
            <svg className="w-6 h-6 text-gray-800 dark:text-white" style={{marginLeft: "15px"}} width={"26px"} height={"26px"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="#b5b5b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M5 1v12m0 0 4-4m-4 4L1 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className='widgets-container'>
      <DummyWidgets key={resetWidget} />
      </div>
    </section>
  )
}

export default Introduction