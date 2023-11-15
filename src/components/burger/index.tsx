import DisplayMode from "../displayMode"
import "./index.css"


const BurgerMenu = ({ theme, handleTheme, linkRefs, menuToggle }: any) => {


    return (
        <div className={`burger-menu ${menuToggle === true ? "menu-visible" : "" }`}>
            <a className="link-animation introduction" href="#app-container" ref={linkRefs.introductionLinkRef}>Introduction</a>
            <a className="link-animation projects" href="#projects" ref={linkRefs.projectsLinkRef}>Projects</a>
            <a className="link-animation about" href="#about" ref={linkRefs.aboutLinkRef}>About</a>
            <a className="link-animation contact" href="#contact" ref={linkRefs.contactLinkRef}>Contact</a>
            <div className="display-mode">
                <DisplayMode themeIcon={theme} handleTheme={handleTheme} />
            </div>
        </div>
    )
}

export default BurgerMenu