export interface Measurements {
  w: number,
  h: number,
  position?: 'absolute' | 'relative' | 'fixed' | 'inherit',
  left?: number,
  right?: number,
  top?: number,
  content?: any,
  radiusOffset?: number,
  bColor?: string
}


const DummyText = ({ w, h, left, right, top, radiusOffset, content, bColor }: Measurements) => {
  return (
    <div style={{
      background: `${bColor ? bColor : '#5c5c5c'}`,
      borderRadius: `${radiusOffset ? 10 * radiusOffset : 10}px`, width: `${w}px`, height: `${h}px`,
      marginTop: `${top}px`, marginLeft: `${left}px`, marginRight: `${right}px`
    }}>
      <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        {content}
      </div>
    </div>
  )
}

export default DummyText