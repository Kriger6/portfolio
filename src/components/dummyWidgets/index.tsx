import {v4 as uuidv4} from 'uuid'
import './index.css'
import DummySearchBar from './dummySearchBar'
import DummyGridContent from './dummyGridContent'
const DummyWidgets = () => {

    let grid = Array(100).fill(undefined).map(() => <div key={uuidv4()} style={{ width: "50px", height: "50px", border: "1px solid #292929", backgroundColor: "#171717" }}></div>)

    return (
        <div className='widget-container' style={{ display: "flex", width: "500px", height: "500px", flexWrap: "wrap" }}>
            {grid}
            <div className='animation-dummy-base'>
                <div className="base-dummy-content">
                    <DummySearchBar />
                    <div style={{height: '250px', marginTop: '90px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-between'}}>
                        <DummyGridContent />
                        <DummyGridContent />
                        <DummyGridContent />
                        <DummyGridContent />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default DummyWidgets