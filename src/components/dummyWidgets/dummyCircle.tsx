import { Measurements } from "./dummyText"



const DummyCircle = ({ w, h, position, left, top, content, bColor, bShadow }: Measurements) => {

    return (
        <div className="dummy-circle" style={{
            width: `${w}px`, height: `${h}px`, background: bColor,
            left: `${left}px`, top: `${top}px`, position: position,
            boxShadow: bShadow
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {content}
            </div>
        </div>
    )
}

export default DummyCircle