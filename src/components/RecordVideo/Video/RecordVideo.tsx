import React, { useCallback, useEffect, useRef } from "react"
import {
    selectExtension,
    selectRecordingVideo,
    selectStoppingVideo,
    selectStream,
    setRecordedVideoThunk
} from "store/redux-store/slices/videoRecordSlice"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { RecordVideoPlayer } from "../widgets-record-video/VideoPlayers"


export const RecordVideo = () => {
    const dispatch = useAppDispatch()

    const videoRef = useRef<HTMLVideoElement>(null)
    const mediaRecorderRef = useRef<MediaRecorder>()
    const blobRef = useRef<Blob>()
    const fileRef = useRef<File>()

    const stream = useAppSelector(selectStream)
    const recording = useAppSelector(selectRecordingVideo)
    const stopping = useAppSelector(selectStoppingVideo)
    const ext = useAppSelector(selectExtension)

    // RECORDING
    const playMedia = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.srcObject = stream
            videoRef.current.play()
        }
    }, [stream])

    const startMedia = useCallback(() => {
        if (stream) {
            mediaRecorderRef.current = new MediaRecorder(stream)
            mediaRecorderRef.current?.start()
        }
    }, [stream])

    useEffect(() => {
        if (recording) {
            startMedia()
            playMedia()
        }
    }, [recording, playMedia, startMedia])

    // STOPPING
    const stopMedia = useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop()
            mediaRecorderRef.current.ondataavailable = function (event: BlobEvent) {
                blobRef.current = new Blob([event.data])
                fileRef.current = new File([blobRef.current], `${Number(new Date())}.${ext}`)
                dispatch(setRecordedVideoThunk(fileRef.current))
            }
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null
        }
    }, [dispatch, ext])

    useEffect(() => {
        if (stopping) {
            stopMedia()
        }
    }, [stopping, stopMedia])

    // ENDED
    useEffect(() => {
        return () => {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.ondataavailable = null
            }
        }
    }, [])

    return (
        <RecordVideoPlayer
            ref={videoRef}
            muted
            autoPlay={false}
            loop={false}
            //poster="/images/cat.svg"
        />
    )
}