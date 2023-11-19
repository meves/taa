import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components";
import { TestVideo } from "../Video/TestVideo";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { selectStream, setStream } from "store/redux-store/slices/videoRecordSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { Constraints } from "../../libs/types/record-video-types";
import { TestVideoWrapper, VideoPlayerWrapper } from "../widgets-record-video/VideoWrappers";
import { selectAppText } from "store/redux-store/slices/langSlice";
import ErrorBoundary from "components/app/ErrorBoundary/ErrorBoundary";
import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";
import { TestTimer } from "../Timer/TestTimer";
import { initialTestVideoTimerValue } from "../../libs/constants/record-video-constants";
import { testVideoButtons } from "../widgets-record-video/Buttons";


const ButtonsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        margin-top: 32px;
        flex-direction: row-reverse;
        justify-content: space-between;
        height: 56px;
    }
`;

const StartButton = styled.button`
    ${Primary};
    ${testVideoButtons};
    font-weight: 600;
    
    color: ${props => props.disabled && "var(--black)"};
    background-color: ${props => props.disabled && "var(--grey)"};
    border: ${props => props.disabled && "none"};

    &:hover {
        background-color: ${props => props.disabled && "var(--grey)"};
        cursor: ${props => props.disabled && "not-allowed"};
    }

    @media screen and (min-width: 768px) {
        width: 279px;
    }
`;

const InstructionButton = styled.button`
    ${Secondary};
    ${testVideoButtons};
    font-weight: 400;
    background-color: transparent;

    @media screen and (min-width: 768px) {
        width: 173px;
    }
`;


export const StartTestVideoBlock = 
({
    setCameraPluggedIn,
    setMicrophonePluggedIn,
    setErrorMessage
} : {
    setCameraPluggedIn: (cameraPluggedIn: boolean) => void
    setMicrophonePluggedIn: (microphonePluggedIn: boolean) => void
    setErrorMessage: (errorMessage: string) => void
}) => 
{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const {
        buttons: { goToDescription, startTestRecording },
        errorMessage: { usingOfCameraOrMicrophoneAreNotAllowed, resolutionNotSupported: { resolution, notSupported } }
    } = useAppSelector(selectAppText).videos

    const videoStream = useAppSelector(selectStream)
    const nextPath = useRef("")

    const mediaDevices: MediaDevices = useMemo(() => navigator.mediaDevices, [])
    
    const constraints: Constraints = useMemo(() => ({
        audio: true,
        video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 10, max: 15 }
        }
    }), [])

    const [isStartButtonDisabled, setIsStartButtonDisabled] = useState<boolean>(true)

    const prepareTestRecord = useCallback(async () => {
        // подготовка к тестовой записи
        try {
            const stream: MediaStream = await mediaDevices.getUserMedia(constraints)
            const videoTracks = stream.getVideoTracks()
            if (videoTracks.length === 0) {
                setCameraPluggedIn(false)
            } else {
                setCameraPluggedIn(true)
            }
            const audioTracks = stream.getAudioTracks()
            if (audioTracks.length === 0) {
                setMicrophonePluggedIn(false)
            } else {
                setMicrophonePluggedIn(true)
            }
            if (videoTracks.length === 0 || audioTracks.length === 0) {
                setIsStartButtonDisabled(true)
            }
            if (videoTracks.length !== 0 && audioTracks.length !== 0) {
                setIsStartButtonDisabled(false)
                dispatch(setStream(stream))
            }
        } catch (error: any) {
            if (error.name === "ConstraintNotSatisfiedError") {
                setErrorMessage(
                    {resolution} + String(constraints.video.width) + " px " +
                    String(constraints.video.height) + " px " 
                    +  {notSupported})
            } else if (error.name === "PermissionDeniedError") {
                setErrorMessage(usingOfCameraOrMicrophoneAreNotAllowed)
            }
        }
    }, [
        mediaDevices, constraints, setMicrophonePluggedIn, setCameraPluggedIn, setErrorMessage, dispatch,
        usingOfCameraOrMicrophoneAreNotAllowed, resolution, notSupported])

    useEffect(() => {
        mediaDevices.addEventListener("devicechange", prepareTestRecord)
        prepareTestRecord()
        return () => {
            mediaDevices.removeEventListener("devicechange", prepareTestRecord)
        }
    }, [mediaDevices, prepareTestRecord, dispatch])

    const handleStartTestVideoOnClick = useCallback(() => {
        nextPath.current = "/test"
        navigate("/test")
    }, [navigate])

    const handleMoveTodescriptionOnClick = useCallback(() => {
        videoStream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        navigate("/")
    }, [videoStream, dispatch, navigate])

    useEffect(() => {
        const resetVideo = () => {
            if (nextPath.current !== "/test") {
                videoStream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
            }
        }
        return () => {
            resetVideo()
        }
    }, [videoStream, location.pathname, dispatch])

    useEffect(() => {
        return () => {
            if (nextPath.current !== "/test") {
                dispatch(setStream(null))
            }
        }
    }, [dispatch])

    return (
        <TestVideoWrapper>

            <VideoPlayerWrapper>
                <ErrorBoundary>
                    <TestVideo />
                </ErrorBoundary>                
                <TestTimer startValue={initialTestVideoTimerValue}/>
            </VideoPlayerWrapper>
            
            <ButtonsWrapper>
                <StartButton
                    disabled={isStartButtonDisabled}
                    onClick={handleStartTestVideoOnClick}
                >{ startTestRecording }
                </StartButton>
                <InstructionButton
                    onClick={handleMoveTodescriptionOnClick}
                >{ goToDescription }
                </InstructionButton>
            </ButtonsWrapper>
            
        </TestVideoWrapper>
    )
}