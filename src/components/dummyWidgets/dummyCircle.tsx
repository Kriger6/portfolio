import { Measurements } from "./dummyText"

const DummyCircle = ({w, h}: Measurements) => {
    return (
        <div style={{ borderRadius: '50%', width: `${w}px`, height: `${h}px`, background: '#5c5c5c' }}></div>
    )
}

export default DummyCircle