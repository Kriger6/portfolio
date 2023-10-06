import { useState } from 'react'
const DisplayMode = ({ themeIcon, handleTheme }: any) => {

  const [rotationDegree, setRotationDegree] = useState<number | undefined>(0)
  const [sunOpacity, setSunOpacity] = useState<number | undefined>(100)


  return (
    <div style={{ height: "inherit", display: "flex", alignItems: "flex-end" }}>
      <img className='dark-mode' onClick={() => {
        setRotationDegree(prevState => prevState + 180)
        setSunOpacity(0)
        setTimeout(() => {
          handleTheme()
          setRotationDegree(prevState => prevState + 180)
          setSunOpacity(100)
        }, 500);
      }} style={
        {
          transform: `rotate(${rotationDegree}deg)`,
          opacity: sunOpacity
        }
      } src={themeIcon} alt="darkmode/lightmode" />
    </div>
  )
}

export default DisplayMode