import { useEffect, useState } from 'react'
import './index.css'


const Footer = () => {
    const [footerClass, setFooterClass] = useState<string>("")

    useEffect(() => {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setFooterClass("fade-in")
                }
            })
        })
        
        footerObserver.observe(document.querySelector(".social-networks-container"))
    }, [])

    return (
        <footer>
            <div className="social-networks-container">
                <a className={`${footerClass} link-animation op-0`} target="_blank" href="https://github.com/Kriger6">Github</a>
                <a className={`${footerClass} link-animation op-0`} target="_blank" href="https://www.linkedin.com/in/sa%C5%A1a-palinka%C5%A1-b6b671197/">Linkedin</a>
            </div>
            <p className={`${footerClass} trademark`}>© Saša Palinkaš 2023</p>
        </footer>
    )
}

export default Footer