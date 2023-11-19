import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { selectRecordingVideo, setRecordingVideo, setStoppingVideo } from "store/redux-store/slices/videoRecordSlice"
import { Timer } from "../widgets-record-video/Timers"


export const TestTimer = React.memo(({ 
    startValue,
    stopRecordTestVideo
} : {
    startValue: number
    stopRecordTestVideo?: () => void
}) => {
    const [timer, setTimer] = useState<number>(startValue)
        
    const recording = useAppSelector(selectRecordingVideo)
    const [showTimer, setShowTimer] = useState(true) // recording

    const dispatch = useAppDispatch()

    useEffect(() => {
        let timerId: any
        if (recording && !timerId) {
            timerId = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer <= 0) {
                        clearInterval(timerId)                                             
                    }
                    return prevTimer - 1
                })
            }, 1000)
            return () => {
                clearInterval(timerId)
            }
        }
    }, [recording, stopRecordTestVideo])

    useEffect(() => {
        if (timer <= 0) {
            dispatch(setRecordingVideo(false))
            dispatch(setStoppingVideo(true))
            setShowTimer(false)
        } 
    }, [dispatch, timer]) 

    if (!showTimer) {
        return null
    }
    
    return (
        <Timer timer={timer} />
    )
})