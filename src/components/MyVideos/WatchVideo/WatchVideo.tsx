import React, { useCallback, useEffect, useRef, useState } from "react"
import { ResultCodes } from "api/http-codes";
import { Record } from "api/types";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { selectRecord, setStoppingVideo, selectPlayingVideo, setPlayingVideo } from "store/redux-store/slices/videoRecordSlice"
import { setIsWatchedVideoLoading } from "store/redux-store/slices/uiSlice";
import { WatchVideoPlayer } from "../../RecordVideo/widgets-record-video/VideoPlayers";


export const WatchVideo = () => {
    const dispatch = useAppDispatch()
    const playing = useAppSelector(selectPlayingVideo)
    const record: Record | null = useAppSelector(selectRecord)

    const [videoDeleted, setVideoDeleted] = useState<boolean>(false)

    useEffect(() => {        
        if (record) {
            //setVideoDeleted(isVideoDeleted([record.positive_video, record.negative_video, record.end_video]))
            setVideoDeleted([record.positive_video, record.negative_video, record.end_video].every(value => value === null))
        }
        return 
    }, [record])

    const videoRef = useRef<HTMLVideoElement>(null)

    const blobPositiveRef = useRef<Blob>()
    const blobNegativeRef = useRef<Blob>()
    const blobEndRef = useRef<Blob>()
    const blobAudioRef = useRef<Blob>()

    const url_positive = useRef<string>("")
    const url_negative = useRef<string>("")
    const url_end = useRef<string>("")
    const url_audio = useRef<string>("")

    const getMediaAndCreateUrl = useCallback(async (
        url: string,
        urlObject: React.MutableRefObject<string>,
        blob: React.MutableRefObject<Blob | undefined>
    ) => {
        if (!blob.current) {
            dispatch(setIsWatchedVideoLoading(true))
            const response = await fetch(url)
            if (response.status === ResultCodes.SUCCESS_200) {
                try {
                    blob.current = await response.blob()
                    urlObject.current = URL.createObjectURL(blob.current)
                } catch (error: any) {
                    urlObject.current = ""
                }
                finally {
                    dispatch(setIsWatchedVideoLoading(false))
                }
            }
        }
    }, [dispatch])

    const playRecords = useCallback(async (positive: string, negative: string, end: string) => {
        if (record && videoRef.current) {
            await getMediaAndCreateUrl(positive, url_positive, blobPositiveRef)
            await getMediaAndCreateUrl(negative, url_negative, blobNegativeRef)
            await getMediaAndCreateUrl(end, url_end, blobEndRef)

            videoRef.current.src = url_positive.current
            videoRef.current.onended = function () {
                if (videoRef.current) {
                    videoRef.current.src = url_negative.current
                    videoRef.current.onended = function () {
                        if (videoRef.current) {
                            videoRef.current.src = url_end.current
                            videoRef.current.onended = () => {
                                if (videoRef.current) {
                                    videoRef.current.onended = null
                                    dispatch(setStoppingVideo(true))
                                    dispatch(setPlayingVideo(false))
                                }
                            }
                        }
                    }
                }
            }
        }
    }, [record, dispatch, getMediaAndCreateUrl])

    const playAudio = useCallback(async (audio: string) => {
        if (videoRef.current) {
            await getMediaAndCreateUrl(audio, url_audio, blobAudioRef)

            videoRef.current.src = url_audio.current
            videoRef.current.onended = function () {
                if (videoRef.current) {
                    videoRef.current.onended = null
                    dispatch(setStoppingVideo(true))
                    dispatch(setPlayingVideo(false))
                }
            }
        }
    }, [dispatch, getMediaAndCreateUrl])

    useEffect(() => {
        if (playing && record) {
            if (videoDeleted) {
                if (record.positive_audio && record.negative_audio) {
                    playRecords(record.positive_audio, record.negative_audio, record.summary_audio)
                } else {
                    playAudio(record.summary_audio)
                }
            }
            if (!videoDeleted) {
                playRecords(record.positive_video, record.negative_video, record.end_video)
            }
        }
    }, [playing, record, playAudio, playRecords, videoDeleted])

    useEffect(() => {
        return () => {
            dispatch(setPlayingVideo(false))
            dispatch(setStoppingVideo(false))
        }
    }, [dispatch])

    return (
        <WatchVideoPlayer
            ref={videoRef}
            autoPlay={playing}
            playsInline
            controls
        />
    )
}