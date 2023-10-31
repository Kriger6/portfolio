import { useThemeContext } from "../App"
import DummyText from "./dummyText"

const DummyGridContent = () => {
  const {themeMode} = useThemeContext()

  return (
    <div>
      <DummyText w={90} h={90} radiusOffset={0.5} bColor={themeMode === "dark" ? "#222222" : "#E2E2E2"} />
      <DummyText w={65} h={9} top={10} left={5} bColor={themeMode === "dark" ? "#282828" : "#E2E2E2"}  />
      <DummyText w={30} h={6} top={5} left={5} bColor={themeMode === "dark" ? "#282828" : "#E2E2E2"}  />
    </div>
  )
}

export default DummyGridContent