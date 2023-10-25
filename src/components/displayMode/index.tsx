import { useState } from 'react'
import { useThemeContext } from '../App'
const DisplayMode = ({ themeIcon, handleTheme }: any) => {

  const [rotationDegree, setRotationDegree] = useState<number | undefined>(0)
  const [iconOpacity, setIconOpacity] = useState<number | undefined>(100)

  const { toggleTheme } = useThemeContext()

  return (
    <div style={{ height: "inherit", display: "flex", alignItems: "flex-end" }}>
      <img className='theme-mode' onClick={() => {
        setRotationDegree(prevState => prevState + 180)
        setIconOpacity(0)
        setTimeout(() => {
          handleTheme()
          setRotationDegree(prevState => prevState + 180)
          setIconOpacity(100)
          toggleTheme()
        }, 500);
      }} style={
        {
          transform: `rotate(${rotationDegree}deg)`,
          opacity: iconOpacity
        }
      } src={themeIcon} alt="darkmode/lightmode" />
    </div>
  )
}

export default DisplayMode