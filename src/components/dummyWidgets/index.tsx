import { v4 as uuidv4 } from 'uuid'
import './index.css'
import DummySearchBar from './dummySearchBar'
import DummyGridContent from './dummyGridContent'
import DummyCircle from './dummyCircle'
import { useEffect, useState } from 'react'
const DummyWidgets = () => {

    let grid = Array(100).fill(undefined).map(() => <div key={uuidv4()} style={{
        width: "50px", height: "50px", border: "1px solid #292929", backgroundColor: "#171717"
    }}></div>)

    const [timer, setTimer] = useState<boolean | undefined>(false)
    // const [defaultTime, setDefaultTime] = useState<number | undefined>(2000)
    const [classState, setClassState] = useState<string | undefined>(undefined)

    const animations = [
        'animation-dummy-item-in',
        'animation-dummy-item-out'
    ]

    const interval = setInterval(() => {
        setTimer(!timer)
        console.log("hi");
        setClassState(animations[timer === false ? 0 : 1])

    }, 6000)


    useEffect(() => {
        return () => {
            clearInterval(interval)
        }
    }, [timer])

    return (
        <div className='widget-container' style={{ display: "flex", width: "500px", height: "500px", flexWrap: "wrap" }}>
            {grid}
            <div className='animation-dummy-base'>
                <div className="base-dummy-content">
                    <DummySearchBar />
                    <div style={{
                        height: '250px', marginTop: '90px', display: 'flex',
                        flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-between'
                    }}>
                        <DummyGridContent />
                        <DummyGridContent />
                        <DummyGridContent />
                        <DummyGridContent />
                    </div>
                    <div style={{
                        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                        background: '#3e3e3e', height: '45px', borderRadius: '5px',
                        marginTop: '20px'
                    }}>
                        <DummyCircle w={28} h={28} />
                        <DummyCircle w={28} h={28} />
                        <DummyCircle w={28} h={28} />
                        <DummyCircle w={28} h={28} />
                    </div>
                    <div className={`animation-dummy-item ${classState} `}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DummyWidgets