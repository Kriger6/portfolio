
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
                                <input required placeholder="Saša Palinkaš" type="text" name="name" id="" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label" htmlFor="contact-form">Where can i reach you?
                                <input required placeholder="sasa.palinkas6@gmail.com" type="email" name="email" id="" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label" htmlFor="contact-form">What's your message?
                                <textarea required placeholder="Hi Saša! Lets work!" name="message"></textarea>
                            </label>
                        </div>
                        <div>
                            <button className="submit-button" type="submit">Send it
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" style={{marginLeft: '15px'}} width={'25px'} height={'25px'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                    <path stroke="#b5b5b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Contact