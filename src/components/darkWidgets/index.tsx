import {v4 as uuidv4} from 'uuid'
import './index.css'
const DarkWidgets = () => {

    let grid = Array(100).fill(undefined).map(() => <div key={uuidv4()} style={{ width: "50px", height: "50px", border: "1px solid #292929", backgroundColor: "#171717" }}></div>)

    return (
        <div className='widget-container' style={{ display: "flex", width: "500px", height: "500px", flexWrap: "wrap" }}>
            {grid}
            {/* <div>

            </div>             */}
        </div>
    )
}

export default DarkWidgets