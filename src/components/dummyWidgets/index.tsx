import { v4 as uuidv4 } from 'uuid'
import './index.css'
import DummySearchBar from './dummySearchBar'
import DummyGridContent from './dummyGridContent'
import DummyCircle from './dummyCircle'
import { useEffect, useRef, useState } from 'react'
import { intervals } from './timer'
import DummyText from './dummyText'
import DummyRectangle from './dummyRectangle'
import { useThemeContext } from '../App'

const DummyWidgets = () => {

    const { themeMode } = useThemeContext()

    let grid = Array(144).fill(undefined).map(() => <div key={uuidv4()} style={{
        width: "50px", height: "50px", border: `1px solid ${themeMode === "dark" ? "#1F1F1F" : "#dedede"}`,
    }}></div>)

    const [timer, setTimer] = useState<boolean[] | undefined>([false, false, false, false])
    const [defaultTime, setDefaultTime] = useState<number[] | undefined>([1200, 4000, 8500, 11000])
    const [classState, setClassState] = useState<string[] | undefined>([undefined, undefined, undefined, undefined])
    const [movingDistance, setMovingDistance] = useState<number[] | undefined>([0, 0, 0, 0])


    const timerRef = useRef(undefined)
    timerRef.current = timer

    const defaultTimeRef = useRef(undefined)
    defaultTimeRef.current = defaultTime

    const classStateRef = useRef(undefined)
    classStateRef.current = classState

    const movingDistanceRef = useRef(undefined)
    movingDistanceRef.current = movingDistance

    const animations: string[] = [
        'animation-dummy-item-in',
        'animation-dummy-item-out'
    ]

    const firstSymbol = <svg fill={themeMode === "dark" ? "#6A6A6A" : "#8F8F8F"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M142.9 96c-21.5 0-42.2 8.5-57.4 23.8L54.6 150.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L40.2 74.5C67.5 47.3 104.4 32 142.9 32C223 32 288 97 288 177.1c0 38.5-15.3 75.4-42.5 102.6L109.3 416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L200.2 234.5c15.2-15.2 23.8-35.9 23.8-57.4c0-44.8-36.3-81.1-81.1-81.1z" /></svg>
    const secondSymbol = <svg fill={themeMode === "dark" ? "#6A6A6A" : "#8F8F8F"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H352c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96H32C14.3 96 0 81.7 0 64z" /></svg>

    useEffect(() => {

        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations, setMovingDistance, setDefaultTime,
                boxIndex: 0, timerRef, defaultTimeRef, classStateRef, movingDistanceRef
            })
        }, defaultTime[0])

        return () => clearTimeout(t)
    }, [timer[0]])

    useEffect(() => {

        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 1, timerRef, defaultTimeRef,
                classStateRef, movingDistanceRef
            })
        }, defaultTime[1])

        return () => clearTimeout(t)
    }, [timer[1]])

    useEffect(() => {

        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 2, timerRef, defaultTimeRef,
                classStateRef, movingDistanceRef
            })
        }, defaultTime[2])

        return () => clearTimeout(t)
    }, [timer[2]])

    useEffect(() => {

        let t = setTimeout(() => {
            intervals({
                setTimer, setClassState, animations,
                setMovingDistance, setDefaultTime, boxIndex: 3, timerRef, defaultTimeRef,
                classStateRef, movingDistanceRef
            })
        }, defaultTime[3])

        return () => clearTimeout(t)
    }, [timer[3]])



    return (
        <div className='widget-container' style={{ display: "flex", width: "600px", height: "600px", flexWrap: "wrap" }}>
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
                        background: themeMode === "dark" ? "#252525" : "#E2E2E2", height: '45px', borderRadius: '5px',
                        marginTop: '20px'
                    }}>
                        <DummyCircle w={28} h={28} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                        <DummyCircle w={28} h={28} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                        <DummyCircle w={28} h={28} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                        <DummyCircle w={28} h={28} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                    </div>
                    <div className={`animation-dummy-rectangle ${classState[0]} `} style={{
                        transform: `translate(${movingDistance[0]}px)`, top: '35px',
                        left: '-65px'
                    }}>
                        <DummyCircle w={28} h={28} bColor={themeMode === "dark" ? "#2E2E2E" : "#F0F0F0"}
                            position="absolute" left={-14} top={-14} content={firstSymbol}
                            bShadow={"-6px 10px 103px -2px rgba(0,0,0,0.75)"} />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', flexDirection: 'column',
                                height: '75%', justifyContent: 'space-evenly'
                            }}>
                                <DummyText w={60} h={8} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                                <DummyText w={50} h={6} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                                <DummyText w={80} h={6} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                            </div>
                            <div style={{ height: '75%' }}>
                                <DummyText w={30} h={30} radiusOffset={0.5} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                            </div>
                        </div>
                    </div>
                    <div className={`animation-dummy-square ${classState[1]} `} style={{
                        transform: `translateY(${movingDistance[1]}px)`, top: '100px',
                        left: '110px'
                    }}>
                        <DummyRectangle />
                    </div>
                    <div className={`animation-dummy-square ${classState[2]} `} style={{
                        transform: `translateY(${movingDistance[2]}px)`, top: '250px',
                        left: '-120px'
                    }}>
                        <DummyRectangle />
                    </div>
                    <div className={`animation-dummy-rectangle ${classState[3]} `} style={{
                        transform: `translate(${movingDistance[3]}px)`, top: '300px',
                        left: '170px'
                    }}>
                        <DummyCircle w={28} h={28} position="absolute" left={-14} top={-14}
                            bColor={themeMode === "dark" ? "#2E2E2E" : "#F0F0F0"}
                            content={secondSymbol}  />
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: '100%' }}>
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', flexDirection: 'column',
                                height: '75%', justifyContent: 'space-evenly'
                            }}>
                                <DummyText w={60} h={8} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                                <DummyText w={80} h={6} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                                <DummyText w={70} h={6} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                            </div>
                            <div style={{
                                display: 'flex', flexWrap: 'wrap', flexDirection: 'column',
                                height: '75%', justifyContent: 'space-between'
                            }}>
                                <DummyText w={35} h={18} radiusOffset={0.5} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                                <DummyText w={35} h={18} radiusOffset={0.5} bColor={themeMode === "dark" ? "#2C2C2C" : "#F0F0F0"} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DummyWidgets