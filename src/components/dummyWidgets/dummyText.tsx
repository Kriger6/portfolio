export interface Measurements {
    w: number,
    h: number,
    left?: number,
    right?: number,
    top?: number
}


const DummyText = ({w, h, left, right, top}: Measurements) => {
  return (
    <div style={{background: '#5c5c5c', borderRadius: '10px', width: `${w}px`, height: `${h}px`, 
    marginTop: `${top}px`, marginLeft: `${left}px`, marginRight: `${right}px`}}></div>
  )
}

export default DummyText