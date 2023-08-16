import { v4 as uuidv4 } from 'uuid'
import './index.css'
import DummySearchBar from './dummySearchBar'
import DummyGridContent from './dummyGridContent'
import DummyCircle from './dummyCircle'
import { useEffect, useRef, useState } from 'react'
import { intervals } from './timer'
import { Params } from './timer'
const DummyWidgets = () => {

    let grid = Array(100).fill(undefined).map(() => <div key={uuidv4()} style={{
        width: "50px", height: "50px", border: "1px solid #292929", backgroundColor: "#171717"
    }}></div>)

    const [timer, setTimer] = useState<boolean[] | undefined>([false, false, false, false])
    const [defaultTime, setDefaultTime] = useState<number[] | undefined>([1200, 4000, 8500, 11000])
    const [classState, setClassState] = useState<string[] | undefined>([undefined, undefined, undefined, undefined])
    const [movingDistance, setMovingDistance] = useState<number[] | undefined>([0, 0, 0, 0])

    const [focus, setFocus] = useState<boolean>(false)

    const timerRef = useRef(undefined)
    timerRef.current = timer

    const defaultTimeRef = useRef(undefined)
    defaultTimeRef.current = defaultTime

    const classStateRef = useRef(undefined)
    classStateRef.current = classState

    const movingDistanceRef = useRef(undefined)
    movingDistanceRef.current = movingDistance

    const animations = [
        'animation-dummy-item-in',
        'animation-dummy-item-out'
    ]

    useEffect(() => {
        const myFunc = () => {
            if (!document.hidden) {
                console.log("hello again");

                setFocus(!focus)
            }
        }
        document.addEventListener('visibilitychange', myFunc);

        return () => document.removeEventListener('visibilitychange', myFunc)
    })

    useEffect(() => {
        console.log(0);
        
        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations, setMovingDistance, setDefaultTime, 
                boxIndex: 0, timerRef, defaultTimeRef, classStateRef, movingDistanceRef
            })
        }, defaultTime[0])

        return () => clearTimeout(t)
    }, [timer[0], focus])

    useEffect(() => {
        console.log(1);
        
        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 1, timerRef, defaultTimeRef, 
                classStateRef, movingDistanceRef
            })
        }, defaultTime[1])

        return () => clearTimeout(t)
    }, [timer[1], focus])

    useEffect(() => {
        console.log(2);
        
        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 2, timerRef, defaultTimeRef,
                classStateRef, movingDistanceRef
            })
        }, defaultTime[2])

        return () => clearTimeout(t)
    }, [timer[2], focus])

    useEffect(() => {
        console.log(3);
        
        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 3, timerRef, defaultTimeRef,
                classStateRef, movingDistanceRef
            })
        }, defaultTime[3])

        return () => clearTimeout(t)
    }, [timer[3], focus])

    

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
                    <div className={`animation-dummy-rectangle ${classState[0]} `} style={{
                        transform: `translate(${movingDistance[0]}px)`, top: '35px',
                        left: '-65px'
                    }}>

                    </div>
                    <div className={`animation-dummy-square ${classState[1]} `} style={{
                        transform: `translateY(${movingDistance[1]}px)`, top: '100px',
                        left: '110px'
                    }}>

                    </div>
                    <div className={`animation-dummy-square ${classState[2]} `} style={{
                        transform: `translateY(${movingDistance[2]}px)`, top: '250px',
                        left: '-120px'
                    }}>

                    </div>
                    <div className={`animation-dummy-rectangle ${classState[3]} `} style={{
                        transform: `translate(${movingDistance[3]}px)`, top: '300px',
                        left: '170px'
                    }}>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default DummyWidgets