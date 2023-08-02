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
    const [defaultTime, setDefaultTime] = useState<number | undefined>(1200)
    const [classState, setClassState] = useState<string | undefined>(undefined)
    const [movingDistance, setMovingDistance] = useState<number | undefined>(0)

    const animations = [
        'animation-dummy-item-in',
        'animation-dummy-item-out'
    ]

    const interval = setInterval(() => {
        setTimer(!timer)
        setClassState(animations[timer === false ? 0 : 1])
        setMovingDistance(timer === true ? 0 : -50)
        if (defaultTime === 1200) {
            setDefaultTime(8000)
        }
    }, defaultTime)


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
                    <div className={`animation-dummy-rectangle ${classState} `} style={{ 
                        transform: `translate(${movingDistance}px)`, top: '35px',
                        left: '-65px' }}>

                    </div>
                    <div className={`animation-dummy-square ${classState} `} style={{ 
                        transform: `translateY(${movingDistance}px)`, top: '100px',
                        left: '110px' }}>

                    </div>
                    <div className={`animation-dummy-square ${classState} `} style={{
                        transform: `translateY(${movingDistance}px)`, top: '250px',
                        left: '-120px'
                    }}>

                    </div>
                    <div className={`animation-dummy-rectangle ${classState} `} style={{
                        transform: `translate(${movingDistance}px)`, top: '300px',
                        left: '170px'
                    }}>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DummyWidgets