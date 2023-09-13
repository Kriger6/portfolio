
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
                <div className="section-content" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{width: '50%'}}>Do not hesitate to contact me through the form here or by direct email on {" "}
                        <a style={{fontSize: '1em', textUnderlineOffset: '5px', textDecorationColor: '#454545'}} href="mailto:sasa.palinkas6@gmail.com">sasa.palinkas6@gmail.com</a> regardless of the subject.
                    </p>
                    <form name="contact" id="contact-form">
                        <div>
                            <label className="contact-label" htmlFor="contact-form">What's your name?
                                <input placeholder="Saša Palinkaš" type="text" name="name" id="" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label" htmlFor="contact-form">Where can i reach you?
                                <input placeholder="sasa.palinkas6@gmail.com" type="email" name="email" id="" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label" htmlFor="contact-form">What's your message?
                                <textarea placeholder="Hi Saša! Lets work!" name="message"></textarea>
                            </label>
                        </div>
                        <div>
                            <button className="submit-button" type="submit">Send it</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Contact