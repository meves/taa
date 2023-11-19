import React, { useCallback, useEffect } from "react"
import { PlayVideoButton } from "components/common/SVG/PlayVideoButton";
import PosterImage from "assets/images/poster.svg"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import {
    selectStoppingVideo,
    selectRecord,
    setStoppingVideo,
    restoreWatchedVideoThunk,
    saveRecordIdThunk,
    deleteRecordIdThunk,
    setPlayingVideo,
    selectPlayingVideo,
} from "store/redux-store/slices/videoRecordSlice";
import { Record } from "api/types";
import { WatchVideo } from "components/MyVideos/WatchVideo/WatchVideo";
import { formatDate } from "../../libs/utils/my-videos-utils";
import { ArchivingModal } from "components/common/Modals/Parents/Modals";
import { WatchVideoComment } from "./WatchVideoComment";
import { 
    VideoContainer, Date, ImageWrapper, PlayButtonWrapper, Poster, VideoWrapper 
} from "./styled/WatchVideoStyled";
import { selectIsWatchedVideoLoading } from "store/redux-store/slices/uiSlice";
import { PreloaderForComponents } from "components/common/Preloader/Preloader";
import { selectAppText } from "store/redux-store/slices/langSlice";
import ErrorBoundary from "components/app/ErrorBoundary/ErrorBoundary";
import { Transcription } from "./Transcription";


export const WatchVideoContainer = () => {
    const dispatch = useAppDispatch()

    const { imageAlt, imageTitle } = useAppSelector(selectAppText).videos.watchVideo

    const record: Record | null = useAppSelector(selectRecord)
    const playing = useAppSelector(selectPlayingVideo)
    const stopping = useAppSelector(selectStoppingVideo)
    const isWatchedVideoLoading = useAppSelector(selectIsWatchedVideoLoading)

    const handlePlayVideoOnClick = useCallback(() => {
        dispatch(setPlayingVideo(true))
        dispatch(setStoppingVideo(false))
    }, [dispatch])

    useEffect(() => {
        return () => {
            dispatch(setPlayingVideo(false))

        }
    }, [dispatch])

    useEffect(() => {
        if (record) {
            dispatch(saveRecordIdThunk(record.id))
        }
        if (!record) {
            dispatch(restoreWatchedVideoThunk())
        }
        return () => {
            dispatch(deleteRecordIdThunk())
        }
    }, [dispatch, record])

    return (
        <VideoContainer>
            {record ? <Date>{formatDate(record?.create_date)}</Date> : ""}
            {isWatchedVideoLoading ? <PreloaderForComponents /> : null}
            <VideoWrapper>
                <ErrorBoundary>
                    <WatchVideo />
                </ErrorBoundary>
                <ImageWrapper>
                    <Poster
                        src={record ? record.image_uri : PosterImage}
                        alt={imageAlt}
                    />
                </ImageWrapper>
                {!isWatchedVideoLoading &&
                    <>
                        {(!playing || stopping) && record ?
                            <PlayButtonWrapper
                                onClick={handlePlayVideoOnClick}
                                title={imageTitle}
                            >
                                <PlayVideoButton />
                            </PlayButtonWrapper> : null
                        }
                    </>
                }
            </VideoWrapper>

            {process.env.REACT_APP_MODE === "development" ? <Transcription record={record}/> : null}

            <WatchVideoComment />

            <ArchivingModal />
        </VideoContainer>
    )
}