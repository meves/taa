import React, { useEffect, useState } from "react"
import { Timer } from "../widgets-record-video/Timers"


export const CountDownTimer = ({
    startValue,
    startRecordVideo
} : {
    startValue: number
    startRecordVideo: () => void
}) => {
    const [timer, setTimer] = useState<number>(startValue)

    const [showTimer, setShowTimer] = useState(true)

    useEffect(() => {
        let timerId: any
        timerId = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(timerId)     
                    return 0
                }
                return prevTimer - 1
            })
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    useEffect(() => {
        if (timer <= 0) {
            startRecordVideo()
            setShowTimer(false)
        }
    }, [timer, startRecordVideo])

    if (!showTimer) {
        return null
    }

    return (
        <Timer timer={timer} />
    )
}