
const Contact = () => {
    return (
        <section className="main-section">
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
                <form>
                    <div>
                        <label htmlFor="name"></label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="message"></label>
                        <textarea></textarea>
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