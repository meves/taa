import React, { useEffect, useState } from "react"
import { selectReadyTimerStarted } from "store/redux-store/slices/themeSlice"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { Timer } from "../widgets-record-video/Timers"


export const RecordVideoTimer = ({
    startValue,
    stopRecordVideo
} : {
    startValue: number
    stopRecordVideo: () => void
}) => {
    const readyTimerStarted = useAppSelector(selectReadyTimerStarted)
    
    const [videoStarted, setVideoStarted] = useState<boolean>(false)
    const [showTimer, setShowTimer] = useState<boolean>(false)
    const [timer, setTimer] = useState<number>(startValue)
    
    useEffect(() => {
        setShowTimer(readyTimerStarted)
        setVideoStarted(readyTimerStarted)
    }, [readyTimerStarted])


    useEffect(() => {
        let timerId: any
        if (videoStarted) {
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
        }
        clearInterval(timerId)
    }, [videoStarted])

    useEffect(() => {
        if (timer <= 0) {
            stopRecordVideo()
            setShowTimer(false)
        }
    }, [timer, stopRecordVideo])

    if (!showTimer) {
        return null
    }
    
    return (
        <Timer timer={timer} />
    )
}