import { MutableRefObject } from "react"

export interface Params {
    setTimer: React.Dispatch<React.SetStateAction<boolean[]>>,
    setClassState: React.Dispatch<React.SetStateAction<string[]>>,
    animations: string[],
    setMovingDistance: React.Dispatch<React.SetStateAction<number[]>>,
    setDefaultTime: React.Dispatch<React.SetStateAction<number[]>>,
    boxIndex: number,
    timerRef: MutableRefObject<boolean[]>,
    defaultTimeRef: MutableRefObject<number[]>,
    classStateRef: MutableRefObject<string[]>,
    movingDistanceRef: MutableRefObject<number[]>
}

export const intervals = ({ setTimer, setClassState, animations, setMovingDistance,
    setDefaultTime, boxIndex, timerRef, defaultTimeRef, classStateRef, movingDistanceRef }: Params) => {

    const newTimer = timerRef.current.map((time: boolean, index: number) => {
        if (index === boxIndex && time === false) {
            return time = true
        } else if (index === boxIndex && time === true) {
            return time = false
        } else {
            return time
        }
    })

    setTimer(newTimer)
    const newClassState = classStateRef.current.map((x: string, index: number) => {
        if (index === boxIndex && timerRef.current[boxIndex] === false) {
            return x = animations[0]
        } else if (index === boxIndex && timerRef.current[boxIndex] === true) {
            return x = animations[1]
        } else {
            return x
        }
    })
    setClassState(newClassState)
    const newDistance = movingDistanceRef.current.map((x: number, index: number) => {
        if (index === boxIndex && timerRef.current[boxIndex] === true) {
            return x = 0
        } else if (index === boxIndex && timerRef.current[boxIndex] === false) {
            return x = -50
        } else return x
    })
    setMovingDistance(newDistance)
    if (defaultTimeRef.current[boxIndex] !== 8000) {
        const newDefaultTime = defaultTimeRef.current.map((x: number, index: number) => {
            if (index === boxIndex) {
                return x = 8000
            } else {
                return x
            }
        })
        setDefaultTime(newDefaultTime)
    }
}