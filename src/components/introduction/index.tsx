import { useEffect, useState } from 'react'
import DummyWidgets from '../dummyWidgets'
import './index.css'

const Introduction = ({ sectionRef }: any) => {

  const [resetWidget, setResetWidget] = useState<number | undefined>(0)
  const [widgetDisplay, setWidgetDisplay] = useState<string | undefined>("none")
  const [headerDisplay, setHeaderDisplay] = useState<string | undefined>("none")


  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHeaderDisplay("block")
          document.querySelectorAll(".observee")[1].classList.add("introduction-paragraph-animation")
          document.querySelectorAll(".observee")[2].classList.add("introduction-link-to-projects")
          document.querySelectorAll(".observee")[3].classList.remove("hidden-widgets-container")
          document.querySelectorAll(".observee")[3].classList.add("widgets-container")

          setTimeout(() => {
            setWidgetDisplay("block")
          }, 1600);

        }
      })
    })

    observer.observe(document.querySelector(".introduction-section"))

  }, [])



  useEffect(() => {
    const myFunc = () => {
      if (!document.hidden) {
        setResetWidget(Math.random)
      }
    }
    document.addEventListener('visibilitychange', myFunc);
    return () => {
      document.removeEventListener('visibilitychange', myFunc)
    }
  })




  const headerString = "I design and develop applications."
  const headerLetters = headerString.split('')


  return (
    <section className={`introduction-section main-section section`} id='introduction' ref={sectionRef.introductionRef}>
      <div className='introduction-landing'>
        <h1 className='observee' style={{ display: headerDisplay }}>
          {
            headerLetters.map((letter, index) => {
              return <span className='header-letter' key={index} style={{ animationDelay: `${index * 15 + 1000}ms`, marginLeft: `${letter === " " ? '20px' : ''}` }}>{letter}</span>
            })
          }
        </h1>
        <p className='observee'>I'm a self-taught frontend developer with passion for building responsive websites.</p>
        <div className='observee' style={{ marginTop: '60px', display: "inline-block" }}>
          <a href='#projects' style={{ display: 'flex', alignItems: "end", textDecoration: "none" }}>Explore my projects
            <svg className="w-6 h-6 text-gray-800 dark:text-white" style={{ marginLeft: "15px" }} width={"26px"} height={"26px"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="#b5b5b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M5 1v12m0 0 4-4m-4 4L1 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className='hidden-widgets-container observee' style={{ display: widgetDisplay }}>
        {widgetDisplay === "block" ? <DummyWidgets key={resetWidget} /> : ""}
      </div>
    </section>
  )
}

export default Introduction