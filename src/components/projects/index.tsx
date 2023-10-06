import { useEffect } from "react"
import ProjectExample from "./projectExamples"
import './index.css'

const Projects = ({sectionRef}: any) => {

    

    useEffect(() => {
        const headingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    
                }
            })
        })

        headingObserver.observe(document.querySelector(".section-border-container"))

        const paragraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {


                }
            })
        })

        paragraphObserver.observe(document.querySelector(".section-content"))

        const projectExamplesObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {


                }
            })
        })

        projectExamplesObserver.observe(document.querySelector(".example-container"))

    }, [])

    return (
        <section className="main-section projects-section section" id="projects" ref={sectionRef}>
            <div className="section-border-container">
                <h3 className="section-border-heading">
                    PROJECTS
                </h3>
                <div className="section-border"></div>
            </div>
            <section className="section-content-container">
                <div className="section-content">
                    <p>Check out some of my main projects i have worked on.</p>
                </div>
                <div className="section-content example-container">
                    <figure>
                        <div style={{height: "330px", width: "400px"}}>
                            <ProjectExample />
                        </div>
                    </figure>
                    <figure>
                        <div style={{ height: "330px", width: "400px" }}>
                            <ProjectExample />
                        </div>
                    </figure>
                    <figure>
                        <div style={{ height: "330px", width: "400px" }}>
                            <ProjectExample />
                        </div>
                    </figure>
                </div>
            </section>

        </section>
    )
}

export default Projects