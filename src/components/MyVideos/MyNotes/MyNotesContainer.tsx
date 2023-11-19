import React, { useCallback, useEffect, useRef, useState } from "react"
import Paginator from "./Paginator"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { getWatchedVideoThunk, getSavedVideosThunk, selectCurrentPage, selectSavedVideos } from "store/redux-store/slices/videoRecordSlice"
import { Records, Result } from "api/types"
import { daysLeftUntilDeletion, formatDate } from "../../libs/utils/my-videos-utils"
import { useNavigate } from "react-router-dom"
import { VideoDate, MyNotesWrapper, MyNotesVideos, PaginatorWrapper, VideoFigure, VideoImage, 
    VideoCard, VideoNote, VideoContainer
} from "./styled/MyNotesStyled"
import { PreloaderForComponents } from "components/common/Preloader/Preloader"
import { selectIsSavedVideosLoading } from "store/redux-store/slices/uiSlice"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { MyNotesTitle } from "./MyNotesTtitle"
import type { Sorting } from "store/redux-store/libs/types"


const pageVideosRequestDelay = 400;

export const MyNotesContainer = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const debounceRef = useRef<NodeJS.Timeout|null>(null);
    
    const { 
        youHaveNoRecords, imageAlt, imageTitle, 
        caption: { audioAvailableOnly, videoAvailable, days },
    } = useAppSelector(selectAppText).videos.myNotes

    const [toggleSorting, setToggleSorting] = useState<boolean>(true)

    const currentPage = useAppSelector(selectCurrentPage)
    const savedRecords: Records| null = useAppSelector(selectSavedVideos)
    const isSavedVideosLoading = useAppSelector(selectIsSavedVideosLoading)
    
    useEffect(() => {
        const sorting: Sorting = toggleSorting ? "-create_date" : "create_date";

        debounceRef.current && clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(
            () => dispatch(getSavedVideosThunk({ page: currentPage, sorting })),
            pageVideosRequestDelay
        );
    }, [dispatch, currentPage, toggleSorting])

    const handleMoveToSelectedVideoOnClick = useCallback((recordId: number) => {
        dispatch(getWatchedVideoThunk(recordId))
        .then(() => {
                navigate("/watch")
            })
            .catch((error: any) => {
                navigate("/error")
            })
    }, [dispatch, navigate])

    return (
        <MyNotesWrapper>
            <VideoContainer>

                <MyNotesTitle
                    toggleSorting={toggleSorting}
                    setToggleSorting={setToggleSorting}
                />

                {isSavedVideosLoading
                ? <PreloaderForComponents/>
                : <MyNotesVideos $videos={Boolean(savedRecords)} >
                    {!Boolean(savedRecords) ? 
                    <p>{ youHaveNoRecords }</p> :
                    savedRecords?.results.map((record: Result) => (
                        <VideoCard key={record.id}>  
                        
                            <VideoFigure onClick={() => handleMoveToSelectedVideoOnClick(record.id)}>
                                <VideoImage src={record.image_uri} alt={imageAlt} title={imageTitle} />
                                <VideoNote>
                                    { daysLeftUntilDeletion(record.create_date) < 0 ? 
                                        `${audioAvailableOnly}` :
                                        `${videoAvailable} ${daysLeftUntilDeletion(record.create_date)} ${days}`
                                    }
                                </VideoNote>
                            </VideoFigure>    

                            <VideoDate>{ formatDate(record.create_date) }</VideoDate>

                        </VideoCard>
                    ))
                    }
                </MyNotesVideos>}
                
                <PaginatorWrapper>
                    <Paginator/>
                </PaginatorWrapper>

            </VideoContainer>
        </MyNotesWrapper>
    )
}