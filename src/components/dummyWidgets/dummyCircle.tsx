import { Measurements } from "./dummyText"



const DummyCircle = ({ w, h, position, left, top, content }: Measurements) => {

    return (
        <div className="dummy-circle" style={{
            width: `${w}px`, height: `${h}px`, background: '#5c5c5c',
            left: `${left}px`, top: `${top}px`, position: position
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {content}
            </div>
        </div>
    )
}

export default DummyCircle