import { forwardRef, useEffect, useRef, useState } from "react"
import ProjectExample from "./projectExamples"
import './index.css'
import devTime from '../../assets/devTime.png'
import knoQuiz from '../../assets/knoQuiz.png'
import battleCityCloneImage from '../../assets/battleCityCloneImage.png'

interface Options {
    threshold: number
}


const Projects = forwardRef<HTMLElement>(({ }, ref) => {

    const [classes, setClasses] = useState<string[] | undefined>(["", "", "", ""])
    const [shouldLoadPhoto, setShouldLoadPhoto] = useState<boolean[]>([false, false, false])

    const firstProjectPhotoRef = useRef<HTMLDivElement>(null)
    const secondProjectPhotoRef = useRef<HTMLDivElement>(null)
    const thirdProjectPhotoRef = useRef<HTMLDivElement>(null)




    useEffect(() => {
        firstProjectPhotoRef?.current?.addEventListener('animationend', () => {
            setShouldLoadPhoto(prevState => [true, prevState[1], prevState[2]])
        })

        secondProjectPhotoRef?.current?.addEventListener('animationend', () => {
            setShouldLoadPhoto(prevState => [prevState[0], true, prevState[2]])
        })

        thirdProjectPhotoRef?.current?.addEventListener('animationend', () => {
            setShouldLoadPhoto(prevState => [prevState[0], prevState[1], true])
        }, { once: true })
        
        let options: Options = {
            threshold: 0.1
        }
        

        const headingObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {                    
                    setClasses(prevState => ["section-border-heading", "section-border", prevState[2], prevState[3]])
                }
            })
        })

        headingObserver.observe(document.querySelectorAll(".section-border-container")[0])

        const paragraphObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setClasses(prevState => [prevState[0], prevState[1], "section-content", prevState[3]])
                }
            })
        })

        paragraphObserver.observe(document.querySelectorAll(".section-content")[0])

        const projectExamplesObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {                    
                    setClasses(prevState => [prevState[0], prevState[1], prevState[2], "project-card"])

                }
            })
        }, options)

        projectExamplesObserver.observe(document.querySelector(".example-container"))

    }, [])


    return (
        <section className="main-section projects-section section" id="projects" ref={ref}>
            <div className="section-border-container">
                <h2 className={`${classes[0]} op-0`}>
                    PROJECTS
                </h2>
                <div className={classes[1]}></div>
            </div>
            <section className="section-content-container">
                <div className={`${classes[2]} op-0`}>
                    <p className="projects-header">Check out some of my main projects i have worked on.</p>
                </div>
                <div className="section-content example-container">
                    <figure onClick={() => window.open("https://github.com/Kriger6/socket.IO-chat-based-react-app")} ref={firstProjectPhotoRef}>
                        <div className={classes[3]}>
                            <ProjectExample
                                load={shouldLoadPhoto[0]} projectCategory="Chat application"
                                projectTitle="DevTime" projectImage={devTime} />
                        </div>
                    </figure>
                    <figure onClick={() => window.open("https://github.com/Kriger6/trivia-quiz")} ref={secondProjectPhotoRef}>
                        <div className={classes[3]} style={{ animationDelay: '.3s' }}>
                            <ProjectExample load={shouldLoadPhoto[1]} projectCategory="Quiz"
                                projectTitle="Knoquest" projectImage={knoQuiz} />
                        </div>
                    </figure>
                    <figure onClick={() => window.open("https://github.com/Kriger6/redux-tank-game")} ref={thirdProjectPhotoRef}>
                        <div className={classes[3]} style={{ animationDelay: '.5s' }}>
                            <ProjectExample load={shouldLoadPhoto[2]} projectCategory="Game clone"
                                projectTitle="Battle City Web Clone" projectImage={battleCityCloneImage} />
                        </div>
                    </figure>
                </div>
            </section>

        </section>
    )
})

export default Projects