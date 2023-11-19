import React, { useCallback, useEffect } from "react"
import { RecordVideo } from "../Video/RecordVideo"
import { RecordTitle } from "../widgets-record-video/Titles"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { 
    resetVideoNumber, 
    selectDescribedSide, 
    selectEndedVideo, 
    selectPausngVideo, 
    selectPreparingVideo, 
    selectRecordingVideo,
    selectStoppingVideo, 
    selectStream, 
    setPausingVideo, 
    setPreparingVideo, 
    setRecordingVideo, 
    setStoppingVideo,
    setDescribedSideThunk,
    setEndedVideo,
    setDescribedSide
} from "store/redux-store/slices/videoRecordSlice"
import { Described } from "store/redux-store/libs/types"
import { initialCountDownTimerValue, initialRecordVideoTimerValue, initialTotalVideoTimerValue } from "../../libs/constants/record-video-constants"
import { CountDownTimer } from "../Timer/CountDownTimer"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { RecordVideoTimer } from "../Timer/RecordVideoTimer"
import { ButonsGroup, ButtonsWrapper, CancelButton, ChangeFocusButton, RecordVideoWrapper, 
    StartButton, StopButton, VideoWrapper 
} from "./widgets/RecordVideo"
import { selectAppText } from "store/redux-store/slices/langSlice"
import ErrorBoundary from "components/app/ErrorBoundary/ErrorBoundary"
import { ChangeFocus } from "components/common/SVG/ChangeFocus"
import { Poster, PosterImage } from "./widgets/Poster"
import { CatIcon } from "components/common/SVG/Cat"


export const RecordVideoBlock = React.memo(({
    isFocus,
    toggleIsFocus
} : {
    isFocus: boolean,
    toggleIsFocus:  React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const dispatch = useAppDispatch() 

    const {
        record: { described },
        buttons: { cancel, startRecording, stopRecording, changeFocus }
    } = useAppSelector(selectAppText).videos

    const stream = useAppSelector(selectStream)
    const preparing = useAppSelector(selectPreparingVideo)
    const recording = useAppSelector(selectRecordingVideo)
    const stopping = useAppSelector(selectStoppingVideo)
    const pausing = useAppSelector(selectPausngVideo)
    const ended = useAppSelector(selectEndedVideo)
    
    const describedSide = useAppSelector(selectDescribedSide)    
    
    const handleCancelRecordVideoOnClick = useCallback(() => {
        dispatch(setModalOpen('cancel-record-video'))
    }, [dispatch])
    
    const startRecordVideo = useCallback(() => {
        dispatch(setPreparingVideo(false))
        dispatch(setRecordingVideo(true))
        dispatch(setStoppingVideo(false))
    }, [dispatch])

    const handleStartRecordVideoOnClick = useCallback(() => {
        startRecordVideo()
    }, [startRecordVideo])
    
    const stopRecordVideo = useCallback(async () => {        
        dispatch(setRecordingVideo(false))
        dispatch(setStoppingVideo(true))
    }, [dispatch])

    const handleStopRecordVideoOnClick = useCallback(() => {
        stopRecordVideo()
    }, [stopRecordVideo])    

    useEffect(() => {
        const resetVideo = () => {
            stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        }
        return () => {
            resetVideo()
        } 
    }, [dispatch, stream])
        
    useEffect(() => {
        dispatch(setPreparingVideo(true))
        dispatch(setDescribedSideThunk())
        return () => {
            dispatch(setPreparingVideo(false))
            dispatch(setRecordingVideo(false))
            dispatch(setStoppingVideo(false))
            dispatch(setPausingVideo(false))
            dispatch(setEndedVideo(false))
            dispatch(resetVideoNumber())
            dispatch(setDescribedSide(null))
        }
    }, [dispatch])

    const handleToggleIsFocusOnClick = useCallback(() => {
        toggleIsFocus(prevIsFocus => !prevIsFocus)
    }, [toggleIsFocus])

    return (
        <RecordVideoWrapper>
            <RecordTitle>
                {   
                    (describedSide === Described.POSITIVE && described.positive) ||
                    (describedSide === Described.NEGATIVE && described.negative) ||
                    (describedSide === Described.TOTAL && described.total)  
                }
            </RecordTitle>

            <VideoWrapper isFocus={isFocus}>
                <ErrorBoundary>
                    <RecordVideo/>
                </ErrorBoundary>
                
                    { (preparing || (stopping && !pausing)) &&                        
                    <CountDownTimer 
                        startRecordVideo={startRecordVideo}
                        startValue={initialCountDownTimerValue}
                    /> 
                    }

                    { (recording || ended) &&                        
                    <RecordVideoTimer 
                        stopRecordVideo={stopRecordVideo}
                        startValue={recording ? initialRecordVideoTimerValue : ended ? initialTotalVideoTimerValue : 0} 
                    /> 
                    } 
                    { !recording ? <Poster>
                        <PosterImage><CatIcon/></PosterImage>
                    </Poster> : null 
                    }
            </VideoWrapper>

            <ButtonsWrapper isFocus={isFocus}>
                { (preparing || (stopping)) && 
                    <StartButton onClick={handleStartRecordVideoOnClick}>{ startRecording }</StartButton> 
                }
                { recording && 
                    <StopButton onClick={handleStopRecordVideoOnClick}>{ stopRecording }</StopButton> 
                }
                <ButonsGroup>
                    <CancelButton onClick={handleCancelRecordVideoOnClick}>{ cancel }</CancelButton>
                    <ChangeFocusButton onClick={handleToggleIsFocusOnClick} >
                        { changeFocus }
                        <ChangeFocus/>
                    </ChangeFocusButton>
                </ButonsGroup>                    
            </ButtonsWrapper>
        </RecordVideoWrapper>
    )
})