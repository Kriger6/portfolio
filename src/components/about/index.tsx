
const About = ({sectionRef}: any) => {
    return (
        <section className="main-section about-section section" id="about" ref={sectionRef}>
            <div className="section-border-container">
                <h3 className="section-border-heading">
                    ABOUT
                </h3>
                <div className="section-border"></div>
            </div>
            <section className="section-content-container">
                <div className="section-content">
                    <p>Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can.</p>
                </div>
                <div className="section-content">
                    <h3>WHO AM I</h3>
                    <p>My name is Saša Palinkaš. I am 25 years old, I live in Bačka Palanka, Republic of Serbia, and i am a self-taught front-end developer</p>
                    <p>Front-end has been my main focus ever since i started learning programming.</p>
                    <p>I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies</p>
                    <p>Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something i use for many hours daily.
                        It allows me to have it exactly as i desire. For intstance, I use Visual studio code as my editor of choice.
                    </p>
                </div>
                <div className="section-content">
                    <p>TECH I ENJOY</p>
                    <div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default About