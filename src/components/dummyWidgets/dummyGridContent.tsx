import DummyText from "./dummyText"
import { Measurements } from "./dummyText"

const DummyGridContent = () => {
  return (
    <div>
      <div style={{
        background: '#393939', width: '90px', height: '90px',
        borderRadius: '10px'
      }}></div>
      <DummyText w={65} h={9} top={10} left={5}  />
      <DummyText w={30} h={6} top={5} left={5}  />
    </div>
  )
}

export default DummyGridContent