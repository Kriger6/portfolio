import { useThemeContext } from "../App"
import DummyText from "./dummyText"
import './index.css'

const DummySearchBar = () => {
    const { themeMode } = useThemeContext()

    return (
        <div style={{ position: 'absolute', width: '100%' }}>
            <div className="dummy-search">
                <DummyText w={90} h={8} left={20} bColor={themeMode === "dark" ? "#2E2E2E" : "#F0F0F0"} />
                <DummyText w={22} h={22} right={5} bColor={themeMode === "dark" ? "#2E2E2E" : "#F0F0F0" } />                
            </div>
            <div style={{ position: 'inherit', top: '36px', height: '70px', width: '100%' }}>
                <DummyText w={50} h={9} left={10} top={10} bColor={themeMode === "dark" ? "#282828" : "#E2E2E2"}  />
                <DummyText w={130} h={6} left={10} top={5} bColor={themeMode === "dark" ? "#282828" : "#E2E2E2"} />
            </div>
        </div>
    )
}

export default DummySearchBar


