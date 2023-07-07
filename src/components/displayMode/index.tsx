import sun from '../../assets/sun.svg'
const DisplayMode = () => {
  return (
    <div style={{height: "inherit", display: "flex", alignItems: "flex-end"}}>
        <img src={sun} alt="darkmode/lightmode" />
    </div>
  )
}

export default DisplayMode