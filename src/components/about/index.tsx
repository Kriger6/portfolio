import { forwardRef, useEffect, useRef, useState } from 'react'
import image from '../../assets/portfolio_selfie.png'
import './index.css'
import Tech from './tech'



const About = forwardRef<HTMLElement>(({ }, ref) => {

    const date = new Date()

    const [borderContainerClasses, setBorderContainerClasses] = useState<string[]>(["", ""])
    const [aboutHeaderClass, setAboutHeaderClass] = useState<string>("")
    const [aboutDetailClasses, setAboutDetailClasses] = useState<string[]>(["", "", ""])
    const [shouldPortraitLoad, setShouldPortraitLoad] = useState<boolean>(false)

    const portraitContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        portraitContainerRef?.current?.addEventListener('animationend', () => {
            setShouldPortraitLoad(true)
        })

        const sectionBorderObserver = new IntersectionObserver(entries => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setBorderContainerClasses(["section-border-heading", "section-border"])
                }
            }))
        })

        sectionBorderObserver.observe(document.querySelectorAll(".section-border-container")[1])

        const aboutHeaderObserver = new IntersectionObserver(entries => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setAboutHeaderClass("section-content")
                }
            }))
        })

        aboutHeaderObserver.observe(document.querySelectorAll(".section-content")[1])

        const aboutDetailObserver = new IntersectionObserver(entries => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setAboutDetailClasses(["about-heading", "about-paragraph", "portrait-container"])
                }
            }))
        })

        aboutDetailObserver.observe(document.querySelector(".about-details"))

    }, [])

    return (
        <section className="main-section about-section section" id="about" ref={ref}>
            <div className="section-border-container">
                <h2 className={`${borderContainerClasses[0]} op-0`}>
                    ABOUT
                </h2>
                <div className={borderContainerClasses[1]}></div>
            </div>
            <section className="section-content-container">
                <div className="section-content pre-biography-container">
                    <p className={`${aboutHeaderClass} pre-biography`}>Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can.</p>
                </div>
                <div className="section-content about-details">
                    <div className="about-paragraphs">
                        <h3 className={aboutDetailClasses[0]}>WHO AM I</h3>
                        <p className={`${aboutDetailClasses[1]} biography-paragraph`} style={{animationDelay: "0.2s" }}>My name is Saša Palinkaš. I am {date.getFullYear() - 1997} years old, I live in Bačka Palanka, Republic of Serbia, and i am a self-taught front-end developer.</p>
                        <p className={`${aboutDetailClasses[1]} biography-paragraph`} style={{animationDelay: "0.5s" }}>Front-end development has been my main focus ever since i started learning programming.</p>
                        <p className={`${aboutDetailClasses[1]} biography-paragraph`} style={{animationDelay: "0.7s" }}>I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.</p>
                        <p className={`${aboutDetailClasses[1]} biography-paragraph`} style={{animationDelay: "0.9s" }}>Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something i use for many hours daily.
                            It allows me to have it exactly as i desire. For instance, I use Visual Studio Code as my editor of choice.
                        </p>
                    </div>
                    <div ref={portraitContainerRef} className={`${aboutDetailClasses[2]} portrait-container-basics`}>
                        {shouldPortraitLoad === true ? <img className="portrait-photo" src={image}></img> : ""}
                    </div>
                </div>
            <Tech />    
            </section>
        </section>
    )
})

export default About