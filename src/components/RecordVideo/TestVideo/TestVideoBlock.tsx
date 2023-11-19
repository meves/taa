import React, { useCallback, useEffect, useRef, useState } from "react"
import { testVideoButtons } from "../widgets-record-video/Buttons";
import { TestTimer } from "../Timer/TestTimer";
import { TestVideo } from "../Video/TestVideo";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import {
    selectEndedVideo,
    selectPausngVideo,
    selectPlayingVideo,
    selectPreparingVideo,
    selectRecordingVideo,
    selectStoppingVideo,
    selectStream,
    setEndedVideo,
    setPausingVideo,
    setPlayingVideo,
    setPreparingVideo,
    setRecordingVideo,
    setStoppingVideo,
    setStream
} from "store/redux-store/slices/videoRecordSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { initialTestVideoTimerValue } from "../../libs/constants/record-video-constants";
import { TestVideoWrapper, VideoPlayerWrapper } from "../widgets-record-video/VideoWrappers";
import { selectAppText } from "store/redux-store/slices/langSlice";
import ErrorBoundary from "components/app/ErrorBoundary/ErrorBoundary";
import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";


const ControlsPanel = styled.div`
    width: 288px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        width: 704px;
        margin-top: 32px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;

const UpperButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const LowerButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;    
`;
    
const StartButton = styled.button`
    ${Primary};
    ${testVideoButtons};
    width: 100%;

    @media screen and (minn-width: 768px) {
        flex: 1;
    }
`;

const ReadyButton = styled.button`
    ${Primary};
    ${testVideoButtons};
    width: 100%;

    @media screen and (minn-width: 768px) {
        flex: 1;
    }
`;

const MoreTimeButton = styled(NavLink)`
    ${Primary};
    ${testVideoButtons};
    text-decoration: none;
    flex: 1;
`;

const InstructionButton = styled.button`
    ${Secondary};
    ${testVideoButtons};
    flex: 1;
    background-color: var(--transparent);
`;

const RecordButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    @media screen and (min-width: 1910px) {
        flex: 1;
    }
`;

const StopButton = styled.button`
    ${Primary};
    ${testVideoButtons};

    @media screen and (min-width: 768px) {
        width: 230px;
    }
`;

const RecordButton = styled.button`
    ${Secondary};
    ${testVideoButtons};
    background-color: var(--transparent);
    animation-name: recording;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;

    @media screen and (min-width: 768px) {
        width: 230px;
    }
    
    @keyframes recording {
        from {
            color: var(--pure-white);
            border-color: var(--pure-white);
        }
        50% {
            color: var(--accent-red);
            border-color: var(--accent-red);
        }
        to {
            color: var(--pure-white);
            border-color: var(--pure-white);

        }
    }
`;

const WatchButton = styled.button`
    ${Primary};
    ${testVideoButtons};
    width: 100%;

    @media screen and (minn-width: 768px) {
        flex: 1;
    }
`;


const PauseButton = styled.button`
    ${Primary};
    ${testVideoButtons};
    width: 100%;

    @media screen and (minn-width: 768px) {
        flex: 1;
    }
`;

export const TestVideoBlock = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const nextPath = useRef("")

    const [initialTimerValue, setInitialTimerValue] = useState<number>(initialTestVideoTimerValue)
    
    const { stop, start, pause, done, again, watch, goToDescription, recordingInProgress } 
        = useAppSelector(selectAppText).videos.buttons

    const recording = useAppSelector(selectRecordingVideo)
    const stopping = useAppSelector(selectStoppingVideo)
    const playing = useAppSelector(selectPlayingVideo)
    const pausing = useAppSelector(selectPausngVideo)
    const ended = useAppSelector(selectEndedVideo)
    const preparing = useAppSelector(selectPreparingVideo)
    const stream = useAppSelector(selectStream)

    const stopRecordTestVideo = useCallback(() => {
        dispatch(setRecordingVideo(false))
        dispatch(setStoppingVideo(true))
    }, [dispatch])

    const handleStartTestVideoOnClick = useCallback(() => {
        dispatch(setPreparingVideo(false))
        dispatch(setRecordingVideo(true))
    }, [dispatch])

    const handleStopRecordTestVideoOnClick = useCallback(() => {
        stopRecordTestVideo()
        setInitialTimerValue(initialTestVideoTimerValue)
    }, [stopRecordTestVideo])

    const handlePlayTestVideoonClick = useCallback(() => {
        dispatch(setStoppingVideo(false))
        dispatch(setPausingVideo(false))
        dispatch(setPlayingVideo(true))
    }, [dispatch])

    const handlePauseTestVideoOnClick = useCallback(() => {
        dispatch(setPlayingVideo(false))
        dispatch(setPausingVideo(true))
    }, [dispatch])

    const handleReadyOnClick = useCallback(() => {
        nextPath.current = "/info"
        navigate("/info")
    }, [navigate])
    
    const handleMoveToDescriptionOnClick = useCallback(() => {
        dispatch(setStream(null))
        navigate("/")
    }, [dispatch, navigate])

    const clearVideoRecordState = useCallback(() => {
        dispatch(setPreparingVideo(false))
        dispatch(setRecordingVideo(false))
        dispatch(setStoppingVideo(false))
        dispatch(setPlayingVideo(false))
        dispatch(setPausingVideo(false))
        dispatch(setEndedVideo(false))
        if (nextPath.current !== "/info") {
            stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
            dispatch(setStream(null))
        }
    }, [dispatch, stream])
    
    useEffect(() => {
        dispatch(setPreparingVideo(true))
        return () => {
            clearVideoRecordState()
        }
    }, [clearVideoRecordState, dispatch])
    
    return (
        <TestVideoWrapper>
            <VideoPlayerWrapper>
                <ErrorBoundary>
                    <TestVideo />            
                </ErrorBoundary>
                <TestTimer
                    startValue={initialTimerValue}
                    stopRecordTestVideo={stopRecordTestVideo}
                />
            </VideoPlayerWrapper>

            <ControlsPanel>
                { recording ?
                    <RecordButtonsWrapper>
                        <StopButton onClick={handleStopRecordTestVideoOnClick}>{ stop }</StopButton>
                        <RecordButton>{ recordingInProgress }</RecordButton>
                    </RecordButtonsWrapper>
                    : null
                }

                <ButtonsWrapper>                    
                { stopping || playing || pausing || ended || preparing ?
                    <>
                    <UpperButtonsWrapper>
                        { playing ? <PauseButton onClick={handlePauseTestVideoOnClick}>{ pause }</PauseButton> : null }
                        { stopping || pausing ? <WatchButton onClick={handlePlayTestVideoonClick}>{ watch }</WatchButton> : null }
                        { preparing ? <StartButton onClick={handleStartTestVideoOnClick}>{ start }</StartButton> : null }
                        <ReadyButton onClick={handleReadyOnClick}>{ done }</ReadyButton>
                    </UpperButtonsWrapper>

                    <LowerButtonsWrapper>
                        <MoreTimeButton to="/start">{ again }</MoreTimeButton>
                        <InstructionButton
                            onClick={handleMoveToDescriptionOnClick}
                            >{ goToDescription }
                        </InstructionButton>
                    </LowerButtonsWrapper>
                    </> : null
                    }
                </ButtonsWrapper>
            </ControlsPanel>
        </TestVideoWrapper>
    )
}