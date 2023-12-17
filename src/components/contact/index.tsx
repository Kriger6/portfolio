import { useRef, useState, forwardRef } from 'react'
import './index.css'
import emailjs from '@emailjs/browser'
import * as React from 'react'
import { useEffect } from 'react'

const Contact = forwardRef<HTMLElement>(({ }, ref) => {

    const [borderContainerClasses, setBorderContainerClasses] = useState<string[]>(["", ""])
    const [contactClasses, setContactClasses] = useState<string[]>(["", ""])



    const [nameInput, setNameInput] = useState<string | null>("")
    const [emailInput, setEmailInput] = useState<string | null>("")
    const [messageInput, setMessageInput] = useState<string | null>("")

    const [inputStyle, setInputStyle] = useState<string[] | null>([null, null, null])
    const [warningMessage, setWarningMessage] = useState<string[] | null>(["", "", ""])

    const [isSubmitted, setIsSubmitted] = useState<boolean | null>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        setValue: React.Dispatch<React.SetStateAction<string>>) => {
        setValue(e.target.value)
        setStyling(e, setValue)
    }


    const setStyling = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setValue: React.Dispatch<React.SetStateAction<string>>) => {
        if (e.target.value !== "") {
            if (setValue === setNameInput) {
                setInputStyle(["", inputStyle[1], inputStyle[2]])
                setWarningMessage(prevState => ["", prevState[1], prevState[2]])
            } else if (setValue === setEmailInput && isEmailValid(e.target.value) === true) {
                setInputStyle([inputStyle[0], "", inputStyle[2]])
                setWarningMessage(prevState => [prevState[0], "", prevState[2]])
            } else if (setValue === setMessageInput) {
                setInputStyle([inputStyle[0], inputStyle[1], ""])
                setWarningMessage(prevState => [prevState[0], prevState[1], ""])
            } else if (isSubmitted === false) {
                setInputStyle([inputStyle[0], "", inputStyle[2]])
                setWarningMessage(prevState => [prevState[0], "", prevState[2]])
            }
        }
    }


    const form = useRef()

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault()


        emailjs.sendForm('service_ydn2kz3', 'template_nzp3g43', form.current, 'FHPTekC97nUwo_5pV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }


    const handleValidation = () => {
        if (isSubmitted === false) {
            setIsSubmitted(true)
        }

        if (nameInput === null || nameInput === "" || nameInput.length === 1) {
            setInputStyle(prevState => ["input", prevState[1], prevState[2]])
            setWarningMessage(prevState => ["warning-message", prevState[1], prevState[2]])
        }
        if (emailInput === null || emailInput === "") {
            setInputStyle(prevState => [prevState[0], "input", prevState[2]])
            setWarningMessage(prevState => [prevState[0], "warning-message", prevState[2]])
        }
        if (messageInput === null || messageInput === "") {
            setInputStyle(prevState => [prevState[0], prevState[1], "input"])
            setWarningMessage(prevState => [prevState[0], prevState[1], "warning-message"])
        }

        if (isEmailValid(emailInput) === false) {
            setInputStyle(prevState => [prevState[0], "input", prevState[2]])
            setWarningMessage(prevState => [prevState[0], "warning-message", prevState[2]])
        }
    }

    const isEmailValid = (email: string) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    const finalValidation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputStyle[0] === "input" || inputStyle[1] === "input" || inputStyle[2] === "input") {
            return false
        }
    }

    useEffect(() => {
        const sectionBorderObserver = new IntersectionObserver(entries => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setBorderContainerClasses(["section-border-heading", "section-border"])
                }
            }))
        })

        sectionBorderObserver.observe(document.querySelectorAll(".section-border-container")[2])

        const contactSectionObserver = new IntersectionObserver(entries => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setContactClasses(["contact-paragraph", "contact-label"])
                }
            }))
        })

        contactSectionObserver.observe(document.querySelector(".contact-content"))

    }, [])


    useEffect(() => {
        if (isSubmitted === true) {
            handleValidation()
        }

    }, [nameInput, emailInput, messageInput])

    useEffect(() => {
        if (nameInput.length > 1 && isEmailValid(emailInput) === true && messageInput !== "") {
            setInputStyle(["pass", "pass", "pass"])
        } else if (isSubmitted === true) {
            let finalStyling = warningMessage.map((x) => {
                if (x === "warning-message") {
                    return "input"
                } else {
                    return ""
                }
            })

            setInputStyle(finalStyling)
        } else if (isSubmitted === false) {
            setInputStyle(["", "", ""])
        }
    }, [warningMessage, messageInput])


    return (
        <section className="main-section contact-section section" id="contact" ref={ref}>
            <div className="section-border-container">
                <h3 className={`${borderContainerClasses[0]} op-0`}>
                    CONTACT
                </h3>
                <div className={borderContainerClasses[1]}></div>
            </div>
            <section className="section-content-container">
                <div className="section-content contact-content">
                    <p className={`${contactClasses[0]} contact-item`}>Do not hesitate to contact me through the form here or by direct email on {" "}
                        <a style={{ fontSize: '1em', textUnderlineOffset: '5px', textDecorationColor: '#454545' }} href="mailto:sasa.palinkas6@gmail.com">sasa.palinkas6@gmail.com</a> regardless of the subject.
                    </p>
                    <form className={`${contactClasses[0]} contact-item`} ref={form} onSubmit={(e) => {
                        if (finalValidation(e) === false) {
                            return
                        }
                        sendEmail(e)
                    }} name="contact" id="contact-form">
                        <label className={contactClasses[1]} style={{ animationDelay: '.2s' }} htmlFor="contact-form">What's your name?
                            <input className={inputStyle[0]} onChange={(e) => handleChange(e, setNameInput)} required placeholder="Saša Palinkaš" type="text" name="user_name" id="" />
                            <p className={warningMessage[0] === "" ? "warning-message-disabled" : warningMessage[0]} >{nameInput.length === 1 ? "Your name is too short" : "I need to know your name"}</p>
                        </label>
                        <label className={contactClasses[1]} style={{ animationDelay: '.4s' }} htmlFor="contact-form">Where can i reach you?
                            <input className={inputStyle[1]} pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" onChange={(e) => handleChange(e, setEmailInput)} required placeholder="hey@sasapalinkas.com" type="email" name="user_email" id="" />
                            <p className={warningMessage[1] === "" ? "warning-message-disabled" : warningMessage[1]}>{emailInput.length > 0 ? "Uh oh, that doesn't look like an email address..." : "I need to know where to reach you!"}</p>
                        </label>
                        <label className={contactClasses[1]} style={{ animationDelay: '.6s' }} htmlFor="contact-form">What's your message?
                            <textarea className={inputStyle[2]} onChange={(e) => handleChange(e, setMessageInput)} required placeholder="Hi Saša! Lets work!" name="message"></textarea>
                            <p className={warningMessage[2] === "" ? "warning-message-disabled" : warningMessage[2]}>You need to send me a message!</p>
                        </label>
                        <button onClick={handleValidation} className={`${contactClasses[1]} submit-button`} style={{ animationDelay: '.8s' }} type="submit">Send it
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" style={{ marginLeft: '15px' }} width={'25px'} height={'25px'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="#b5b5b5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
})

export default Contact

