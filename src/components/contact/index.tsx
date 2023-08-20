
const Contact = ({sectionRef}: any) => {
    return (
        <section className="main-section contact-section section" id="contact" ref={sectionRef}>
            <div className="section-border-container">
                <h3 className="section-border-heading">
                    CONTACT
                </h3>
                <div className="section-border"></div>
            </div>
            <section className="section-content-container">
                <div className="section-content">
                    <p>Do not hesitate to contact me through the form here or by direct email on {" "}
                        <span style={{ textDecoration: 'underline' }} >sasa.palinkas6@gmail.com</span> regardless of the subject.
                    </p>
                    <form name="contact" id="contact-form">
                        <div>
                            <label className="contact-labels" htmlFor="contact-form">What's your name?</label>
                            <input type="text" name="name" id="" />
                        </div>
                        <div>
                            <label className="contact-labels" htmlFor="contact-form">Where can i reach you?</label>
                            <input type="email" name="email" id="" />
                        </div>
                        <div>
                            <label className="contact-labels" htmlFor="contact-form">What's your message?</label>
                            <textarea name="message"></textarea>
                        </div>
                        <div>
                            <button type="submit">Send it</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Contact