import { useThemeContext } from "../App"
import DummyText from "./dummyText"



const DummyRectangle = () => {

    const { themeMode } = useThemeContext()

    return (
        <div style={{
            height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            <DummyText w={40} h={40} radiusOffset={0.5} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
            <div style={{
                display: 'inherit', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
                height: '18%'
            }}>
                <DummyText w={55} h={8} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                <DummyText w={110} h={7} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
            </div>
            <DummyText w={70} h={15} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"}
                content={<DummyText w={40} h={6} bColor={themeMode === "dark" ? "#393939" : "#FDFDFD"} />} />
        </div>
    )
}

export default DummyRectangle