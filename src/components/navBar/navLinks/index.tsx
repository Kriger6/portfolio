import { useEffect } from "react"
import DisplayMode from "../../displayMode"
import './index.css'

interface NavLinkProps {
    classes: string;
    setClasses: React.Dispatch<React.SetStateAction<string>>;
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

const NavLinks = ({ classes, setClasses, themeIcon, handleTheme, menuToggle, setMenuToggle, linkRefs }: NavLinkProps) => {
    useEffect(() => {
        window.addEventListener("resize", checkSize)

        return () => window.removeEventListener("resize", checkSize)
    })

    const checkSize = () => {
        if (window.innerWidth > 768 && menuToggle === true) {
            setClasses("menu-links")
            setMenuToggle(false)
        }
    }

    useEffect(() => {
        if (menuToggle === true) {
            setClasses("burger-menu burger-open menu-visible")
        } else if(menuToggle === false && window.innerWidth < 768) {
            setClasses("burger-menu burger-close")
            setTimeout(() => {
                setClasses("menu-links")
            }, 500)
        }

    }, [menuToggle])

  

    return (
        <div className={classes}>
            <a className="link-animation nav-link introduction" href="#app-container" ref={linkRefs.introductionLinkRef}>Introduction</a>
            <a className="link-animation nav-link projects" href="#projects" ref={linkRefs.projectsLinkRef}>Projects</a>
            <a className="link-animation nav-link about" href="#about" ref={linkRefs.aboutLinkRef}>About</a>
            <a className="link-animation nav-link contact" href="#contact" ref={linkRefs.contactLinkRef}>Contact</a>
            <div className="display-mode nav-link">
                <DisplayMode themeIcon={themeIcon} handleTheme={handleTheme} />
            </div>
        </div>
    )
}

export default NavLinks