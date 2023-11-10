import { useEffect, useState } from 'react'
import DummyWidgets from '../dummyWidgets'
import './index.css'

const Introduction = ({ sectionRef }: any) => {

  const [resetWidget, setResetWidget] = useState<number | undefined>(0)
  const [widgetDisplay, setWidgetDisplay] = useState<string | undefined>("none")
  const [headerDisplay, setHeaderDisplay] = useState<string | undefined>("none")
  const [introductionVisibility, setIntroductionVisibility] = useState<string | undefined>("hidden")
  const [classes, setClasses] = useState<string[] | undefined>(["", "", "hidden-widgets-container", ""])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHeaderDisplay("inline-flex")
          setIntroductionVisibility("visible")
          setClasses(["introduction-paragraph-animation", "introduction-link-to-projects", "", "widgets-container"  ])

          setTimeout(() => {
            setWidgetDisplay("block")
          }, 1600);

        }
      })
    })

    observer.observe(document.querySelector(".introduction-section"))

  }, [])



  useEffect(() => {
    const isPageVisible = () => {
      if (!document.hidden) {
        setResetWidget(Math.random)
      }
    }
    document.addEventListener('visibilitychange', isPageVisible);
    return () => {
      document.removeEventListener('visibilitychange', isPageVisible)
    }
  })





  const visibilityStyle = {
    visibility: introductionVisibility,
  } as React.CSSProperties;

  const headerString = "I design and develop applications."
  const headerLetters = headerString.split('')

  // const newheader = headerString.split(" ")

  // const newnew = newheader.map((word, index) => {
  //   return (
  //     <span>
  //       {
  //         headerLetters.map((letter, index) => {
  //           return (
  //             <span key={index} style={{ display: 'inline-block', overflow: 'hidden' }}>
  //               <span className='header-letter' style={{ animationDelay: `${index * 15 + 1000}ms`, marginLeft: `${letter === " " ? '20px' : ''}` }}>
  //                 {letter}
  //               </span>
  //             </span>
  //           )
  //         })
  //       }
  //     </span>
  //   )
  // })

  // console.log(newnew);
  
  


  return (
    <section className={`introduction-section main-section section`} id='introduction' ref={sectionRef.introductionRef}>
      <div className='introduction-landing' style={visibilityStyle}>
        <h1 style={{ display: headerDisplay }}>
          {
            headerLetters.map((letter, index) => {
              return (
                <span key={index} style={{ display: 'inline-block', overflow: 'hidden' }}>
                  <span className='header-letter' style={{ animationDelay: `${index * 15 + 1000}ms`, marginLeft: `${letter === " " ? '20px' : ''}` }}>
                    {letter}
                  </span>
                </span>
              )
            })
          }
        </h1>
        <p className={classes[0]}>I'm a self-taught frontend developer with passion for building responsive websites.</p>
        <div className={classes[1]} style={{ marginTop: '60px', display: "inline-block" }}>
          <a href='#projects' style={{ display: 'flex', alignItems: "end", textDecoration: "none" }}>Explore my projects
            <svg className="w-6 h-6 text-gray-800 dark:text-white arrow-to-projects" style={{ marginLeft: "15px" }} width={"30px"} height={"30px"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="#b5b5b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M5 1v12m0 0 4-4m-4 4L1 9" />
            </svg>
          </a>
        </div>
      </div>
      <div className={classes[2] + classes[3]} style={{ display: widgetDisplay }}>
        {widgetDisplay === "block" ? <DummyWidgets key={resetWidget} /> : ""}
      </div>
    </section>
  )
}

export default Introduction