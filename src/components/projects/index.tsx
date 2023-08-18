import ProjectExample from "./projectExamples"

const Projects = () => {
    return (
        <section className="main-section projects-section" id="projects">
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