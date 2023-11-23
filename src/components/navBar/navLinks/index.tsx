import { useEffect } from "react"
import DisplayMode from "../../displayMode"
import './index.css'

interface NavLinkProps {
    themeIcon: string;
    handleTheme: () => void;
    menuToggle: boolean;
    setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
    linkRefs: {
        introductionLinkRef: React.MutableRefObject<HTMLAnchorElement>
        projectsLinkRef: React.MutableRefObject<HTMLAnchorElement>
        aboutLinkRef: React.MutableRefObject<HTMLAnchorElement>
        contactLinkRef: React.MutableRefObject<HTMLAnchorElement>
    }
}

const NavLinks = ({ themeIcon, handleTheme, menuToggle, setMenuToggle, linkRefs }: NavLinkProps) => {
    useEffect(() => {
        window.addEventListener("resize", checkSize)

        return () => window.removeEventListener("resize", checkSize)
    })

    const checkSize = () => {        
        if (window.innerWidth > 768 && menuToggle === true) {
            setMenuToggle(false)
        }
    }

    return (
        <div className={`${menuToggle === true ? "burger-menu menu-visible" : "menu-links"}`}>
            <a className="link-animation introduction" href="#app-container" ref={linkRefs.introductionLinkRef}>Introduction</a>
            <a className="link-animation projects" href="#projects" ref={linkRefs.projectsLinkRef}>Projects</a>
            <a className="link-animation about" href="#about" ref={linkRefs.aboutLinkRef}>About</a>
            <a className="link-animation contact" href="#contact" ref={linkRefs.contactLinkRef}>Contact</a>
            <div className="display-mode">
                <DisplayMode themeIcon={themeIcon} handleTheme={handleTheme} />
            </div>
        </div>
    )
}

export default NavLinks