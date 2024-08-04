import { useEffect, useState } from 'react'
import { useThemeContext } from '../App'

interface DisplayModeProps {
  themeIcon: string;
  handleTheme: () => void;
}

const DisplayMode = ({ themeIcon, handleTheme }: DisplayModeProps) => {

  const [rotationDegree, setRotationDegree] = useState<number | undefined>(0)
  const [iconOpacity, setIconOpacity] = useState<number | undefined>(100)

  const { toggleTheme } = useThemeContext()

  const swapIconAndTheme = () => {
    setRotationDegree(prevState => prevState + 180)
    setIconOpacity(0)
    setTimeout(() => {
      handleTheme()
      setRotationDegree(prevState => prevState + 180)
      setIconOpacity(100)
      toggleTheme()
    }, 500);
  }

  const swapIcon = () => {
    setRotationDegree(prevState => prevState + 180)
    setIconOpacity(0)
    setTimeout(() => {
      handleTheme()
      setRotationDegree(prevState => prevState + 180)
      setIconOpacity(100)
    }, 500);
  }

  const matchesHandler = ({ matches }: any) =>  {
    if (matches) {      
        swapIcon()
    } else {
        swapIcon()
    }
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', matchesHandler)
    
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', matchesHandler)
    }
  }, [])

  return (
    <div style={{ height: "inherit", display: "flex", alignItems: "flex-end" }}>
      <img className='theme-mode' onClick={() => {
        swapIconAndTheme()
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