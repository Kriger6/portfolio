import { useEffect, useState } from "react"
import ProjectExample from "./projectExamples"
import './index.css'
import * as React from "react"

const Projects = ({sectionRef}: any) => {

    const [classes, setClasses] = useState<string[] | undefined>(["", "", "", ""])


    useEffect(() => {
        const headingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses(prevState => ["section-border-heading","section-border", prevState[2], prevState[3]])
                }
            })
        })

        headingObserver.observe(document.querySelector(".section-border-container"))

        const paragraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses(prevState => [prevState[0], prevState[1], "section-content", prevState[3]])
                }
            })
        })

        paragraphObserver.observe(document.querySelector(".section-content"))

        const projectExamplesObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses(prevState => [prevState[0], prevState[1], prevState[2], "project-card"])

                }
            })
        })

        projectExamplesObserver.observe(document.querySelector(".example-container"))

    }, [])
    



    return (
        <section className="main-section projects-section section" id="projects" ref={sectionRef}>
            <div className="section-border-container">
                <h3 className={classes[0]} style={{opacity: 0}}>
                    PROJECTS
                </h3>
                <div className={classes[1]}></div>
            </div>
            <section className="section-content-container">
                <div className={classes[2]} style={{opacity: 0}}>
                    <p className="projects-header">Check out some of my main projects i have worked on.</p>
                </div>
                <div className="section-content example-container">
                    <figure>
                        <div className={classes[3]} style={{height: "300px", width: "370px"}}>
                            <ProjectExample />
                        </div>
                    </figure>
                    <figure>
                        <div className={classes[3]} style={{animationDelay: '.2s', height: "300px", width: "370px" }}>
                            <ProjectExample />
                        </div>
                    </figure>
                    <figure>
                        <div className={classes[3]} style={{animationDelay: '.4s' ,height: "300px", width: "370px" }}>
                            <ProjectExample />
                        </div>
                    </figure>
                </div>
            </section>

        </section>
    )
}

export default Projects